import { ContactView } from "@/components/contact/contact-view";
import { getContact } from "@/lib/cms/store";
import { siteName } from "@/lib/site";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Contact",
  description: `Plan your Gilgit-Baltistan trip with ${siteName}. Get in touch for family tours, festivals, and treks.`,
};

export default function ContactPage() {
  return <ContactView contact={getContact()} />;
}
