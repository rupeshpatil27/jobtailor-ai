"use client";

import { useState } from "react";
import {
  UploadCloud,
  Building2,
  Briefcase,
  AlignLeft,
  Loader2,
} from "lucide-react";

import Lottie from "lottie-react";
import animationData from "../public/Scan.json";

import { FileUploader } from "./file-uploader";

export const ResumeForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <section className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 space-y-5">
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* 1. The Trust/Tech Badge */}
        {/* <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="mr-2 h-4 w-4" />
          Powered by Google Gemini 1.5 AI
        </div> */}

        <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl animate-in duration-700 mt-5">
          Start a New Scan. <br className="hidden sm:block" />
          <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Target Your Next Role.
          </span>
        </h1>

        {loading ? (
          <>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 md:text-xl leading-relaxed animate-in duration-700">
              {loadingText}
            </p>

            <Lottie
              animationData={animationData}
              className="size-60 md:size-90"
            />
          </>
        ) : (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 md:text-xl leading-relaxed animate-in duration-700">
            Stop guessing what recruiters want. Upload your resume, paste the
            job description, and let our AI uncover the exact keywords you need
            to land the interview.
          </p>
        )}
      </div>

      {!loading && (
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-200">
          <div className="mb-8 border-b border-slate-100 pb-4">
            <h2 className="text-2xl font-bold text-slate-900">
              Target Your Resume
            </h2>
            <p className="text-slate-500 mt-1">
              Provide the job details and your current resume to get started.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {/* LEFT COLUMN: Job Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-500" /> Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  placeholder="e.g. Google, TechCorp..."
                  required
                  className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-500" /> Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="e.g. Frontend Developer"
                  required
                  className="flex h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <AlignLeft className="w-4 h-4 text-blue-500" /> Job
                  Description
                </label>
                <textarea
                  name="jobDescription"
                  placeholder="Paste the full job description here..."
                  rows={6}
                  required
                  className="flex w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm shadow-sm transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: File Upload & Submit */}
            <div className="flex flex-col h-full justify-between space-y-8">
              <div className="space-y-2 h-full flex flex-col">
                <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                  <UploadCloud className="w-4 h-4 text-blue-500" /> Upload
                  Resume (PDF)
                </label>

                <FileUploader file={file} setFile={setFile} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group relative flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-md transition-all hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    Analyze Resume
                    <UploadCloud className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
