import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Annoucement from '../Components/Annoucement';
import Header from '../Components/Header';
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
              <Box>

              </Box>
          </Grid>
        </>
    );
}
 

 
export default HomePage ;