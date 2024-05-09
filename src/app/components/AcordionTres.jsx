import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Divider} from '@mui/material'
import { maxHeaderSize } from "http";
import AccordionGroup from "@mui/material/Accordion"


export default function AcordionTres() {
  return (
    <Container sx={{ border: 0.5, borderColor: 'white', borderStyle: "solid", boxShadow: 0, top: 5 }}
      maxWidth="sm">
      <Box >
        
        <AccordionGroup sx={{height:10}}>
          <Accordion  >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: 13.5 , fontFamily:'Calibri (Body)' }}>¿El club de lectura y cine es gratuito?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography  sx={{fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Sí, nuestro club de lectura y cine es totalmente gratuito. Creemos en el acceso libre al conocimiento y en la importancia de compartir ideas.</Typography>
            </AccordionDetails>
          </Accordion>
          </AccordionGroup>
          
      </Box>
    </Container>
  );
}

