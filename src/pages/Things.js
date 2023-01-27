import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';



export default function Things() {
  return (
    <Box sx={{ mx:'auto',my:'auto',width: '70%', height: 900, overflowY: 'scroll', '&::-webkit-scrollbar': {display: 'none'} }}>
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
    //Graduation pics
    img: '/images/grad_2022/_POG6308.jpg',
    title: 'VT Graduation 2022',
    link: '/graduation'
  },
  //georgetown pics
  {
    img: '/images/georgetown/_POG3510.jpg',
    title: 'GeorgeTown',
    link: '/georgetown'
  },
  //captial one pics
  {
    img: '../images/grad_2022/_POG6215.jpg',
    title: 'Captial One HQ',
    link: '/captialone'
  },
  //valentines day pics
  {
    img: '../images/vday2022/_POG2197.jpg',
    title: 'Valentines Day 2022',
    link: '/valentines'
  },
  //steelwool pics here
  {
    img: '../images/stealwool/_POG5890.jpg',
    title: 'SteelWool',
    link: '/steelwool'
  },
  //Perry St Garage Pics here
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Perry St Garage',
    link: '/perrystreet'
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Perry St Garage',
    link: '/perrystreet'
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Perry St Garage',
    link: '/perrystreet'
  },
  {
    img: '../images/grad_2022/_POG6345.jpg',
    title: 'Perry St Garage',
    link: '/perrystreet'
  },
  //skyline pics here
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     // title: 'Laptop',
//   },
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     title: 'Doors',
//   },
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     title: 'Coffee',
//   },
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     title: 'Storage',
//   },
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     title: 'Coffee table',
//   },
//   {
//     img: '../images/grad_2022/_POG6345.jpg',
//     title: 'Blinds',
//   },
];