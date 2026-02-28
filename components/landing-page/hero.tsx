import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUpBox } from "../animated-wrapper";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      <div className="absolute top-1/4 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-100/50 blur-[100px]" />

      <div className="mx-auto max-w-4xl text-center">
        <FadeUpBox delay={0.1}>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            JobTailor 1.0 is now live
          </div>
        </FadeUpBox>

        <FadeUpBox delay={0.2}>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight sm:text-7xl lg:leading-[1.1] text-slate-900">
            Beat the ATS. <br />
            <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Land your dream role.
            </span>
          </h1>
        </FadeUpBox>

        <FadeUpBox delay={0.3}>
          <p className="mb-10 mx-auto max-w-2xl text-lg text-slate-600 sm:text-xl leading-relaxed">
            Stop guessing what recruiters want. JobTailor analyzes your resume
            against job descriptions in real-time, uncovering the exact keywords
            you need to reach human eyes.
          </p>
        </FadeUpBox>

        <FadeUpBox delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="flex h-14 w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-8 text-base font-semibold text-white hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
            >
              Optimize Your Resume <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <p className="text-sm text-slate-500 sm:hidden">
              Free forever. No credit card required.
            </p>
          </div>
        </FadeUpBox>
      </div>
    </section>
  );
};
