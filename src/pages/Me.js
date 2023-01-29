import React from 'react';

import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import FadeInSection from '../components/FadeInSection';

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

export default function Me() {
  return (
    <ThemeProvider theme={theme}>
      {/* <h1>Jimmy Huynh</h1> */}
      {/* <h3>December 16th, 2022</h3> */}
      <Box
      gap = {2.5}
        sx={{
          mx:'auto',
          my: 'auto',
          mt: '2%',
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
        img: '../images/me/_DSC0065.jpg',
      },
      {
        img: '../images/me/_DSC0794.jpg',
      },
      {
        img: '../images/me/_DSC1001.jpg',
      },
      {
        img: '../images/me/_DSC1066.jpg',
      },
      {
        img: '../images/me/_DSC1467.jpg',
      },

      {
        img: '../images/me/_DSC1683.jpg',
      },
      {
        img: '../images/me/_DSC1704.jpg',
      },
      {
        img: '../images/me/_DSC1708.jpg',
      },
      
      {
        img: '../images/me/_DSC2306.jpg',
      },
      {
        img: '../images/me/_DSC5737.jpg',
      },
      {
        img: '../images/me/_DSC6401.jpg',
      },
      {
        img: '../images/me/1C25227E-CB66-4424-8427-F11043E624CC.jpg',
        
      },
      {
        img: '../images/me/3D80ADB7-B1E1-4F89-A42C-8E0752A9EAEE_1_105_c.jpeg',
      },

    ];
