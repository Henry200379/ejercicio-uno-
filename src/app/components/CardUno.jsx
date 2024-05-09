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
import SimpleRating from './Estrellas'
import { Divider } from '@mui/material';
import Box from '@mui/material';
import Grid from '@mui/material';






export default function CardUno() {

  return (

    <Grid item xs={12} sm={6}>
      <Card sx={{
        transition: "0.2s",
        "&:hover": {
          transform: "scale(1.05)",

        },

        justifyContent: "left",
        alignItems: "left"
      }}>
        <CardHeader justifyContent="left"

          avatar={
            <Avatar src='Anna.WEBP' sx={{ bgcolor: red[500] }} aria-label="recipe" >

            </Avatar>
          }

          action={
            <IconButton aria-label="settings">

              <SimpleRating />
            </IconButton>
          }

          title="Anna Silva"
          subheader="Marketing, Brasil"
        />
        <Divider />
        <CardContent>

          <Typography variant="body2" color="text.secondary">
            “Eureka Club me proporcionó un viaje increíble
            de aprendizaje y reflexión sobre la justicia
            social. Participar en el club me hizo replantear
            mi visión del mundo.Lo recomiendo a todos los que
            deseen expandir sus horizontes y actuar en pro de
            la justicia.”


          </Typography>
        </CardContent>


      </Card>
      </Grid>
 
      );

}
