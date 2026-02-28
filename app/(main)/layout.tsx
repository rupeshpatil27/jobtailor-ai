import { Toaster } from "@/components/ui/sonner";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-slate-50 w-full min-h-screen">
      <main>{children}</main>
      <Toaster />
    </div>
  );
};

export default MainLayout;
