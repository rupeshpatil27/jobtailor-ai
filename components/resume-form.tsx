"use client";

import { useState } from "react";
import {
  UploadCloud,
  FileText,
  Building2,
  Briefcase,
  AlignLeft,
  Loader2,
} from "lucide-react";
import FileUploader from "./file-uploader";

export const ResumeForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <section className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 mt-5">
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
                <AlignLeft className="w-4 h-4 text-blue-500" /> Job Description
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
                <UploadCloud className="w-4 h-4 text-blue-500" /> Upload Resume
                (PDF)
              </label>

              <FileUploader
                file={file}
                setFile={setFile}
                loading={loading}
                progress={progress}
                loadingStep={loadingStep}
              />
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
    </section>
  );
};
