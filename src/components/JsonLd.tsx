import {
  getSiteUrl,
  siteDescription,
  siteName,
  sitePhoneHref,
  siteSupportEmail,
} from "@/lib/site";

export function OrganizationJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: siteName,
    url,
    description: siteDescription,
    email: siteSupportEmail,
    telephone: sitePhoneHref,
    image: `${url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kkh, Near Chinese Graveyard, Danyore",
      addressLocality: "Gilgit",
      addressRegion: "Gilgit-Baltistan",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "Place",
      name: "Karakoram Region",
    },
    sameAs: [] as string[],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url,
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
