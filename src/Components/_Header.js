import * as React from 'react';
import logo from '../logo.svg';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Link from '@mui/material/Link';

const headercolor = blue['#2196f3'];
//const lightColor = 'rgba(255, 255, 255, 0.7)';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const pages = ['Products', 'Pricing', 'Blog'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

const  Header = (props) =>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
      const handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget);
      };
     const handleClick = (e) => {
        if (anchorEl !== e.currentTarget) {
          setAnchorEl(e.currentTarget);
        }
      }
     const handleCloseNavMenu = () => {
       setAnchorElNav(null);
    };
  
    const handleClose = (e) => {
        setAnchorEl(null);
    };
    const isLoggedIn  = React.useState("false");
  return (
    <>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ 
            background:headercolor,
              p:1
            }}
      >
          <Grid container spacing={2}>
        <Toolbar>
          <Grid container  spacing={0} sx={{ flexGrow: 1 }}>
            <Link href="#" underline="none">
            <img src={logo} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2}} alt="logo" /></Link>
         
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="left">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>    
           

            <Tooltip title="Cart empty" sx={{ 
              mx:2
             }}>
            <Badge color="secondary" badgeContent={0} showZero>
                <LocalMallIcon />  
                </Badge>
                </Tooltip>
                
                   {
        isLoggedIn ? (
            <Button href="/login" 
                variant="contained">
                Login
              </Button>
              
         ):(
            <Tooltip title="Open settings">
           
              <IconButton  sx={{ p: 0 }}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                onMouseOver={handleClick}
              >
                <Avatar alt="Remy Sharp"
                  >  S </Avatar>
              </IconButton>
            </Tooltip> )}
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              sx={{ mt: '45px',
              p:1
             }}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
    
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleClose}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> 
          {/* </Box> */}
          
            </Grid>
        </Toolbar>
        </Grid>
      </AppBar>
      
    </>
  );
}


export default Header;