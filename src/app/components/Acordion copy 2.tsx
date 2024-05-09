import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const data = [
  {
    id: "Panel 1",
    heading: "¿El club de lectura y cine es gratuito?",
    secondaryHeading: "",
    details: "Sí, nuestro club de lectura y cine es totalmente gratuito. Creemos en el acceso libre al conocimiento y en la importancia de compartir ideas."
  },
  {
    id: "Panel 2 ",
    heading: "¿Los libros recomendados están disponibles en español?",
    secondaryHeading: "",
    details: "Sí, todas nuestras recomendaciones de libros están disponibles en español, asegurando que cualquier persona pueda participar en las lecturas y discusiones."
  },

  {
    id: "Panel 3 ",
    heading: "¿Cómo accedo a los libros y películas del club?",
    secondaryHeading: "",
    details: "Te recomendamos dónde encontrar las obras seleccionadas, pero cada quien es responsable de acceder a ellas y/o comprarlas."
  },
  {
    id: "Panel 4 ",
    heading: "¿Los hombres pueden participar del club de lectura?",
    secondaryHeading: "",
    details: "¡Absolutamente! Nuestro club de lectura es inclusivo y abierto a cualquiera que tenga interés en explorar las intersecciones entre feminismo, tecnología y sociedad."
  },
  {
    id: "Panel 5 ",
    heading: "¿Es necesario tener conocimientos previos sobre feminismo y tecnología?",
    secondaryHeading: "",
    details: "No es necesario tener conocimientos previos. Nuestro club está abierto a cualquier persona que desee aprender y explorar estos temas, independientemente de su nivel de familiaridad con ellos."
  },
  {
    id: "Panel 6 ",
    heading: "¿Cuánto tiempo debo dedicar a la lectura y a las discusiones?",
    secondaryHeading: "",
    details: "Puedes dedicar el tiempo que consideres necesario. Nuestro club es flexible, permitiéndote participar según tu disponibilidad y ritmo de lectura. Para ayudarte a organizarte, cada mes compartiremos un cronograma de lectura."
  },

  {
    id: "Panel 7 ",
    heading: "¿El club organiza encuentros en línea o presenciales?",
    secondaryHeading: "",
    details: "Actualmente, nuestras actividades son todas en línea, pero estamos abiertas a organizar encuentros presenciales en el futuro, dependiendo del interés y la disponibilidad de personas que participan en el club."
  },

  {
    id: "Panel 8 ",
    heading: "¿Cómo accedo a la comunidad y al foro en línea?",
    secondaryHeading: "",
    details: "Tras inscribirte en el club, recibirás un enlace por correo electrónico para acceder a nuestra comunidad en línea. Allí podrás participar en las discusiones e interactuar con las personas inscritas."
  },

];


export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
     
      
    </div>
  );
}
