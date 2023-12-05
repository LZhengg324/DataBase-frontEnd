import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import DateSelector from '../components/DateSelector';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import InputAdornment from '@mui/material/InputAdornment';

const CustomerInformation = ({onChange}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [license, setLicense] = useState('');
  const [rentDays, setRentDays] = useState(3);
  const [selectedDate, setSelectedDate] = useState(null);
  
  const handleInputChange = (field, value) => {
    onChange(field, value);
  };

  // const handleNameChange = (newState) => {
  //   setName(newState);
  //   handleInputChange('name', name);
  // }

  const handlePhoneNumChange = (newState) => {
    setPhoneNumber(newState);
    handleInputChange('phoneNumber', newState);
  }

  const handleLicenseChange = (newState) => {
    setLicense(newState);
    handleInputChange('license', newState);
  }
  const handleIncrease = () => {
    setRentDays((day) => day < 10 ? day + 1 : day);
    handleInputChange('rentDays', rentDays)
  }

  const handleDecrease = () => {
    setRentDays((day) => day > 3 ? day - 1 : day);
    handleInputChange('rentDays', rentDays);
  }

  const handleSelectedDateChanged = (newState) => {
    setSelectedDate(newState);
    handleInputChange('selectedDate',newState);
    // const formData = new FormData();
    // formData.append("date", selectedDate);
    
    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ": " + pair[1]);
    // }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Customer Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Name"
            name="Name"
            label="Your Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={(e) => handleInputChange('name', e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="PhoneNumber"
            name="PhoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={(e) => handlePhoneNumChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="LicenseNo"
            name="LicenseNo"
            label="License No"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={(e) => handleLicenseChange(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            disabled
            id="CarId"
            name="CarId"
            label="Car's Id"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="CarBrand"
            name="CarBrand"
            label="Brand"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="CarModel"
            name="CarModel"
            label="Model"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="rentDays"
            name="rentDays"
            label="Rent Days"
            value={rentDays}
            sx={{
              '& input': {
                textAlign: 'center',
              }
            }}
            InputProps={{
              readOnly: true,
              startAdornment:(
                <InputAdornment position="start">
                  <IconButton onClick={handleIncrease}>
                    <AddIcon/>
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleDecrease}>
                    <RemoveIcon/>
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DateSelector onDateSelect={(e) => handleSelectedDateChanged(e)}/>
        </Grid>
        <Grid item xs={12}>
          <FormLabel sx={{color: '#ff0000'}}>
            * We only accept offline payments upon vehicle pickup.
          </FormLabel>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default CustomerInformation