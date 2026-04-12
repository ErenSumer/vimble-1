"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const sections = [
  {
    title: "1. Purpose of Processing Information",
    content: `The Owner establishes and presents this privacy policy to protect the information of individuals using the Vimble – AI Video Generator mobile application (hereinafter referred to as the "Application") and to resolve any relevant complaints.

The Application primarily collects non-personal information and Usage Data for the following purposes:

• Service Provision: Providing the basic and customized AI video generation services offered by the Application
• Service Improvement and Development: Improving existing services and developing new customized services
• Statistical Preparation and Research: Processing of pseudonymized information for statistical preparation, scientific research, and preservation of records in the public interest
• Security and Fraud Detection: Detecting any malicious, unauthorized, or fraudulent activity`
  },
  {
    title: "2. Items of Information Processed (Non-Personal)",
    content: `The Application collects and processes the following non-personal information and Usage Data necessary for the operation, maintenance, and improvement of the service:

Automatically collected information through user activity (Usage Data):

• Service Use: Cookies (for necessary functions), service use records, device information, advertisement identifiers, etc.
• Analytics Data: Number of sessions, session duration, operating systems, device model
• Video Generation Data: Types of videos generated, prompts used, credits consumed, generation frequency
• Content Metadata: Video thumbnails, generation timestamps, effect types used

Note: Unlike some applications, Vimble – AI Video Generator does NOT collect any directly identifying personal information such as: email, password, nickname, credit card payment information, bank transfer details, phone number, SMS content, Google ID, or Apple ID.`
  },
  {
    title: "3. Period of Retention and Use for Information",
    content: `The Company retains and uses the User's non-personal information (Usage Data) while the user services as a member.

• Information related to the use of service: 3 months (for service operation and analytics)
• Generated video content: Retained until user deletion or account termination
• Records on handling consumer complaints or disputes: 3 years (Consumer Protection Act)
• Other aggregated Usage Data may be retained for longer periods for statistical research and service improvement

When the user requests withdrawal from membership or Company achieves the purpose of collection and use of information, the Company will immediately destroy the relevant information.`
  },
  {
    title: "4. Provision of Information to Third Parties",
    content: `The Company may provide pseudonymized information (Non-Personal Usage Data) to a third party, and in that case, the Company shall comply with the Personal Information Protection Act.`
  },
  {
    title: "5. Processing Information Subsequent to Outsourcing of Work and Overseas Transfer",
    content: `The Company may outsource the processing of Usage Data to third parties to enhance service functionality. Examples include:

• Google Inc. (USA): Collection and analysis of usage history of the Application (Analytics)
• Cloud Storage Providers: Secure storage of generated videos and user content
• AI Service Providers: Processing of video generation requests and AI model operations`
  },
  {
    title: "6. Use and Provision of Information within the Scope Reasonably Related to the Purpose of Collection",
    content: `The Company may use or provide non-personal information to a third party without the consent of the data subject, considering criteria such as the relevance to the original purpose of collection, user interest, etc.`
  },
  {
    title: "7. User's Rights and Methods for Exercising the Rights",
    content: `The user can exercise the right to correct, delete, and suspend processing of his or her non-personal Usage Data against the Company at any time. The exercise of rights may be done through an agent such as a legal representative of the data subject.`
  },
  {
    title: "8. Destruction Procedures and Methods for Information",
    content: `The Company destroys the non-personal information without delay when it becomes unnecessary.`
  },
  {
    title: "9. Technical and Administrative Measures to Ensure Safety of Information",
    content: `The Company takes technical and administrative measures, such as encryption and internal management plans, to ensure the safety of non-personal Usage Data.`
  },
  {
    title: "10. Installation, Operation, and Rejection of Automatic Information Collection Devices",
    content: `Cookies are used for security management and service improvement. Users can typically adjust their device settings to limit the use of certain tracking technologies.`
  },
  {
    title: "11. International Transfer of Information",
    content: `The Company may transfer non-personal Usage Data to countries outside the EEA or the Republic of Korea for processing purposes (e.g., Google Analytics servers in the USA, cloud storage providers).`
  },
  {
    title: "12. Protection of Information of Children",
    content: `The Company does not knowingly collect personal information of children under the age of 13.`
  },
  {
    title: "13. Amendment",
    content: `Any amendments to the privacy policy will be notified to users in advance. This Privacy Policy shall take effect immediately.`
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg)]">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 pt-40 pb-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="w-16 h-16 rounded-full bg-[var(--purple-glow)] flex items-center justify-center mb-6 text-[var(--purple)]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--fg)] mb-4" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}>
            Privacy Policy
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
