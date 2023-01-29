import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";


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
      gap = {2}
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
            bigMobile: "repeat(2, 1fr)",
            tablet: "repeat(3, 1fr)",
            desktop: "repeat(4, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          },
          width: '80%',
           height: '85%',
           flexGrow: 1,
           flexWrap: 'nowrap'

          
        }}
        textAlign = 'center'
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
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


    ];

