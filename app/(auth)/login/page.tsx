import { Suspense } from "react";
import { requireUnauth } from "@/lib/auth-utils";
import { AuthBranding } from "@/components/auth/auth-branding";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = async () => {
  await requireUnauth();

  return (
    <main className="flex min-h-screen w-full bg-white">
      <Suspense
        fallback={
          <div className="flex w-full lg:w-1/2 items-center justify-center">
            Loading...
          </div>
        }
      >
        <AuthBranding mode="login" />
        <LoginForm />
      </Suspense>
    </main>
  );
};
export default LoginPage;
