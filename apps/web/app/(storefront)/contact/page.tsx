import type { Metadata } from "next";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container, Heading, Link, Section, Text } from "@porsion/ui";
import { SiteShell } from "@/components/layout/site-shell";
import { businessProfile } from "@/config/business";
import { storefrontFooter, storefrontSecondaryAction } from "@/lib/storefront/page";

export const metadata: Metadata = {
  title: "যোগাযোগ",
  description: "পণ্য, অর্ডার, ডেলিভারি, রিটার্ন বা Porsion Studio সম্পর্কে অফিসিয়াল কাস্টমার সহায়তা।",
  alternates: { canonical: "/contact" }
};

const whatsappNumber = (businessProfile.whatsapp ?? businessProfile.phone)?.replace(/\D/g, "");
const whatsappHref = whatsappNumber
  ? "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent("Hello Porsion Studio, I need help with an order.")
  : undefined;

export default function ContactPage() {
  return (
    <SiteShell footer={storefrontFooter()}>
      <Section aria-labelledby="contact-title" lang="bn">
        <Container className="grid max-w-[var(--container-checkout)] gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(22rem,1.1fr)] lg:items-start">
          <div className="grid min-w-0 gap-5">
            <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Customer care</Text>
            <Heading as="h1" id="contact-title" size="lg">কীভাবে সাহায্য করতে পারি?</Heading>
            <Text tone="muted">পণ্য, সাইজ, অর্ডার, ডেলিভারি, রিটার্ন বা রিফান্ড সম্পর্কে অফিসিয়াল চ্যানেলে যোগাযোগ করুন। দ্রুত সহায়তার জন্য অর্ডার নম্বর সঙ্গে রাখুন।</Text>

            <address className="grid gap-2 border-y border-[var(--color-border)] py-5 text-sm not-italic">
              <a href={"mailto:" + businessProfile.email} className="flex min-h-11 min-w-0 items-center gap-3 break-all">
                <Mail aria-hidden="true" size={17} />
                {businessProfile.email}
              </a>
              {businessProfile.phone ? (
                <a href={"tel:" + businessProfile.phone.replace(/\s/g, "")} className="flex min-h-11 items-center gap-3">
                  <Phone aria-hidden="true" size={17} />
                  {businessProfile.phone}
                </a>
              ) : null}
              {businessProfile.addressBn || businessProfile.addressEn ? (
                <div className="flex min-h-11 items-start gap-3 py-3">
                  <MapPin aria-hidden="true" size={17} className="mt-0.5 shrink-0" />
                  <span>{businessProfile.addressBn ?? businessProfile.addressEn}</span>
                </div>
              ) : null}
              {businessProfile.supportHoursBn ? (
                <Text size="sm" tone="muted">Support hours: {businessProfile.supportHoursBn}</Text>
              ) : null}
            </address>

            <div className="grid gap-3 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-hover-surface)] p-4">
              <div className="grid gap-1">
                <Text as="p" size="sm" tone="muted" className="uppercase tracking-[0.18em]">Fastest route</Text>
                <Text as="h2" className="font-medium">Contact WhatsApp</Text>
                <Text size="sm" tone="muted">For quick help with size, fit, order changes, delivery, or product questions, WhatsApp is the fastest route.</Text>
              </div>
              {whatsappHref ? (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 text-sm font-medium !text-[var(--color-on-accent)] transition hover:!text-[var(--color-on-accent)] hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                  Contact WhatsApp
                  <MessageCircle aria-hidden="true" size={16} className="shrink-0" />
                </a>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={"mailto:" + businessProfile.email} className={storefrontSecondaryAction}>
                <Mail aria-hidden="true" size={16} />
                Email
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              {businessProfile.social.facebook ? (
                <a href={businessProfile.social.facebook} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">
                  <Facebook aria-hidden="true" size={16} />
                  Facebook
                </a>
              ) : null}
              {businessProfile.social.instagram ? (
                <a href={businessProfile.social.instagram} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 underline underline-offset-4">
                  <Instagram aria-hidden="true" size={16} />
                  Instagram
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid min-w-0 gap-8 border-y border-[var(--color-border)] py-8">
            <div className="grid gap-2">
              <Text as="h2" className="font-medium">Order support</Text>
              <Text size="sm" tone="muted">অর্ডার নম্বর, ব্যবহৃত মোবাইল নম্বর এবং সমস্যার সংক্ষিপ্ত বিবরণ দিন। ভুল বা ক্ষতিগ্রস্ত পণ্যের পরিষ্কার ছবি দিলে যাচাই দ্রুত হবে।</Text>
            </div>
            <div className="grid gap-2">
              <Text as="h2" className="font-medium">রিটার্ন ও এক্সচেঞ্জ</Text>
              <Text size="sm" tone="muted">ডেলিভারি পাওয়ার ৩ ক্যালেন্ডার দিনের মধ্যে অনুরোধ করুন। অনুমোদন পাওয়ার আগে নিজে থেকে পার্সেল পাঠাবেন না।</Text>
              <Link href="/returns" variant="underline">রিটার্ন নীতিমালা দেখুন</Link>
            </div>
            <div className="grid gap-2">
              <Text as="h2" className="font-medium">ডেলিভারি</Text>
              <Text size="sm" tone="muted">Steadfast Courier বা Pathao Courier-এর tracking reference দিয়ে পার্সেলের অবস্থা দেখা যাবে। দেরি হলে courier reference-সহ জানান।</Text>
              <Link href="/delivery" variant="underline">ডেলিভারি নীতিমালা দেখুন</Link>
            </div>
            <div className="grid gap-2">
              <Text as="h2" className="font-medium">অভিযোগ সমাধান</Text>
              <Text size="sm" tone="muted">অভিযোগ পাওয়ার পর দ্রুত প্রাপ্তি নিশ্চিত করা হবে। প্রয়োজনীয় যাচাই শেষে সমাধান ও পরবর্তী পদক্ষেপ জানানো হবে।</Text>
            </div>
          </div>
        </Container>
      </Section>
    </SiteShell>
  );
}