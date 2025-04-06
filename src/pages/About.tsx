import { Box, Typography, Container, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import ApiIcon from '@mui/icons-material/Api';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import AssessmentIcon from '@mui/icons-material/Assessment';

const skills = [
  {
    title: 'Salesforce Clouds & Products',
    icon: <CloudIcon sx={{ fontSize: 40 }} />,
    items: [
      'Sales Cloud',
      'Service Cloud',
      'Experience Cloud',
      'Agentforce',
      'Einstein AI',
      'OmniStudio',
      'Platform Events'
    ]
  },
  {
    title: 'Salesforce Development',
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    items: [
      'Apex Classes & Triggers',
      'Batch Apex',
      'Schedulable Classes',
      'Lightning Web Components',
      'Lightning Design System',
      'SOQL & SOSL',
      'Dynamic Apex',
      'Custom Metadata'
    ]
  },
  {
    title: 'Security & Access Control',
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    items: [
      'Profiles & Permission Sets',
      'OWD & Role Hierarchies',
      'Sharing Rules',
      'Field-Level Security',
      'Named Credentials'
    ]
  },
  {
    title: 'API & Integration',
    icon: <ApiIcon sx={{ fontSize: 40 }} />,
    items: [
      'REST/SOAP APIs',
      'Named Credentials',
      'OAuth',
      'Data Loader',
      'Platform Events',
      'SAP Integration'
    ]
  },
  {
    title: 'DevOps & Collaboration',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    items: [
      'Bitbucket & GitHub',
      'Jira & Confluence',
      'VS Code',
      'Salesforce DX',
      'CI/CD',
      'Change Sets'
    ]
  },
  {
    title: 'Data & Reporting',
    icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
    items: [
      'Advanced SOQL',
      'Reports & Dashboards',
      'Einstein AI Analytics',
      'Custom Report Types',
      'Data Visualization'
    ]
  }
];

const About = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, color: 'primary.main', mb: 6 }}
        >
          About Me
        </Typography>

        <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
          <Typography variant="h6" paragraph>
            Results-driven Salesforce Developer with experience in designing, developing, and optimizing scalable CRM solutions.
          </Typography>
          <Typography variant="body1" paragraph>
            Expertise in Sales Cloud, Service Cloud, Experience Cloud, and AI-powered automation. Proficient in Apex, Lightning Web Components (LWC), Flows, and API integrations.
          </Typography>
          <Typography variant="body1" paragraph>
            Adept at building enterprise-level applications, optimizing automation processes, and improving business efficiency. Strong understanding of security models, profiles, permission sets, OWD, and advanced data access controls.
          </Typography>
          <Typography variant="body1">
            Passionate about leveraging AI/ML, automation, and best coding practices to drive digital transformation.
          </Typography>
        </Paper>

        <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
          Technical Skills
        </Typography>

        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 4,
          width: '100%'
        }}>
          {skills.map((skill, index) => (
            <Box key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ width: '100%' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: theme.palette.mode === 'dark' 
                      ? 'rgba(255, 255, 255, 0.05)' 
                      : 'rgba(0, 0, 0, 0.02)',
                  }}
                >
                  <Box sx={{ 
                    color: 'primary.main', 
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}>
                    {skill.icon}
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {skill.title}
                    </Typography>
                  </Box>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {skill.items.map((item, itemIndex) => (
                      <Typography 
                        key={itemIndex} 
                        component="li" 
                        variant="body2"
                        sx={{ 
                          mb: 1,
                          color: theme.palette.mode === 'dark' ? 'text.secondary' : 'text.primary'
                        }}
                      >
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Box>
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default About; 