'use client'
import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, colors, ImageListItem } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftIcon from "@mui/icons-material/Drafts";
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AnchorIcon from '@mui/icons-material/Anchor';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ApiIcon from '@mui/icons-material/Api';
import AppsIcon from '@mui/icons-material/Apps';
import Navbar from "./Navbar";
import { Block } from "@mui/icons-material";
import Banderas from "../Banderas";

const navLinks1 = [{
  title: "Eureka", path: "home", icon: <InboxIcon sx={{ color: "white" }} />

},
{
  title: "Login", path: "Login", icon: <AnchorIcon sx={{ color: "white" }} />

},
{
  title: "Register", path: "Register", icon: <AirplanemodeActiveIcon sx={{ color: "white" }} />

}

]
export default function NavListDrawer({ navLinks }) {
  return (

    <Box sx={{ width: 210, backgroundColor: "#00cec9" }}>
      <nav>
        
        <List  >
        <Typography display="block" variant="h5" sx={{ color: "white", padding: 1 }}>Eureka</Typography>
        <ImageListItem sx={{ padding: 2, width: 50, height: 50 }} ><img src="/Logo.jpg" /></ImageListItem>

          {navLinks.map((item) => (
            <ListItem
              disablePadding

              key={item.title}
            >
              <ListItemButton

                href={item.path}
                component="a"
              >

                <ListItemIcon >{item.icon}</ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{item.title}</ListItemText>

              </ListItemButton>
              
            </ListItem>
          ))}
          <Banderas/>
        </List>
      </nav>
    </Box>
  );
}
