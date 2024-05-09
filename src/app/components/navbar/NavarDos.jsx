"use client"
import { AppBar, Button, Drawer, Toolbar, IconButton, Typography,Box,ImageListItem } from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PeopleIcon from '@mui/icons-material/People';
import Banderas from "../Banderas"
import { alignProperty } from "@mui/material/styles/cssUtils";

const navLinks=[{
  title:"Inicio ", path:"home", icon:<HomeIcon sx={{color:"white", padding:0.5}}/>

},
{
  title:"Login ",path:"Login", icon:<VpnKeyIcon sx={{color:"white", padding:0.5}} />

},
{
  title:"Registrar ",path:"Register", icon:<PeopleIcon sx={{color:"white" , padding:0.5}}/>

},
{
  title:"Registrar1 ",path:"Register", icon:<PeopleIcon sx={{color:"white" , padding:0.5}}/>

}



]

export default function NavbarDos() {
  const [open, setOpen] = useState(false);
  return (
    <>
    
      <AppBar position="static"  sx={{height:0,background:"white", borderRadius:0 }} >
        <Toolbar > 
          
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:5, width:350, height:350}}} ><img src="/LogoDos.jpg"/></ImageListItem>
          
      
      
        </Toolbar>
        <Box>
        <Typography variant="h9" width={300} padding={0.5} sx={{display:{xs: "none",sm:"block"}}}>Tecnologia + cultura, por Juticia Social</Typography>
        </Box>
        
      
      </AppBar>
     
     
      
    </>
  );
}
