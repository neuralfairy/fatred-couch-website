import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fatredcouch Solutions - iEMA Email Marketing Automation Platform",
  description:
    "Intelligent Email Marketing Automation (iEMA) platform that automates personalized email campaigns to drive B2B lead engagement. Based in Raleigh, NC.",
  keywords: "email automation, drip campaigns, iEMA, B2B email marketing, marketing sequences, Raleigh",
  authors: [{ name: "Fatredcouch Solutions" }],
  openGraph: {
    title: "Fatredcouch Solutions - iEMA Email Marketing Automation",
    description: "Automate personalized email campaigns with our intelligent iEMA platform",
    url: "https://fatredcouch.com",
    siteName: "Fatredcouch Solutions",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="structured-data" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Fatredcouch Solutions",
            url: "https://fatredcouch.com",
            logo: "https://fatredcouch.com/logo.png",
            description: "Intelligent Email Marketing Automation platform for B2B businesses",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Raleigh",
              addressRegion: "NC",
              addressCountry: "US",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-919-555-0123",
              contactType: "sales",
            },
          })}
        </Script>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
