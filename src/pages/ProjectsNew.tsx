import { Container, Typography, Box, Card, CardContent, Chip, Divider, Dialog, DialogTitle, DialogContent, IconButton, useTheme, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react';

const projects = [
  {
    company: 'Future Pulse',
    period: 'Nov 2023 – Present',
    location: 'Bengaluru, India (Hybrid)',
    client: 'PLUS ES Australia',
    role: 'Salesforce Developer',
    projects: [
      {
        title: 'Broker Portal',
        period: 'Sep 2024 – Present',
        description: 'Redesigned an Aura-based Community Portal into LWC, improving UI performance and page load speed by 50%.',
        businessNeed: 'The existing portal was slow and outdated, causing poor user experience and inefficiencies in broker operations.',
        solution: 'Implemented modern LWC components, integrated Box & Webmerge APIs for document management, and enhanced security measures.',
        impact: '50% improvement in page load speed, streamlined document management, and enhanced security compliance.',
        technologies: ['LWC', 'Box API', 'Webmerge API', 'Security', 'Automation'],
        responsibilities: [
          'Redesigned Aura-based Community Portal into LWC',
          'Integrated Box & Webmerge APIs for document storage',
          'Implemented role-based access and security enhancements',
          'Created Contract Expiry Notifications and Renewal Process',
          'Reduced order creation time through automation'
        ]
      },
      {
        title: 'AI-Powered Resume Matching',
        period: 'Oct 2024 – Nov 2024',
        description: 'Developed an AI-driven resume selection tool to streamline candidate shortlisting.',
        businessNeed: 'Manual resume screening was time-consuming and inconsistent in candidate selection.',
        solution: 'Leveraged Einstein AI and Prompt Builder to create an intelligent matching system.',
        impact: 'Improved recruitment efficiency and candidate matching accuracy.',
        technologies: ['Einstein AI', 'Prompt Builder', 'Machine Learning', 'Automation'],
        responsibilities: [
          'Developed AI-driven resume selection tool',
          'Utilized Einstein AI and Prompt Builder',
          'Implemented advanced machine learning techniques',
          'Automated resume parsing and ranking',
          'Enhanced matching accuracy'
        ]
      },
      {
        title: 'Dreamforce Project',
        period: 'Nov 2023 – Aug 2024',
        description: 'Converted legacy automation into declarative Flows, ensuring scalability and reducing maintenance costs.',
        businessNeed: 'Complex legacy automation was difficult to maintain and scale.',
        solution: 'Modernized automation using Flows and implemented comprehensive service order management.',
        impact: '40% reduction in maintenance costs and improved system scalability.',
        technologies: ['Flows', 'Sales Cloud', 'Service Cloud', 'Automation', 'Web-to-Case'],
        responsibilities: [
          'Converted legacy automation to declarative Flows',
          'Optimized automation logic across Sales and Service Clouds',
          'Developed Web-to-Case functionality',
          'Configured custom email templates',
          'Designed Service Order Management system',
          'Integrated approval processes and validation rules',
          'Conducted UAT and performance testing'
        ]
      }
    ]
  },
  {
    company: 'Contrivers',
    period: 'Sep 2022 – Nov 2023',
    location: 'Bengaluru, India (Remote)',
    client: 'PLUS ES Australia',
    role: 'Salesforce Developer',
    projects: [
      {
        title: 'Dreamforce Project',
        period: 'Oct 2023 – Nov 2023',
        description: 'Analyzed and documented existing automation processes for optimization.',
        businessNeed: 'Need to understand and improve existing automation processes.',
        solution: 'Conducted comprehensive analysis and implemented streamlined automation strategies.',
        impact: 'Improved process documentation and automation efficiency.',
        technologies: ['Apex', 'Workflows', 'Process Builder', 'Bitly', 'SAP'],
        responsibilities: [
          'Analyzed existing Apex Triggers, Workflows, and Process Builders',
          'Documented complete business processes',
          'Collaborated with stakeholders for requirements',
          'Integrated Bitly for SMS notifications',
          'Integrated SAP for metadata updates'
        ]
      },
      {
        title: 'ARENA',
        period: 'Aug 2023 - Sep 2023',
        description: 'Developed dynamic electricity load control for 20,000+ smart meters in South Australia.',
        businessNeed: 'Manual load control was inefficient for large-scale operations.',
        solution: 'Built real-time event tracking and automated load control system.',
        impact: 'Improved load control efficiency and reduced operational errors.',
        technologies: ['Real-time Processing', 'Dashboards', 'Error Handling'],
        responsibilities: [
          'Developed dynamic electricity load control',
          'Built real-time event tracking dashboards',
          'Implemented error-handling mechanisms',
          'Managed load requests for 20,000+ smart meters'
        ]
      },
      {
        title: 'BPE Reports',
        period: 'Jul 2023',
        description: 'Designed and deployed custom reports for business decision-making.',
        businessNeed: 'Need for better data presentation and accessibility.',
        solution: 'Created custom reports with dynamic filtering and sorting.',
        impact: 'Improved data accessibility and business decision-making.',
        technologies: ['LWC', 'Reports', 'Data Visualization'],
        responsibilities: [
          'Designed and deployed custom reports',
          'Optimized data presentation',
          'Developed dynamic filtering and sorting',
          'Enhanced report accessibility'
        ]
      },
      {
        title: 'Retailer Portal',
        period: 'May 2023 – June 2023',
        description: 'Built custom Lightning Web Components for a Retailer Community Portal.',
        businessNeed: 'Need for improved UI/UX and platform engagement.',
        solution: 'Developed modern LWC components and integrated with external systems.',
        impact: '40% increase in platform engagement and improved user experience.',
        technologies: ['LWC', 'Community Portal', 'Bitly', 'SAP', 'Dashboards'],
        responsibilities: [
          'Built custom Lightning Web Components',
          'Integrated Bitly and SAP for system functionality',
          'Created Newsfeed & Service Order dashboards',
          'Implemented real-time tracking',
          'Configured OWD, Sharing Rules, and Profiles'
        ]
      },
      {
        title: 'BPE Aborts',
        period: 'Feb 2023 – Apr 2023',
        description: 'Integrated abort reasons and technician comments from SAP S/4HANA.',
        businessNeed: 'Need for better visibility of service order abort reasons.',
        solution: 'Integrated SAP data and enhanced Retailer Portal functionality.',
        impact: 'Improved visibility and tracking of service order aborts.',
        technologies: ['SAP Integration', 'Custom Objects', 'Security'],
        responsibilities: [
          'Integrated SAP S/4HANA data',
          'Built custom objects',
          'Implemented permission-based access',
          'Enhanced Retailer Portal functionality'
        ]
      },
      {
        title: 'Partner Portal',
        period: 'Sep 2022 – Jan 2023',
        description: 'Built a self-service Community Portal with automation.',
        businessNeed: 'Need for efficient partner management and self-service capabilities.',
        solution: 'Created automated portal with dynamic forms and case tracking.',
        impact: 'Improved partner engagement and case resolution efficiency.',
        technologies: ['Community Portal', 'Flows', 'Platform Events', 'Automation'],
        responsibilities: [
          'Built self-service Community Portal',
          'Implemented automation using Flows',
          'Created dynamic forms for request creation',
          'Configured user management and case tracking',
          'Implemented email automation'
        ]
      }
    ]
  }
];

function ProjectsNew() {
  const [selectedProject, setSelectedProject] = useState<{
    project: typeof projects[0]['projects'][0];
    company: typeof projects[0];
  } | null>(null);
  const theme = useTheme();

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Projects
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          Detailed showcase of my Salesforce development work
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          gap: 1,
          mb: 4,
          p: 2,
          bgcolor: 'primary.light',
          borderRadius: 2,
          color: 'primary.contrastText'
        }}>
          <InfoIcon />
          <Typography variant="body1">
            Click on any project card to view detailed information
          </Typography>
        </Box>

        {projects.map((company, companyIndex) => (
          <Box key={companyIndex} sx={{ mb: 8 }}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2, 
              mb: 4,
              p: 2,
              bgcolor: 'primary.light',
              borderRadius: 2
            }}>
              <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600 }}>
                  {company.company}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {company.period} | {company.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {company.role} | Client: {company.client}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 4,
              width: '100%'
            }}>
              {company.projects.map((project, projectIndex) => (
                <Tooltip 
                  key={projectIndex}
                  title="Click to view details"
                  arrow
                  placement="top"
                >
                  <Card 
                    onClick={() => setSelectedProject({ project, company })}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 6,
                        '&::after': {
                          opacity: 1
                        }
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <WorkIcon sx={{ color: 'primary.main' }} />
                        <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                          {project.title}
                        </Typography>
                      </Box>
                      
                      <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                        {project.period}
                      </Typography>

                      <Typography variant="body1" paragraph>
                        {project.description}
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {project.technologies.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'primary.light',
                              color: 'primary.contrastText',
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Tooltip>
              ))}
            </Box>
          </Box>
        ))}

        <Dialog
          open={!!selectedProject}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 2,
              boxShadow: 24,
              maxHeight: '90vh',
            }
          }}
        >
          {selectedProject && (
            <>
              <DialogTitle sx={{ 
                m: 0, 
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'primary.light',
                color: 'primary.contrastText'
              }}>
                <Box>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
                    {selectedProject.project.title}
                  </Typography>
                  <Typography variant="subtitle1" color="inherit">
                    {selectedProject.company.company}
                  </Typography>
                </Box>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    color: 'primary.contrastText',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers sx={{ p: 3 }}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                    {selectedProject.project.period}
                  </Typography>

                  <Typography variant="body1" paragraph>
                    {selectedProject.project.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Business Need
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedProject.project.businessNeed}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Solution
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedProject.project.solution}
                  </Typography>

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Impact
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedProject.project.impact}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Technologies Used
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {selectedProject.project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: 'primary.light',
                          color: 'primary.contrastText',
                        }}
                      />
                    ))}
                  </Box>

                  <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    Role & Responsibilities
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mb: 0 }}>
                    {selectedProject.project.responsibilities.map((responsibility, index) => (
                      <Typography key={index} component="li" variant="body2" color="text.secondary">
                        {responsibility}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </motion.div>
    </Container>
  );
}

export default ProjectsNew; 