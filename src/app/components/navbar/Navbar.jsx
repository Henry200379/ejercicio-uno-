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
import GridViewIcon from '@mui/icons-material/GridView';

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
    
      <AppBar position="static"   sx={{height:125, background:"#00cec9", borderRadius:0 }} >
        <Toolbar position="static" > 
          <IconButton sx={{display:{xs: "block",sm:"none", marginTop:5}}} color="inherit" size="large" onClick={() => setOpen(true)}>
            <DehazeIcon  />
          </IconButton>
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:10}}} ><img src="/Logo.jpg"/></ImageListItem>
          
          <Typography variant="h5" sx={{flexGrow:1}}>Eureka</Typography>
          Adalys Fernandez Gonzalez LOVE Henry Ruffo Wood

  
          
        
        
         
          
          <Box sx={{display:{xs: "none",sm:"block"}}}>
          
          <Banderas />
          
          {
            navLinks.map(item=>(
              <Button sx={{marginTop:1}} color="inherit" key={item.title} component="a" href={item.path}  >{item.title}{item.icon}</Button>
            ))
          }
       </Box>
      
        </Toolbar>
        <Box>
        <Typography variant="h9" width={300} padding={0.5} sx={{display:{xs: "none",sm:"block"}}}>Tecnologia + cultura, por Juticia Social</Typography>
        </Box>
        
      
      </AppBar>
     
      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        transitionDuration={600}
        sx={{display:{xs: "flex",sm:"none"}}}
      >
        
        <NavListDrawer navLinks={navLinks} />
        
      </Drawer>
      
    </>
  );
}
