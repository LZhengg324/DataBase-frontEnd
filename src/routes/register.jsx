import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from '../api/axios';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    palette: {
        themeColor:{
          main:'#f08d85',
          light: '#f9bab3',
          dark: '#e75e58'
        }
    }
});

export default function Register() {
    
    const[username, setUsername] = useState('');
    const[PhoneNumber, setPhoneNumber] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // try {
        //     const response = await axios.post(
        //         'http://localhost:8080/demo/register',    
        //         {
        //             username: username,
        //             email: email,
        //             password: password,
        //         }
        //     );
        //     console.log(response.data);
        // } catch (error) {
        //     console.error('Registration failed:', error);
        // }
        // const data = new FormData(event.currentTarget);
        // console.log({
        // username: data.get('username'),
        // email: data.get('email'),
        // password: data.get('password'),
        // });
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phone number', PhoneNumber);
        formData.append('password', password);

        try {
            const response = await axios.post(
                'http://localhost:8080/user/register',
                formData
            );
            console.log(response);
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'themeColor.dark', height:60, width: 60 }}>
                <LockOutlinedIcon sx={{color:'themeColor.light', fontSize: 35, }}/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} >
                            <TextField
                            autoComplete="given-name"
                            name="UserName"
                            required
                            fullWidth
                            id="UserName"
                            label="UserName"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="PhoneNumber"
                            label="Phone Number"
                            value={PhoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            name="PhoneNumber"
                            autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ mt: 3, mb: 2 , bgcolor: 'themeColor.main'}}
                    >
                    Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="http://localhost:3000/login" variant="body2">
                            Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>
    </ThemeProvider>
  );
}