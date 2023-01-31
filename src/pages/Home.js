import * as React from 'react';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Box } from '@mui/material';
import imageListItemClasses from "@mui/material/ImageListItem";
import '../css/fade.css';
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



export default function Home() {

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
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)"
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
        <ImageListItem sx={{
          fontWeight: 'bold',
          fontSize: 40,
        }} key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
          
            title={item.title}
            // subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255)',
              whiteSpace:'normal' }}
                aria-label={`info about ${item.title}`}
                href={item.link}
              >
                {/* <ArrowCircleUpIcon /> */}
                <Button variant="outlined">Explore</Button>
              </IconButton>
            }
          />
        </ImageListItem>
        </FadeInSection>
      ))}
    {/* </ImageList> */}
    </Box>
    </ThemeProvider>
  );
}


const itemData = [
  {
    //Graduation pics
    img: '/images/grad_2022/_POG6308.jpg',
    title: 'VT Graduation 2022',
    link: '/graduation',
    // subtitle: 'hi'
  },
  //captial one pics
  {
    img: '../images/capone/_POG5450.jpg',
    title: 'Captial One HQ',
    link: '/captialone'
  },
  //steelwool pics here
  {
    img: '../images/stealwool/_POG5890.jpg',
    title: 'SteelWool',
    link: '/steelwool'
  },
  //Perry St Garage Pics here
  {
    img: '../images/perryStGarage/_DSC0949.jpg',

    title: 'Perry St Garage',
    link: '/perrystreet'
  },

  {
    //NYC Pics hehe
    img: '../images/nyc/_DSC4715.jpg',
    title: 'New York City',
    link: '/nyc'
  },
  {
    //NYC Pics hehe
    img: '../images/nyla/_POG3561.jpg',
    title: 'Nyla',
    link: '/nyla'
  },

];
