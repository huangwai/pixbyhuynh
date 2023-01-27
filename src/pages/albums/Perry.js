import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

export default function PerrySt() {
    return (
        <Box sx={{ mx:'auto',my:'auto',width: '70%', height: 900, overflowY: 'scroll', '&::-webkit-scrollbar': {display: 'none'} }}>
        <h1>Perry St Garage</h1>
        <h3>Date Here...</h3>
        <ImageList cols={3} gap = {30} rowHeight={'auto'}>
           {/* <ImageList sx={{ mx: 'auto',my: 'auto',mt:2,width: '70%', height: 750,'&::-webkit-scrollbar': {display: 'none'} }} cols={2} gap={20}></ImageList> */}
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Box>
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
    