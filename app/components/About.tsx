'use client'

import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Target,
  CheckCircle,
  Users,
  Globe,
  Zap,
  Code2,
  Palette,
  Smartphone,
  Database,
} from 'lucide-react'
import { useState, useEffect } from 'react'

const About = () => {

  const [selectedTechCategory, setSelectedTechCategory] = useState<string | null>(null)
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

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      skills: ['React', 'Node.js', 'TypeScript'],
      experience: '8+ years'
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      skills: ['Figma', 'Adobe XD', 'Prototyping'],
      experience: '6+ years'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Backend Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      skills: ['Python', 'Django', 'AWS'],
      experience: '7+ years'
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about creating exceptional digital experiences.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project we undertake.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and client partnership.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions.'
    }
  ]

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '24/7', label: 'Support Available' }
  ]

  const technologyCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      technologies: [
        { name: 'React', description: 'Modern UI library for building interactive interfaces' },
        { name: 'Next.js', description: 'Full-stack React framework for production' },
        { name: 'Vue.js', description: 'Progressive JavaScript framework' },
        { name: 'TypeScript', description: 'Typed JavaScript for better development' },
        { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
        { name: 'Framer Motion', description: 'Animation library for React' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      technologies: [
        { name: 'Node.js', description: 'JavaScript runtime for server-side development' },
        { name: 'Python', description: 'Versatile programming language for backend' },
        { name: 'Django', description: 'High-level Python web framework' },
        { name: 'Express.js', description: 'Fast, unopinionated web framework' },
        { name: 'GraphQL', description: 'Query language for APIs' },
        { name: 'PostgreSQL', description: 'Advanced open-source database' }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile',
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      technologies: [
        { name: 'React Native', description: 'Cross-platform mobile development' },
        { name: 'Flutter', description: 'Google\'s UI toolkit for mobile apps' },
        { name: 'Swift', description: 'Apple\'s programming language for iOS' },
        { name: 'Kotlin', description: 'Modern language for Android development' },
        { name: 'Expo', description: 'React Native development platform' },
        { name: 'Firebase', description: 'Google\'s mobile development platform' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Globe,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      technologies: [
        { name: 'AWS', description: 'Amazon Web Services cloud platform' },
        { name: 'Docker', description: 'Containerization platform' },
        { name: 'Kubernetes', description: 'Container orchestration platform' },
        { name: 'CI/CD', description: 'Continuous integration and deployment' },
        { name: 'Terraform', description: 'Infrastructure as code tool' },
        { name: 'Jenkins', description: 'Automation server for CI/CD' }
      ]
    },
    {
      id: 'design',
      name: 'Design Tools',
      icon: Palette,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50',
      technologies: [
        { name: 'Figma', description: 'Collaborative interface design tool' },
        { name: 'Adobe XD', description: 'User experience design software' },
        { name: 'Sketch', description: 'Digital design for Mac' },
        { name: 'InVision', description: 'Digital product design platform' },
        { name: 'Principle', description: 'Animation and interaction design' },
        { name: 'Zeplin', description: 'Design handoff and collaboration' }
      ]
    },
    {
      id: 'database',
      name: 'Databases',
      icon: Database,
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50',
      technologies: [
        { name: 'MongoDB', description: 'NoSQL document database' },
        { name: 'PostgreSQL', description: 'Advanced open-source database' },
        { name: 'Redis', description: 'In-memory data structure store' },
        { name: 'MySQL', description: 'Open-source relational database' },
        { name: 'Elasticsearch', description: 'Search and analytics engine' },
        { name: 'Firebase', description: 'Google\'s mobile and web app platform' }
      ]
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Who <span className="gradient-text">We Are</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate team of developers, designers, and innovators dedicated to transforming ideas into powerful digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">
              Our <span className="gradient-text">Story</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2019, DevLogix began with a simple mission: to help businesses thrive in the digital age through cutting-edge technology and exceptional user experiences. What started as a small team of passionate developers has grown into a full-service digital agency.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We&apos;ve helped hundreds of businesses, from startups to enterprise companies, achieve their digital goals. Our commitment to quality, innovation, and client success has made us a trusted partner in the tech industry.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-8">
              {[
                'Custom software development tailored to your needs',
                'Modern tech stack with latest frameworks',
                'Agile development methodology',
                '24/7 support and maintenance'
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  x: mouseXSpring,
                  y: mouseYSpring,
                }}
              />
              <span className="relative z-10">Learn More About Us</span>
            </motion.button>
          </motion.div>

          {/* Right Column - Stats & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Company Values */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience in development, design, and digital innovation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 mb-4">{member.experience} experience</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Technologies We Use</h3>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Click on any category to explore the specific technologies and tools we use in our development process.
          </p>

                    {/* Technology Categories */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {technologyCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTechCategory(selectedTechCategory === category.id ? null : category.id)}
                className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-colors duration-300 text-center ${
                  selectedTechCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white ring-2 sm:ring-4 ring-primary-200'
                    : 'bg-white hover:bg-gray-50'
                }`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl flex items-center justify-center ${
                  selectedTechCategory === category.id
                    ? 'bg-white bg-opacity-20'
                    : `bg-gradient-to-r ${category.color}`
                }`}>
                  <category.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    selectedTechCategory === category.id ? 'text-white' : 'text-white'
                  }`} />
                </div>
                <h4 className={`font-bold text-xs sm:text-sm ${
                  selectedTechCategory === category.id ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.name}
                </h4>
                <p className={`text-[10px] sm:text-xs mt-0.5 sm:mt-1 ${
                  selectedTechCategory === category.id ? 'text-white text-opacity-80' : 'text-gray-600'
                }`}>
                  {category.technologies.length} tech
                </p>
              </motion.button>
            ))}
          </div>

          {/* Technologies Display Area */}
          <AnimatePresence>
            {selectedTechCategory && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-100"
              >
                <div className="text-center mb-6 sm:mb-8">
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                    {technologyCategories.find(cat => cat.id === selectedTechCategory)?.name} Technologies
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Explore the specific technologies and tools we use in {technologyCategories.find(cat => cat.id === selectedTechCategory)?.name.toLowerCase()} development
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {technologyCategories
                    .find(cat => cat.id === selectedTechCategory)
                    ?.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: techIndex * 0.05,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        whileHover={{
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                        className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg border border-gray-100"
                      >
                        <div className="flex items-start space-x-3 sm:space-x-4">
                          <div className={`w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r ${technologyCategories.find(cat => cat.id === selectedTechCategory)?.color} rounded-full mt-1 flex-shrink-0`}></div>
                          <div className="flex-1">
                            <h5 className="font-bold text-sm sm:text-base text-gray-900 mb-1 sm:mb-2">{tech.name}</h5>
                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{tech.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default About
