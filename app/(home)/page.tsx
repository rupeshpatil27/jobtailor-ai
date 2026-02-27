import { requireAuth } from "@/lib/auth-utils";
import { ResumeForm } from "@/components/resume-form";

const HomePage = async () => {
  await requireAuth();

  return (
    <div className="w-full md:mx-auto md:max-w-5xl pt-15 pb-16 md:pt-15 md:pb-24 px-6">
      <ResumeForm />
    </div>
  );
};

export default HomePage;


// TODO : toast message not show when user is not loged in
