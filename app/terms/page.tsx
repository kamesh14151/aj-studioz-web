'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { FileText } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-4">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Terms of Service
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
                <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and AJ STUDIOZ ("we," "us" or "our"), concerning your access to and use of the ajstudioz.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The Content and the Marks are provided on the Site "AS IS" for your information and personal use only. Except as expressly provided in these Terms of Service, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">User Representations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using the Site, you represent and warrant that:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>All registration information you submit will be true, accurate, current, and complete</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You will maintain the accuracy of such information and promptly update such registration information as necessary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You have the legal capacity and you agree to comply with these Terms of Service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You are not a minor in the jurisdiction in which you reside</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You will not access the Site through automated or non-human means</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>You will not use the Site for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Your use of the Site will not violate any applicable law or regulation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. As a user of the Site, you agree not to:
                </p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    Systematically retrieve data or other content from the Site to create or compile a collection, database or directory
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    Use the Site to advertise or offer to sell goods and services without our permission
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    Engage in unauthorized framing of or linking to the Site
                  </div>
                  <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    Attempt to bypass any measures designed to prevent or restrict access to the Site
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site. We also reserve the right to modify or discontinue all or part of our services without notice at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and defined following the laws of the United States. AJ STUDIOZ and yourself irrevocably consent that the courts of the United States shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
                </p>
                <div className="mt-4 p-6 rounded-xl bg-card/50 border border-border/30">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">AJ STUDIOZ</strong><br />
                    Email: <a href="mailto:legal@ajstudioz.com" className="text-primary hover:underline">legal@ajstudioz.com</a><br />
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
