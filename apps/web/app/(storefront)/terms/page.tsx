import type { Metadata } from "next";
import { businessProfile, fulfillmentPolicy } from "@/config/business";
import { LegalPolicyPage } from "@/components/storefront/legal-policy-page";

export const metadata: Metadata = {
  title: "শর্তাবলি",
  description: "পোরশন স্টুডিওর ক্রয়-বিক্রয়, ডেলিভারি, পণ্যফেরত ও বিক্রয়োত্তর সেবার শর্তাবলি।",
  alternates: { canonical: "/terms" }
};

const courierNames = fulfillmentPolicy.couriers.join(" ও ");
const insideDhakaDelivery = "ঢাকার ভেতরে আনুমানিক সময় " + fulfillmentPolicy.insideDhaka.window + "।";
const outsideDhakaDelivery = "ঢাকার বাইরে আনুমানিক সময় " + fulfillmentPolicy.outsideDhaka.window + "।";
const returnWindow = "ডেলিভারির " + fulfillmentPolicy.returnWindowDays + " calendar দিনের মধ্যে return বা exchange request করতে হবে।";

const sections = [
  {
    title: "১. ব্যবসায়িক পরিচিতি",
    body: businessProfile.nameBn + " (" + businessProfile.name + ") বাংলাদেশভিত্তিক digital-first fashion house। FARIS এবং LAAJ একই parent business-এর স্বতন্ত্র brand experience; product order, customer support, delivery এবং নীতিমালা Porsion Studio-এর কেন্দ্রীয় customer-care framework অনুযায়ী পরিচালিত হবে।"
  },
  {
    title: "২. পণ্য, মূল্য ও প্রাপ্যতা",
    body: "প্রতিটি product page-এ পণ্যের ছবি, নাম, বিবরণ, রং, size বা variant এবং BDT মূল্য দেখানো হয়। প্রদর্শিত মূল্য ও availability পরিবর্তিত হতে পারে; অর্ডার গ্রহণের আগে নির্বাচিত product, quantity, delivery charge এবং মোট পরিশোধযোগ্য অর্থ customer দেখতে পারবেন।"
  },
  {
    title: "৩. অর্ডার ও পেমেন্ট",
    body: "Customer সঠিক নাম, mobile number, delivery address এবং প্রয়োজনীয় order তথ্য দেবেন। Cash on Delivery এবং SSLCommerz-এর মাধ্যমে bKash, Nagad, Rocket, bank card বা উপলব্ধ payment channel ব্যবহার করা যেতে পারে। Online payment-এর ক্ষেত্রে নিরাপদ payment provider-এর window-তে payment সম্পন্ন হবে; Porsion Studio card বা wallet credential সংরক্ষণ করে না।"
  },
  {
    title: "৪. ডেলিভারি সময়সীমা ও চার্জ",
    body: "Delivery partner হিসেবে " + courierNames + " ব্যবহার করা হয়। " + insideDhakaDelivery + " " + outsideDhakaDelivery + " Final charge destination, parcel weight, COD ও courier service অনুযায়ী order submit করার আগে checkout-এ দেখানো হবে। প্রাকৃতিক দুর্যোগ, courier disruption, ভুল বা অসম্পূর্ণ address এবং customer-এর অনুপস্থিতির কারণে delivery সময় পরিবর্তিত হতে পারে; এ ক্ষেত্রে customer-কে যথাসম্ভব জানানো হবে।"
  },
  {
    title: "৫. পণ্যফেরত, বিনিময় ও মূল্যফেরত",
    body: returnWindow + " পণ্যটি অব্যবহৃত, অক্ষত, tag বা original packaging-সহ এবং invoice বা order reference-সহ থাকতে হবে। " + (fulfillmentPolicy.nonReturnableBn ?? "ব্যবহৃত, ধোয়া, পরিবর্তিত, hygiene-sensitive বা অন্তর্বাসজাত পণ্য এবং product page-এ final sale বলা পণ্য সাধারণ returnযোগ্য নয়; তবে ভুল বা defective item-এর claim করা যাবে।") + " " + (fulfillmentPolicy.exchangePolicyBn ?? "Stock থাকলে eligible item-এ একবার size বা colour exchange বিবেচনা করা হবে।") + " " + (fulfillmentPolicy.refundMethodBn ?? "যোগ্য refund original payment method অথবা COD order-এর জন্য verified bKash, Nagad বা bank account-এ দেওয়া হবে।") + " Refund " + fulfillmentPolicy.refundProcessingWindowBn + " process করা হবে।"
  },
  {
    title: "৬. বিক্রয়োত্তর সেবা ও অভিযোগ",
    body: "Delivery, size, defect, return, refund বা অন্য কোনো order সমস্যা হলে customer " + businessProfile.email + (businessProfile.phone ? " অথবা " + businessProfile.phone : "") + "-এ যোগাযোগ করবেন। Order number, product ছবি এবং সমস্যার সংক্ষিপ্ত বিবরণ দিলে support team যাচাই করে পরবর্তী পদক্ষেপ জানাবে।"
  },
  {
    title: "৭. customer-এর দায়িত্ব",
    body: "Customer সঠিক contact ও delivery তথ্য দেবেন, product page-এর size guide, fabric care এবং return eligibility অর্ডারের আগে দেখবেন এবং courier delivery গ্রহণের সময় package-এর দৃশ্যমান ক্ষতি থাকলে দ্রুত support team-কে জানাবেন।"
  },
  {
    title: "৮. নীতিমালা পরিবর্তন",
    body: "ব্যবসায়িক বা আইনগত প্রয়োজন হলে এই শর্তাবলি পরিবর্তন করা হতে পারে। পরিবর্তিত শর্তাবলি এই page-এ প্রকাশের পরবর্তী order-এর ক্ষেত্রে প্রযোজ্য হবে।"
  }
];

export default function TermsPage() {
  return <LegalPolicyPage eyebrow="আইনি তথ্য" title="শর্তাবলি" introduction="অর্ডার দেওয়ার আগে ক্রয়-বিক্রয়, ডেলিভারি, পণ্যফেরত ও বিক্রয়োত্তর সেবার নিয়ম পরিষ্কারভাবে জানা আপনার অধিকার।" sections={sections} />;
}
