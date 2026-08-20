import { getContact } from "@/lib/cms/store";
import { ContactEditor } from "@/components/admin/contact-editor";

export const dynamic = "force-dynamic";

export default function AdminContactPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mb-6 mt-1 text-sm text-muted">
        Office details shown on /contact
      </p>
      <ContactEditor initial={getContact()} />
    </div>
  );
}
