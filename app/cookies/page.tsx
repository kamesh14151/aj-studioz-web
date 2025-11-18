'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { Cookie } from 'lucide-react'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 mx-auto mb-4">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Cookie Policy
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
                <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site. At AJ STUDIOZ, we use cookies to enhance your browsing experience and provide personalized content.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies for several reasons:
                </p>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Functionality Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/30">
                    <h3 className="text-lg font-semibold mb-2">Marketing Cookies</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border/30">
                        <th className="text-left p-4 font-semibold">Cookie Name</th>
                        <th className="text-left p-4 font-semibold">Purpose</th>
                        <th className="text-left p-4 font-semibold">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground text-sm">
                      <tr className="border-b border-border/20">
                        <td className="p-4 font-mono">_ga</td>
                        <td className="p-4">Google Analytics - User tracking</td>
                        <td className="p-4">2 years</td>
                      </tr>
                      <tr className="border-b border-border/20">
                        <td className="p-4 font-mono">_gid</td>
                        <td className="p-4">Google Analytics - Session tracking</td>
                        <td className="p-4">24 hours</td>
                      </tr>
                      <tr className="border-b border-border/20">
                        <td className="p-4 font-mono">session_id</td>
                        <td className="p-4">Session management</td>
                        <td className="p-4">Session</td>
                      </tr>
                      <tr className="border-b border-border/20">
                        <td className="p-4 font-mono">preferences</td>
                        <td className="p-4">User preferences storage</td>
                        <td className="p-4">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These include:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Google Analytics:</strong> We use Google Analytics to understand how our services are used</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Vercel Analytics:</strong> For performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong className="text-foreground">Social Media Cookies:</strong> For sharing content on social platforms</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                  <h3 className="font-semibold mb-2 text-primary">Browser Settings</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    To learn more about how to manage cookies on popular browsers, visit the browser's official support page:
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>• Chrome</li>
                    <li>• Firefox</li>
                    <li>• Safari</li>
                    <li>• Edge</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Changes to This Cookie Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date at the top of this Cookie Policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our Cookie Policy, please contact us:
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
