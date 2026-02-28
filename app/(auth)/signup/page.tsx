import { requireUnauth } from "@/lib/auth-utils";
import { AuthBranding } from "@/components/auth/auth-branding";
import { RegisterForm } from "@/components/auth/register-form";

const SignupPage = async () => {
  await requireUnauth();
  return (
    <main className="flex min-h-screen w-full relative bg-white">
      <AuthBranding mode="register" />
      <RegisterForm />
    </main>
  );
};

export default SignupPage;
