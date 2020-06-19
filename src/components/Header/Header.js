import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from "@material-ui/core";
import classes from "./Header.module.css";
import EyeLogo from "../../assets/images/mask-eye.png";
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          disabled
          className={classes.icon}
        >
          <img src={EyeLogo} />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Mask-i Camera
        </Typography>
        <Button color="inherit">Admin</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
