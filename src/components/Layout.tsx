
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
