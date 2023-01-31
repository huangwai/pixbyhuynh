import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import ScrollToHide from './ScrollToHide';

const drawerWidth = 240;
const navItems = ['me', 'people', 'things','contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Jimmy Huynh
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
           key={item} 
           disablePadding
           href = {`/${item}`}
           sx={{
            textAlign:'center', 
            my: 2, 
            color: 'black', 
            display: 'block', 
            fontSize: '15px', 
            paddingInlineStart: 2,
           }}>
            <ListItemButton
            href = {`/${item}`}
            sx={{
              textAlign:'center', 
              my: 2, 
              color: 'black', 
              display: 'block', 
              fontSize: '15px', 
              paddingInlineStart: 2,
              // mr: 'auto',
              // ml: 'auto'
             }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ScrollToHide threshold={0}>
      <AppBar
       sx = {{
        bgcolor: '#10131F',
       mx:'auto',
       whiteSpace:'normal'
       }}
       component="nav"
       position="fixed">
        <Toolbar sx={{ bgcolor: '#10131F',mx:'auto'}} disableGutters>
          <IconButton
            size ="large"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              fontSize: '30px',
              textDecoration: 'none',
            }}
          >
            Jimmy Huynh
          </Typography>
          <Box sx={{ bgcolor: '#10131F',flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {navItems.map((item) => (
              <Button
               key={item}
                sx={{ color: '#fff' }}
                href = {`/${item}`}
                >
                {item}
              </Button>
            ))}
          </Box>
          <Button
            href="https://www.instagram.com/pixbyhuynh/"
            sx={{ my: 2, color: 'white', display: 'block', fontSize: '15px', paddingInlineStart: 2 }}
          >
            <InstagramIcon sx={{ fontSize: '25px' }}/>
          </Button>
        </Toolbar>
      </AppBar>
      </ScrollToHide>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
