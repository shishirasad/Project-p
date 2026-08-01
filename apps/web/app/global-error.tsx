"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: "100vh", padding: "96px 24px", fontFamily: "system-ui, sans-serif" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p style={{ textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12 }}>Porsion Studio</p>
            <h1>Something did not load correctly.</h1>
            <p>Please try again.</p>
            <button onClick={reset}>Try again</button>
          </div>
        </main>
      </body>
    </html>
  );
}
