import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Annoucement from '../Components/Annoucement';
import Header from '../Components/Header/Header';
import ProductCard from '../Components/shop/Productcard/ProductCard';
import Slider from '../Components/Slider/Slider';

const HomePage = () => {
    return (
        <>
        <Annoucement />
        <Header />
       
          <Grid>
              <Grid>

                 <Slider />
              </Grid>

              <Grid sm={6} md={3} >
              <Box>
               <ProductCard />
               <ProductCard />
              </Box>
          </Grid></Grid>
        </>
    );
}
 

 
export default HomePage ;