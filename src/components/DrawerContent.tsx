import {
  createStyles,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Collapse,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, LinkProps, useHistory } from "react-router-dom";

type MenuItem = {
  readonly Name: string;
  readonly SubItems?: ReadonlyArray<MenuItem>;
  readonly Selected: boolean;
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
  { Name: "Animationen", Selected: false },
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

  useEffect(() => {
    let unlisten = history.listen((location) => {
      setMenuItems(
        menuItems.map((item) => ({
          ...item,
          Selected: location.pathname.includes(item.Name),
        }))
      );
    });
    return () => unlisten && unlisten();
  }, [history, menuItems]);

  return (
    <div className={classes.drawerContainer}>
      <List>
        {menuItems.map((item, index) => (
          <>
            <ListItemLink
              primary={item.Name}
              selected={item.Selected && !item.SubItems}
              key={index}
              to={`/${item.Name}`}
            />
            {item.Selected && item.SubItems && (
              <Collapse in={true}>
                <List component="div" disablePadding>
                  {item.SubItems.map((subItem, index) => (
                    <ListItemLink
                      key={index}
                      primary={subItem.Name}
                      className={classes.nested}
                      to={`/${item.Name}/${subItem.Name}`}
                    />
                  ))}
                </List>
              </Collapse>
            )}
          </>
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
  className?: string;
}

function ListItemLink(props: ListItemLinkProps) {
  const { primary, to, selected, className } = props;

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
    >
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export default DrawerContent;
