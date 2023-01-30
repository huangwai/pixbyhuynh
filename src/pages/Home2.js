import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// import FadeInSection from '../components/FadeInSection';
const images = [
  {
    url: '/images/grad_2022/_POG6308.jpg',
    title: 'VT Graduation 2022',
    // width: '30%',
    link:'/graduation'
  },
  {
    url: '../images/capone/_POG5450.jpg',
    title: 'Captial One HQ',
    // width: '30%',
    link:'/captialone'
  },
  {
    url: '../images/stealwool/_POG5890.jpg',
    title: 'Steel Wool',
    // width: '30%',
    link:'steelwool'
  },
  {
    url: '../images/perryStGarage/_DSC0949.jpg',
    title: 'Perry St Garage',
    // width: '30%',
    link: 'perrystreet'
  },
  {
    url: '../images/nyc/_DSC4715.jpg',
    title: 'New York City',
    // width: '30%',
    link: '/nyc'
  },
  {
    url: '../images/nyla/_POG3561.jpg',
    title: 'Nyla',
    // width: '30%',
    link: '/nyla'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 45%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));



export default function ButtonBases() {
  return (
    // <FadeInSection key={image}>

    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: 'auto' }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: '100%',
          }}
          href={image.link}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />

          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>

        </ImageButton>
        // </FadeInSection>

      ))}
    </Box>
  );
}
