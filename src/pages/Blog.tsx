import { Box, Container, Typography } from '@mui/material';

function Blog() {
  return (
    <Container maxWidth="xl" sx={{ py: 8, minHeight: '100vh' }}>
      <Box sx={{ height: '100vh', width: '100%' }}>
        <iframe
          src="https://nitishkashyap7.wordpress.com/"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
          title="Apex & Beyond Blog"
          allow="fullscreen"
        />
      </Box>
    </Container>
  );
}

export default Blog; 