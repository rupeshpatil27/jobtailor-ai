import { Target, Mail, LineChart } from 'lucide-react';
import React from 'react';

// --- Types ---
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface PricingPlan {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  href: string;
}

export const FEATURES: Feature[] = [
  {
    icon: React.createElement(Target, { className: "h-6 w-6 text-blue-600" }),
    title: "Smart Keyword Analysis",
    description: "Paste a job description and upload your resume. Our AI instantly extracts the exact missing keywords you need to beat the ATS."
  },
  {
    icon: React.createElement(Mail, { className: "h-6 w-6 text-indigo-600" }),
    title: "AI Outreach Templates",
    description: "Instantly generate highly personalized email and direct message templates based on your resume to send to recruiters."
  },
  {
    icon: React.createElement(LineChart, { className: "h-6 w-6 text-amber-500" }),
  title: "Real-Time Match Scoring",
    description: "Get an instant ATS compatibility score. See exactly how well your resume matches the job description before you even hit submit."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    tier: "Starter",
    price: "Free",
    description: "Perfect for testing the waters.",
    features: ["1 Resume Upload", "Basic ATS Match Score", "Up to 1 Job Scans/month"],
    buttonText: "Start for Free",
    popular: false,
    href: "/singup"
  },
  {
    tier: "Pro Seeker",
    price: "$12",
    period: "/month",
    description: "Everything you need to land the interview.",
    features: ["Unlimited Resume Uploads", "Advanced AI Keyword Gap Analysis", "Unlimited Job Scans"],
    buttonText: "Upgrade to Pro",
    popular: true,
    href: "/singup"
  }
];