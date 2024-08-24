import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import { useSelector } from 'react-redux';

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HomeIcon from "@mui/icons-material/Home";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import DashboardIcon from "@mui/icons-material/Dashboard";

const SideDrawer = ({ users, signOutUser }) => {
  const [state, setState] = useState(false);
  const user = useSelector((state)=>state.users);

  return (
    <>
      <DehazeIcon className="drawer_btn" onClick={() => setState(true)} />

      <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
        <Box sx={{ width: 220 }}>
          <List>
            <ListItem
              button
              component={RouterLink}
              to="/"
              onClick={() => setState(false)}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem
              button
              component={RouterLink}
              to="/contact"
              onClick={() => setState(false)}
            >
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>

            {!user.auth ? (
              <ListItem
                button
                component={RouterLink}
                to="/auth"
                onClick={() => setState(false)}
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Sign in" />
              </ListItem>
            ) : (
              <ListItem
                button
                to="/auth"
                onClick={() => {
                  signOutUser();
                  setState(false);
                }}
              >
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText primary="Sign out" />
              </ListItem>
            )}

            <>
              <Divider />
              {user.auth ?
              <ListItem
                button
                component={RouterLink}
                to="/dashboard"
                onClick={() => setState(false)}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
              :null}
            </>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;
