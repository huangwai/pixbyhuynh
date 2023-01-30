import React from 'react';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import FadeInSection from '../components/FadeInSection';
import '../css/fade.css';



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


export default function People() {
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Jimmy Huynh</h1> */}
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
           height: '95%',
           flexGrow: 1,
           flexWrap: 'nowrap'

          
        }}
        textAlign = 'center'
      >
        {itemData.map((item) => (
        <FadeInSection key={item}>
          <ImageListItem 
          key={item.img}>
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
      img: '/images/georgetown/_POG3510.jpg',
      },
      {
        img: '../images/people/_DSC0352.jpg',
      },
      {
        img: '../images/people/_DSC0503.jpg',
      },
      {
        img: '../images/people/_DSC0844.jpg',
      },
      {
        img: '../images/people/_DSC2583.jpg',
      },
      {
        img: '../images/people/_DSC7428.jpg',
      },

      {
        img: '../images/people/_DSC7666.jpg',
      },
      {
        img: '../images/people/_DSC9559.jpg',
      },
      {
        img: '../images/people/_DSC9735.jpg',
      },
      
      {
        img: '../images/people/_DSC9764.jpg',
      },
      {
        img: '../images/people/_DSC9804.jpg',
      },
      {
        img: '../images/people/_DSC9836.jpg',
      },
      {
        img: '../images/people/_POG5059.jpg',
        
      },
      {
        img: '../images/people/_POG5067.jpg',
      },
      {
        img: '../images/people/_DSC9875.jpg',
        
      },
      {
        img: '../images/people/_POG5201.jpg',
        
      },
      {
        img: '../images/people/_POG2196.jpg'
      },
      {
        img: '../images/people/_POG2263.jpg'
      }

    ];

