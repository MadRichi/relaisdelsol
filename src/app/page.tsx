import Hero from "@/components/sections/Hero"
import ValueProposition from "@/components/sections/ValueProposition"
import RoomsPreview from "@/components/sections/RoomsPreview"
import ServicesHighlight from "@/components/sections/ServicesHighlight"
import DirectBookingBanner from "@/components/sections/DirectBookingBanner"
import LocationTeaser from "@/components/sections/LocationTeaser"
import FinalCTA from "@/components/sections/FinalCTA"
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter"

export default function Home() {
  return (
    <main>
      <NavbarThemeSetter theme="dark" heroLogo={true} />
      <Hero />
      <ValueProposition />
      <RoomsPreview />
      <ServicesHighlight />
      <DirectBookingBanner />
      <LocationTeaser />
      <FinalCTA />
    </main>
  )
}