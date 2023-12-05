import React from "react";
import TextField from "@mui/material/TextField";

const CarNameSearchBar = ({onStateChange}) => {
    const handleSearchBarChange = (newState) => {
        onStateChange(newState);
    }
    return (
        <>           
            <TextField 
                id="searchType"
                variant="outlined"
                label="Search a car with name"
                style={{maxWidth: '350px'}}
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
                    '& .Mui-focused': {

                    }
                }}
                onChange={(e) => handleSearchBarChange(e.target.value)}
            />
        </>
    )
}

export default CarNameSearchBar;