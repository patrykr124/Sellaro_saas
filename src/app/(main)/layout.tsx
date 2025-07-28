import Navbar from "@/components/ui/navbar/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nazwa Twojej Aplikacji",
  description: "Opis Twojej aplikacji",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar className="top-2" />
      <main>{children}</main>
    </>
  );
}
