import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import BluecardUno from "./BluecardUno.jsx"
import BluecardDoos from "./BluecardDoos.jsx"
import BluecardTres from "./BluecardTres.jsx"
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
  width:450
}));

export default function CardsDos() {
  return (
    <Box  >
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={12} >
          <Item elevation={0}><CardUno/></Item>
        </Grid>
        <Grid  item xs={12}>
          <Item elevation={0}><CardDos/></Item>
        </Grid>
        <Grid  item xs={12}>
          <Item elevation={0}><CardTres/></Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}
