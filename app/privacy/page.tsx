'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Shield, Eye, Lock, FileText } from 'lucide-react'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: January 15, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At AJ STUDIOZ ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways. The information we may collect includes:
                </p>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Personal Data</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Derivative Data</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Financial Data</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the Site.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Use of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Create and manage your account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Process your transactions and send you related information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Email you regarding your account or order</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Fulfill and manage purchases, orders, payments, and other transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Generate a personal profile about you to make future visits more personalized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Increase the efficiency and operation of the Site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Monitor and analyze usage and trends to improve your experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Notify you of updates to the Site</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Offer new products, services, and/or recommendations to you</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                <div className="mt-4 space-y-3">
                  <div className="p-4 rounded-lg bg-card/30 border border-border/20">
                    <h3 className="font-semibold mb-1">By Law or to Protect Rights</h3>
                    <p className="text-sm text-muted-foreground">
                      If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card/30 border border-border/20">
                    <h3 className="font-semibold mb-1">Third-Party Service Providers</h3>
                    <p className="text-sm text-muted-foreground">
                      We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or comments about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 p-6 rounded-xl bg-card/50 border border-border/30">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">AJ STUDIOZ</strong><br />
                    Email: <a href="mailto:privacy@ajstudioz.com" className="text-primary hover:underline">privacy@ajstudioz.com</a><br />
                    Phone: +1 (234) 567-890
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
