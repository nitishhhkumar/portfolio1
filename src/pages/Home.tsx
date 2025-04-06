import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import { useEffect, useState } from 'react';

const StarBackground = () => {
  const theme = useTheme();
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
        background: theme.palette.mode === 'dark' 
          ? 'radial-gradient(circle at center, rgba(0, 191, 255, 0.1) 0%, transparent 70%)'
          : 'radial-gradient(circle at center, rgba(0, 191, 255, 0.05) 0%, transparent 70%)',
      }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            position: 'absolute',
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '50%',
            backgroundColor: theme.palette.mode === 'dark' 
              ? 'rgba(0, 191, 255, 0.9)'
              : 'rgba(0, 191, 255, 0.6)',
            boxShadow: theme.palette.mode === 'dark'
              ? '0 0 8px rgba(0, 191, 255, 0.8)'
              : '0 0 8px rgba(0, 191, 255, 0.5)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </Box>
  );
};

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ overflow: 'hidden', height: '100vh' }}>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: theme.palette.mode === 'light' 
              ? 'linear-gradient(45deg, #FFFFFF 30%, #F5F7FA 90%)'
              : 'linear-gradient(45deg, #121212 30%, #1E1E1E 90%)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'background 0.3s ease-in-out',
          }}
        >
          <StarBackground />
          <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: 'primary.main',
                  textAlign: 'center',
                }}
              >
                Hi, I'm Nitish Kumar
              </Typography>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  color: theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary',
                  textAlign: 'center',
                  mb: 4,
                }}
              >
                Salesforce Developer
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 2,
                  mt: 4,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    component={RouterLink}
                    to="/projects"
                    startIcon={<CodeIcon />}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: [1, 1.02, 1],
                    opacity: [1, 0.9, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    component={RouterLink}
                    to="/contact"
                    startIcon={<CloudIcon />}
                  >
                    Get in Touch
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Container>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Home; 