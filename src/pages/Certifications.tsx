import { Box, Typography, Grid, Card, CardContent, useTheme, Container } from '@mui/material';
import { Link } from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Salesforce Certified Platform Developer II',
    organization: 'Salesforce',
    issueDate: '2024',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  },
  {
    name: 'Salesforce Certified Platform Developer I',
    organization: 'Salesforce',
    issueDate: '2023',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  },
  {
    name: 'Salesforce Certified Administrator',
    organization: 'Salesforce',
    issueDate: '2023',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  },
  {
    name: 'Salesforce Certified Associate',
    organization: 'Salesforce',
    issueDate: '2023',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  },
  {
    name: 'Salesforce Certified AI Associate',
    organization: 'Salesforce',
    issueDate: '2024',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  },
  {
    name: 'Salesforce Certified AI Specialist',
    organization: 'Salesforce',
    issueDate: '2024',
    url: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=883plJXO1+39LLZ/qCR2MOxWI/mk7UIHiNkSVm1LlPxkc7cIzeBpqlaHoTA69vlx'
  }
];

const Certifications = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Box
        sx={{
          textAlign: 'center',
          mb: { xs: 4, md: 6 }
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
            mb: 2
          }}
        >
          Salesforce Certifications
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
            maxWidth: '600px',
            mx: 'auto'
          }}
        >
          Professional certifications demonstrating expertise in Salesforce development and administration
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 4,
          width: '100%'
        }}
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card
              sx={{
                height: '100%',
                minHeight: '200px',
                borderRadius: 2,
                overflow: 'hidden',
                position: 'relative',
                background: theme.palette.mode === 'dark'
                  ? 'linear-gradient(145deg, #032D60 0%, #0176D3 100%)'
                  : 'white',
                boxShadow: theme.palette.mode === 'dark'
                  ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                  : '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: theme.palette.mode === 'dark'
                    ? '0 12px 40px rgba(0, 0, 0, 0.4)'
                    : '0 12px 40px rgba(0, 0, 0, 0.15)',
                }
              }}
            >
              <CardContent sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                  <Box
                    sx={{
                      background: theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.1)'
                        : 'rgba(1, 118, 211, 0.1)',
                      borderRadius: '12px',
                      p: 1.5,
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minWidth: '48px',
                      height: '48px',
                      flexShrink: 0
                    }}
                  >
                    <CloudIcon
                      sx={{
                        fontSize: 32,
                        color: theme.palette.mode === 'dark' ? 'white' : 'primary.main'
                      }}
                    />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.mode === 'dark' ? 'white' : 'primary.main',
                        mb: 0.5,
                        lineHeight: 1.3,
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                      }}
                    >
                      {cert.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary',
                        mb: 1
                      }}
                    >
                      {cert.organization}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'text.secondary',
                        display: 'block',
                        mb: 2
                      }}
                    >
                      Issued: {cert.issueDate}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 'auto' }}>
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      textDecoration: 'none',
                      color: theme.palette.mode === 'dark' ? 'primary.light' : 'primary.main',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: theme.palette.mode === 'dark' ? 'white' : 'primary.dark',
                      }
                    }}
                  >
                    View Certification
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
};

export default Certifications; 