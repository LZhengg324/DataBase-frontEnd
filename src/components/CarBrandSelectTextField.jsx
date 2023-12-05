import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

// export default function PreviewCarBrandTextField() {
//     const [carBrand, setCarBrand] = useState('All');
//     let cards = [];

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //       try {
//     //         const response = await axios.get('http://localhost:8080/api/data?carBrand=' + carBrand);
//     //         cards = response;
//     //       } catch (error) {
//     //         console.log('Error fetching data: ', error);
//     //       }
//     //     }
//     //     fetchData();
//     //     console.log('carBrand: ', carBrand);
//     //   }, [carBrand]);

//     return (
        // <>
        //     <TextField
        //       id="chooseBrand"
        //       select
        //       label="Preview a car Brand"
        //       defaultValue="All"
        //       style={{width: '150px'}}
        //       onChange={(e) => {setCarBrand(e.target.value)}}
        //       sx={{
        //         mr: 5,
        //       }}
        //     >
        //       {
        //         carBrandList.map((option) => (
        //           <MenuItem 
        //             key={option.value} 
        //             value={option.value}
        //           >
        //             {option.label}
        //           </MenuItem>
        //         ))
        //       }
        //     </TextField>
        // </>
//     )
// }

const CarBrandSelectTextField = ({onStateChange}) => {
    const carBrandList = [
        {
          value: 'All',
          label: 'All',
        },
        {
          value: 'Audi',
          label: 'Audi',
        }, 
        {
          value: 'Aston Martin',
          label: 'Aston Martin',
        }, 
        {
          value: 'BMW',
          label: 'BMW',
        }, 
        {
          value: 'BYD',
          label: 'BYD',
        },
        {
          value: '长安',
          label: '长安',
        }, 
        {
          value: 'Chevrolet',
          label: 'Chevrolet',
        }, 
        {
          value: 'Ford',
          label: 'Ford',
        }, 
        {
          value: 'Ferarri',
          label: 'Ferarri',
        }, 
        {
          value: 'Honda',
          label: 'Honda',
        }, 
        {
          value: 'Jeep',
          label: 'Jeep',
        }, 
        {
          value: 'Lamborghini',
          label: 'Lamborghini',
        }, 
        {
          value: 'LandRover',
          label: 'LandRover',
        },
        {
          value: 'Lexus',
          label: 'Lexus',
        }, 
        {
          value: 'Maybach',
          label: 'Maybach',
        }, 
        {
          value: 'Porsche',
          label: 'Porsche',
        }, 
        {
          value: 'Rolls Royce',
          label: 'Rolls Royce',
        },
        {
          value: 'Tesla',
          label: 'Tesla',
        }
    ]
    const handleButtonClick = (newState) => {
        onStateChange(newState);
    };
    return (
        <>
          <TextField
            id="chooseBrand"
            select
            label="Car Brand"
            defaultValue="All"
            style={{maxWidth: '150px'}}
            onChange={(e) => {handleButtonClick(e.target.value)}}
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
              carBrandList.map((option) => (
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

export default CarBrandSelectTextField;