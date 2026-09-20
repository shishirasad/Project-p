"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@porsion/ui";
import { Headphones, MessageCircle, Search, ShieldCheck, Sparkles, WifiOff, X } from "lucide-react";
import { useStorefrontExperience } from "./storefront-experience-provider";

const quickActions = [
  { label: "Find an item", href: "/search", icon: Search },
  { label: "Choose a size", href: "/collection", icon: Sparkles },
  { label: "Delivery & returns", href: "/delivery", icon: ShieldCheck },
  { label: "Talk to the house", href: "/contact", icon: Headphones }
];

export function GlobalExperienceSurfaces() {
  const [online, setOnline] = useState(true);
  const [manageConsent, setManageConsent] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const {
    consent,
    consentSettingsOpen,
    conciergeOpen,
    closeConsentSettings,
    saveConsent,
    setConciergeOpen
  } = useStorefrontExperience();

  useEffect(() => {
    const sync = () => setOnline(window.navigator.onLine);
    sync();
    window.addEventListener("online", sync);
    window.addEventListener("offline", sync);
    return () => {
      window.removeEventListener("online", sync);
      window.removeEventListener("offline", sync);
    };
  }, []);

  useEffect(() => {
    if (consentSettingsOpen) {
      const frame = window.requestAnimationFrame(() => {
        setAnalytics(consent.analytics);
        setMarketing(consent.marketing);
        setManageConsent(true);
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [consent.analytics, consent.marketing, consentSettingsOpen]);

  const showConsent = !consent.decided || consentSettingsOpen;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");

  return (
    <>
      {!online ? (
        <div className="fixed inset-x-0 top-0 z-[var(--z-command)] flex min-h-11 items-center justify-center gap-2 bg-[var(--color-text)] px-4 text-center text-xs text-[var(--color-background)]" role="status">
          <WifiOff aria-hidden="true" size={16} />
          You are offline. Saved pages remain available; checkout needs a connection.
        </div>
      ) : null}

      <button
        type="button"
        style={{ display: showConsent ? "none" : undefined }}
        className="fixed bottom-6 right-6 z-[var(--z-nav)] hidden min-h-12 min-w-12 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-text)] text-[var(--color-background)] shadow-lg transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] lg:inline-flex"
        onClick={() => setConciergeOpen(!conciergeOpen)}
        aria-label={conciergeOpen ? "Close Porsion concierge" : "Open Porsion concierge"}
        aria-expanded={conciergeOpen}
        aria-controls="porsion-concierge-panel"
      >
        {conciergeOpen ? <X aria-hidden="true" size={21} /> : <MessageCircle aria-hidden="true" size={21} />}
      </button>

      {conciergeOpen ? (
        <aside
          id="porsion-concierge-panel"
          className="fixed inset-x-3 bottom-24 z-[var(--z-drawer)] max-h-[calc(100dvh-6.5rem)] overflow-y-auto overscroll-contain border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-xl sm:left-auto sm:right-5 sm:w-[380px] lg:bottom-20"
          role="dialog"
          aria-modal="false"
          aria-label="Porsion concierge"
        >
          <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] pb-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">Porsion Concierge</p>
              <h2 className="mt-1 font-serif text-xl text-[var(--color-text)]">How may we help?</h2>
              <p className="mt-1 text-xs leading-5 text-[var(--color-text-muted)]">Find a piece, confirm your size, or speak with the house.</p>
            </div>
            <button className="icon-action shrink-0 lg:!hidden" type="button" onClick={() => setConciergeOpen(false)} aria-label="Close concierge">
              <X aria-hidden="true" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 py-3">
            {quickActions.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-11 items-center gap-2 border border-[var(--color-border)] px-3 text-xs text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                onClick={() => setConciergeOpen(false)}
              >
                <Icon aria-hidden="true" size={16} className="shrink-0" />
                {label}
              </Link>
            ))}
          </div>

          <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-hover-surface)] p-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">Fastest support</p>
            <p className="mt-1 text-sm leading-5 text-[var(--color-text)]">Open WhatsApp for a quicker reply on size, fit, delivery, or order help.</p>
            <Link
              className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-4 text-sm font-medium !text-[var(--color-on-accent)] transition hover:!text-[var(--color-on-accent)] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
              href={whatsappNumber ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Porsion Studio, I would like help with an order.")}` : "/contact"}
              target={whatsappNumber ? "_blank" : undefined}
              rel={whatsappNumber ? "noreferrer" : undefined}
              onClick={() => setConciergeOpen(false)}
            >
              Contact WhatsApp
              <MessageCircle aria-hidden="true" size={17} className="shrink-0" />
            </Link>
            <p className="mt-2 text-[11px] leading-5 text-[var(--color-text-muted)]">
              {whatsappNumber
                ? "Keep your product, size, or order details ready for a faster reply."
                : "Add the official WhatsApp number in settings to enable one-tap chat."}
            </p>
          </div>
        </aside>
      ) : null}

      {showConsent ? (
        <section
          className="fixed inset-x-0 bottom-20 z-[var(--z-modal)] max-h-[calc(100dvh-6rem)] overflow-y-auto border-t border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] lg:bottom-0"
          role="dialog"
          aria-modal="false"
          aria-label="Privacy choices"
        >
          <div className="mx-auto grid w-full max-w-[var(--container-max)] gap-3 px-[var(--gutter)] py-3 sm:py-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <p className="max-w-2xl text-xs leading-5 text-[var(--color-text-muted)]">
                <span className="mr-2 font-medium text-[var(--color-text)]">Privacy</span>
                Necessary storage runs the shop. Optional data improves visits and recommendations.
                <button className="ml-2 font-medium text-[var(--color-text)] underline underline-offset-4" type="button" onClick={() => setManageConsent((current) => !current)}>
                  {manageConsent ? "Hide settings" : "Settings"}
                </button>
              </p>

              <div className="flex shrink-0 items-center gap-2">
                <Button variant="outline" className="flex-1 px-3 text-xs sm:flex-none" onClick={() => saveConsent({ analytics: false, marketing: false })}>Necessary</Button>
                <Button variant="outline" className="flex-1 px-3 text-xs sm:flex-none" onClick={() => saveConsent({ analytics: true, marketing: true })}>Accept all</Button>
                {consent.decided ? (
                  <button className="icon-action shrink-0" type="button" onClick={closeConsentSettings} aria-label="Close privacy settings"><X aria-hidden="true" size={18} /></button>
                ) : null}
              </div>
            </div>

            {manageConsent ? (
              <div className="grid gap-3 border-t border-[var(--color-border)] pt-3 sm:grid-cols-3">
                <ConsentChoice label="Necessary" description="Bag, wishlist and security." checked disabled onChange={() => undefined} />
                <ConsentChoice label="Analytics" description="Journey and performance insights." checked={analytics} onChange={setAnalytics} />
                <ConsentChoice label="Marketing" description="Relevant campaign measurement." checked={marketing} onChange={setMarketing} />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </>
  );
}

function ConsentChoice({ label, description, checked, disabled = false, onChange }: { label: string; description: string; checked: boolean; disabled?: boolean; onChange: (checked: boolean) => void }) {
  return (
    <label className="flex min-h-12 items-center justify-between gap-4">
      <span>
        <span className="block text-sm font-medium text-[var(--color-text)]">{label}</span>
        <span className="block text-xs leading-5 text-[var(--color-text-muted)]">{description}</span>
      </span>
      <input className="h-5 w-5 accent-[var(--color-accent)]" type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
    </label>
  );
}

export function CookieSettingsButton() {
  const { openConsentSettings } = useStorefrontExperience();
  return <button className="min-h-11 text-sm text-[var(--color-text-muted)] underline-offset-4 hover:text-[var(--color-text)] hover:underline" type="button" onClick={openConsentSettings}>Cookie settings</button>;
}


