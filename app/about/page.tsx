"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Users, Award, Heart, Lightbulb } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in marketing automation with a passion for helping businesses scale through intelligent email marketing.",
      linkedin: "https://salescentri.com/company/about-us/leadership-team",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Former Google engineer specializing in AI and machine learning applications for marketing technology.",
      linkedin: "https://salescentri.com/company/about-us/leadership-team",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      bio: "Product strategist with deep expertise in B2B SaaS platforms and user experience design.",
      linkedin: "https://salescentri.com/company/about-us/leadership-team",
    },
    {
      name: "David Park",
      role: "Head of Marketing",
      bio: "Growth marketing expert who has scaled multiple B2B companies from startup to enterprise.",
      linkedin: "https://salescentri.com/company/about-us/leadership-team",
    },
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer-Centric",
      description: "Every decision we make starts with how it benefits our customers and their success.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in email marketing automation.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Growth",
      description: "We believe in growing together with our customers, partners, and team members.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from product quality to customer service.",
    },
  ]

  const stats = [
    { value: "2019", label: "Founded" },
    { value: "50+", label: "Team Members" },
    { value: "10,000+", label: "Active Users" },
    { value: "99.9%", label: "Uptime" },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white/20 text-black border-white/30">🏢 About Fatredcouch Solutions</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Revolutionizing Email Marketing
              <span className="block gradient-text">Through Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Based in Raleigh, NC, we're on a mission to democratize intelligent email marketing automation for
              businesses of all sizes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-black mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our Mission:
                <span className="block gradient-text">Intelligent Automation for Everyone</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We believe that every business, regardless of size, should have access to enterprise-level email
                marketing automation. Our iEMA platform democratizes AI-powered personalization, making it accessible
                and affordable for growing companies.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2019 in the heart of Raleigh's thriving tech scene, we've grown from a small startup to a
                trusted partner for thousands of businesses worldwide. Our commitment to innovation and customer success
                drives everything we do.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 neon-glow"
                asChild
              >
                <Link href="https://salescentri.com/company/about-us?utm_source=fatredcouch.com&utm_medium=about&utm_campaign=learn_more">
                  Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            ></motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Core
              <span className="block gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                      <div className="text-white">{value.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Meet Our
              <span className="block gradient-text">Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders passionate about transforming email marketing through technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full futuristic-border hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-red-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                      asChild
                    >
                      <Link href={member.linkedin}>View Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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
              <Link href="https://salescentri.com/company/about-us/leadership-team?utm_source=fatredcouch.com&utm_medium=about&utm_campaign=leadership_team">
                View Full Leadership Team <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our
              <span className="block gradient-text">Growing Team</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and customer success.
              Explore opportunities to grow your career with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 neon-glow"
                asChild
              >
                <Link href="https://salescentri.com/company/careers?utm_source=fatredcouch.com&utm_medium=about&utm_campaign=careers">
                  View Open Positions <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/company/about-us?utm_source=fatredcouch.com&utm_medium=about&utm_campaign=company_culture">
                  Learn About Our Culture
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
