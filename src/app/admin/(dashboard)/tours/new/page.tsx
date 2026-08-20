import Link from "next/link";
import { TourForm } from "@/components/admin/tour-form";

export default function NewTourPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <p className="text-sm text-muted">
        <Link href="/admin/tours" className="text-primary">
          Tours
        </Link>{" "}
        / Create
      </p>
      <h1 className="mb-6 mt-2 text-3xl font-bold">Create tour</h1>
      <TourForm />
    </div>
  );
}
