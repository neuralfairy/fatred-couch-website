"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Target,
  BarChart3,
  Mail,
  ArrowRight,
  Brain,
  Workflow,
  Shield,
  Globe,
  Clock,
  MessageSquare,
  Database,
  Palette,
  Settings,
} from "lucide-react"

export default function FeaturesPage() {
  const mainFeatures = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered Personalization",
      description:
        "Advanced machine learning algorithms analyze user behavior to deliver hyper-personalized content that resonates with each recipient.",
      benefits: [
        "Dynamic content adaptation",
        "Behavioral triggers",
        "Predictive analytics",
        "Smart send-time optimization",
      ],
    },
    {
      icon: <Workflow className="w-12 h-12" />,
      title: "Visual Automation Builder",
      description: "Create complex email workflows with our intuitive drag-and-drop interface. No coding required.",
      benefits: ["Drag-and-drop interface", "Pre-built templates", "Conditional logic", "Multi-channel campaigns"],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Advanced Segmentation",
      description: "Segment your audience with precision using behavioral data, demographics, and custom attributes.",
      benefits: ["Dynamic segmentation", "Real-time updates", "Custom attributes", "Behavioral tracking"],
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Real-Time Analytics",
      description: "Get actionable insights with comprehensive reporting and real-time performance metrics.",
      benefits: ["Live dashboards", "A/B testing", "ROI tracking", "Custom reports"],
    },
  ]

  const additionalFeatures = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Templates",
      description: "Professional, mobile-responsive templates",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Deliverability",
      description: "99.9% inbox delivery rate guaranteed",
    },
    { icon: <Globe className="w-6 h-6" />, title: "Multi-Language", description: "Support for 25+ languages" },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Send Time Optimization",
      description: "AI determines optimal send times",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "SMS Integration",
      description: "Multi-channel messaging capabilities",
    },
    { icon: <Database className="w-6 h-6" />, title: "CRM Integration", description: "Seamless data synchronization" },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Customization",
      description: "White-label options available",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "API Access",
      description: "Full REST API for custom integrations",
    },
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
            <Badge className="mb-6 bg-white/20 text-black border-white/30">🚀 Advanced Email Marketing Features</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Everything You Need to
              <span className="block gradient-text">Dominate Email Marketing</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Discover the powerful features that make iEMA the most advanced email marketing automation platform for
              B2B businesses.
            </p>
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 neon-glow" asChild>
              <Link href="https://salescentri.com/solutions/use-case-navigator/demo?utm_source=fatredcouch.com&utm_medium=features&utm_campaign=interactive_demo">
                Try Interactive Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full futuristic-border hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:animate-glow">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <CardTitle className="text-2xl mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
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
              Plus Many More
              <span className="block gradient-text">Powerful Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature you need to create, automate, and optimize your email marketing campaigns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-effect hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience
              <span className="block gradient-text">These Features?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Start your free trial today and see how iEMA can transform your email marketing results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 neon-glow" asChild>
                <Link href="https://salescentri.com/get-started/free-trial?utm_source=fatredcouch.com&utm_medium=features_cta&utm_campaign=free_trial">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/get-started/book-demo?utm_source=fatredcouch.com&utm_medium=features_cta&utm_campaign=book_demo">
                  Book Demo
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
