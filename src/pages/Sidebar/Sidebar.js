import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import {
  Collapse,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExpandLess from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMore from "@mui/icons-material/ExpandMore";
import "semantic-ui-css/semantic.min.css";
const drawerWidth = 260;

const Sidebar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [selectedChildItem, setSelectedChildItem] = React.useState(0);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const navigate = useNavigate();
  const container =
    window !== undefined ? () => window.document.body : undefined;
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const navItems = [
    { id: 1, title: "Home", url: "/", icon: <HomeIcon /> },
  ];

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleMenuClick = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const drawer = (
    <div>
      <Box sx={{ mt: 5, mb: 5, display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
        >
          Hello , Wesam
        </Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <React.Fragment key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={
                  item.children
                    ? () => handleMenuClick(item.id)
                    : () => {
                      navigate(`${item.url}`);
                      setMobileOpen(!mobileOpen);
                      setSelectedItem(item.id);
                      setSelectedChildItem(0);
                    }
                }
              >
                <ListItemIcon

                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
                {item.children &&
                  (item.id === openMenuId ? <ExpandLess /> : <ExpandMore />)}
              </ListItemButton>
            </ListItem>
            {item.children && (
              <Collapse
                in={item.id === openMenuId}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem key={child.id} disablePadding>
                      <ListItemButton

                        onClick={() => {
                          navigate(`/${item.url}/${child.url}`);
                          setMobileOpen(!mobileOpen);
                          setSelectedChildItem(child.id);
                          setSelectedItem(item.id);
                        }}
                      >
                        <ListItemIcon

                        >
                          {child?.icon}
                        </ListItemIcon>
                        <ListItemText primary={child.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'absolute',
          left: "2vh",
          top: '3vh',
          "&:hover": {
            transform: "scale(1.2)",
          },
          transition: "transform 0.3s ease",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Sidebar;
