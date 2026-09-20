import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/storefront/legal-policy-page";
import { businessProfile } from "@/config/business";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতিমালা",
  description: "Porsion Studio কীভাবে customer ও visitor-এর তথ্য সংগ্রহ, ব্যবহার ও সুরক্ষিত রাখে।",
  alternates: { canonical: "/privacy" }
};

const sections = [
  {
    title: "১. আমরা যে তথ্য সংগ্রহ করতে পারি",
    body: "Order ও customer service পরিচালনার জন্য নাম, mobile number, email, delivery address, order history, selected size, payment status, support conversation এবং প্রয়োজনীয় device বা consent information সংগ্রহ করা হতে পারে। Card PIN, CVV বা mobile wallet password Porsion Studio সংগ্রহ বা সংরক্ষণ করে না।"
  },
  {
    title: "২. তথ্য ব্যবহারের উদ্দেশ্য",
    body: "Order confirm, payment status, delivery, return/refund, fraud prevention, customer support, service security ও performance উন্নত করতে তথ্য ব্যবহার করা হয়। Marketing message বা personalised recommendation কেবল applicable consent ও preference অনুযায়ী পাঠানো হবে।"
  },
  {
    title: "৩. Payment information",
    body: "Online payment SSLCommerz বা connected regulated payment provider-এর secure window-এ সম্পন্ন হয়। Porsion Studio reconciliation, refund ও support-এর জন্য transaction reference, amount এবং status সংরক্ষণ করতে পারে; customer-এর গোপন banking credential নয়।"
  },
  {
    title: "৪. Courier ও service provider",
    body: "Delivery সম্পন্ন করতে Steadfast Courier, Pathao Courier বা selected courier-এর সঙ্গে প্রয়োজনীয় নাম, mobile number, address ও parcel information শেয়ার করা হতে পারে। Hosting, payment, communication, security বা analytics provider শুধু নিজ নিজ service দেওয়ার প্রয়োজন অনুযায়ী তথ্য process করতে পারবে।"
  },
  {
    title: "৫. Cookies ও analytics",
    body: "Essential cookies bag, checkout, security ও language preference চালাতে ব্যবহৃত হয়। Optional analytics বা advertising cookies customer-এর consent অনুযায়ী সক্রিয় হবে এবং Cookie settings থেকে preference পরিবর্তন করা যাবে।"
  },
  {
    title: "৬. সংরক্ষণ ও নিরাপত্তা",
    body: "তথ্য service, accounting, complaint handling, fraud prevention ও আইনগত প্রয়োজন যতদিন থাকে ততদিন সীমিতভাবে রাখা হবে। Access control, encryption in transit, secure provider এবং প্রয়োজনীয় audit control ব্যবহার করে ঝুঁকির অনুপাতে তথ্য সুরক্ষিত করা হবে।"
  },
  {
    title: "৭. Customer-এর অধিকার",
    body: "Customer নিজের তথ্যের copy, correction, consent preference বা প্রযোজ্য deletion support চাইতে পারেন। নিরাপত্তার জন্য request process করার আগে identity ও order ownership যাচাই করা হতে পারে।"
  },
  {
    title: "৮. যোগাযোগ ও পরিবর্তন",
    body: "Privacy বিষয়ে " + businessProfile.email + (businessProfile.phone ? " অথবা " + businessProfile.phone : "") + "-এ যোগাযোগ করুন। আইন, provider বা service পরিবর্তিত হলে এই policy update করা হতে পারে; গুরুত্বপূর্ণ পরিবর্তন এই page-এ প্রকাশ করা হবে।"
  }
];

export default function PrivacyPage() {
  return (
    <LegalPolicyPage
      eyebrow="আইনি তথ্য"
      title="গোপনীয়তা নীতিমালা"
      introduction="আমরা customer experience চালাতে যতটুকু তথ্য প্রয়োজন, ততটুকুই দায়িত্বশীলভাবে ব্যবহার করতে চাই।"
      sections={sections}
    />
  );
}
