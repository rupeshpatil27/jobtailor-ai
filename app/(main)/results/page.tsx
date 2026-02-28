"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Mail, MessageSquare, CheckCircle2, 
  XCircle, AlertCircle, Copy, ArrowLeft, Download, Award
} from "lucide-react";
import Link from "next/link";

// --- Mock Data (To be replaced by your AI response later) ---
const mockAnalysis = {
  overallScore: 78,
  scores: {
    skills: 85,
    content: 70,
    style: 90,
  },
  feedback: {
    ats: {
      status: "average", // "poor" (<60), "average" (60-80), "excellent" (>80)
      pros: ["Your PDF format is perfectly readable by ATS.", "Standard section headers detected."],
      cons: ["Missing exact keyword matches for 'React' and 'TypeScript' from the job description."]
    },
    content: {
      pros: ["Strong action verbs used in your recent experience."],
      cons: ["Quantifiable metrics are missing (e.g., 'Increased sales by X%')."]
    },
    skills: {
      pros: ["Core frontend skills match the job well."],
      cons: ["Missing soft skills mentioned in the job description like 'Cross-functional collaboration'."]
    }
  },
  templates: {
    email: "Hi [Hiring Manager Name],\n\nI noticed the [Job Title] opening at [Company] and wanted to reach out. With my background in [Your Key Skill] and track record of [Your Key Achievement], I am confident I can bring immediate value to your team.\n\nI have attached my resume for your review. I would love to hop on a quick call next week to discuss how I can contribute to [Company's Goal].\n\nBest,\n[Your Name]",
    message: "Hi [Name], I saw you are hiring for a [Job Title] at [Company]. I have [X] years of experience in [Skill] and would love to connect and share my resume!"
  }
};

// --- Reusable Progress Bar Component ---
const ProgressBar = ({ label, score, color }: { label: string, score: number, color: string }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <span className="text-sm font-bold text-slate-900">{score}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-2.5">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${score}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-2.5 rounded-full ${color}`} 
      />
    </div>
  </div>
);

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState<"email" | "message">("email");

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a quick toast notification here!
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 lg:p-12 font-sans selection:bg-blue-200">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <Link href="/home" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-2">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Upload
            </Link>
            <h1 className="text-3xl font-extrabold text-slate-900">Analysis Results</h1>
            <p className="text-slate-500">Target Role: Frontend Developer at TechCorp</p>
          </div>
          <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-all">
            <Download className="mr-2 h-4 w-4" /> Export Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ========================================== */}
          {/* LEFT COLUMN: Resume Preview & Templates    */}
          {/* ========================================== */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* 1. Resume Preview Placeholder */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-500" /> Document Preview
              </h2>
              <div className="aspect-[1/1.4] w-full rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400">
                <p className="text-sm font-medium">Your_Resume_Final_v2.pdf</p>
              </div>
            </div>

            {/* 2. AI Outreach Templates */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-100 p-6 pb-0">
                <h2 className="text-lg font-bold text-slate-900 mb-4">AI Outreach Templates</h2>
                <div className="flex space-x-6">
                  <button 
                    onClick={() => setActiveTab("email")}
                    className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === "email" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                  >
                    <Mail className="inline-block mr-2 h-4 w-4 mb-0.5" /> Email
                  </button>
                  <button 
                    onClick={() => setActiveTab("message")}
                    className={`pb-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === "message" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-700"}`}
                  >
                    <MessageSquare className="inline-block mr-2 h-4 w-4 mb-0.5" /> LinkedIn Message
                  </button>
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 relative group">
                <p className="whitespace-pre-wrap text-sm text-slate-700 leading-relaxed">
                  {mockAnalysis.templates[activeTab]}
                </p>
                <button 
                  onClick={() => copyToClipboard(mockAnalysis.templates[activeTab])}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white border border-slate-200 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity hover:text-blue-600 hover:border-blue-200 shadow-sm"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>


          {/* ========================================== */}
          {/* RIGHT COLUMN: Scores & Detailed Feedback   */}
          {/* ========================================== */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Main Score Header */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Overall ATS Score Card */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
                <Award className={`h-10 w-10 mb-3 ${mockAnalysis.overallScore >= 80 ? 'text-green-500' : mockAnalysis.overallScore >= 60 ? 'text-amber-500' : 'text-red-500'}`} />
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Overall ATS Match</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-slate-900">{mockAnalysis.overallScore}</span>
                  <span className="text-xl font-bold text-slate-400">/100</span>
                </div>
                {/* Dynamic Message based on score */}
                <p className="mt-3 text-sm font-medium text-slate-600">
                  {mockAnalysis.overallScore >= 80 ? "Excellent! You are ready to apply." : 
                   mockAnalysis.overallScore >= 60 ? "Good, but missing key requirements." : 
                   "Needs work before submitting."}
                </p>
              </div>

              {/* Sectional Scores */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-center">
                <ProgressBar label="Keyword Skills" score={mockAnalysis.scores.skills} color="bg-blue-500" />
                <ProgressBar label="Content & Impact" score={mockAnalysis.scores.content} color="bg-indigo-500" />
                <ProgressBar label="Style & Formatting" score={mockAnalysis.scores.style} color="bg-violet-500" />
              </div>
            </div>

            {/* 2. Detailed Feedback Sections */}
            <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              <div className="border-b border-slate-100 p-6 bg-slate-50">
                <h2 className="text-xl font-bold text-slate-900">Actionable Feedback</h2>
                <p className="text-sm text-slate-500 mt-1">Based on the job description you provided.</p>
              </div>

              <div className="divide-y divide-slate-100">
                {/* Reusable internal component for mapping feedback */}
                {[
                  { title: "ATS Compatibility", data: mockAnalysis.feedback.ats },
                  { title: "Content & Phrasing", data: mockAnalysis.feedback.content },
                  { title: "Skills & Keywords", data: mockAnalysis.feedback.skills }
                ].map((section, idx) => (
                  <div key={idx} className="p-6 hover:bg-slate-50/50 transition-colors">
                    <h3 className="text-base font-bold text-slate-900 mb-4">{section.title}</h3>
                    <div className="space-y-3">
                      
                      {/* Pros */}
                      {section.data.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <p className="text-sm text-slate-700">{pro}</p>
                        </div>
                      ))}
                      
                      {/* Cons/Drawbacks */}
                      {section.data.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-3">
                          {mockAnalysis.overallScore >= 80 
                            ? <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" /> 
                            : <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                          }
                          <p className="text-sm text-slate-700">{con}</p>
                        </div>
                      ))}

                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}