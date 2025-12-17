'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Code2, Zap, Users } from 'lucide-react'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 1920, height: 1080 }) // Safe defaults for SSR

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  useEffect(() => {
    // Set mounted state and window size on client
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX - innerWidth / 2) / innerWidth
      const y = (clientY - innerHeight / 2) / innerHeight

      mouseX.set(x)
      mouseY.set(y)
    }

    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [mouseX, mouseY])
  const stats = [
    { icon: Code2, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Zap, value: '24/7', label: 'Support Available' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="banner"
      aria-label="Hero section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.div>

      {/* Interactive Cursor Elements */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="pointer-events-none fixed inset-0 z-30 transition duration-75 ease-linear"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
          className="relative w-full h-full"
        >
                    {/* Floating Particles - Optimized */}
          {isMounted && [...Array(3)].map((_, i) => {
            const size = Math.random() * 3 + 1 // Reduced size range
            const colors = [
              'bg-primary-400',
              'bg-secondary-400'
            ]
            const color = colors[Math.floor(Math.random() * colors.length)]

            return (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                  opacity: 0,
                  scale: 0
                }}
                animate={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                  opacity: [0, 0.2, 0], // Reduced opacity
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: Math.random() * 3 + 2, // Slower duration
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className={`absolute ${color} rounded-full blur-sm`}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  filter: 'blur(1px)'
                }}
              />
            )
          })}

          {/* Larger Glow Particles - Optimized */}
          {isMounted && [...Array(1)].map((_, i) => ( // Reduced from 2 to 1
            <motion.div
              key={`glow-${i}`}
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: 0,
                scale: 0
              }}
              animate={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: [0, 0.1, 0], // Reduced opacity
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3, // Slower duration
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              className="absolute w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur-lg"
              style={{
                filter: 'blur(10px)',
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.1)' // Reduced shadow opacity
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Cursor Trail */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="pointer-events-none fixed inset-0 z-40 transition duration-75 ease-linear"
      >
        <motion.div
          animate={{
            scale: isHovering ? 1 : 0,
            opacity: isHovering ? 0.15 : 0, // Reduced opacity from 0.3
          }}
          transition={{ duration: 0.2 }}
          className="w-6 h-6 bg-primary-500 rounded-full blur-sm" // Reduced size from w-8 h-8
        />

        {/* Cursor Reactive Particles */}
        {isHovering && [...Array(2)].map((_, i) => ( // Reduced from 3 to 2
          <motion.div
            key={`cursor-particle-${i}`}
            initial={{
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0
            }}
            animate={{
              x: (Math.random() - 0.5) * 40, // Reduced spread
              y: (Math.random() - 0.5) * 40,
              opacity: [0, 0.5, 0], // Reduced opacity
              scale: [0, 0.6, 0] // Reduced scale
            }}
            transition={{
              duration: 0.6,
              delay: i * 0.1,
              ease: "easeOut"
            }}
            className="absolute w-1.5 h-1.5 bg-secondary-400 rounded-full"
            style={{
              filter: 'blur(0.5px)',
              boxShadow: '0 0 4px rgba(217, 70, 239, 0.3)'
            }}
          />
        ))}
      </motion.div>

      <div className="container-custom section-padding relative z-10">
        <div className="text-center">
          {/* Main Heading - Server-rendered for SEO, animated on client */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              rotateX,
              rotateY,
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transform-gpu"
          >
            <span className="text-gray-900">We Build</span>{' '}
            <span className="gradient-text">Digital</span>{' '}
            <span className="text-gray-900">Solutions</span>
          </motion.h1>

          {/* Subtitle - Server-rendered for SEO, animated on client */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
            role="doc-subtitle"
          >
            Transform your ideas into powerful digital experiences with our expert team of developers, designers, and innovators.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              className="btn-primary flex items-center justify-center space-x-2 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  x: mouseXSpring,
                  y: mouseYSpring,
                }}
              />
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                className="text-center relative group cursor-pointer"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    rotateX,
                    rotateY,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero
