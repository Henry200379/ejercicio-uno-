import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid, Stack } from '@mui/material';
import Cards from './Cards';
import { Container } from 'postcss';
import Avatar from '@mui/material/Avatar';

import SimpleRating from './Estrellas';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';


export default function CardsAll() {
  return (
    <>


      <Stack direction={{ xs: 'column', sm: 'row' }}
        >
        <Box >
          
            <Grid item xs={12} sm={6}  padding={1}>
              <Box border={2}>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} padding={1}>
              <Box border={2}>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                 
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} padding={1}>
              <Box border={2}>
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  
                </Card>
              </Box>
            </Grid>
        </Box>


        <Box >
          <Grid item xs={12} sm={6} padding={1}>
            <Box border={2}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} padding={1}>
            <Box border={2}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} padding={1} >
            <Box border={2}>
              <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                
              </Card>
            </Box>
          </Grid>
        
      </Box>

    </Stack >
      
  

    </>
  );
}
