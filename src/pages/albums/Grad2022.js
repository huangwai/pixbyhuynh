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

export default function TitlebarImageList() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: 450,
          backgroundColor: "#10131F",
          display: "grid",
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            bigMobile: "repeat(2, 1fr)",
            tablet: "repeat(3, 1fr)",
            desktop: "repeat(4, 1fr)"
          },
          [`& .${imageListItemClasses.root}`]: {
            display: "flex",
            flexDirection: "column"
          }
        }}
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
