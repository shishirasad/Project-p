import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/storefront/legal-policy-page";
import { businessProfile, fulfillmentPolicy } from "@/config/business";

export const metadata: Metadata = {
  title: "পণ্যফেরত, বিনিময় ও মূল্যফেরত",
  description: "Porsion Studio-এর ৩ দিনের return request, exchange ও refund policy।",
  alternates: { canonical: "/returns" }
};

const supportContact = businessProfile.phone
  ? businessProfile.phone + " অথবা " + businessProfile.email
  : businessProfile.email;
const returnWindow = fulfillmentPolicy.returnWindowDays;

const sections = [
  {
    title: "১. " + returnWindow + " দিনের return request window",
    body: "পণ্য delivery পাওয়ার দিন থেকে " + returnWindow + " calendar দিনের মধ্যে official phone, WhatsApp বা email-এ return বা exchange request করতে হবে। এই সময়ের মধ্যে request করাই যথেষ্ট; courier parcel পরে pickup করলে customer-এর eligibility নষ্ট হবে না। Order number, সমস্যার বিবরণ ও প্রয়োজন হলে পরিষ্কার ছবি দিন।"
  },
  {
    title: "২. Return বা exchange-এর যোগ্যতা",
    body: "পণ্যটি শুধু fit পরীক্ষা ছাড়া ব্যবহার করা যাবে না এবং তা unwashed, unaltered, দাগ বা গন্ধমুক্ত অবস্থায় original tag, packaging ও order reference-সহ রাখতে হবে। ভুল size পাঠানো, ভুল product, manufacturing defect, transit damage অথবা description-এর সঙ্গে গুরুত্বপূর্ণ অমিল থাকলে return, exchange বা refund review করা হবে।"
  },
  {
    title: "৩. Hygiene ও non-returnable product",
    body: fulfillmentPolicy.nonReturnableBn ?? "Underwear, innerwear, inner cap, niqab-এর face-contact অংশ, pierced accessory এবং অন্যান্য hygiene-sensitive product seal খোলা বা try করা হলে সাধারণ return বা size exchange গ্রহণ করা হবে না। তবে ভুল, ক্ষতিগ্রস্ত বা manufacturing-defective item পাঠানো হলে এই সীমাবদ্ধতা প্রযোজ্য নয়। Gift card, personalized item এবং product page-এ স্পষ্টভাবে final sale লেখা item-ও সাধারণ return-এর বাইরে থাকবে।"
  },
  {
    title: "৪. Courier charge কার",
    body: "ভুল, ক্ষতিগ্রস্ত, অসম্পূর্ণ বা defective product Porsion Studio পাঠালে অনুমোদিত pickup, replacement ও পুনরায় delivery-এর যুক্তিসঙ্গত courier charge Porsion Studio বহন করবে। সঠিক product পাওয়ার পর size, colour বা personal preference বদলালে customer courier-এর actual return এবং re-delivery charge বহন করবেন। Delivery সম্পন্ন হলে initial delivery charge সাধারণত refundable নয়, যদি সমস্যাটি Porsion Studio-এর কারণে না হয়।"
  },
  {
    title: "৫. Exchange",
    body: fulfillmentPolicy.exchangePolicyBn ?? "Stock থাকলে প্রতি eligible item-এ একবার size বা colour exchange করা যাবে। পছন্দের variant stock-এ না থাকলে customer অন্য eligible product, store credit অথবা applicable refund বেছে নিতে পারবেন। নতুন product-এর দাম বেশি হলে পার্থক্য পরিশোধ করতে হবে; কম হলে approved difference refund করা হবে।"
  },
  {
    title: "৬. Refund",
    body: (fulfillmentPolicy.refundMethodBn ?? "Approved refund original payment method-এ ফেরত দেওয়া হবে। COD order-এর ক্ষেত্রে customer-এর verified bKash, Nagad বা bank account ব্যবহার করা হতে পারে।") + " Refund " + fulfillmentPolicy.refundProcessingWindowBn + " process করা হবে; payment provider-এর নিজস্ব processing time অতিরিক্ত হতে পারে। Porsion Studio order supply করতে ব্যর্থ হলে customer-এর সম্পূর্ণ অগ্রিম payment ফেরত দেওয়া হবে।"
  },
  {
    title: "৭. Return process",
    body: "প্রথমে " + supportContact + "-এ request করুন। Approval ও return reference পাওয়ার আগে নিজের মতো parcel পাঠাবেন না। Support team " + fulfillmentPolicy.couriers.join(" বা ") + "-এর pickup/return instruction, packaging এবং applicable charge জানাবে। Warehouse-এ পৌঁছানোর পর quality check শেষে exchange বা refund status জানানো হবে।"
  },
  {
    title: "৮. Damage report ও প্রমাণ",
    body: "Visible damage বা ভুল product যত দ্রুত সম্ভব, সম্ভব হলে ২৪ ঘণ্টার মধ্যে জানান। ছবি বা short video দ্রুত যাচাইয়ে সাহায্য করে, কিন্তু unboxing video না থাকার কারণে একটি otherwise valid consumer claim স্বয়ংক্রিয়ভাবে বাতিল হবে না।"
  },
  {
    title: "৯. Customer-এর আইনগত অধিকার",
    body: "এই policy সুষ্ঠু ও cost-effective return process নির্ধারণ করে; এটি বাংলাদেশের প্রযোজ্য consumer law বা customer-এর অন্য কোনো বাধ্যতামূলক আইনগত অধিকার সীমিত করে না। কোনো complaint পেলে Porsion Studio দ্রুত review করে customer-কে resolution জানাবে।"
  }
];

export default function ReturnsPage() {
  return (
    <LegalPolicyPage
      eyebrow="Customer care"
      title="পণ্যফেরত, বিনিময় ও মূল্যফেরত"
      introduction={"Delivery পাওয়ার " + returnWindow + " দিনের মধ্যে request করুন। Brand-এর ভুলে customer courier charge দেবেন না; preference change হলে শুধু courier-এর actual applicable charge প্রযোজ্য হবে।"}
      sections={sections}
    />
  );
}
