"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ImageUploader } from "@/components/admin/image-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { AboutContent, TeamMember } from "@/lib/cms/types";

export function AboutEditor({
  about,
  team,
}: {
  about: AboutContent;
  team: TeamMember[];
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [headline, setHeadline] = useState(about.headline);
  const [story1, setStory1] = useState(about.story[0] || "");
  const [story2, setStory2] = useState(about.story[1] || "");
  const [mission, setMission] = useState(about.mission);
  const [vision, setVision] = useState(about.vision);
  const [image, setImage] = useState(about.image);
  const [members, setMembers] = useState(team);

  function updateMember(i: number, patch: Partial<TeamMember>) {
    setMembers((prev) => prev.map((m, idx) => (idx === i ? { ...m, ...patch } : m)));
  }

  async function save(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await fetch("/api/admin/cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          about: {
            headline,
            story: [story1, story2].filter(Boolean),
            mission,
            vision,
            image,
            imageAlt: about.imageAlt,
          },
          team: members,
        }),
      });
      if (!res.ok) throw new Error("Save failed");
      toast.success("About page saved");
      router.refresh();
    } catch {
      toast.error("Save failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={save} className="space-y-8">
      <div className="space-y-4 rounded-3xl border border-border bg-surface p-6">
        <h2 className="text-lg font-semibold">Company story</h2>
        <div className="space-y-2">
          <Label>Headline</Label>
          <Input value={headline} onChange={(e) => setHeadline(e.target.value)} />
        </div>
        <Textarea value={story1} onChange={(e) => setStory1(e.target.value)} />
        <Textarea value={story2} onChange={(e) => setStory2(e.target.value)} />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Mission</Label>
            <Textarea value={mission} onChange={(e) => setMission(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Vision</Label>
            <Textarea value={vision} onChange={(e) => setVision(e.target.value)} />
          </div>
        </div>
        <ImageUploader
          folder="about"
          label="Story photo"
          value={image}
          onChange={setImage}
        />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Team</h2>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() =>
              setMembers([
                ...members,
                {
                  id: crypto.randomUUID(),
                  name: "",
                  role: "",
                  bio: "",
                  image: "/team/ali-shan.jpg",
                },
              ])
            }
          >
            Add member
          </Button>
        </div>
        <div className="grid gap-4">
          {members.map((m, i) => (
            <div
              key={m.id}
              className="grid gap-4 rounded-2xl border border-border bg-surface p-4 md:grid-cols-[200px_1fr]"
            >
              <ImageUploader
                folder="team"
                label="Photo"
                value={m.image}
                onChange={(url) => updateMember(i, { image: url })}
              />
              <div className="space-y-3">
                <Input
                  placeholder="Name"
                  value={m.name}
                  onChange={(e) => updateMember(i, { name: e.target.value })}
                />
                <Input
                  placeholder="Role"
                  value={m.role}
                  onChange={(e) => updateMember(i, { role: e.target.value })}
                />
                <Textarea
                  placeholder="Bio"
                  value={m.bio}
                  onChange={(e) => updateMember(i, { bio: e.target.value })}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setMembers(members.filter((_, idx) => idx !== i))}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button type="submit" disabled={busy}>
        {busy ? "Saving…" : "Save About page"}
      </Button>
    </form>
  );
}
