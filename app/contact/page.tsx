"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Headphones } from "lucide-react"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=live_chat",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule a Call",
      description: "Book a personalized demo or consultation",
      action: "Book Meeting",
      link: "https://salescentri.com/get-started/calendly?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=calendly",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      link: "tel:+19195550123",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      action: "Send Email",
      link: "mailto:support@fatredcouch.com",
    },
  ]

  const officeInfo = {
    address: "123 Innovation Drive, Suite 400",
    city: "Raleigh, NC 27601",
    phone: "+1 (919) 555-0123",
    email: "hello@fatredcouch.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
  }

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
            <Badge className="mb-6 bg-white/20 text-black border-white/30">📞 Get in Touch</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We're Here to
              <span className="block gradient-text">Help You Succeed</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Have questions about iEMA? Need support? Want to schedule a demo? Our team is ready to assist you every
              step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
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
              Choose Your Preferred
              <span className="block gradient-text">Contact Method</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - pick what works best for you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full futuristic-border hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    <Button
                      className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 w-full"
                      asChild
                    >
                      <Link href={method.link}>{method.action}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input id="company" placeholder="Your Company Name" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea id="message" placeholder="Tell us more about your needs..." rows={5} required />
                    </div>
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 w-full neon-glow"
                      asChild
                    >
                      <Link href="https://salescentri.com/get-started/contact?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=contact_form">
                        Send Message <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Office Information */}
              <Card className="glass-effect">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <p className="text-gray-600">Located in the heart of Raleigh's tech district</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">{officeInfo.address}</p>
                      <p className="text-gray-600">{officeInfo.city}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p>{officeInfo.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p>{officeInfo.email}</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p>{officeInfo.hours}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="glass-effect">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                  <p className="font-semibold">Raleigh, NC</p>
                  <p className="text-sm text-gray-600">Innovation District</p>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/contact/sales-inquiry?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=sales_inquiry">
                    Sales Inquiry
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                  asChild
                >
                  <Link href="https://salescentri.com/contact/support-request?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=support_request">
                    Support Request
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
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
              Need Immediate
              <span className="block gradient-text">Support?</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our support team is available to help you get the most out of iEMA. Get answers to your questions quickly
              and efficiently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700 neon-glow"
                asChild
              >
                <Link href="https://salescentri.com/contact/support-request/submit-ticket?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=submit_ticket">
                  Submit Support Ticket <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/contact/support-request/live-chat?utm_source=fatredcouch.com&utm_medium=contact&utm_campaign=live_chat_cta">
                  Start Live Chat
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
