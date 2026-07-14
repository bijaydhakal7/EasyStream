"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-8 text-center">

      <h1 className="text-2xl font-bold">Something went wrong</h1>

      <p className="text-muted-foreground">
        An unexpected error occurred while loading this page.
      </p>

      <Button onClick={reset} className="mt-2">
        Try Again
      </Button>

    </main>
  );
}
