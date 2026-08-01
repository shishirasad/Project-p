"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-24 text-[var(--color-text)]">
      <div className="mx-auto max-w-[720px]">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">Experience interrupted</p>
        <h1 className="mt-4 text-4xl font-medium">Something did not load correctly.</h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
          Please try again. If the issue continues, the team can investigate without exposing technical details here.
        </p>
        <button className="mt-8 border border-[var(--color-border)] px-5 py-3 text-sm uppercase tracking-[0.16em]" onClick={reset}>
          Try again
        </button>
      </div>
    </main>
  );
}
