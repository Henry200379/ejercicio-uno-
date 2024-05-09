import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container, Divider, AccordionGroup} from '@mui/material'
import { maxHeaderSize } from "http";

export default function SimpleAccordion() {
  return (
    <Container sx={{ border: 0.5, borderColor: 'white', borderStyle: "solid", boxShadow: 0, top: 5 }}
      maxWidth="sm" >
      <Box  >
        
        
          <Accordion >
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
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Los libros recomendados están disponibles en español?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Sí, todas nuestras recomendaciones de libros están disponibles en español, asegurando que cualquier persona pueda participar en las lecturas y discusiones.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Cómo accedo a los libros y películas del club?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Te recomendamos dónde encontrar las obras seleccionadas, pero cada quien es responsable de acceder a ellas y/o comprarlas.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion  >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Los hombres pueden participar del club de lectura?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>¡Absolutamente! Nuestro club de lectura es inclusivo y abierto a cualquiera que tenga interés en explorar las intersecciones entre feminismo, tecnología y sociedad.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Es necesario tener conocimientos previos sobre feminismo y tecnología?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>No es necesario tener conocimientos previos. Nuestro club está abierto a cualquier persona que desee aprender y explorar estos temas, independientemente de su nivel de familiaridad con ellos.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Cuánto tiempo debo dedicar a la lectura y a las discusiones?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Puedes dedicar el tiempo que consideres necesario. Nuestro club es flexible, permitiéndote participar según tu disponibilidad y ritmo de lectura. Para ayudarte a organizarte, cada mes compartiremos un cronograma de lectura.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿El club organiza encuentros en línea o presenciales?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Actualmente, nuestras actividades son todas en línea, pero estamos abiertas a organizar encuentros presenciales en el futuro, dependiendo del interés y la disponibilidad de personas que participan en el club.</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }}>¿Cómo accedo a la comunidad y al foro en línea?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Divider />
              <Typography sx={{ fontSize: 13.5, fontFamily:'Calibri (Body)' }} color={'#718093'}>Tras inscribirte en el club, recibirás un enlace por correo electrónico para acceder a nuestra comunidad en línea. Allí podrás participar en las discusiones e interactuar con las personas inscritas.</Typography>
            </AccordionDetails>
          </Accordion>
          
      </Box>
    </Container>
  );
}

