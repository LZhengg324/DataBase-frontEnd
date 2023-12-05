import React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card  from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import axios from "../api/axios";
import CarBrandSelectTextField from "./CarBrandSelectTextField";
import CarTypeSelectTextField from "./CarTypeSelectTextField";
import CarNameSearchBar from "./CarNameSearchBar";

let cards = [1, 2, 3];

const MakeOrderPage = () => {
    const [carBrand, setCarBrand] = useState('All');
    const [carType, setCarType] = useState('All');
    const [carName, setCarName] = useState('');
    const [searchData, setSearchData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'http://localhost:8080/user/login',
                {
                    params: {
                        carBrand: carBrand,
                        carType: carType,
                        carName: carName,
                    }
                }
            );
            const responseData = response.data;
            setSearchData(responseData);
            console.log(searchData);
        } catch (error) {
            console.error('Failed to fetch data: ', error);
        }
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSearch = async (event) => {
        event.preventDefault();
        // const formData = new FormData();
        // formData.append('carBrand', carBrand);
        // formData.append('carType', carType);
        // formData.append('carName', carName);
        // console.log("FormData Content:");
        // for (let pair of formData.entries()) {
        //   console.log(pair[0] + ": " + pair[1]);
        // }
        try {
            fetchData();
        } catch (error) {
          console.error('Failed Search: ', error)
        }
    }

    const handleCarBrandChange = (newState) => {
        setCarBrand(newState);
    }

    const handleCarTypeChange = (newState) => {
        setCarType(newState);
    }

    const handleCarNameSearch = (newState) => {
        setCarName(newState);
    }
    return (
        <>
            <Grid maxWidth="md" container direction="row" justifyContent="center" sx={{mb: 10, height: 20, display: 'flex', flexDirection: 'column'}}>
                <CarBrandSelectTextField onStateChange={handleCarBrandChange}/>
                <CarTypeSelectTextField onStateChange={handleCarTypeChange}/>
                <CarNameSearchBar onStateChange={handleCarNameSearch}/>
                <Button 
                variant="contained" 
                sx={{
                    mr: 5,
                    bgcolor: 'themeColor.CoralMain',
                    '&:hover':{
                        bgcolor: 'themeColor.CoralDark',
                    }
                }} 
                onClick={handleSearch}
                >
                Search
                </Button>
            </Grid>
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                        <CardMedia
                            component="div"
                            sx={{
                            // 16:9
                            pt: '56.25%',
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Car Name
                            </Typography>
                            <Typography>
                                This is a media card. You can use this section to describe the
                                content.
                            </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: "flex-end"}}>
                            <Button size="small" >Rent Now</Button>
                            {/* <Button size="small">Edit</Button> */}
                        </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default MakeOrderPage