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

export default function Graduation() {
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Virginia Tech Graduation Fall 2022</h1> */}
      {/* <h3>December 16th, 2022</h3> */}
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
           height: '95%'
          
        }}
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
        img: '../images/grad_2022/_POG5954.jpg',
      },
      {
        img: '../images/grad_2022/_POG5962.jpg',
      },
      {
        img: '../images/grad_2022/_POG5975.jpg',
      },
      {
        img: '../images/grad_2022/_POG5950.jpg',
      },
      {
        img: '../images/grad_2022/_POG5993.jpg',
      },

      {
        img: '../images/grad_2022/_POG6448.jpg',
      },
      {
        img: '../images/grad_2022/_POG6074.jpg',
      },
      {
        img: '../images/grad_2022/_POG6077.jpg',
      },
      
      {
        img: '../images/grad_2022/_POG6108.jpg',
      },
      {
        img: '../images/grad_2022/_POG6162.jpg',
      },
      {
        img: '../images/grad_2022/_POG6215.jpg',
      },
      {
        img: '../images/grad_2022/_POG6244.jpg',
      },
      {
        img: '../images/grad_2022/_POG6257.jpg',
      },
      {
        img: '../images/grad_2022/_POG6272.jpg',
      },
      {
        img: '../images/grad_2022/_POG6287.jpg',
      },
      {
        img: '../images/grad_2022/_POG6290.jpg',
      },
      {
        img: '../images/grad_2022/_POG6308.jpg',
      },
      {
        img: '../images/grad_2022/_POG6017.jpg',
      },
      {
        img: '../images/grad_2022/_POG6339.jpg',
      },
      {
        img: '../images/grad_2022/_POG6340.jpg',
      },
      {
        img: '../images/grad_2022/_POG6344.jpg',
      },
    ];
