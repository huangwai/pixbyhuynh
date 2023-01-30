import React from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import FadeInSection from '../../components/FadeInSection';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      bigMobile: 350,
      tablet: 650,
      desktop: 900
    }
  }
});

export default function Nyla() {
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>New York City</h1> */}
      {/* <h3>Summer 2021</h3> */}
      <Box
      gap = {2.5}
        sx={{
          mx:'auto',
          my: 'auto',
        //   mt: '25%',
        //   mb: '1',
          backgroundColor: "#10131F",
          display: "grid",
          overflowY: 'scroll',
          '&::-webkit-scrollbar': {display: 'none'},
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(1, 1fr)",
            tablet: "repeat(2, 1fr)",
            desktop: "repeat(3, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          },
          width: '85%',
           height: '95%',
           flexGrow: 1,
           flexWrap: 'nowrap'
          
        }}
        textAlign = 'center'
      >
        {itemData.map((item) => (
        <FadeInSection key={item}>
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

          </ImageListItem>
          </FadeInSection>
        ))}
      </Box>
    </ThemeProvider>
  );
}

  
    //List items below
    const itemData = [
      {
      img: '../images/nyla/_POG1853.jpg',
      },
      {
        img: '../images/nyla/_POG1872.jpg',
        },
      {
        img: '../images/nyla/_POG1933.jpg',
      },
      {
        img: '../images/nyla/_POG1957.jpg',
      },
      {
        img: '../images/nyla/_POG1976.jpg',
      },
      {
        img: '../images/nyla/_POG2052.jpg',
      },
      {
        img: '../images/nyla/_POG2074.jpg',
      },
      {
        img: '../images/nyla/_POG2088.jpg',
      },
      {
        img: '../images/nyla/_POG2113.jpg',
      },
      
      {
        img: '../images/nyla/_POG2130.jpg',
      },
      {
        img: '../images/nyla/_POG2170.jpg',
      },
      {
        img: '../images/nyla/_POG2175.jpg',
      },
      {
        img: '../images/nyla/_POG3561.jpg',
        
      },
      

    ];