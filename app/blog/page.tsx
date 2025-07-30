"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, User, Mail } from "lucide-react"

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of Email Marketing: AI-Powered Personalization in 2024",
    excerpt:
      "Discover how artificial intelligence is revolutionizing email marketing with hyper-personalized content, predictive analytics, and automated optimization.",
    author: "Sarah Johnson",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
    featured: true,
  }

  const blogPosts = [
    {
      title: "10 Email Automation Workflows That Drive 300% More Conversions",
      excerpt: "Learn the exact automation sequences that top B2B companies use to nurture leads and close more deals.",
      author: "Michael Chen",
      date: "January 12, 2024",
      readTime: "6 min read",
      category: "Automation",
    },
    {
      title: "Email Deliverability Best Practices: Reach the Inbox Every Time",
      excerpt:
        "Master the technical and strategic aspects of email deliverability to ensure your messages reach your audience.",
      author: "Emily Rodriguez",
      date: "January 10, 2024",
      readTime: "7 min read",
      category: "Deliverability",
    },
    {
      title: "B2B Email Marketing Metrics That Actually Matter in 2024",
      excerpt:
        "Beyond open rates: discover the KPIs that truly indicate email marketing success and drive business growth.",
      author: "David Park",
      date: "January 8, 2024",
      readTime: "5 min read",
      category: "Analytics",
    },
    {
      title: "Segmentation Strategies: How to Increase Email CTR by 250%",
      excerpt:
        "Advanced segmentation techniques that help you send the right message to the right person at the right time.",
      author: "Lisa Wang",
      date: "January 5, 2024",
      readTime: "9 min read",
      category: "Strategy",
    },
    {
      title: "GDPR and Email Marketing: Complete Compliance Guide 2024",
      excerpt:
        "Navigate privacy regulations while maintaining effective email marketing campaigns with our comprehensive guide.",
      author: "James Thompson",
      date: "January 3, 2024",
      readTime: "12 min read",
      category: "Compliance",
    },
    {
      title: "Mobile Email Optimization: Design for the 80% Who Read on Mobile",
      excerpt:
        "Essential design principles and technical optimizations to ensure your emails look perfect on every device.",
      author: "Rachel Kim",
      date: "December 28, 2023",
      readTime: "6 min read",
      category: "Design",
    },
  ]

  const categories = [
    { name: "All Posts", count: 24, active: true },
    { name: "AI & Automation", count: 8 },
    { name: "Strategy", count: 6 },
    { name: "Analytics", count: 5 },
    { name: "Design", count: 3 },
    { name: "Compliance", count: 2 },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-black border-white/30">📚 Email Marketing Insights</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Email Marketing with
              <span className="block gradient-text">Expert Insights</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with actionable strategies, industry trends, and proven tactics from email
              marketing experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="futuristic-border hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-red-100 text-red-800 border-red-200">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button
                    className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 w-fit neon-glow"
                    asChild
                  >
                    <Link href="https://salescentri.com/resources/case-studies?utm_source=fatredcouch.com&utm_medium=blog&utm_campaign=featured_post">
                      Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories & Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={category.active ? "default" : "outline"}
                className={
                  category.active
                    ? "bg-red-500 text-black hover:bg-red-600"
                    : "text-black border-black hover:bg-black hover:text-white"
                }
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6">
                    <Badge className="bg-white/90 text-gray-800">{post.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3 leading-tight group-hover:text-red-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-black border-black hover:bg-black hover:text-white w-full bg-transparent"
                      asChild
                    >
                      <Link href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=fatredcouch.com&utm_medium=blog&utm_campaign=blog_post">
                        Read More <ArrowRight className="ml-2 w-3 h-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="outline"
              className="text-black border-black hover:bg-black hover:text-white bg-transparent"
              asChild
            >
              <Link href="https://salescentri.com/resources/tutorials-webinars?utm_source=fatredcouch.com&utm_medium=blog&utm_campaign=load_more">
                Load More Articles
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Never Miss an
              <span className="block gradient-text">Expert Insight</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Get the latest email marketing strategies, case studies, and industry insights delivered straight to your
              inbox every week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Button className="bg-black text-white hover:bg-gray-800 px-8 neon-glow" asChild>
                <Link href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=fatredcouch.com&utm_medium=blog_newsletter&utm_campaign=subscribe">
                  Subscribe
                </Link>
              </Button>
            </div>

            <p className="text-sm text-gray-600 mt-4">Join 10,000+ marketers. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
