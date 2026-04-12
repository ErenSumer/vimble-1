"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Introduction",
    content: `Welcome to Vimble! These Terms of Use ("Terms") govern your use of the Vimble mobile application ("App"). By using this App, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the App.`
  },
  {
    title: "2. Purpose of the App",
    content: `Vimble is a mobile application that allows users to create stunning AI-powered videos by simply uploading photos and describing their vision. The app enables users to:

• Upload photos and transform them into professional videos using AI
• Choose from a variety of video effects and styles
• Generate videos with different themes (birthday, winter, flying, live photos, etc.)
• Create personalized content for social media, entertainment, and creative projects
• Use advanced AI models to bring static images to life

The core purpose is to help you transform your ideas into professional videos using artificial intelligence, making video creation accessible to everyone.`
  },
  {
    title: "3. User Registration and Privacy",
    content: `Vimble may require users to create an account, and all data is stored securely on cloud-based servers. All data entered by users, including uploaded photos and generated videos, is securely stored and is tied to the user's account. Only the user has access to their own data. Users are subject to Vimble's privacy policy regarding the processing and storage of their data.`
  },
  {
    title: "4. Content and User Responsibilities",
    content: `Users upload photos and create video content using the App. Users are solely responsible for ensuring the accuracy and completeness of their uploaded content. Users are also responsible for all content they upload, including photographs, and must ensure this content complies with all applicable laws and these Terms. Users must not upload content that is illegal, harmful, or violates the rights of others.`
  },
  {
    title: "5. Credits and Subscription System",
    content: `Free Version Includes:

• Limited credits for video generation
• Access to basic video effects
• Standard quality video generation
• Basic support

Premium Features (with Subscription or Credits):

The Vimble Premium subscription or credit packages give you access to advanced AI tools and unlimited video generation capacity.

• Unlimited credits or higher credit packages
• Access to all premium video effects and styles
• High-quality video generation
• Advanced AI models (Sora 2, Veo 3, etc.)
• Priority processing
• Advanced customization options
• Export in multiple formats

Pricing:

Credit Packages:
• 100 Credits - $2.99
• 250 Credits - $6.99
• 500 Credits - $9.99
• 1,000 Credits - $19.99

Subscription Plans:
• Weekly Subscription - $6.99
• Annual Subscription - $49.99
• Discounted Annual Subscription - $34.99 

Subscription Information:

• All purchases are managed through Apple's App Store and Google Play Store
• Payment will be charged to your iTunes account or Google Play account at confirmation of purchase
• Subscriptions renew automatically unless canceled by the user at least 24 hours before the end of the current billing period
• You can manage or cancel your subscription anytime in your Account Settings`
  },
  {
    title: "6. Third-Party Services",
    content: `The App integrates with third-party services:

• AI Service Providers: The App uses third-party AI services for video generation. These services process your uploaded content to generate videos.
• Cloud Storage Providers: Your generated videos and uploaded content may be stored on secure cloud servers.
• Analytics Services: The App may use analytics services to improve functionality and user experience.`
  },
  {
    title: "7. Data Storage and Termination",
    content: `All data entered into the App, including uploaded photos and generated videos, is securely stored on cloud-based servers and linked to the user's account. Since Vimble has a user account system, users can manage and delete their data by logging into their account. Upon account termination, all user data will be deleted in accordance with our privacy policy.`
  },
  {
    title: "8. Limitation of Liability",
    content: `Vimble is provided "as is" without any warranties of any kind, either expressed or implied. While we strive to ensure the App operates without error, Vimble is not liable for any data loss, inaccurate video generation, or issues resulting from software bugs, hardware failures, or any other circumstances that lead to data loss or corruption. Users are encouraged to back up their generated content regularly. AI-generated videos may occasionally contain artifacts or unexpected results, and Vimble is not responsible for such outcomes.`
  },
  {
    title: "9. Intellectual Property",
    content: `The name "Vimble" and all associated logos and materials are protected by applicable intellectual property laws. You may not use the name "Vimble" or any related branding in connection with your own products or services without our prior written consent. Generated videos are owned by the user, but Vimble retains rights to use anonymized data for service improvement.`
  },
  {
    title: "10. Updates to Terms",
    content: `These Terms of Use may be updated from time to time. Since Vimble has an account registration feature, we are not responsible for notifying users of changes. Continued use of the App after changes are made constitutes acceptance of the updated Terms.`
  }
];

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 pt-40 pb-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-16 h-16 rounded-full bg-[var(--purple-glow)] flex items-center justify-center mb-6 text-[var(--purple)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-4" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Terms of Use
          </h1>
          <p className="text-[var(--fg-dim)] text-base" style={{ fontFamily: "var(--font-body)" }}>
            Last updated: December 2024
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)]" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-[var(--fg-muted)] leading-[1.8] text-[16px] whitespace-pre-wrap" style={{ fontFamily: "var(--font-body)" }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
