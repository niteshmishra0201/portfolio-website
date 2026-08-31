"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center">
        <h2 className="font-display text-2xl text-ink">Something went wrong</h2>
        <p className="text-text-secondary text-sm mt-2 max-w-sm">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-4 px-5 py-2.5 rounded-lg bg-ink text-white text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  );
}