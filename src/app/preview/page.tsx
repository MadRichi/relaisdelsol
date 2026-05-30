"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PreviewPage() {
  const router = useRouter();

  useEffect(() => {
    // Set cookie via JavaScript — always works regardless of cache
    document.cookie =
      "preview_mode=relais2025; path=/; max-age=604800; samesite=lax";
    // Redirect to home after cookie is set
    router.replace("/");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-sol-cream">
      <p className="font-sans text-sm text-sol-bark/50">Caricamento...</p>
    </div>
  );
}
