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

export default function PerrySt() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Perry St Garage</h1>
      <h3>Fall 2021</h3>
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
    
    const itemData = [
      {
        img: '../images/perryStGarage/_DSC0684.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC0869.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC0949.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC0253.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC1059.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC1066.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC1126.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC1138.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC1150.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC9419.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC9443.jpg',
      },
      {
        img: '../images/perryStGarage/_DSC9508.jpg',
      },
    ];
    