import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";

const RentDateSelect = ({onDateSelect}) => {

  const handleDateChange = (date) => {
    const dateOnly = date ? date.toLocaleDateString() : null;
    onDateSelect(dateOnly);
    // console.log(dateOnly);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Get the car on"
        onChange={(e) => handleDateChange(e)}
        textField={(params) => (
          <TextField {...params} variant="outlined" helperText="" />
        )}
        minDate={new Date()} // 设置最小日期为今天
      />
    </LocalizationProvider>
  );
};

export default RentDateSelect;