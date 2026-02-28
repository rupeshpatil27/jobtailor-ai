import { NavBar } from "@/components/landing-page/nav-bar";
import { Hero } from "@/components/landing-page/hero";
import { Features } from "@/components/landing-page/features";
import { Pricing } from "@/components/landing-page/pricing";
import { Footer } from "@/components/landing-page/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-200">
      <NavBar />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}
