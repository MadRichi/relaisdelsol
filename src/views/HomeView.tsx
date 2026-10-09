import Hero from "@/components/sections/Hero";
import ValueProposition from "@/components/sections/ValueProposition";
import RoomsPreview from "@/components/sections/RoomsPreview";
import ServicesHighlight from "@/components/sections/ServicesHighlight";
import DirectBookingBanner from "@/components/sections/DirectBookingBanner";
import FamilyStory from "@/components/sections/FamilyStory";
import LocationTeaser from "@/components/sections/LocationTeaser";
import Faq from "@/components/sections/Faq";
import FinalCTA from "@/components/sections/FinalCTA";
import NavbarThemeSetter from "@/components/layout/NavbarThemeSetter";
import { routes, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <>
      <NavbarThemeSetter theme="light" heroLogo={true} />
      <Hero dict={t.hero} roomsHref={routes.rooms[locale]} checkAvailability={t.common.checkAvailability} />
      <ValueProposition locale={locale} />
      <RoomsPreview locale={locale} />
      <ServicesHighlight locale={locale} />
      <DirectBookingBanner locale={locale} />
      <FamilyStory locale={locale} />
      <LocationTeaser locale={locale} />
      <Faq locale={locale} />
      <FinalCTA locale={locale} />
    </>
  );
}
