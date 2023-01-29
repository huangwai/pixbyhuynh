import React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
// import ImageListItemBar from "@mui/material/ImageListItemBar";
// import IconButton from "@mui/material/IconButton";
// import InfoIcon from "@mui/icons-material/Info";

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
      <h1>New York City</h1>
      <h3>Summer 2021</h3>
      <Box
      gap = {2}
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
        ))}
      </Box>
    </ThemeProvider>
  );
}

  
    //List items below
    const itemData = [
      {
      img: '../images/nyc/_DSC4325.jpg',
      },
      {
        img: '../images/nyc/_DSC4341.jpg',
      },
      {
        img: '../images/nyc/_DSC4359.jpg',
      },
      {
        img: '../images/nyc/_DSC4361.jpg',
      },
      {
        img: '../images/nyc/_DSC4406.jpg',
      },
      {
        img: '../images/nyc/_DSC4447.jpg',
      },
      {
        img: '../images/nyc/_DSC4450.jpg',
      },
      {
        img: '../images/nyc/_DSC4503.jpg',
      },
      {
        img: '../images/nyc/_DSC4512.jpg',
      },
      
      {
        img: '../images/nyc/_DSC4515.jpg',
      },
      {
        img: '../images/nyc/_DSC4546.jpg',
      },
      {
        img: '../images/nyc/_DSC4569.jpg',
      },
      {
        img: '../images/nyc/_DSC4585.jpg',
        
      },
      {
        img: '../images/nyc/_DSC4609.jpg',
      },
      {
        img: '../images/nyc/_DSC4613.jpg',
        
      },
      {
        img: '../images/nyc/_DSC4621.jpg',
        
      },
      {
        img: '../images/nyc/_DSC4638.jpg',
      },
      {
        img: '../images/nyc/_DSC4640.jpg',
      },
      {
        img: '../images/nyc/_DSC4657.jpg',
      },
      {
        img: '../images/nyc/_DSC4673.jpg',
      },
      {
        img: '../images/nyc/_DSC4686.jpg',
      },
      {
        img: '../images/nyc/_DSC4687.jpg',
      },
      {
        img: '../images/nyc/_DSC4696.jpg',
      },
      {
        img: '../images/nyc/_DSC4706.jpg',
        
      },
      {
        img: '../images/nyc/_DSC4708.jpg',
      },
      {
        img: '../images/nyc/_DSC4715.jpg',
      },
      {
        img: '../images/nyc/_DSC4750.jpg',
      },
      {
        img: '../images/nyc/_DSC4770.jpg',
      },
      {
        img: '../images/nyc/_DSC4784.jpg',
      },
      {
        img: '../images/nyc/_DSC4826.jpg',
      },
      {
        img: '../images/nyc/IMG_7810.jpg',
      },
      {
        img: '../images/nyc/IMG_7823.jpg',
      },
      {
        img: '../images/nyc/IMG_7819.jpg',
      },
      {
        img: '../images/nyc/IMG_7830.jpg',
      },
      {
        img: '../images/nyc/IMG_7862.jpg',
      },
      {
        img: '../images/nyc/IMG_7829.jpg',
      },
      {
        img: '../images/nyc/IMG_7862.jpg',
      },
      {
        img: '../images/nyc/IMG_7864.jpg',
      },
      {
        img: '../images/nyc/IMG_7865.jpg',
      },
      {
        img: '../images/nyc/IMG_7872.jpg',
      },
      {
        img: '../images/nyc/IMG_7874.jpg',
      },

    ];