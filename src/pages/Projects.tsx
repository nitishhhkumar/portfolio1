import { Container, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import BusinessIcon from '@mui/icons-material/Business';
import CloudIcon from '@mui/icons-material/Cloud';
import CodeIcon from '@mui/icons-material/Code';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SecurityIcon from '@mui/icons-material/Security';
import ReportIcon from '@mui/icons-material/Assessment';
import PortalIcon from '@mui/icons-material/Web';

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
        description: 'Redesigned an Aura-based Community Portal into LWC, improving UI performance and page load speed by 50%. Integrated Box & Webmerge APIs for secure document storage and automated DMA creation. Implemented role-based access and security enhancements, ensuring compliance with industry standards. Implemented Contract Expiry Notifications and a Renewal Process, reducing order creation time.',
        technologies: ['LWC', 'Box API', 'Webmerge API', 'Security', 'Automation'],
        icon: <PortalIcon sx={{ fontSize: 40 }} />,
        role: 'As the lead developer, I designed and implemented the LWC components, integrated external APIs, and implemented security measures. I also created automated processes for contract management and notifications.'
      },
      {
        title: 'AI-Powered Resume Matching',
        period: 'Oct 2024 – Nov 2024',
        description: 'Developed an AI-driven resume selection tool to streamline candidate shortlisting, improving efficiency in the recruitment process. Utilized Einstein AI and Prompt Builder to enhance resume matching accuracy through advanced machine learning techniques. Automated resume parsing and ranking based on job requirements.',
        technologies: ['Einstein AI', 'Prompt Builder', 'Machine Learning', 'Automation'],
        icon: <CloudIcon sx={{ fontSize: 40 }} />,
        role: 'Led the development of the AI-powered matching system, implemented Einstein AI integration, and created automated processes for resume parsing and ranking.'
      },
      {
        title: 'Dreamforce Project',
        period: 'Nov 2023 – Aug 2024',
        description: 'Converted legacy automation into declarative Flows, ensuring scalability and reducing maintenance costs by 40%. Optimized automation logic across Sales and Service Clouds. Developed Web-to-Case functionality and custom email templates. Designed and implemented a Service Order Management system with approval processes and validation rules.',
        technologies: ['Flows', 'Sales Cloud', 'Service Cloud', 'Automation', 'Web-to-Case'],
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        role: 'Managed the migration from legacy automation to Flows, implemented Web-to-Case functionality, and developed the Service Order Management system with custom approval processes.'
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
        description: 'Conducted in-depth analysis of existing Apex Triggers, Workflows, and Process Builders. Collaborated with stakeholders to gather requirements and streamline automation strategies. Integrated Bitly for SMS notifications and SAP for metadata updates.',
        technologies: ['Apex', 'Workflows', 'Process Builder', 'Bitly', 'SAP'],
        icon: <CodeIcon sx={{ fontSize: 40 }} />,
        role: 'Analyzed existing automation, designed new solutions, and implemented integrations with Bitly and SAP systems.'
      },
      {
        title: 'ARENA',
        period: 'Aug 2023 - Sep 2023',
        description: 'Developed dynamic electricity load control for 20,000+ smart meters in South Australia. Built real-time event tracking dashboards and error-handling mechanisms for load requests.',
        technologies: ['Real-time Processing', 'Dashboards', 'Error Handling'],
        icon: <DashboardIcon sx={{ fontSize: 40 }} />,
        role: 'Developed the load control system, created real-time dashboards, and implemented error handling mechanisms for the smart meter system.'
      },
      {
        title: 'BPE Reports',
        period: 'Jul 2023',
        description: 'Designed and deployed custom reports using LWC, optimizing data presentation and accessibility for business decision-making. Developed dynamic filtering and sorting functionalities for reports.',
        technologies: ['LWC', 'Reports', 'Data Visualization'],
        icon: <ReportIcon sx={{ fontSize: 40 }} />,
        role: 'Created custom LWC components for reports, implemented dynamic filtering, and optimized data presentation for business users.'
      },
      {
        title: 'Retailer Portal',
        period: 'May 2023 – June 2023',
        description: 'Built custom Lightning Web Components for a Retailer Community Portal, improving UI/UX and increasing platform engagement by 40%. Integrated Bitly and SAP for enhanced system functionality. Built Newsfeed & Service Order dashboards with real-time tracking.',
        technologies: ['LWC', 'Community Portal', 'Bitly', 'SAP', 'Dashboards'],
        icon: <PortalIcon sx={{ fontSize: 40 }} />,
        role: 'Developed LWC components for the portal, integrated external systems, and created real-time dashboards for service order tracking.'
      },
      {
        title: 'BPE Aborts',
        period: 'Feb 2023 – Apr 2023',
        description: 'Integrated abort reasons and technician comments from SAP S/4HANA into Salesforce. Built custom objects and permission-based access for improved visibility. Enhanced Retailer Portal to display Service Order Abort reasons.',
        technologies: ['SAP Integration', 'Custom Objects', 'Security'],
        icon: <SecurityIcon sx={{ fontSize: 40 }} />,
        role: 'Implemented SAP integration, created custom objects, and enhanced the Retailer Portal with abort reason functionality.'
      },
      {
        title: 'Partner Portal',
        period: 'Sep 2022 – Jan 2023',
        description: 'Built a self-service Community Portal with automation using Flows, Approval Processes, and Platform Events. Implemented dynamic forms for request creation. Configured ASP and Partner Portal user management, case tracking, and email automation.',
        technologies: ['Community Portal', 'Flows', 'Platform Events', 'Automation'],
        icon: <PortalIcon sx={{ fontSize: 40 }} />,
        role: 'Developed the Community Portal, implemented automation processes, and configured user management and case tracking systems.'
      }
    ]
  }
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ fontWeight: 700, color: 'primary.main' }}>
          Experience & Projects
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph align="center" sx={{ mb: 6 }}>
          A showcase of my Salesforce development work
        </Typography>

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
                <Box key={projectIndex}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box
                        sx={{
                          height: 200,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          bgcolor: 'primary.light',
                          color: 'primary.main',
                        }}
                      >
                        {project.icon}
                      </Box>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <WorkIcon sx={{ color: 'primary.main' }} />
                          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
                            {project.title}
                          </Typography>
                        </Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 2 }}>
                          {project.period}
                        </Typography>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                            Project Description
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            {project.description}
                          </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                            Role & Contribution
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            {project.role}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}>
                            Technologies Used
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </motion.div>
    </Container>
  );
}

export default Projects; 