import * as React from 'react';
import { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CustomerInformation from './CustomerInformation';
import Review from './Review';
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

const steps = ['Customer Information', 'Review your order'];

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

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phoneNumber: '',
    license: '',
    rentDays: 3,
    selectedDate: null,
  });
  
  const handleCustomerInfoChange = (fieldName, value) => {
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [fieldName]: value,
    }));
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep === 0) {
      const formData = new FormData();
      formData.append('name', customerInfo.name)
      formData.append('phoneNum', customerInfo.phoneNumber);
      formData.append('license', customerInfo.license);
      formData.append('rentDays', customerInfo.rentDays.toString());
      formData.append('selectedDate', customerInfo.selectedDate?.toString() || '');
      for (let pair of formData.entries()) {
        console.log(pair[0] + ':' + pair[1]);
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <CustomerInformation  onChange={handleCustomerInfoChange}/>;
      case 1:
        return <Review />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Fragment>
        <CssBaseline />
        <Header/>
        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 7 }}>
          <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography component="h1" variant="h4" align="center" sx={{fontWeight: 550, fontFamily: 'Roboto'}}>
              Checkout
            </Typography>
            <Stepper 
              activeStep={activeStep} 
              alternativeLabel
              sx={{ 
                pt: 3, 
                pb: 5, 
                pl: 5, 
                pr: 5,
                '& .MuiStepIcon-root' : {
                  color: 'gray'
                },
                '& .Mui-active .MuiStepIcon-root': {
                  color: 'themeColor.AvocadoGreenMain'
                },
                '& .Mui-completed .MuiStepIcon-root' : {
                  color: 'themeColor.AvocadoGreenLight'
                }
              }}
            >
              {steps.map((label) => (
                <Step 
                  key={label}
                >
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}