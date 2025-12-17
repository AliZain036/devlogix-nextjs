'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, MessageCircle, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0)
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

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      review: 'DevLogix transformed our startup with their exceptional web development services. The team delivered our e-commerce platform on time and exceeded our expectations. Their attention to detail and innovative solutions helped us scale rapidly.',
      company: 'TechStart Inc.',
      project: 'E-commerce Platform',
      date: 'March 2024'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, InnovateCorp',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      review: 'Working with DevLogix was a game-changer for our company. Their mobile app development expertise and modern tech stack helped us create a seamless user experience. The team is professional, responsive, and truly understands our vision.',
      company: 'InnovateCorp',
      project: 'Mobile App Development',
      date: 'February 2024'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthCo',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      review: 'DevLogix delivered an outstanding website redesign that perfectly captured our brand identity. Their UI/UX design skills are exceptional, and the final result exceeded our expectations. Highly recommended!',
      company: 'GrowthCo',
      project: 'Website Redesign',
      date: 'January 2024'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder, StartupXYZ',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      review: 'The team at DevLogix is incredibly talented and professional. They built our custom CRM system from scratch and the results have been phenomenal. Their technical expertise and business understanding are unmatched.',
      company: 'StartupXYZ',
      project: 'Custom CRM System',
      date: 'December 2023'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Product Manager, ScaleUp',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face',
      rating: 5,
      review: 'DevLogix helped us build a robust backend infrastructure that supports our growing user base. Their cloud solutions and API development expertise are world-class. The team is reliable and delivers quality work.',
      company: 'ScaleUp',
      project: 'Backend Infrastructure',
      date: 'November 2023'
    }
  ]

  const stats = [
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '200+', label: 'Happy Clients', icon: ThumbsUp },
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '24/7', label: 'Support Available', icon: MessageCircle }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Star
            className={`w-5 h-5 ${
              index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        </motion.div>
      ))}
    </div>
  )

  return (
    <section id="reviews" className="section-padding bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with DevLogix.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-3">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Review Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Review Card */}
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden group"
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>

            {/* Quote Icon */}
            <div className="absolute top-8 left-8">
              <Quote className="w-8 h-8 text-primary-400 opacity-30" />
            </div>

            {/* Review Content */}
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <StarRating rating={reviews[currentReview].rating} />
              </div>

              {/* Review Text */}
              <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed italic">
                &quot;{reviews[currentReview].review}&quot;
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900">{reviews[currentReview].name}</h4>
                  <p className="text-primary-600 text-sm">{reviews[currentReview].role}</p>
                  <p className="text-gray-500 text-xs">{reviews[currentReview].company}</p>
                </div>
              </div>

              {/* Project Info */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm">
                  <Award className="w-4 h-4" />
                  <span>{reviews[currentReview].project}</span>
                </div>
                <p className="text-gray-500 text-xs mt-2">{reviews[currentReview].date}</p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextReview}
              className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let&apos;s create something amazing together and add your success story to our collection.
            </p>
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
              <span className="relative z-10">Start Your Project</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Reviews
