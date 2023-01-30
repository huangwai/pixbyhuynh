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

export default function SteelWool() {
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Steel Wool</h1> */}
      {/* <h3>September 16th, 2022</h3> */}
      <Box
      
      gap = {2.5}
        sx={{
          mx:'auto',
          my: 'auto',
          // mt: '25%',
          // mb: '1',
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
            {/* <ImageListItem key={item.img} cols={item.cols || 1}>
      <img src={item.img} alt={item.title} /> */}
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
      img: '../images/stealwool/_POG5887.jpg',
      },
      {
        img: '../images/stealwool/_POG5888.jpg',
      },
      {
        img: '../images/stealwool/_POG5889.jpg',
      },
      {
        img: '../images/stealwool/_POG5890.jpg',
      },
      {
        img: '../images/stealwool/_POG5892.jpg',
      },
      {
        img: '../images/stealwool/_POG5894.jpg',
      },

      {
        img: '../images/stealwool/_POG5901.jpg',
      },
      {
        img: '../images/stealwool/_POG5902.jpg',
      },
      {
        img: '../images/stealwool/_POG5903.jpg',
      },
      
      {
        img: '../images/stealwool/_POG5905.jpg',
      },
      
    ];