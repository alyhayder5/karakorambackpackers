import { getAbout, getTeam } from "@/lib/cms/store";
import { AboutEditor } from "@/components/admin/about-editor";

export const dynamic = "force-dynamic";

export default function AdminAboutPage() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mb-6 mt-1 text-sm text-muted">
        Edit the story, mission, and team photos shown on /about
      </p>
      <AboutEditor about={getAbout()} team={getTeam()} />
    </div>
  );
}
