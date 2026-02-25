import { HeroText } from "@/components/hero-text";
import { ResumeForm } from "@/components/resume-form";

const HomePage = () => {
  return (
    <div className="w-full md:mx-auto md:max-w-5xl pt-15 pb-16 md:pt-15 md:pb-24 px-6">
      <HeroText />
      <ResumeForm />
    </div>
  );
};

export default HomePage;
