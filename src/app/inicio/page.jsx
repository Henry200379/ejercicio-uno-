import { Container, Typography } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import Tabla from "../components/Tabla"
import Botonok from "../components/Botonok"
import Unload from "../components/Unload"
import Ejemplo from "../components/Ejemplo"
import Bluecard from "../components/Bluecard"
import App from "../components/TabDoos"
import RedAlert from "../components/Button"
import Input from "../components/Input"
import ButtonContador from "../components/ButtonContador"

export default function inicio() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 5 }}>

        <Typography variant="h5" color="#74b9ff" padding={3}>Categorias</Typography>
        <Bluecard />
        <Bluecard />
        

        <App />
       
        <RedAlert />

        <br></br>
        <Input/>
       <br></br>

        <ButtonContador/>
      </Container>
    </>
  );
}
