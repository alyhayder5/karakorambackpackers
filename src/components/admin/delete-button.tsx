"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function DeleteButton({
  endpoint,
  label,
}: {
  endpoint: string;
  label: string;
}) {
  const router = useRouter();
  async function onDelete() {
    if (!confirm(`Delete “${label}”?`)) return;
    const res = await fetch(endpoint, { method: "DELETE" });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      toast.error(data.error || "Delete failed");
      return;
    }
    toast.success("Deleted");
    router.refresh();
  }
  return (
    <Button type="button" variant="outline" size="sm" onClick={onDelete}>
      Delete
    </Button>
  );
}
