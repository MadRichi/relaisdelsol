import type { ReactNode } from "react";
import StickyBookingBar from "@/components/booking/StickyBookingBar";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      {/* <StickyBookingBar /> */}
    </>
  );
}
