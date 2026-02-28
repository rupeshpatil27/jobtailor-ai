import { requireAuth } from "@/lib/auth-utils";
import { Header } from "@/components/header";
import { ResumeForm } from "@/components/resume-form";

const HomePage = async () => {
  await requireAuth();

  return (
    <div className="w-full md:mx-auto md:max-w-5xl pt-10 pb-16 md:pt-10 md:pb-24 px-6">
      <Header />
      <ResumeForm />
    </div>
  );
};

export default HomePage;
