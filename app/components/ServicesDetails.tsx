'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  Play,
  Pause,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Zap,
  Target,
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Rocket,
  Award,
  TrendingUp,
  MessageCircle,
  Calendar,
  Cloud
} from 'lucide-react'

interface ServicesDetailsProps {
  service: string
}

const ServicesDetails = ({ service }: ServicesDetailsProps) => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const services = {
    'web-development': {
      title: 'Web Development',
      subtitle: 'Custom web applications that drive business growth',
      description: 'We create powerful, scalable web applications that transform your business ideas into digital reality. From e-commerce platforms to enterprise solutions, we deliver cutting-edge web experiences.',
      icon: <Globe className="w-8 h-8" />,
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'We analyze your business requirements, target audience, and goals to create a comprehensive project roadmap.',
          duration: '1-2 weeks',
          icon: <Target className="w-6 h-6" />,
          details: [
            'Business requirement analysis',
            'User persona development',
            'Technical architecture planning',
            'Project timeline creation'
          ]
        },
        {
          title: 'UI/UX Design',
          description: 'Our designers create intuitive, beautiful interfaces that enhance user experience and drive conversions.',
          duration: '2-3 weeks',
          icon: <Palette className="w-6 h-6" />,
          details: [
            'Wireframing and prototyping',
            'Visual design creation',
            'User experience optimization',
            'Responsive design implementation'
          ]
        },
        {
          title: 'Frontend Development',
          description: 'We build responsive, fast-loading frontend applications using modern technologies and best practices.',
          duration: '4-6 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'React/Vue.js development',
            'Responsive implementation',
            'Performance optimization',
            'Cross-browser compatibility'
          ]
        },
        {
          title: 'Backend Development',
          description: 'Robust backend systems with secure APIs, database design, and scalable architecture.',
          duration: '3-5 weeks',
          icon: <Database className="w-6 h-6" />,
          details: [
            'API development',
            'Database design',
            'Security implementation',
            'Scalability planning'
          ]
        },
        {
          title: 'Testing & Quality Assurance',
          description: 'Comprehensive testing ensures your application is bug-free and performs optimally.',
          duration: '2-3 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'Unit and integration testing',
            'User acceptance testing',
            'Performance testing',
            'Security auditing'
          ]
        },
        {
          title: 'Deployment & Launch',
          description: 'Smooth deployment with monitoring, analytics, and ongoing support for your success.',
          duration: '1-2 weeks',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'Production deployment',
            'Performance monitoring',
            'Analytics setup',
            'Ongoing support'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'Award-Winning Quality',
          description: 'Our projects have won industry awards and recognition for excellence in design and development.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Proven Results',
          description: 'We\'ve helped 200+ businesses increase their online presence and achieve measurable growth.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: 'Fast Delivery',
          description: 'Average project completion time is 30% faster than industry standards without compromising quality.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Expert Team',
          description: 'Our team consists of certified developers with 5+ years of experience in modern technologies.'
        }
      ]
    },
    'mobile-development': {
      title: 'Mobile Development',
      subtitle: 'Native and cross-platform mobile applications',
      description: 'We build high-performance mobile applications that work seamlessly across iOS and Android platforms. From native apps to cross-platform solutions, we deliver mobile experiences that users love.',
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-600 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50',
      steps: [
        {
          title: 'Market Research',
          description: 'We analyze the mobile market, competitor apps, and user behavior to create winning strategies.',
          duration: '1 week',
          icon: <Target className="w-6 h-6" />,
          details: [
            'Competitor analysis',
            'User behavior research',
            'Market opportunity assessment',
            'Platform strategy planning'
          ]
        },
        {
          title: 'Mobile-First Design',
          description: 'Designing for mobile-first with touch interactions, gestures, and mobile UX best practices.',
          duration: '2-3 weeks',
          icon: <Palette className="w-6 h-6" />,
          details: [
            'Mobile wireframing',
            'Touch interaction design',
            'Platform-specific guidelines',
            'Offline functionality planning'
          ]
        },
        {
          title: 'Cross-Platform Development',
          description: 'Building with React Native or Flutter for efficient development across iOS and Android.',
          duration: '6-8 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'React Native/Flutter development',
            'Platform-specific optimization',
            'Native module integration',
            'Performance optimization'
          ]
        },
        {
          title: 'Backend Integration',
          description: 'Connecting mobile apps with robust backend services and third-party integrations.',
          duration: '3-4 weeks',
          icon: <Database className="w-6 h-6" />,
          details: [
            'API integration',
            'Push notification setup',
            'Data synchronization',
            'Offline data handling'
          ]
        },
        {
          title: 'Testing & Optimization',
          description: 'Comprehensive testing across devices and performance optimization for smooth user experience.',
          duration: '2-3 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'Device testing',
            'Performance optimization',
            'Battery optimization',
            'App store guidelines compliance'
          ]
        },
        {
          title: 'App Store Launch',
          description: 'Successful app store submission with beta testing and production deployment.',
          duration: '1-2 weeks',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'App store submission',
            'Beta testing coordination',
            'Production deployment',
            'Launch marketing support'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'App Store Success',
          description: 'Our apps have achieved 4.8+ star ratings and millions of downloads across app stores.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Cross-Platform Expertise',
          description: 'We specialize in React Native and Flutter for efficient cross-platform development.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: 'Fast Development',
          description: 'Cross-platform development reduces time-to-market by 40% compared to native development.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Mobile Experts',
          description: 'Our team has 8+ years of mobile development experience across all major platforms.'
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      subtitle: 'User-centered design that drives engagement',
      description: 'We create intuitive, beautiful user interfaces that enhance user experience and drive business results. Our designs are backed by research and optimized for conversions.',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      steps: [
        {
          title: 'User Research',
          description: 'Understanding your users through interviews, surveys, and behavioral analysis.',
          duration: '1-2 weeks',
          icon: <Users className="w-6 h-6" />,
          details: [
            'User interviews',
            'Behavioral analysis',
            'Persona development',
            'User journey mapping'
          ]
        },
        {
          title: 'Information Architecture',
          description: 'Organizing content and functionality in a logical, user-friendly structure.',
          duration: '1 week',
          icon: <Target className="w-6 h-6" />,
          details: [
            'Site map creation',
            'Navigation structure',
            'Content organization',
            'User flow design'
          ]
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'Creating low and high-fidelity prototypes to test and refine user experiences.',
          duration: '2-3 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'Low-fidelity wireframes',
            'Interactive prototypes',
            'User testing',
            'Iterative refinement'
          ]
        },
        {
          title: 'Visual Design',
          description: 'Creating beautiful, consistent visual designs that align with your brand.',
          duration: '3-4 weeks',
          icon: <Palette className="w-6 h-6" />,
          details: [
            'Brand integration',
            'Visual hierarchy',
            'Color and typography',
            'Component design system'
          ]
        },
        {
          title: 'Usability Testing',
          description: 'Testing designs with real users to identify and fix usability issues.',
          duration: '1-2 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'User testing sessions',
            'Usability analysis',
            'Design iteration',
            'Accessibility audit'
          ]
        },
        {
          title: 'Design Handoff',
          description: 'Comprehensive design documentation and developer handoff for seamless implementation.',
          duration: '1 week',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'Design specifications',
            'Asset preparation',
            'Developer collaboration',
            'Implementation support'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'Design Awards',
          description: 'Our designs have won international awards and recognition for creativity and usability.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Conversion Focused',
          description: 'Our designs have increased conversion rates by an average of 45% for our clients.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: 'Research-Driven',
          description: 'Every design decision is backed by user research and data analysis.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'User-Centered',
          description: 'We prioritize user needs and create experiences that users love to interact with.'
        }
      ]
    },
    'backend-development': {
      title: 'Backend Development',
      subtitle: 'Robust server-side solutions with scalable architecture',
      description: 'We build powerful backend systems that handle complex business logic, data processing, and API integrations. Our scalable architecture ensures your applications can grow with your business.',
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-600 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      steps: [
        {
          title: 'Architecture Planning',
          description: 'Designing scalable backend architecture with proper database design and API structure.',
          duration: '1-2 weeks',
          icon: <Target className="w-6 h-6" />,
          details: [
            'System architecture design',
            'Database schema planning',
            'API structure definition',
            'Scalability planning'
          ]
        },
        {
          title: 'Database Design',
          description: 'Creating efficient database schemas with proper indexing and relationships.',
          duration: '1-2 weeks',
          icon: <Database className="w-6 h-6" />,
          details: [
            'Database schema design',
            'Indexing strategy',
            'Data relationships',
            'Performance optimization'
          ]
        },
        {
          title: 'API Development',
          description: 'Building RESTful APIs and GraphQL endpoints with comprehensive documentation.',
          duration: '3-4 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'REST API development',
            'GraphQL implementation',
            'API documentation',
            'Authentication setup'
          ]
        },
        {
          title: 'Business Logic',
          description: 'Implementing complex business rules and data processing algorithms.',
          duration: '2-3 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'Business logic implementation',
            'Data processing',
            'Algorithm optimization',
            'Error handling'
          ]
        },
        {
          title: 'Security Implementation',
          description: 'Implementing comprehensive security measures and data protection.',
          duration: '2-3 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'Authentication & authorization',
            'Data encryption',
            'Security audits',
            'Compliance measures'
          ]
        },
        {
          title: 'Deployment & Monitoring',
          description: 'Production deployment with monitoring, logging, and performance tracking.',
          duration: '1-2 weeks',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'Production deployment',
            'Monitoring setup',
            'Logging implementation',
            'Performance tracking'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'Scalable Architecture',
          description: 'Our backend systems handle millions of requests with 99.9% uptime.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Performance Optimized',
          description: 'We optimize for speed and efficiency, reducing response times by 60%.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: 'Security First',
          description: 'Enterprise-grade security with SOC 2 compliance and regular audits.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Expert Developers',
          description: 'Our backend team has 10+ years of experience in distributed systems.'
        }
      ]
    },
    'cloud-solutions': {
      title: 'Cloud Solutions',
      subtitle: 'Scalable cloud infrastructure and deployment solutions',
      description: 'We help businesses leverage the power of cloud computing with AWS, Azure, and Google Cloud. From infrastructure setup to DevOps automation, we ensure your applications run smoothly in the cloud.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50',
      steps: [
        {
          title: 'Cloud Strategy',
          description: 'Analyzing requirements and choosing the right cloud platform and services.',
          duration: '1 week',
          icon: <Target className="w-6 h-6" />,
          details: [
            'Cloud platform selection',
            'Service architecture planning',
            'Cost optimization strategy',
            'Migration planning'
          ]
        },
        {
          title: 'Infrastructure Setup',
          description: 'Setting up cloud infrastructure with proper networking and security.',
          duration: '2-3 weeks',
          icon: <Database className="w-6 h-6" />,
          details: [
            'VPC and networking',
            'Security groups setup',
            'Load balancer configuration',
            'Auto-scaling setup'
          ]
        },
        {
          title: 'Application Deployment',
          description: 'Deploying applications with CI/CD pipelines and container orchestration.',
          duration: '2-3 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'Docker containerization',
            'Kubernetes deployment',
            'CI/CD pipeline setup',
            'Monitoring integration'
          ]
        },
        {
          title: 'DevOps Automation',
          description: 'Implementing automated deployment, testing, and monitoring processes.',
          duration: '2-3 weeks',
          icon: <Zap className="w-6 h-6" />,
          details: [
            'Automated testing',
            'Deployment automation',
            'Monitoring setup',
            'Alert configuration'
          ]
        },
        {
          title: 'Security & Compliance',
          description: 'Implementing cloud security best practices and compliance measures.',
          duration: '1-2 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'IAM configuration',
            'Encryption setup',
            'Compliance auditing',
            'Security monitoring'
          ]
        },
        {
          title: 'Optimization & Scaling',
          description: 'Performance optimization and auto-scaling configuration for growth.',
          duration: '1-2 weeks',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'Performance optimization',
            'Auto-scaling configuration',
            'Cost optimization',
            'Disaster recovery'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'Cloud Certified',
          description: 'Our team holds AWS, Azure, and GCP certifications with 5+ years experience.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Cost Optimized',
          description: 'We reduce cloud costs by 40% on average through smart architecture.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: '24/7 Monitoring',
          description: 'Proactive monitoring and automated alerting for maximum uptime.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'DevOps Experts',
          description: 'Specialized in CI/CD, Kubernetes, and infrastructure automation.'
        }
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      subtitle: 'Comprehensive security solutions to protect your digital assets',
      description: 'We provide end-to-end cybersecurity solutions including security audits, penetration testing, and compliance implementation. Protect your business with enterprise-grade security measures.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-600 to-pink-600',
      bgColor: 'from-red-50 to-pink-50',
      steps: [
        {
          title: 'Security Assessment',
          description: 'Comprehensive security audit to identify vulnerabilities and risks.',
          duration: '1-2 weeks',
          icon: <Target className="w-6 h-6" />,
          details: [
            'Vulnerability assessment',
            'Risk analysis',
            'Security audit',
            'Compliance review'
          ]
        },
        {
          title: 'Penetration Testing',
          description: 'Simulated attacks to identify and fix security vulnerabilities.',
          duration: '2-3 weeks',
          icon: <Shield className="w-6 h-6" />,
          details: [
            'Network penetration testing',
            'Web application testing',
            'Social engineering tests',
            'Physical security assessment'
          ]
        },
        {
          title: 'Security Implementation',
          description: 'Implementing security measures and best practices across your systems.',
          duration: '3-4 weeks',
          icon: <Code className="w-6 h-6" />,
          details: [
            'Firewall configuration',
            'Intrusion detection setup',
            'Encryption implementation',
            'Access control setup'
          ]
        },
        {
          title: 'Compliance & Standards',
          description: 'Ensuring compliance with industry standards and regulations.',
          duration: '2-3 weeks',
          icon: <Database className="w-6 h-6" />,
          details: [
            'GDPR compliance',
            'SOC 2 implementation',
            'ISO 27001 standards',
            'PCI DSS compliance'
          ]
        },
        {
          title: 'Security Monitoring',
          description: '24/7 security monitoring and threat detection systems.',
          duration: '1-2 weeks',
          icon: <Zap className="w-6 h-6" />,
          details: [
            'SIEM implementation',
            'Threat detection',
            'Incident response',
            'Security analytics'
          ]
        },
        {
          title: 'Training & Documentation',
          description: 'Security awareness training and comprehensive documentation.',
          duration: '1 week',
          icon: <Rocket className="w-6 h-6" />,
          details: [
            'Security training',
            'Policy documentation',
            'Incident response plans',
            'Ongoing support'
          ]
        }
      ],
      whyUs: [
        {
          icon: <Award className="w-6 h-6" />,
          title: 'Certified Security',
          description: 'Our team holds CISSP, CEH, and other security certifications.'
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: 'Zero Breaches',
          description: '100% success rate in preventing security breaches for our clients.'
        },
        {
          icon: <Clock className="w-6 h-6" />,
          title: '24/7 Protection',
          description: 'Round-the-clock monitoring and immediate threat response.'
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: 'Security Experts',
          description: '15+ years of combined experience in cybersecurity and threat prevention.'
        }
      ]
    }
  }

  const currentService = services[service as keyof typeof services]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [service])

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % currentService.steps.length)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isPlaying, currentService.steps.length])

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
          <h2 className="text-2xl font-bold gradient-text">Loading Service...</h2>
        </motion.div>
      </div>
    )
  }

  if (!currentService) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={() => router.push('/')}
              className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Services</span>
            </button>

            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                {currentService.icon}
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">{currentService.title}</h1>
            <p className="text-xl md:text-2xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              {currentService.subtitle}
            </p>
            <p className="text-lg text-white text-opacity-80 max-w-4xl mx-auto">
              {currentService.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Interactive Process Steps */}
      <div className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Watch our systematic approach to delivering exceptional results
          </p>
        </motion.div>

        {/* Interactive Steps Player */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Player Controls */}
            <div className="bg-gray-900 p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center hover:from-primary-600 hover:to-secondary-600 transition-colors duration-200"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </motion.button>
                  <div>
                    <div className="text-sm text-gray-400">Step {currentStep + 1} of {currentService.steps.length}</div>
                    <div className="text-lg font-semibold text-white">{currentService.steps[currentStep].title}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="text-lg font-semibold text-white">{currentService.steps[currentStep].duration}</div>
                </div>
              </div>
            </div>

            {/* Current Step Display */}
            <div className="p-8">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center">
                      {currentService.steps[currentStep].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{currentService.steps[currentStep].title}</h3>
                      <p className="text-gray-400">{currentService.steps[currentStep].duration}</p>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {currentService.steps[currentStep].description}
                  </p>
                  <div className="space-y-3">
                    {currentService.steps[currentStep].details.map((detail, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl flex items-center justify-center border border-gray-700">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-6xl text-primary-400"
                    >
                      {currentService.steps[currentStep].icon}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Step Navigation */}
            <div className="bg-gray-900 p-6 border-t border-gray-700">
              <div className="flex justify-between items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </motion.button>

                <div className="flex space-x-2">
                  {currentService.steps.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentStep
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                          : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentStep(Math.min(currentService.steps.length - 1, currentStep + 1))}
                  disabled={currentStep === currentService.steps.length - 1}
                  className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don&apos;t just deliver projects, we deliver success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentService.whyUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and create something amazing together.
              Get a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Free Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/contact')}
                className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Call</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ServicesDetails
