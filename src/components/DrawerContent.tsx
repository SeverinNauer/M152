import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import { Link, LinkProps, useHistory } from "react-router-dom";
import { Location } from "history";

type MenuItem = {
  readonly Name: string;
  readonly SubItems?: ReadonlyArray<MenuItem>;
  readonly Selected: boolean;
  readonly Expanded?: boolean;
};

const MenuItems: ReadonlyArray<MenuItem> = [
  {
    Name: "Konzept",
    Selected: false,
    SubItems: [
      { Name: "Mockup", Selected: false },
      { Name: "Style Guide", Selected: false },
      { Name: "Zeitplan", Selected: false },
    ],
  },
  { Name: "Urheberrecht", Selected: false },
  { Name: "Dateiformate", Selected: false },
  {
    Name: "Animationen",
    Selected: false,
    SubItems: [
      { Name: "CSS Animation", Selected: false },
      { Name: "SVG Animation", Selected: false },
    ],
  },
  { Name: "Automatisierung", Selected: false },
  { Name: "Testen", Selected: false },
  { Name: "Eigene Entwicklung", Selected: false },
  { Name: "Allgemeines", Selected: false },
  { Name: "Impressum", Selected: false },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    drawerContainer: {
      overflow: "auto",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const DrawerContent = () => {
  const classes = useStyles();
  const [menuItems, setMenuItems] = useState(MenuItems);
  const history = useHistory();

  const getMenuItemsFromLacation = useCallback(
    (location: Location) => {
      return menuItems.map((item) => ({
        ...item,
        Selected: location.pathname.includes(item.Name),
        SubItems: item.SubItems?.map((sub) => ({
          ...sub,
          Selected: location.pathname.includes(`${item.Name}/${sub.Name}`),
        })),
      }));
    },
    [menuItems]
  );
  useEffect(() => {
    let unlisten = history.listen((location) => {
      setMenuItems(getMenuItemsFromLacation(location));
    });
    return () => unlisten && unlisten();
  }, [history, getMenuItemsFromLacation]);

  useEffect(() => {
    const items = getMenuItemsFromLacation(history.location);
    setMenuItems(
      items?.map((item) =>
        item.SubItems?.find((sub) =>
          history.location.pathname.includes(`${item.Name}/${sub.Name}`)
        )
          ? { ...item, Expanded: true }
          : { ...item }
      )
    );
    // TODO Clean up functionality
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setExpanded = (item: MenuItem) => (expanded: boolean) => {
    setMenuItems(
      menuItems.map((mItem) =>
        mItem.Name === item.Name ? { ...mItem, Expanded: expanded } : mItem
      )
    );
  };

  return (
    <div className={classes.drawerContainer}>
      <List>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem button onClick={() => setExpanded(item)(!item.Expanded)}>
              <ListItemText
                primary={item.Name}
                primaryTypographyProps={{ variant: "subtitle2" }}
              />
            </ListItem>
            {item.SubItems && (
              <Collapse in={item.Expanded} unmountOnExit>
                <List component="div" disablePadding>
                  {item.SubItems.map((subItem, index) => (
                    <ListItemLink
                      selected={subItem.Selected}
                      key={index}
                      primary={subItem.Name}
                      className={classes.nested}
                      to={`/${item.Name}/${subItem.Name}`}
                    />
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, selected, className, onClick } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<LinkProps, "to">>((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <ListItem
      button
      selected={selected}
      className={className}
      component={renderLink}
      onClick={onClick}
    >
      <ListItemText
        primary={primary}
        primaryTypographyProps={{ variant: "body2" }}
      />
    </ListItem>
  );
}

export default DrawerContent;
