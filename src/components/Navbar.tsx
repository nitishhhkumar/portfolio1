import { AppBar, Toolbar, Typography, Button, Box, IconButton, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloudIcon from '@mui/icons-material/Cloud';
import SchoolIcon from '@mui/icons-material/School';

interface NavbarProps {
  toggleColorMode: () => void;
  mode: 'light' | 'dark';
}

const Navbar = ({ toggleColorMode, mode }: NavbarProps) => {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            textDecoration: 'none',
            color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
            },
          }}
        >
          <CloudIcon sx={{ fontSize: 28 }} />
          NK
        </Typography>
        <Box>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/about"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/projects"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/blog"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
            }}
          >
            Blog
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/certifications"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'primary.main',
              },
            }}
          >
            Certifications
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/contact"
            sx={{
              color: theme.palette.mode === 'light' ? 'primary.main' : 'white',
              '&:hover': {
                color: theme.palette.mode === 'light' ? 'primary.dark' : 'white',
              },
            }}
          >
            Contact
          </Button>
          <IconButton
            onClick={toggleColorMode}
            sx={{
              ml: 2,
              background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
              '&:hover': {
                background: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
              },
            }}
          >
            {mode === 'dark' ? <Brightness7Icon sx={{ color: 'primary.main' }} /> : <Brightness4Icon sx={{ color: 'primary.main' }} />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 