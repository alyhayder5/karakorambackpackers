"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    promotions: true,
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error("Passwords don't match");
      return;
    }
    toast.success("Password updated!");
    setPasswords({ current: "", new: "", confirm: "" });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <DashboardShell>
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="mt-2 text-muted">
                Manage your account preferences and security.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-bold">Change Password</h2>
              <form onSubmit={handlePasswordChange} className="mt-4 space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="current">Current Password</Label>
                  <Input
                    id="current"
                    type="password"
                    value={passwords.current}
                    onChange={(e) =>
                      setPasswords({ ...passwords, current: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new">New Password</Label>
                  <Input
                    id="new"
                    type="password"
                    value={passwords.new}
                    onChange={(e) =>
                      setPasswords({ ...passwords, new: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm">Confirm Password</Label>
                  <Input
                    id="confirm"
                    type="password"
                    value={passwords.confirm}
                    onChange={(e) =>
                      setPasswords({ ...passwords, confirm: e.target.value })
                    }
                  />
                </div>
                <Button type="submit">Update Password</Button>
              </form>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <h2 className="text-lg font-bold">Notifications</h2>
              <div className="mt-4 space-y-4">
                {(
                  [
                    ["email", "Email notifications"],
                    ["sms", "SMS alerts"],
                    ["promotions", "Promotional offers"],
                  ] as const
                ).map(([key, label]) => (
                  <label
                    key={key}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm">{label}</span>
                    <input
                      type="checkbox"
                      checked={notifications[key]}
                      onChange={(e) =>
                        setNotifications({
                          ...notifications,
                          [key]: e.target.checked,
                        })
                      }
                      className="h-4 w-4 rounded border-border accent-primary"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </DashboardShell>
      </main>
      <Footer />
    </>
  );
}
