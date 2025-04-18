"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Something went wrong!</h1>

      <p className="text-muted-foreground max-w-md mb-8">
        An unexpected error occurred. We've been notified and are working to fix the issue.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Go Home
          </Link>
        </Button>
        <Button variant="outline" onClick={() => reset()}>
          <RotateCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
      </div>
    </div>
  );
}
