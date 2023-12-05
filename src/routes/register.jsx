import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MuiAlert from '@mui/material/Alert'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
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

export default function Register() {
    
    const[username, setUsername] = useState('');
    const[PhoneNumber, setPhoneNumber] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[loginFailed, setLoginFailed] = useState(false);
    const[errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phoneNumber', PhoneNumber);
        formData.append('password', password);
        try {
            const response = await axios.post(
                'http://localhost:8080/user/register',
                formData
            );
            console.log(response);
            if (response.data === "Email has been registered!") {
                handleOpen()
                setErrorMsg(response.data);
            } else {
                navigate('/login')
            }
        } catch (error) {
            setErrorMsg("An error occurred during register.");
            handleOpen();
            console.error('Registration failed:', error);
            // console.error(errorMsg);
        }
    };

    const handleOpen = () => {
        setLoginFailed(true);
    }

    const handleClose = () => {
        setErrorMsg("");
        setLoginFailed(false);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Header/>
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
                <Avatar sx={{ m: 1, bgcolor: 'themeColor.AvocadoGreenDark', height:60, width: 60 }}>
                <LockOutlinedIcon sx={{color:'themeColor.AvocadoGreenLight', fontSize: 35, }}/>
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
                            autoComplete="PhoneNumber"
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
                        </Grid>
                    </Grid>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ 
                        mt: 3, 
                        mb: 2, 
                        bgcolor: 'themeColor.YellowMain',
                        '&:hover': {
                            backgroundColor: 'themeColor.YellowDark'
                        }
                    }}
                    >
                    Sign Up
                    </Button>
                    {/*弹出错误提示*/}
                    <Snackbar open={loginFailed} autoHideDuration={6000} onClose={handleClose}>
                        <MuiAlert severity="error" sx={{ width: '100%' }} onClose={handleClose}>
                            {errorMsg}
                        </MuiAlert>
                    </Snackbar>
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