"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ContactContent } from "@/lib/cms/types";

export function ContactEditor({ initial }: { initial: ContactContent }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(initial);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/admin/cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: form }),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success("Contact details saved");
      router.refresh();
    } catch {
      toast.error("Save failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={save} className="max-w-xl space-y-4">
      <div className="space-y-2">
        <Label>Address</Label>
        <Input
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Email</Label>
        <Input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Phone (display)</Label>
        <Input
          value={form.phoneDisplay}
          onChange={(e) => setForm({ ...form, phoneDisplay: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Phone (tel link, E.164)</Label>
        <Input
          value={form.phoneHref}
          onChange={(e) => setForm({ ...form, phoneHref: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Hours</Label>
        <Input
          value={form.hours}
          onChange={(e) => setForm({ ...form, hours: e.target.value })}
        />
      </div>
      <div className="space-y-2">
        <Label>Google Maps URL</Label>
        <Input
          value={form.mapsUrl}
          onChange={(e) => setForm({ ...form, mapsUrl: e.target.value })}
        />
      </div>
      <Button type="submit" disabled={busy}>
        {busy ? "Saving…" : "Save contact"}
      </Button>
    </form>
  );
}
