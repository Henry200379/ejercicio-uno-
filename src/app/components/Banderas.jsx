"use client"
import { AppBar, Button, Drawer, Toolbar, IconButton, Typography,Box,ImageListItem } from "@mui/material";

import { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import HomeIcon from '@mui/icons-material/Home';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PeopleIcon from '@mui/icons-material/People';



export default function Banderas() {
  
  return (
    <>
      
        <Toolbar sx={{marginTop:4}} >
          
          
          <Typography variant="small" sx={{flexGrow:0.1}}>Idiomas</Typography>
          
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:1 ,width: 45, height: 45}}} ><img src="/España.png"/></ImageListItem>
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:9 ,width: 54, height: 54}}} ><img src="/Inglaterra.png"/></ImageListItem>
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:10 ,width: 47, height: 47}}} ><img src="/Francia.png"/></ImageListItem>
          <ImageListItem sx={{display:{xs: "none",sm:"block" ,padding:10 ,width: 50, height: 50}}} ><img src="/Portugal.png"/></ImageListItem>
         
       
        </Toolbar>
     

      
    </>
  );
}
