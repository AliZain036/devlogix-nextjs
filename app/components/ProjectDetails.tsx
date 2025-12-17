'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  Code,
  Database,
  Globe,
  Smartphone,
  Palette,
  Image,
  Target,
  Settings,
  Rocket
} from 'lucide-react'

interface ProjectDetailsProps {
  id: string
}

const ProjectDetails = ({ id }: ProjectDetailsProps) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  // Project data - in a real app, this would come from an API
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.',
      fullDescription: 'A comprehensive e-commerce solution that revolutionizes online shopping experiences. Built with cutting-edge technologies, this platform offers seamless user experiences, robust payment processing, and powerful analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop',
             technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker'],
       screenshots: [
         'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
       ],
       features: [
         'Real-time inventory management',
         'Advanced payment processing',
         'Analytics dashboard',
         'Multi-vendor support',
         'Mobile responsive design',
         'SEO optimization'
       ],
      challenges: [
        'Scalability for high traffic',
        'Payment security compliance',
        'Real-time data synchronization',
        'Mobile performance optimization'
      ],
      solutions: [
        'Implemented microservices architecture',
        'Used Stripe for secure payments',
        'Redis for caching and sessions',
        'Progressive Web App features'
      ],
      stats: {
        duration: '6 months',
        team: '8 developers',
        users: '50,000+',
        performance: '99.9% uptime'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'TechCorp Inc.',
      industry: 'E-commerce',
             budget: '$150,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Discovery & Planning',
           description: 'Conducted thorough market research and user interviews to understand the target audience and business requirements.',
           icon: <Target className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 2,
           title: 'UI/UX Design',
           description: 'Created wireframes and high-fidelity mockups focusing on user experience and conversion optimization.',
           icon: <Palette className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 3,
           title: 'Frontend Development',
           description: 'Built responsive React components with modern state management and real-time updates.',
           icon: <Code className="w-6 h-6" />,
           duration: '6 weeks'
         },
         {
           step: 4,
           title: 'Backend Architecture',
           description: 'Developed scalable microservices with secure payment processing and real-time inventory management.',
           icon: <Database className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 5,
           title: 'Testing & Optimization',
           description: 'Comprehensive testing across devices and performance optimization for high traffic handling.',
           icon: <Settings className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 6,
           title: 'Deployment & Launch',
           description: 'Production deployment with monitoring, analytics, and continuous integration setup.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '1 week'
         }
       ]
     },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      description: 'Cross-platform mobile app for team collaboration and project management with real-time updates.',
      fullDescription: 'A feature-rich task management application designed for modern teams. This cross-platform solution enables seamless collaboration, real-time updates, and comprehensive project tracking across all devices.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1920&h=1080&fit=crop',
             technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript', 'Expo'],
       screenshots: [
         'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
       ],
       features: [
         'Real-time collaboration',
         'Task assignment & tracking',
         'File sharing & storage',
         'Progress analytics',
         'Push notifications',
         'Offline functionality'
       ],
      challenges: [
        'Cross-platform compatibility',
        'Real-time synchronization',
        'Offline data handling',
        'Push notification delivery'
      ],
      solutions: [
        'React Native for cross-platform',
        'Firebase for real-time updates',
        'Local storage for offline mode',
        'Expo for push notifications'
      ],
      stats: {
        duration: '4 months',
        team: '5 developers',
        users: '25,000+',
        performance: '4.8/5 App Store rating'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'StartupXYZ',
      industry: 'Productivity',
             budget: '$80,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Requirements Analysis',
           description: 'Analyzed team collaboration needs and defined core features for cross-platform compatibility.',
           icon: <Target className="w-6 h-6" />,
           duration: '1 week'
         },
         {
           step: 2,
           title: 'Mobile-First Design',
           description: 'Designed intuitive mobile interfaces with focus on touch interactions and offline functionality.',
           icon: <Smartphone className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 3,
           title: 'React Native Development',
           description: 'Built cross-platform mobile app with real-time synchronization and push notifications.',
           icon: <Code className="w-6 h-6" />,
           duration: '6 weeks'
         },
         {
           step: 4,
           title: 'Backend Integration',
           description: 'Integrated Firebase for real-time data, authentication, and cloud storage solutions.',
           icon: <Database className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 5,
           title: 'Testing & Optimization',
           description: 'Cross-platform testing and performance optimization for smooth user experience.',
           icon: <Settings className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 6,
           title: 'App Store Launch',
           description: 'App store submission, beta testing, and production deployment with analytics.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '1 week'
         }
       ]
     },
    {
      id: 3,
      title: 'Banking Dashboard',
      category: 'design',
      description: 'Modern banking interface with intuitive design, real-time data visualization, and secure authentication.',
      fullDescription: 'A sophisticated banking dashboard that transforms how financial institutions interact with their customers. Featuring intuitive design, real-time data visualization, and enterprise-grade security.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop',
             technologies: ['Figma', 'React', 'TypeScript', 'D3.js', 'Material-UI', 'Chart.js'],
       screenshots: [
         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
       ],
       features: [
         'Interactive data visualization',
         'Real-time account monitoring',
         'Secure authentication',
         'Transaction history',
         'Investment portfolio tracking',
         'Mobile responsive design'
       ],
      challenges: [
        'Complex data visualization',
        'Security compliance',
        'Real-time data updates',
        'Accessibility requirements'
      ],
      solutions: [
        'D3.js for advanced charts',
        'OAuth 2.0 for security',
        'WebSocket for real-time data',
        'WCAG 2.1 compliance'
      ],
      stats: {
        duration: '5 months',
        team: '6 developers',
        users: '100,000+',
        performance: '99.5% uptime'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'GlobalBank',
      industry: 'Finance',
             budget: '$200,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Financial Analysis',
           description: 'Analyzed banking workflows and compliance requirements for secure financial data handling.',
           icon: <Target className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 2,
           title: 'UX Research & Design',
           description: 'Conducted user research and designed intuitive banking interfaces with accessibility focus.',
           icon: <Palette className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 3,
           title: 'Frontend Development',
           description: 'Built React dashboard with D3.js charts and real-time data visualization components.',
           icon: <Code className="w-6 h-6" />,
           duration: '6 weeks'
         },
         {
           step: 4,
           title: 'Security Implementation',
           description: 'Implemented OAuth 2.0, encryption, and compliance measures for financial data.',
           icon: <Database className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 5,
           title: 'Testing & Compliance',
           description: 'Security testing, accessibility audits, and regulatory compliance verification.',
           icon: <Settings className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 6,
           title: 'Production Deployment',
           description: 'Secure deployment with monitoring, backup systems, and disaster recovery.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '2 weeks'
         }
       ]
     },
    {
      id: 4,
      title: 'API Gateway',
      category: 'backend',
      description: 'Scalable API gateway with rate limiting, authentication, and microservices architecture.',
      fullDescription: 'A high-performance API gateway designed for enterprise-scale applications. This robust solution provides secure, scalable, and efficient API management with advanced monitoring and analytics.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop',
             technologies: ['Node.js', 'Redis', 'Docker', 'Kubernetes', 'Nginx', 'JWT'],
       screenshots: [
         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
       ],
       features: [
         'Rate limiting & throttling',
         'Authentication & authorization',
         'Request/response transformation',
         'API versioning',
         'Real-time monitoring',
         'Load balancing'
       ],
      challenges: [
        'High traffic handling',
        'Security vulnerabilities',
        'Service discovery',
        'Performance optimization'
      ],
      solutions: [
        'Horizontal scaling with Kubernetes',
        'OAuth 2.0 & JWT implementation',
        'Service mesh architecture',
        'Redis caching layer'
      ],
      stats: {
        duration: '3 months',
        team: '4 developers',
        requests: '1M+ daily',
        performance: '99.99% uptime'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'TechEnterprise',
      industry: 'Technology',
             budget: '$120,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Architecture Planning',
           description: 'Designed scalable microservices architecture with API gateway pattern for enterprise needs.',
           icon: <Target className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 2,
           title: 'Security Design',
           description: 'Implemented comprehensive security measures including OAuth 2.0 and JWT authentication.',
           icon: <Settings className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 3,
           title: 'Backend Development',
           description: 'Built Node.js microservices with Redis caching and Docker containerization.',
           icon: <Database className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 4,
           title: 'Infrastructure Setup',
           description: 'Deployed on Kubernetes with load balancing and auto-scaling capabilities.',
           icon: <Code className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 5,
           title: 'Testing & Monitoring',
           description: 'Comprehensive API testing and real-time monitoring implementation.',
           icon: <Settings className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 6,
           title: 'Production Deployment',
           description: 'Secure production deployment with monitoring, logging, and backup systems.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '1 week'
         }
       ]
     },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'web',
      description: 'Full-stack social media platform with real-time messaging, content sharing, and user profiles.',
      fullDescription: 'A comprehensive social media platform that connects people through meaningful interactions. Built with modern technologies, it offers real-time messaging, content sharing, and rich user experiences.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop',
             technologies: ['React', 'GraphQL', 'PostgreSQL', 'Socket.io', 'AWS', 'Redis'],
       screenshots: [
         'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop'
       ],
       features: [
         'Real-time messaging',
         'Content sharing & discovery',
         'User profiles & connections',
         'News feed algorithm',
         'Media upload & storage',
         'Privacy controls'
       ],
      challenges: [
        'Real-time data synchronization',
        'Content moderation',
        'Scalability challenges',
        'Data privacy compliance'
      ],
      solutions: [
        'WebSocket for real-time features',
        'AI-powered content filtering',
        'Microservices architecture',
        'GDPR compliance implementation'
      ],
      stats: {
        duration: '8 months',
        team: '12 developers',
        users: '500,000+',
        performance: '99.8% uptime'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'SocialConnect',
      industry: 'Social Media',
             budget: '$300,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Social Research',
           description: 'Analyzed user behavior patterns and social interaction requirements for modern platforms.',
           icon: <Target className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 2,
           title: 'UI/UX Design',
           description: 'Designed intuitive social interfaces with focus on content discovery and user engagement.',
           icon: <Palette className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 3,
           title: 'Frontend Development',
           description: 'Built React components with GraphQL integration and real-time messaging features.',
           icon: <Code className="w-6 h-6" />,
           duration: '8 weeks'
         },
         {
           step: 4,
           title: 'Backend Services',
           description: 'Developed PostgreSQL database with Socket.io for real-time communication.',
           icon: <Database className="w-6 h-6" />,
           duration: '6 weeks'
         },
         {
           step: 5,
           title: 'Content Moderation',
           description: 'Implemented AI-powered content filtering and privacy controls for user safety.',
           icon: <Settings className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 6,
           title: 'Platform Launch',
           description: 'Scalable deployment with AWS infrastructure and comprehensive analytics.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '2 weeks'
         }
       ]
     },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Mobile fitness app with workout tracking, nutrition planning, and progress analytics.',
      fullDescription: 'A comprehensive fitness tracking application that empowers users to achieve their health goals. Features advanced workout tracking, nutrition planning, and detailed progress analytics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=600&fit=crop',
      heroImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop',
             technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'ML Kit'],
       screenshots: [
         'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
         'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
       ],
       features: [
         'Workout tracking & planning',
         'Nutrition & meal planning',
         'Progress analytics',
         'Social features',
         'Wearable integration',
         'Personalized recommendations'
       ],
      challenges: [
        'Health data integration',
        'Cross-platform compatibility',
        'Battery optimization',
        'Data accuracy'
      ],
      solutions: [
        'HealthKit & Google Fit APIs',
        'Flutter for cross-platform',
        'Background processing optimization',
        'Machine learning for accuracy'
      ],
      stats: {
        duration: '7 months',
        team: '6 developers',
        users: '200,000+',
        performance: '4.9/5 App Store rating'
      },
      liveUrl: '#',
      githubUrl: '#',
      client: 'FitLife',
      industry: 'Health & Fitness',
             budget: '$180,000',
       developmentSteps: [
         {
           step: 1,
           title: 'Health Research',
           description: 'Analyzed fitness tracking requirements and health data integration possibilities.',
           icon: <Target className="w-6 h-6" />,
           duration: '2 weeks'
         },
         {
           step: 2,
           title: 'Mobile Design',
           description: 'Designed intuitive mobile interfaces with focus on workout tracking and progress visualization.',
           icon: <Smartphone className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 3,
           title: 'Flutter Development',
           description: 'Built cross-platform mobile app with health data integration and personalized features.',
           icon: <Code className="w-6 h-6" />,
           duration: '8 weeks'
         },
         {
           step: 4,
           title: 'Health Integration',
           description: 'Integrated HealthKit and Google Fit APIs for comprehensive health data tracking.',
           icon: <Database className="w-6 h-6" />,
           duration: '4 weeks'
         },
         {
           step: 5,
           title: 'Testing & Optimization',
           description: 'Cross-platform testing and battery optimization for smooth user experience.',
           icon: <Settings className="w-6 h-6" />,
           duration: '3 weeks'
         },
         {
           step: 6,
           title: 'App Store Launch',
           description: 'App store submission with beta testing and production deployment.',
           icon: <Rocket className="w-6 h-6" />,
           duration: '2 weeks'
         }
       ]
     }
   ]

  const project = projects.find(p => p.id === parseInt(id || '1'))

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold gradient-text">Loading Project...</h2>
        </motion.div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <button
            onClick={() => router.push('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Globe className="w-5 h-5" />
      case 'mobile': return <Smartphone className="w-5 h-5" />
      case 'design': return <Palette className="w-5 h-5" />
      case 'backend': return <Database className="w-5 h-5" />
      default: return <Code className="w-5 h-5" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section with Background */}
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 p-6"
        >
          <button
            onClick={() => router.push('/')}
            className="flex items-center space-x-2 text-white hover:text-primary-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </button>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-white max-w-4xl mx-auto px-6"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              {getCategoryIcon(project.category)}
              <span className="text-primary-300 font-medium">{project.category.toUpperCase()}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Live Demo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                <Github className="w-5 h-5 mr-2" />
                View Code
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

            {/* Project Details */}
      <div className="container-custom py-20">
        {/* Project Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 mb-12 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{project.stats.duration}</div>
              <div className="text-primary-200">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{project.stats.team}</div>
              <div className="text-primary-200">Team Size</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{project.stats.users}</div>
              <div className="text-primary-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{project.budget}</div>
              <div className="text-primary-200">Budget</div>
            </div>
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures quality delivery and successful project outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.developmentSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary-600">0{step.step}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-primary-600 font-medium">{step.duration}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Overview & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Project Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Client: <strong>{project.client}</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Industry: <strong>{project.industry}</strong></span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Performance: <strong>{project.stats.performance}</strong></span>
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="space-y-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Large Screenshots Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image className="w-8 h-8 text-primary-600" aria-label="Screenshots icon" />
              <h2 className="text-4xl font-bold">Project Screenshots</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the key interfaces and features that make this project stand out
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <img
                  src={screenshot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">Interface {index + 1}</h3>
                    <p className="text-gray-200">Click to view full size</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center space-x-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">!</span>
              </div>
              Challenges We Faced
            </h3>
            <ul className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{challenge}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              Solutions We Implemented
            </h3>
            <ul className="space-y-4">
              {project.solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Technologies & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-primary-100 text-primary-700 text-sm rounded-full font-medium hover:bg-primary-200 transition-colors duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-primary-100 mb-6">
              Let&apos;s create something amazing together. Get in touch to discuss your project requirements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-primary-600 font-semibold py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
