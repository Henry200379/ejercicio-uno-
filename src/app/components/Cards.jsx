import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BluecardUno from "../components/BluecardUno.jsx"
import BluecardDoos from "../components/BluecardDoos.jsx"
import BluecardTres from "../components/BluecardTres.jsx"
import { Stack } from '@mui/material';
import CardUno from './CardUno.jsx';
import CardDos from './CardDos.jsx';
import CardTres from './CardTres.jsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  width:440
}));

export default function Cards() {
  return (
    <>
   
   
    
      <Grid item >
        <Item elevation={0}><BluecardUno/></Item>
      </Grid>
      <Grid item>
        <Item elevation={0}><BluecardDoos/></Item>
      </Grid>
      <Grid item >
        <Item elevation={0}><BluecardTres/></Item>
      </Grid>
      
    

  
 

  
  </>
  );
}
