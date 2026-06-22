"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "Adventure Traveler",
    email: "traveler@example.com",
    phone: "+1 555 0123",
    country: "United States",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile updated!");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <DashboardShell>
          <div>
            <h1 className="text-3xl font-bold">Profile</h1>
            <p className="mt-2 text-muted">Manage your personal information.</p>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <div className="mb-6 flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.email}</p>
                </div>
              </div>

              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) =>
                        setProfile({ ...profile, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) =>
                        setProfile({ ...profile, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={profile.phone}
                      onChange={(e) =>
                        setProfile({ ...profile, phone: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={profile.country}
                      onChange={(e) =>
                        setProfile({ ...profile, country: e.target.value })
                      }
                    />
                  </div>
                </div>
                <Button type="submit">Save Changes</Button>
              </form>
            </div>
          </div>
        </DashboardShell>
      </main>
      <Footer />
    </>
  );
}
