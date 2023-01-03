import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


export default function Graduation() {
  return (
    <ImageList sx={{ mx: 'auto',my: 'auto',width: '70%', height: 450 }} cols={2} gap={20}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
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
                <ArrowCircleUpIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/images/grad_2022/_POG6308.jpg',
    title: 'Graduation 2022',
  },
  {
    img: '/images/grad_2022/_POG6344.jpg',
    title: 'Kitchen',
  },
  {
    img: '../images/grad_2022/_POG6215.jpg',
    title: 'Sink',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Books',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Chairs',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Candle',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Laptop',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Doors',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Coffee',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Storage',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Coffee table',
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Blinds',
  },
];
