"use client";

import { useEffect } from "react";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://cdn.iubenda.com/iubenda.js";
    document.body.appendChild(s);
  }, []);

  return (
    <main className="min-h-screen bg-sol-cream pt-32 pb-24 px-6 md:px-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="font-serif text-4xl font-light text-sol-bark mb-8">
          Privacy Policy
        </h1>
        <a
          href="https://www.iubenda.com/privacy-policy/39774069"
          className="iubenda-black iubenda-noiframe iubenda-embed"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
      </div>
    </main>
  );
}
