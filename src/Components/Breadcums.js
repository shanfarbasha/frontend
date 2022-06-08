import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box } from '@mui/material';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcums(props) {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={props.pageurl}
      onClick={handleClick}
    >
     {props.page}
    </Link>,
    <Typography key="3" color="text.primary">
      {props.sub}
    </Typography>,
  ];

  return (
    
     <Box container sx={{m:'0'}} height={80} 
        bgcolor="lightgreen">
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      </Box>
    
  );
}
