import { SiteHeader } from "./SiteHeader";
import { HeroSection } from "./HeroSection";
import { FeaturesNature } from "./FeaturesNature";
import { TrustStatsStrip } from "./TrustStatsStrip";
import { TourPackages } from "./TourPackages";
import { TestimonialsBlock } from "./TestimonialsBlock";
import { GalleryMarquee } from "./GalleryMarquee";
import { BlogUpdates } from "./BlogUpdates";
import { SiteFooter } from "./SiteFooter";

export function HomeView() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesNature />
        <TrustStatsStrip />
        <TourPackages />
        <TestimonialsBlock />
        <GalleryMarquee />
        <BlogUpdates />
      </main>
      <SiteFooter />
    </>
  );
}
