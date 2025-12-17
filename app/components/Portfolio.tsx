'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Portfolio = () => {
  const router = useRouter()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX' },
    { id: 'backend', name: 'Backend' }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A modern e-commerce platform with advanced features like real-time inventory, payment processing, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      span: 'col-span-2',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      description: 'Cross-platform mobile app for team collaboration and project management.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      span: 'col-span-1',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Banking Dashboard',
      category: 'design',
      description: 'Modern banking interface with intuitive design and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['Figma', 'React', 'TypeScript', 'D3.js'],
      span: 'col-span-1',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'API Gateway',
      category: 'backend',
      description: 'Scalable API gateway with rate limiting, authentication, and microservices architecture.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      technologies: ['Node.js', 'Redis', 'Docker', 'Kubernetes'],
      span: 'col-span-2',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media Platform',
      category: 'web',
      description: 'Full-stack social media platform with real-time messaging and content sharing.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      technologies: ['React', 'GraphQL', 'PostgreSQL', 'Socket.io'],
      span: 'col-span-1',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Mobile fitness app with workout tracking, nutrition planning, and progress analytics.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      technologies: ['Flutter', 'Firebase', 'HealthKit'],
      span: 'col-span-2',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const filteredProjects = projects.filter(project =>
    activeFilter === 'all' ? true : project.category === activeFilter
  )

  return (
    <section id="portfolio" className="relative section-padding bg-slate-950 overflow-hidden">
      {/* Enhanced Radial Gradient Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-primary-500/5 to-transparent opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-500/15 via-transparent to-transparent opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent opacity-30" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeFilter === filter.id
                ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/50'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-fr">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`md:${project.span}`}
              >
                <div className="group relative h-full bg-white/[0.02] backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 p-4 sm:p-6 flex flex-col">
                  {/* Project Image - Floating inside card */}
                  <div className="relative overflow-hidden rounded-lg sm:rounded-xl mb-4 sm:mb-6 aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => router.push(`/project/${project.id}`)}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <Eye className="w-5 h-5 text-white" />
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                    {/* Subtle Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-medium bg-transparent border border-white/10 text-gray-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
