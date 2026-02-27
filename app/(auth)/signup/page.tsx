import { AuthBranding } from "@/components/auth/auth-branding";
import { RegisterForm } from "@/components/auth/register-form";
import { requireUnauth } from "@/lib/auth-utils";

const SignupPage = async () => {
  await requireUnauth();
  return (
    <main className="flex min-h-screen w-full bg-white">
      <AuthBranding mode="register" />
      <RegisterForm />
    </main>
  );
};

export default SignupPage;
