import React from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import '../../css/fade.css';
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

export default function Nyc() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Captial One HQ</h1>
      <h3>Summer 2022</h3>
      <Box
      gap = {2.5}
        sx={{
          mx:'auto',
          my: 'auto',
          mt: '2%',
          mb: '1',
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
           height: '85%',
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
      img: '../images/capone/_POG5373.jpg',
      },
      {
        img: '../images/capone/_POG5374.jpg',
      },
      {
        img: '../images/capone/_POG5397.jpg',
      },
      {
        img: '../images/capone/_POG5404.jpg',
      },
      {
        img: '../images/capone/_POG5447.jpg',
      },
      {
        img: '../images/capone/_POG5450.jpg',
      },

      {
        img: '../images/capone/_POG5477.jpg',
      },
      {
        img: '../images/capone/_POG5481.jpg',
      },
      {
        img: '../images/capone/_POG5497.jpg',
      },
      
      {
        img: '../images/capone/_POG5505.jpg',
      },
      {
        img: '../images/capone/_POG5512.jpg',
      },
      {
        img: '../images/capone/_POG5538.jpg',
      },
      {
        img: '../images/capone/_POG5541.jpg',
        
      },
      {
        img: '../images/capone/_POG5565.jpg',
      },
      {
        img: '../images/capone/_POG5586.jpg',
        
      },
      {
        img: '../images/capone/_POG5665.jpg',
        
      },
      {
        img: '../images/capone/_POG5551.jpg',
      },
      {
        img: '../images/capone/_POG5693.jpg',
      },
      {
        img: '../images/capone/_POG5709.jpg',
      },
      {
        img: '../images/capone/_POG5750.jpg',
      }

    ];