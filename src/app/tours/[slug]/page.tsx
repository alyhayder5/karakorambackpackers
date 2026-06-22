import { notFound } from "next/navigation";
import { TourDetailView } from "@/components/tours/tour-detail-view";
import { getTourBySlug, tours } from "@/lib/data/tours";
import { siteName } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return { title: "Tour Not Found" };

  return {
    title: tour.title,
    description: tour.description,
    openGraph: {
      title: `${tour.title} | ${siteName}`,
      description: tour.description,
      images: [{ url: tour.image, width: 1200, height: 630 }],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return <TourDetailView tour={tour} />;
}
