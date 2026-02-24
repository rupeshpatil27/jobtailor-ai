import { Sparkles } from "lucide-react";

export const HeroText = () => {
  return (
    <section className="relative flex flex-col items-center justify-center pt-15 pb-16 text-center md:pt-15 md:pb-24 px-6">
      {/* 1. The Trust/Tech Badge */}
      {/* <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Sparkles className="mr-2 h-4 w-4" />
        Powered by Google Gemini 1.5 AI
      </div> */}

      {/* 2. The Main Headline */}
      <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
        Beat the ATS. <br className="hidden sm:block" />
        <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Tailor Your Resume Instantly.
        </span>
      </h1>

      {/* 3. The Sub-headline (The "How") */}
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-500 md:text-xl leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
        Stop guessing what recruiters want. Upload your resume, paste the job
        description, and let our AI uncover the exact keywords you need to land
        the interview.
      </p>
    </section>
  );
};
