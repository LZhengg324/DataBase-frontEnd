import * as React from 'react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../api/axios';
import Header from '../components/Header';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © JourneyJunction '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
  palette: {
    background: {

    },
    themeColor:{
      //AvocadoGreen
      AvocadoGreenMain: '#ABC270',
      AvocadoGreenDark: '#8ea851',
      AvocadoGreenLight: '#e1e9ca',

      //Yellow
      YellowMain:'#fcb025',
      YellowDark:'#fec868',
      YellowLight:'#ffdda5',

      //Coral
      CoralMain:'#fda769',
      CoralDark:'#fda769',
      CoralLight:'#ffb46c',

      //DarkGrey
      DarkGreyMain: '#675b51',
      DarkGreyDark: '#473c33',
      DarkGreyLight: '#c4b6ab',

      main:'#f08d85',
      light: '#f9bab3',
      dark: '#e75e58',
      transparent: '#FFEBEE',
      Font: '#F9A825',
      SubFont: '#9E9E9E',
    }
  }
});

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    try {
      const response = await axios.post(
        'http://localhost:8080/user/login',
        formData
      );
      console.log(response.data);
      if (response.data === "LOGIN SUCCESS!") {
        navigate('/home');
      } else {
        
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Header/>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8.5}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={8} sm={8} md={3.5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 22.5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'themeColor.AvocadoGreenDark', height:60, width: 60 }}>
              <LockOutlinedIcon sx={{color:'themeColor.AvocadoGreenLight', fontSize: 35, }}/>
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                sx={{
                  '& label.Mui-focused': {
                    color: 'themeColor.DarkGreyDark',
                  },
    
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'themeColor.DarkGreyDark',
                    },
                    '&:hover fieldset': {
                      borderColor: 'themeColor.DarkGreyDark',
                    },
                    '&.Mui-focused fieldset': {
                      // color: 'themeColor.DarkGreyMain',
                      borderColor: 'themeColor.DarkGreyMain',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{
                  '& label.Mui-focused': {
                    color: 'themeColor.DarkGreyDark',
                  },
    
                  '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                          borderColor: 'themeColor.DarkGreyDark',
                      },
                      '&:hover fieldset': {
                          borderColor: 'themeColor.DarkGreyDark',
                      },
                      '&.Mui-focused fieldset': {
                          color: 'themeColor.DarkGreyMain',
                          borderColor: 'themeColor.DarkGreyMain',
                      },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ 
                  mt: 3, 
                  mb: 2 , 
                  bgcolor: 'themeColor.YellowMain',
                  '&:hover': {
                    backgroundColor: 'themeColor.YellowDark'
                  }
                }}
              >
                Sign In
              </Button>
              <Grid container justifyContent='flex-end'>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="http://localhost:3000/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}