"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  Box,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Grid from "@mui/material/Grid";
import Bluecard from "./components/Bluecard"
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#001427",
    },
    secondary: {
      main: "#b500d6",
    }, 
    background: {
      default: "#fff",
      paper: "fff",
    },
  },
});



export default function App() {
  return (
    <Container
    
    sx={{ border: 1, borderStyle: "solid", boxShadow: 1, paddingBottom: 1 }}
      maxWidth="md"
    >


<Typography variant="h6" gutterBottom color={"primary"}>
        Hola esto es usando theme
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        component="h2"
        textAlign="center"
        marginTop={5}
      >
        Hola Hola
      </Typography>

      <h1>Hola</h1>
      <Box
        sx={{
          border: 1,
          fontVariant: "h5",
          padding: 5,
          backgroundColor: "blue",
        }}
      >
        esto es un box que se comporta como div
      </Box>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        size="small"
      >
        <Button color="secondary" startIcon={<LocalAirportIcon/>}>One</Button>
        <Button endIcon={<LocalGroceryStoreIcon/>} >Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <Grid container spacing={2}>
        <Grid item xs={12}
        sm={6}
        md={4}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
            commodi iste tempora cumque! Vitae, rerum enim quaerat provident
            asperiores vel voluptas aperiam, porro repellat facilis eveniet
            accusamus. Fugiat, consectetur!
          </p>
        </Grid>
        <Grid item xs={12}
        sm={6}
        md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
            commodi iste tempora cumque! Vitae, rerum enim quaerat provident
            asperiores vel voluptas aperiam, porro repellat facilis eveniet
            accusamus. Fugiat, consectetur!
          </p>
        </Grid>
        <Grid item xs={12}
        sm={12}
        md={4}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde
            commodi iste tempora cumque! Vitae, rerum enim quaerat provident
            asperiores vel voluptas aperiam, porro repellat facilis eveniet
            accusamus. Fugiat, consectetur!
          </p>
        </Grid>
      </Grid>
      <Bluecard/>
    </Container>
  );
}
