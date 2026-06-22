"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { Mountain, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!isSupabaseConfigured()) {
      toast.info("Demo mode", {
        description: "Configure Supabase to enable password reset emails.",
      });
      setSent(true);
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/dashboard/settings`,
    });

    if (error) {
      toast.error("Reset failed", { description: error.message });
    } else {
      setSent(true);
      toast.success("Reset link sent!");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center pt-24 pb-16">
        <div className="container-premium w-full max-w-md">
          <div className="rounded-3xl border border-border bg-surface p-8 premium-shadow">
            <div className="mb-6 flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 ring-1 ring-primary/30">
                <Mountain className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold">Reset Password</h1>
              <p className="mt-1 text-sm text-muted">
                Enter your email and we&apos;ll send a reset link
              </p>
            </div>

            {sent ? (
              <div className="text-center">
                <p className="text-sm text-muted">
                  Check your inbox for a password reset link.
                </p>
                <Link href="/login" className="mt-4 inline-block text-sm text-primary hover:underline">
                  Back to login
                </Link>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            )}

            <Link
              href="/login"
              className="mt-6 flex items-center justify-center gap-2 text-sm text-muted hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
