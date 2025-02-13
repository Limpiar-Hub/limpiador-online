import type { Metadata } from "next";
import { Suspense } from "react";
import { LoadingSpinner } from "@/components/loading-spinner";

export const metadata: Metadata = {
  title: "Start Here - Limpiador",
  description: "Discover the benefits of partnering with Limpiador and maximize your property's value.",
  openGraph: {
    title: "Start Here - Limpiador",
    description: "Discover the benefits of partnering with Limpiador and maximize your property's value.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function StartHerePage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <section className="container mx-auto py-12">
          <div className="flex justify-center">
            <img 
              src="/start.png" 
              alt="Start Here Banner" 
              className="w-[800px] h-auto max-w-full"
            />
          </div>
          <div className="flex justify-center mt-8">
            <img 
              src="/start2.png" 
              alt="Security Checks" 
              className="w-[600px] h-auto max-w-full"
            />
          </div>
        </section>
      </Suspense>
    </main>
  );
}
