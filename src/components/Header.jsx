import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCarOutlined";
import Typography from "@mui/material/Typography";

const Header = () => {
    return (
        <>
        <AppBar position="relative" sx={{bgcolor: 'themeColor.AvocadoGreenDark'}}>
            <Toolbar>
                <DirectionsCarIcon sx={{ mr: 2 }} />
                <Typography variant="h6" noWrap sx={{fontWeight:"Bold"}}>
                    Journey Junction
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Header