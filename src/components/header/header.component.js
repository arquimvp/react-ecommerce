import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MoreVert from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  navBar: {
    backgroundColor: "#f6f5f5",
  },
  kebabMenu: {
    color: "black",
    marginRight: theme.spacing(3),
  },
  flx: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const styles = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="fixed" className={styles.navBar}>
        <Toolbar>
          <Typography className={styles.flx}>
            <Link to="/">
              <img src="../../assets/logo.png" alt="Gapsi" />
            </Link>
          </Typography>
          <IconButton
            edge="end"
            color="secondary"
            onClick={handleClick}
            className={styles.kebabMenu}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="kebabMenu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/shopping/reloj" params={{category: "reloj"}}>
              <MenuItem onClick={handleClose}>Watches</MenuItem>
            </Link>
            <Link to="/shopping/videojuego" params={{category: "videojuego"}}>
              <MenuItem onClick={handleClose}>Videogames</MenuItem>
            </Link>
            <Link to="/shopping/camisa" params={{category: "camisa"}}>
              <MenuItem onClick={handleClose}>Shirts</MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
  );
}
