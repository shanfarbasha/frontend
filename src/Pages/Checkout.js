import React from 'react'
import Header from '../Components/Header/Header'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CheckoutForm from '../Components/shop/checkout/CheckoutForm';
import { Container } from '@mui/material';


export default function Checkout() {
  return (
    <>
      <Header />
      <Grid container spacing={3} component="main" sx={{m:0}} >
      

        <Grid item
          spacing={2}
          sm={4}
          md={6}>
      <Box >
        <CheckoutForm />
      </Box>
      </Grid> <Grid></Grid>
      </Grid>
      </>
  )
}
