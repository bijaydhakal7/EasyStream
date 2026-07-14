import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 py-8 text-center">

      <h1 className="text-6xl font-bold">404</h1>

      <p className="text-muted-foreground">
        We couldn&apos;t find what you were looking for.
      </p>

      <Button render={<Link href="/" />} className="mt-2">
        Back to matches
      </Button>

    </main>
  );
}
