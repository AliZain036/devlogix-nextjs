'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Cloud,
  Shield,
  Zap,
} from 'lucide-react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Services = () => {
  const router = useRouter()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight

      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const services = [
    {
      icon: Code2,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies like React, Node.js, and Python.',
      features: ['Responsive Design', 'SEO Optimized', 'Performance Focused'],
      path: 'web-development'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS/Android'],
      path: 'mobile-development'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping'],
      path: 'ui-ux-design'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Robust server-side solutions with scalable architecture and APIs.',
      features: ['REST APIs', 'GraphQL', 'Microservices'],
      path: 'backend-development'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure and deployment solutions for scalability.',
      features: ['AWS/Azure/GCP', 'DevOps', 'CI/CD'],
      path: 'cloud-solutions'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security audits and implementation to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance'],
      path: 'cybersecurity'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            We offer comprehensive software development services to help your business thrive in the digital world.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              onClick={() => router.push(`/service/${service.path}`)}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl p-6 sm:p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">{service.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs sm:text-sm text-gray-300">
                    <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss your requirements and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto btn-primary relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  x: mouseXSpring,
                  y: mouseYSpring,
                }}
              />
              <span className="relative z-10">Get Free Consultation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

