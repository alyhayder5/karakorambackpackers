import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturedTours } from "@/components/home/featured-tours";
import { DestinationsBento } from "@/components/home/destinations-bento";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { AdventureCategories } from "@/components/home/adventure-categories";
import { ExperienceGallery } from "@/components/home/experience-gallery";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { BlogSection } from "@/components/home/blog-section";
import { FinalCTA } from "@/components/home/final-cta";

export function HomeView() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedTours />
        <DestinationsBento />
        <WhyChooseUs />
        <AdventureCategories />
        <ExperienceGallery />
        <TestimonialsSection />
        <BlogSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
