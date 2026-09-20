export default function StorefrontLoading() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] pt-[calc(var(--announcement-height)+var(--nav-height-mobile)+2rem)] lg:pt-[calc(var(--announcement-height)+var(--nav-height-desktop)+3rem)]" role="status" aria-label="Loading Porsion Studio">
      <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-6 px-[var(--gutter)]">
        <div className="h-3 w-28 animate-pulse bg-[var(--color-border)]" />
        <div className="h-12 max-w-xl animate-pulse bg-[var(--color-border)]" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => <div key={index} className="aspect-[4/5] animate-pulse bg-[var(--color-hover-surface)]" />)}
        </div>
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
