import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SimpleRating from '../components/Estrellas'
import { Divider, Grid } from '@mui/material';






export default function CardDos() {




  return (

    <Grid item xs={12} sm={6}>
      <Card sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",

        },

      }}>
        <CardHeader

          avatar={
            <Avatar src='Andreia.WEBP' sx={{ bgcolor: red[500] }} aria-label="recipe">


            </Avatar>

          }



          action={

            <IconButton aria-label="settings">


              <SimpleRating />
            </IconButton>
          }
          title="Andreia Odriozola"
          subheader="Periodista, Uruguay"
        />

        <Divider />
        <CardContent>


          <Typography variant="body2" color="text.secondary">

            “Participar en el club fue una de las mejores decisiones que he tomado.
            Los temas me ayudaron a comprender cómo podemos construir un mundo más justo y sostenible.
            Cada libro recomendado inspiró cambios en mi vida personal y profesional.”


          </Typography>
        </CardContent>


      </Card>
    </Grid>
  );
}
