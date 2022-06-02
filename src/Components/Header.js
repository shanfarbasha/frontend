import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
// import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';

//import Link from '@mui/material/Link';
// import MenuIcon from '@mui/icons-material/Menu';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
//import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { cyan } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const headercolor = cyan['A100'];
const lightColor = 'rgba(255, 255, 255, 0.7)';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const  Header = () =>{
    //const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    //  const handleOpenNavMenu = (e) => {
    //  setAnchorElNav(e.currentTarget);
    //  };
     const handleOpenUserMenu = (e) => {
       setAnchorElUser(e.currentTarget);
     };
  
    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);
    // };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

  return (
    <>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 ,
            background:headercolor,
              p:1
            }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={0}>
            <Grid xs={6} md={4}>
          
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          </Grid>
            <Grid item spacing={2}  xs={4} md={6} >
                <div style= {{display:"flex"}}>
            <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
          
            
            
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button></div>
            </Grid>
            <Grid  xs={2} md={2}>

        
          <IconButton color="inherit">
                <LocalMallIcon />
                </IconButton>
            <Tooltip title="Open settings">
           
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          {/* </Box> */}
          </Grid>
            </Grid>
        </Toolbar>
        
      </AppBar>
      
    </>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;