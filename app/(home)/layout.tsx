import { Header } from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <Header />
      <main>{children}</main>
      <Toaster/>
    </div>
  );
};

export default HomeLayout;
