import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MakeOrderPage from '../components/MakeOrderPage';
import CheckOrderPage from '../components/CheckOrderPage';
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
      AvocadoGreenMain: '#abc270',
      AvocadoGreenDark: '#8ea851',
      AvocadoGreenLight: '#e1e9ca',

      //Yellow
      YellowMain:'#fcb025',
      YellowDark:'#fec868',
      YellowLight:'#ffdda5',

      //Coral
      CoralMain:'#fda769',
      CoralDark:'#f39064',
      CoralLight:'#ffb46c',
      CoralTransparent: '#fffae9',

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

export default function Home() {
  const [rentPage, setRentPage] = useState(true);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative" sx={{bgcolor: 'themeColor.AvocadoGreenDark'}}>
        <Toolbar>
          <DirectionsCarIcon sx={{ mr: 2 }} />
          <Typography variant="h6" noWrap sx={{fontWeight:"Bold"}}>
            Journey Junction
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Header/>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="md" sx={{mt: 5, mb: -5}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              gutterBottom
              sx={{
                fontFamily: "Roboto",
                fontWeight: "Bold",
                fontSize: '70px',
                color: 'themeColor.YellowMain',
                WebkitTextStroke: '0.1px black',
                textShadow: '3px 3px 6px rgba(0,0,0,0.6)',
              }}
            >
              Journey Junction
            </Typography>
            <Typography 
              variant="h5" 
              align="center" 
              // color="text.secondary" 
              paragraph
              sx={{
                fontFamily: "Roboto",
                fontWeight: "medium",
                fontSize: '20px',
                color: 'themeColor.DarkGreyMain'
              }}
            >
              Explore a New World, We Provide the Tools.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button 
                variant="contained" 
                onClick={() => setRentPage(true)}
                sx={{
                  bgcolor: 'themeColor.CoralMain',
                  '&:hover': {
                    backgroundColor: 'themeColor.CoralDark',
                  }
                }}
              >
                Rent a car Now
              </Button>
              <Button 
                variant="outlined" 
                onClick={() => setRentPage(false)}
                sx={{
                  color: 'themeColor.CoralMain',
                  borderColor: 'themeColor.CoralMain',
                  '&:hover': {
                    bgcolor: 'themeColor.CoralTransparent',
                    borderColor: 'themeColor.CoralLight'
                  }
                }}
              >
                Check My Orders
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          {rentPage === true ? <MakeOrderPage/> : <CheckOrderPage/>}
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          JourneyJunction
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Explore a New World, We Provide the Tools.
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}