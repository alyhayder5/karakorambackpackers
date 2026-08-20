import Link from "next/link";
import { DestinationForm } from "@/components/admin/destination-form";

export default function NewDestinationPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">
        <Link href="/admin/destinations" className="text-primary">
          Destinations
        </Link>{" "}
        / Create
      </p>
      <h1 className="mb-6 mt-2 text-3xl font-bold">Create destination</h1>
      <DestinationForm />
    </div>
  );
}
