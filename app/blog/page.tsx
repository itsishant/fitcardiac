'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Heart Disease: Prevention and Early Detection',
    excerpt: 'Learn about the risk factors, symptoms, and preventive measures for heart disease. Early detection can save lives.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
    author: 'Dr. Sarah Mitchell',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Prevention',
  },
  {
    id: 2,
    title: 'Cardiac Rehabilitation: Your Path to Recovery',
    excerpt: 'Discover how cardiac rehabilitation programs can help you recover and improve your heart health after a cardiac event.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    author: 'Dr. James Anderson',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'Rehabilitation',
  },
  {
    id: 3,
    title: 'The Role of Diet in Heart Health',
    excerpt: 'Explore how a heart-healthy diet can significantly reduce your risk of cardiovascular disease and improve overall wellness.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    author: 'Dr. Emily Chen',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Nutrition',
  },
  {
    id: 4,
    title: 'Exercise and Heart Health: Finding the Right Balance',
    excerpt: 'Learn about the optimal exercise routines for maintaining heart health and preventing cardiovascular disease.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    author: 'Dr. Michael Rodriguez',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Fitness',
  },
  {
    id: 5,
    title: 'Stress Management for a Healthy Heart',
    excerpt: 'Discover effective stress management techniques that can help protect your heart and improve your cardiovascular health.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop',
    author: 'Dr. Lisa Thompson',
    date: 'February 20, 2024',
    readTime: '5 min read',
    category: 'Wellness',
  },
  {
    id: 6,
    title: 'Advances in Cardiac Surgery: Minimally Invasive Procedures',
    excerpt: 'Explore the latest advances in cardiac surgery, including minimally invasive techniques that reduce recovery time.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop',
    author: 'Dr. Robert Kim',
    date: 'February 15, 2024',
    readTime: '10 min read',
    category: 'Technology',
  },
]

const categories = ['All', 'Prevention', 'Rehabilitation', 'Nutrition', 'Fitness', 'Wellness', 'Technology']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/10 via-primary-green-light/20 to-white" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="container mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-secondary-gray mb-6">
                Health <span className="text-primary-teal">Blog</span>
              </h1>
              <p className="text-xl text-secondary-gray-light leading-relaxed">
                Expert insights, tips, and latest news about cardiac health and wellness
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-teal text-white'
                      : 'bg-gray-100 text-secondary-gray hover:bg-primary-green-light'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-secondary-gray-light mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-secondary-gray mb-3 group-hover:text-primary-teal transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-secondary-gray-light mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-secondary-gray-light">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-primary-teal font-semibold hover:text-primary-teal-dark flex items-center gap-2 group"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

