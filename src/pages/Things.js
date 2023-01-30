import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
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

export default function Things() {
  return (
    <ThemeProvider theme={theme}>
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
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
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
      img: '../images/things/_DSC3755.jpg',
      },
      {
        img: '../images/things/_DSC4719.jpg',
      },
      {
        img: '../images/things/_DSC5491.jpg',
      },
      {
        img: '../images/things/_DSC5806.jpg',
      },
      {
        img: '../images/things/_POG5577.jpg',
      },
      {
        img: '../images/things/_DSC1211.jpg',
      },
      {
        img: '../images/things/_DSC1976.jpg',
      },
      {
        img: '../images/things/_DSC2025.jpg',
      },
      {
        img: '../images/things/_DSC2170.jpg',
      },
      {
        img: '../images/things/_DSC2360.jpg',
      },
      {
        img: '../images/things/_DSC2981.jpg',
      },
      {
        img: '../images/things/_DSC3094.jpg',
      },
      {
        img: '../images/things/_DSC3526.jpg',
      },
      {
        img: '../images/things/_DSC4032.jpg',
      },
      {
        img: '../images/things/_POG5795.jpg',
      },
      {
        img: '../images/things/_POG5819.jpg',
      },
      {
        img: '../images/things/_POG5839.jpg',
      },
      {
        img: '../images/things/1C68E98C-F2E3-41EB-983E-B6C263931656.jpg',
      },
      {
        img: '../images/things/734E6883-D22E-49C1-9B00-8815B095AB6C.jpg',
      },
      {
        img: '../images/things/71119429-B546-4BFF-B819-FC0FD5BB538D.jpg',
      },
      {
        img: '../images/things/64568550858__71BBBA34-DDD7-4329-9BE1-59A856253C9A.jpg',
      },
      {
        img: '../images/things/E491C859-261E-454C-BCD1-118AB07C5B3B.jpg',
      },
      {
        img: '../images/things/IMG_0533.jpg',
      },
      {
        img: '../images/things/IMG_0620-2.jpg'
      },
      {
        img: '../images/things/IMG_8169.jpg'
      },
      {
        img: '../images/things/numberOne.png'
      },
      {
        img: '../images/things/numbertwo.png'
      },
      {
        img: '../images/things/number3.png'
      },
      {
        img: '../images/things/995D3337-912B-48D0-A54E-12943C6939F6.JPG'
      }

      
      
      
      


    ];

