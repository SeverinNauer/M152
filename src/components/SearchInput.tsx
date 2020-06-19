import React from "react";
import { makeStyles, createStyles, fade, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) =>
  createStyles({
    search: {
      display: "flex",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.35),
      },
      margin: theme.spacing("auto", 2),
      width: "100%",
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
    },
    inputInput: {
      color: theme.palette.primary.contrastText,
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    },
  })
);

const SearchInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};

export default SearchInput;
