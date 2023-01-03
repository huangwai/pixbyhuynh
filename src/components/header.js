import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import '../css/Header.css';

const pages = ['Home', 'Chat', 'About'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      {/* <Container maxWidth="xl"> */}
      <Toolbar sx={{ bgcolor: '#10131F' }} disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '30px',
            pl: 2
          }}
        >
          Jimmy Huynh
        </Typography>

        {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu> */}

        <Box sx={{ pr: 2, flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'flex-end' }}>
          {/* <Button href="/" sx={{ my: 2, color: 'white', display: 'block', fontSize: '20px', paddingInlineStart: 2 }}>
            Home
          </Button> */}
          <Button
            href="/"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            Overview
          </Button>
          <Button
            href="/people"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            People
          </Button>
          <Button
            href="/things"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            Things
          </Button>
          <Button
            href="/contact"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            Contact
          </Button>

          <Button
            href="https://www.instagram.com/pixbyhuynh/"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            <InstagramIcon/>
          </Button>

          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>

        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
