import React,{ useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Header from '../Components/Header';

import { v4 as uuidv4 } from 'uuid';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Signup() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = uuidv4();
  const history = useHistory();

  //api integration
  async function register(){
    let item =[username,email,password]
    console.log(item);

    let result = await fetch ('https://api.m3o.com/v1/user/Create', {
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ZWE4YTFlZWMtMDAzNC00ZGYzLWE0YTQtZDA0Y2QwYTBhZTM2'
      },
      body: JSON.stringify({
        "email":email,
        "id": id,
        "password":password,
        "username" : username
      })
    })
    history.push("/");
    result = await result.json()
    console.warm("result",result);

  }

  return (

    <>
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
            <Box component="form" noValidate 
            // onSubmit={handleSubmit} 
            sx={{ mt: 1 }}>
            <TextField margin="normal"
                required
                fullWidth
                value={username}
                onChange={(e) => {setUsername(e.target.value)}}
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus

              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={password}
                onChange={(e) => {setPassword(e.target.value)}}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* <TextField
                margin="normal"
                required
                fullWidth
                name="confirmpassword"
                label="ConfirmPassword"
                type="password"
                id="password"
                autoComplete="current-password"
              /> */}
              <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                {...label}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <Link
                  href="#"
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </Link>
              </Typography>
            </Box>
              <Button
               onClick={register}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}