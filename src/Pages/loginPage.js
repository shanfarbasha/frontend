import React,{ useEffect, useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Header from '../Components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
          main: '#ff5722',
        },
        secondary: {
          main: '#f44336',
        },
      },
});

export default function LogInPage() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  
const history = useHistory();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

useEffect(() => {
  if (localStorage.getItem('user-info')){
    history.push("/")
  }
});

async function login(){
  console.warn(email.password);
  let item =[email,password]
  console.log(item);
  const data = {"email":email,
  "password":password}
  let result = await fetch('https://api.m3o.com/v1/user/Login', {
    method: 'POST',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ZWE4YTFlZWMtMDAzNC00ZGYzLWE0YTQtZDA0Y2QwYTBhZTM2'
    },
    body: JSON.stringify({
      data
    })
    .then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
  })
  
  result = await result.json()
  localStorage.setItem('user',JSON.stringify(result));
  history.push("/")
  console.warm("result",result);

}

  return (

    <ThemeProvider theme={theme}>
        <Header />
      <Grid container component="main" sx={{ height: '90vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              m: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" 
            // noValidate onSubmit={handleSubmit} 
            sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                autoComplete="current-password"
              />
              <Button
               onClick={login}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}