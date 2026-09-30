import Hero from "@/components/sections/Hero"
import ValueProposition from "@/components/sections/ValueProposition"
import RoomsPreview from "@/components/sections/RoomsPreview"
import ServicesHighlight from "@/components/sections/ServicesHighlight"
import DirectBookingBanner from "@/components/sections/DirectBookingBanner"
import LocationTeaser from "@/components/sections/LocationTeaser"
import FinalCTA from "@/components/sections/FinalCTA"
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter"
import FamilyStory from "@/components/sections/FamilyStory"
import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Home() {
  return (
    <>
      <NavbarThemeSetter theme="light" heroLogo={true} />
      <Hero />
      <ValueProposition />
      <RoomsPreview />
      <ServicesHighlight />
      <DirectBookingBanner />
      <FamilyStory />
      <LocationTeaser />
      <FinalCTA />
    </>
  )
}