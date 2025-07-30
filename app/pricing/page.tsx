"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Check, ArrowRight, Zap, Crown, Building } from "lucide-react"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-8 h-8" />,
      description: "Perfect for small businesses getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 1,000 contacts",
        "5 email campaigns per month",
        "Basic automation",
        "Email templates",
        "Basic analytics",
        "Email support",
      ],
      cta: "Start Free Trial",
      ctaLink:
        "https://salescentri.com/get-started/free-trial?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=starter_plan",
      popular: false,
    },
    {
      name: "Professional",
      icon: <Crown className="w-8 h-8" />,
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Up to 10,000 contacts",
        "Unlimited email campaigns",
        "Advanced automation",
        "A/B testing",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "API access",
      ],
      cta: "Start Free Trial",
      ctaLink:
        "https://salescentri.com/get-started/free-trial?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=professional_plan",
      popular: true,
    },
    {
      name: "Enterprise",
      icon: <Building className="w-8 h-8" />,
      description: "For large organizations with advanced needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited contacts",
        "Unlimited everything",
        "AI-powered features",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label options",
        "Custom reporting",
      ],
      cta: "Contact Sales",
      ctaLink:
        "https://salescentri.com/contact/sales-inquiry?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=enterprise_plan",
      popular: false,
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
            <Badge className="mb-6 bg-white/20 text-black border-white/30">💰 Transparent Pricing</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Choose Your
              <span className="block gradient-text">Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Start free, scale as you grow. No hidden fees, no surprises. Cancel anytime with our 30-day money-back
              guarantee.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-lg ${!isAnnual ? "font-semibold" : "text-gray-600"}`}>Monthly</span>
              <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-red-500" />
              <span className={`text-lg ${isAnnual ? "font-semibold" : "text-gray-600"}`}>Annual</span>
              <Badge className="bg-green-100 text-green-800 border-green-200">Save 20%</Badge>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full ${plan.popular ? "futuristic-border neon-glow" : "border-gray-200"} hover:shadow-xl transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-8">
                    <div
                      className={`w-16 h-16 ${plan.popular ? "bg-gradient-to-r from-red-500 to-red-600" : "bg-gray-100"} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <div className={plan.popular ? "text-white" : "text-gray-600"}>{plan.icon}</div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? Math.floor(plan.annualPrice / 12) : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600">/month</span>
                      {isAnnual && (
                        <div className="text-sm text-green-600 mt-1">Billed annually (${plan.annualPrice}/year)</div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-red-500 to-red-600 text-black hover:from-red-600 hover:to-red-700" : "bg-black text-white hover:bg-gray-800"}`}
                      asChild
                    >
                      <Link href={plan.ctaLink}>
                        {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Button
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/pricing?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=get_pricing">
                  Get Detailed Pricing
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/pricing/enterprise-custom?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=enterprise_custom">
                  Enterprise & Custom
                </Link>
              </Button>
              <Button
                variant="outline"
                className="text-black border-black hover:bg-black hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://salescentri.com/pricing/plans-overview?utm_source=fatredcouch.com&utm_medium=pricing&utm_campaign=plans_overview">
                  Plans Overview
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked
              <span className="block gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "Can I change plans anytime?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the billing.",
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start.",
              },
              {
                question: "What happens if I exceed my contact limit?",
                answer:
                  "We'll notify you when you're approaching your limit. You can upgrade your plan or we'll temporarily pause sending until the next billing cycle.",
              },
              {
                question: "Do you offer custom enterprise solutions?",
                answer:
                  "We work with large organizations to create custom solutions that fit their specific needs and requirements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
              Start Your Free Trial
              <span className="block gradient-text">Today</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              No credit card required. Full access to all features for 14 days. Cancel anytime with our 30-day
              money-back guarantee.
            </p>

            <Button size="lg" className="bg-black text-white hover:bg-gray-800 neon-glow" asChild>
              <Link href="https://salescentri.com/pricing/free-trial?utm_source=fatredcouch.com&utm_medium=pricing_cta&utm_campaign=free_trial">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
