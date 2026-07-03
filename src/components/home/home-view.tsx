import { Footer } from "@/components/layout/footer";
import { AdventureCategories } from "@/components/home/adventure-categories";
import { DestinationsBento } from "@/components/home/destinations-bento";
import { ExploreMore } from "@/components/home/explore-more";
import { ExperienceGallery } from "@/components/home/experience-gallery";
import { FeaturedTours } from "@/components/home/featured-tours";
import { FinalCTA } from "@/components/home/final-cta";
import { FounderStaff } from "@/components/home/founder-staff";
import { HeroSection } from "@/components/home/hero-section";
import { OurComfort } from "@/components/home/our-comfort";
import { PricingPlans } from "@/components/home/pricing-plans";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { WhyChooseUs } from "@/components/home/why-choose-us";

export function HomeView() {
  return (
    <>
      <main>
        <HeroSection />
        <WhyChooseUs />
        <OurComfort />
        <FounderStaff />
        <ExploreMore />
        <PricingPlans />
        <FeaturedTours />
        <DestinationsBento />
        <AdventureCategories />
        <TestimonialsSection />
        <ExperienceGallery />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
