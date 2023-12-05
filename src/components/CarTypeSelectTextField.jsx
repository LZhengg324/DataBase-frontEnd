import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const CarTypeSelectTextField = ({onStateChange}) => {
    const carTypeList = [
        {
            value: 'All',
            label: 'All',
        },
        {
            value: 'Fuel',
            label: 'Fuel',
        }, 
        {
            value: 'Electrical',
            label: 'Electrical',
        },
    ]

    const handleButtonChange = (newState) => {
        onStateChange(newState);
    }
    return (
        <>
            <TextField
              id="chooseType"
              select
              label="Car Type"
              defaultValue="All"
              style={{maxWidth: '150px'}}
              onChange={(e) => {handleButtonChange(e.target.value)}}
              sx={{
                mr: 5,
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
            >
              {
                carTypeList.map((option) => (
                  <MenuItem 
                    key={option.value} 
                    value={option.value}
                  >
                    {option.label}
                  </MenuItem>
                ))
              }
            </TextField>
        </>
    )
}

export default CarTypeSelectTextField
