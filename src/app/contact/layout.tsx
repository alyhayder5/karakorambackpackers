import { siteName } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${siteName} to plan your Gilgit-Baltistan adventure.`,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
