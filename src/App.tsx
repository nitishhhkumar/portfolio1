import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ProjectsNew from './pages/ProjectsNew';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Certifications from './pages/Certifications';
import { useState, useMemo, useEffect } from 'react';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#00A1E0' : '#0176D3', // Trailhead blue
            light: mode === 'dark' ? '#4FB3FF' : '#4FB3FF',
            dark: mode === 'dark' ? '#0078B3' : '#005C9E',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: mode === 'dark' ? '#FF6B6B' : '#FF6B6B',
            light: mode === 'dark' ? '#FF8E8E' : '#FF8E8E',
            dark: mode === 'dark' ? '#E53935' : '#E53935',
          },
          background: {
            default: mode === 'dark' ? '#032D60' : '#FFFFFF', // Trailhead dark blue for dark mode
            paper: mode === 'dark' ? '#032D60' : '#F8F9FA',
          },
          text: {
            primary: mode === 'dark' ? '#FFFFFF' : '#032D60',
            secondary: mode === 'dark' ? '#B0C4DE' : '#4A5568',
          },
        },
        typography: {
          fontFamily: '"Salesforce Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
          },
          h2: {
            fontWeight: 600,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
          },
          h3: {
            fontWeight: 600,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            lineHeight: 1.4,
          },
          h4: {
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            lineHeight: 1.4,
          },
          body1: {
            fontSize: '1.1rem',
            lineHeight: 1.6,
          },
          body2: {
            fontSize: '1rem',
            lineHeight: 1.6,
          },
        },
        shape: {
          borderRadius: 8,
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: '8px',
                textTransform: 'none',
                fontWeight: 500,
                padding: '8px 24px',
                transition: 'all 0.3s ease',
              },
              contained: {
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  transform: 'translateY(-2px)',
                },
              },
              outlined: {
                borderWidth: '2px',
                '&:hover': {
                  borderWidth: '2px',
                },
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              },
            },
          },
          MuiCard: {
            styleOverrides: {
              root: {
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                },
              },
            },
          },
          MuiAppBar: {
            styleOverrides: {
              root: {
                backgroundImage: 'none',
                backdropFilter: 'blur(10px)',
                backgroundColor: mode === 'dark' ? 'rgba(3, 45, 96, 0.85)' : 'rgba(255, 255, 255, 0.95)',
                borderRadius: '0 0 12px 12px',
              },
            },
          },
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router basename="/portfolio1">
        <Navbar toggleColorMode={toggleColorMode} mode={mode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsNew />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certifications" element={<Certifications />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
