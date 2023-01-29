import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
// import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from '@mui/material/Button';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import '../css/fade.css';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    <ImageList
     sx={{ mx: 'auto',my: 'auto',mt:5,width: '70%', height: '85%','&::-webkit-scrollbar': {display: 'none'} }} cols={2} gap={30} rowHeight={'auto'}>
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
                sx={{ color: 'rgba(255, 255, 255)' }}
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
    </ImageList>
    </ThemeProvider>
  );
}


const itemData = [
  {
    //Graduation pics
    img: '/images/grad_2022/_POG6308.jpg',
    title: 'VT Graduation 2022',
    link: '/graduation'
  },
  //georgetown pics
  // {
  //   img: '/images/georgetown/_POG3510.jpg',
  //   title: 'GeorgeTown',
  //   link: '/georgetown'
  // },
  //captial one pics
  {
    img: '../images/capone/_POG5450.jpg',
    title: 'Captial One HQ',
    link: '/captialone'
  },
  //valentines day pics
  // {
  //   img: '../images/vday2022/_POG2197.jpg',
  //   title: 'Valentines Day 2022',
  //   link: '/valentines'
  // },
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
