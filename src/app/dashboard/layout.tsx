import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <main className="flex flex-col w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
