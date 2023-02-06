import React from 'react';

import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImageListItem, {
  imageListItemClasses
} from "@mui/material/ImageListItem";
import FadeInSection from '../../components/FadeInSection';
// import { Typography } from '@mui/material';
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

//HERE IS HOW WE PARSE THRU IMAGE FOLDER
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('./images/me', false, /\.(png|jpe?g|svg)$/));

export default function Me() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Typography
            variant="subject1"
            noWrap
            component="a"
            sx={{
              mx: 'auto',
              mb: '.5%',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize: '20px',
              textDecoration: 'none',
              // py: '100%',
              // pl: '0%',
            }}
          >
            Me, Myself, & I
          </Typography> */}
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
            tablet: "repeat(1, 1fr)",
            desktop: "repeat(2, 1fr)"
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
        {images.map((item) => (
          <FadeInSection key={item}>
           <ImageListItem key={item}
          // sx={{ maxWidth: '500px', maxHeight: '700px', mx:'auto', my:'auto' }}
          >
            <img
              src={`${item}?w=248&fit=crop&auto=format`}
              srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        </FadeInSection>
        ))}
      </Box>
    </ThemeProvider>
  );
}
