import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
// import FadeInSection from '../components/FadeInSection';
// import Hero from './albums/Home';
const images = [
    {
        url: '../images/albumcovers/number2.png',
        title: '<3',
        link: '/miju'
      },
  {
    url: '/images/albumcovers/_POG6308.jpg',
    title: 'VT Graduation 2022',
    link:'/graduation'
  },
  {
    url: '../images/albumcovers/cap1.png',
    title: 'Captial One HQ',
    link:'/captialone'
  },
  {
    url: '../images/albumcovers/rings.png',
    title: 'Steel Wool',
    link:'steelwool'
  },
  {
    url: '../images/albumcovers/pst.png',
    title: 'Perry St Garage',
    link: 'perrystreet'
  },
  {
    url: '../images/albumcovers/_DSC4715.jpg',
    title: 'New York City',
    link: '/nyc'
  },
  {
    // ../images/albumcovers/heroimg.jpg
    // url: '../images/albumcovers/heroimg.png',
    url: '../images/albumcovers/_POG2130.jpg',
    title: 'Nyla',
    link: '/nyla'
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
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
    // '& .MuiTypography-root': {
    //   border: '4px solid currentColor',
    // },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
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



export default function Album() {
  return (
    // <FadeInSection key={image}>
    <Box
    // className='album' 
    sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: 'auto' }}>
      {/* <img
        src={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={"Hero Image"}
        height = 'auto'
        width = 'auto'
        margin = 'auto'
        loading="lazy"
      /> */}
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: '100%',
            border:'none'
          }}
          href={image.link}
        >

          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />

          <ImageBackdrop className="MuiImageBackdrop-root" />

          <Image
          loading="lazy">
            {/* <FadeInSection key={image}> */}
            <Typography
              component="span"
              variant="subject1"
              color="inherit"
              outline= "none"
              border = 'none'
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                outline: 'none',
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
                        

              {image.title}
              <ImageMarked className="MuiImageMarked-root" />

            </Typography>
            {/* </FadeInSection> */}

          </Image>

        </ImageButton>

      ))}
    </Box>
  );
}
