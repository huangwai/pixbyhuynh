import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
// import { fontSize } from '@mui/system';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box 
    sx={{
        borderTop: .1,
        borderColor:'black',
        bgcolor: '#10131F',
        mx:'auto',
        whiteSpace:'normal',
        py: '1%'
        // pb:'1%'
        }} >
           <Typography
           component="span"
           variant="subtitle1"
           color="inherit"
           outline= "none"
           border = 'none'
           display = 'block'
        //    textAlign='left'
           >
            Pixbyhuynh was created in React.js using Material UI
           </Typography>
      <BottomNavigation
      position="fixed"
      sx={{
        mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              bgcolor: '#10131F',
              fontSize: '90px',
              textDecoration: 'none',
              color: 'red',
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
        // to ='/'
        label="Home"
        href = '/' 
        // icon={<RestoreIcon />}
         />
        <BottomNavigationAction 
        label="Me" 
        href = '/me' 
        // icon={<FavoriteIcon />} 
        />
        <BottomNavigationAction 
        label="Things"
        href = '/things' 
        // icon={<LocationOnIcon />} 
        />
        <BottomNavigationAction 
        label="Contact" 
        href = '/contact'
        // icon={<LocationOnIcon />} 
        />
        <BottomNavigationAction 
        // label="Contact"
        href = 'https://www.instagram.com/pixbyhuynh/' 
        icon={<InstagramIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}
