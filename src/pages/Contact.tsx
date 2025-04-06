import { Container, Typography, Box, Link, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Contact Me
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
        Let's connect and discuss opportunities
      </Typography>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
        gap: 4 
      }}>
        <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <PhoneIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Phone
          </Typography>
          <Typography variant="body1" color="text.secondary">
            +91 7091840678
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <EmailIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Email
          </Typography>
          <Typography variant="body1" color="text.secondary">
            nitishhkashyap@gmail.com
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            Location
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Bengaluru, India
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <LinkedInIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            LinkedIn
          </Typography>
          <Link 
            href="https://www.linkedin.com/in/nitish-k-807042304/" 
            target="_blank" 
            rel="noopener noreferrer"
            color="inherit"
            sx={{ textDecoration: 'none' }}
          >
            <Typography variant="body1" color="text.secondary">
              @nitish-k-807042304
            </Typography>
          </Link>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact; 