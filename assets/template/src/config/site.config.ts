export const siteConfig = {
  // Basic Info
  name: "{{SAAS_NAME}}",
  description: "{{SAAS_DESCRIPTION}}",
  tagline: "{{SAAS_TAGLINE}}",
  
  // Style
  style: "{{STYLE}}", // minimal | bold | playful | dark
  
  // Navigation
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Pricing", href: "/#pricing" },
  ],
  
  // Hero Section
  hero: {
    headline: "{{HEADLINE}}",
    subheadline: "{{SUBHEADLINE}}",
    cta: {
      text: "Get Started Free",
      href: "#pricing",
    },
    secondaryCta: {
      text: "Learn More",
      href: "#benefits",
    },
  },
  
  // Social Proof
  socialProof: {
    stats: "Used by 1,000+ teams worldwide",
    testimonials: [
      {
        quote: "This tool has completely transformed how we work. We've saved countless hours every week.",
        author: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp",
      },
      {
        quote: "The best investment we've made this year. Simple to use, powerful results.",
        author: "Michael Chen",
        role: "Founder",
        company: "StartupXYZ",
      },
      {
        quote: "Finally, a solution that actually delivers on its promises. Highly recommended.",
        author: "Emily Rodriguez",
        role: "Operations Lead",
        company: "GrowthCo",
      },
    ],
  },
  
  // Benefits
  benefits: [
    {
      icon: "⚡",
      title: "Save Hours Every Week",
      description: "Automate repetitive tasks and focus on what actually matters to your business.",
    },
    {
      icon: "📈",
      title: "Boost Your Results",
      description: "See measurable improvements in your workflow efficiency from day one.",
    },
    {
      icon: "🎯",
      title: "Stay Focused",
      description: "Eliminate distractions and keep your team aligned on what's important.",
    },
  ],
  
  // Process
  process: {
    headline: "Get Started in 3 Simple Steps",
    steps: [
      {
        number: "1",
        title: "Sign Up",
        description: "Create your free account in less than 60 seconds. No credit card required.",
      },
      {
        number: "2",
        title: "Connect",
        description: "Link your existing tools and import your data with one click.",
      },
      {
        number: "3",
        title: "Launch",
        description: "Start seeing results immediately. We'll guide you every step of the way.",
      },
    ],
  },
  
  // Pricing
  pricing: {
    headline: "Simple, Transparent Pricing",
    subheadline: "Start free, upgrade when you're ready",
    plans: [
      {
        name: "Starter",
        description: "Perfect for individuals and small teams",
        monthlyPrice: 9,
        yearlyPrice: 90,
        features: [
          "Up to 5 team members",
          "1,000 monthly actions",
          "Basic integrations",
          "Email support",
          "7-day data history",
        ],
        cta: "Start Free Trial",
        highlighted: false,
      },
      {
        name: "Pro",
        description: "For growing teams that need more power",
        monthlyPrice: 29,
        yearlyPrice: 290,
        features: [
          "Unlimited team members",
          "Unlimited actions",
          "All integrations",
          "Priority support",
          "Unlimited data history",
          "Advanced analytics",
          "Custom workflows",
        ],
        cta: "Go Pro",
        highlighted: true,
      },
    ],
  },
  
  // About
  about: {
    headline: "Built by People Who Get It",
    story: "We started {{SAAS_NAME}} because we faced the same problems you do. After years of struggling with clunky tools and complicated workflows, we decided to build something better.",
    mission: "Our mission is simple: help teams like yours work smarter, not harder. Every feature we build is designed with real users in mind.",
  },
  
  // FAQ Preview (shown on homepage)
  faqPreview: [
    {
      question: "How do I get started?",
      answer: "Sign up for a free account, and you'll be guided through our simple onboarding process. Most users are up and running in under 5 minutes.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Absolutely. No contracts, no hidden fees. Cancel your subscription anytime from your account settings.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use industry-standard encryption and security practices. Your data is yours, and we never sell it to third parties.",
    },
  ],
  
  // Footer
  footer: {
    tagline: "{{SAAS_TAGLINE}}",
    links: {
      product: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Blog", href: "/blog" },
        { label: "FAQ", href: "/faq" },
      ],
      legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
    social: {
      twitter: "#",
      github: "#",
    },
    copyright: `© ${new Date().getFullYear()} {{SAAS_NAME}}. All rights reserved.`,
  },
};

export type SiteConfig = typeof siteConfig;
