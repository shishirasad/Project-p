import type { Metadata } from "next";
import { LegalPolicyPage } from "@/components/storefront/legal-policy-page";
import { fulfillmentPolicy } from "@/config/business";

export const metadata: Metadata = {
  title: "ডেলিভারি নীতিমালা",
  description: "Steadfast Courier ও Pathao Courier-এর মাধ্যমে Porsion Studio অর্ডারের ডেলিভারি, চার্জ ও সময়সীমা।",
  alternates: { canonical: "/delivery" }
};

const courierNames = fulfillmentPolicy.couriers.join(" ও ");
const insideDhakaCharge = fulfillmentPolicy.insideDhaka.chargeBdt
  ? "ডেলিভারি চার্জ ৳" + fulfillmentPolicy.insideDhaka.chargeBdt + "।"
  : "ঠিকানা, parcel weight, COD এবং courier service অনুযায়ী প্রযোজ্য charge checkout-এ হিসাব হবে।";
const outsideDhakaCharge = fulfillmentPolicy.outsideDhaka.chargeBdt
  ? "ডেলিভারি চার্জ ৳" + fulfillmentPolicy.outsideDhaka.chargeBdt + "।"
  : "গন্তব্য, parcel weight, COD এবং courier service অনুযায়ী প্রযোজ্য charge checkout-এ হিসাব হবে।";

const sections = [
  {
    title: "১. ডেলিভারি পার্টনার ও সেবার এলাকা",
    body: "বাংলাদেশের অর্ডার " + courierNames + "-এর মাধ্যমে পাঠানো হয়। গন্তব্যের coverage, parcel-এর ধরন, service availability এবং operational quality বিবেচনায় Porsion Studio উপযুক্ত courier নির্বাচন করবে। কোনো courier নির্দিষ্ট এলাকায় service না দিলে অন্য available partner ব্যবহার করা হতে পারে।"
  },
  {
    title: "২. ঢাকার ভেতরে",
    body: insideDhakaCharge + " আনুমানিক delivery time " + fulfillmentPolicy.insideDhaka.window + "। একই দিন বা express service পাওয়া গেলে তার আলাদা charge ও সময় checkout-এ দেখানো হবে।"
  },
  {
    title: "৩. ঢাকার বাইরে",
    body: outsideDhakaCharge + " আনুমানিক delivery time " + fulfillmentPolicy.outsideDhaka.window + "। remote area, weekly holiday, weather, transport disruption বা courier coverage-এর কারণে সময় কিছুটা পরিবর্তিত হতে পারে।"
  },
  {
    title: "৪. Delivery charge কীভাবে নির্ধারিত হয়",
    body: "Porsion Studio courier-এর applicable merchant rate অনুসরণ করে। Destination, weight, parcel size, COD, return বা special service-এর কারণে charge বদলাতে পারে। Order submit করার আগে available delivery charge দেখানো হবে; পরবর্তীতে customer-এর সম্মতি ছাড়া অতিরিক্ত charge যোগ করা হবে না।"
  },
  {
    title: "৫. Order processing ও tracking",
    body: "Order confirm হওয়ার পর parcel প্রস্তুত করে courier-এর কাছে handover করা হবে এবং available tracking reference SMS, WhatsApp, email বা account-এর মাধ্যমে দেওয়া হবে। Courier agent delivery-এর আগে customer-কে call করতে পারেন।"
  },
  {
    title: "৬. ব্যর্থ delivery ও পুনরায় পাঠানো",
    body: "ভুল বা অসম্পূর্ণ address, customer-এর অনুপস্থিতি বা ফোনে যোগাযোগ না পাওয়ার কারণে delivery ব্যর্থ হলে parcel return হতে পারে। Customer পুনরায় delivery চাইলে courier-এর নতুন applicable delivery charge অগ্রিম বা COD-এর সাথে যোগ হতে পারে; final amount আগে জানানো হবে।"
  },
  {
    title: "৭. অগ্রিম payment-এর order",
    body: "নির্ধারিত সময়ের মধ্যে অগ্রিম payment করা পণ্য supply করা সম্ভব না হলে customer-কে জানিয়ে original payment method-এ সম্পূর্ণ অর্থ ফেরতের প্রক্রিয়া শুরু করা হবে। Payment channel-এর processing time বাদে প্রযোজ্য নির্দেশনা অনুযায়ী সর্বোচ্চ ১০ দিনের মধ্যে refund initiate করা হবে।"
  },
  {
    title: "৮. International delivery",
    body: "International delivery চালু না হওয়া পর্যন্ত checkout-এ শুধু Bangladesh-এর supported address গ্রহণ করা হবে। ভবিষ্যতে country-specific customs, tax, delivery time এবং return terms আলাদাভাবে দেখানো হবে।"
  }
];

export default function DeliveryPage() {
  return (
    <LegalPolicyPage
      eyebrow="Customer care"
      title="ডেলিভারি নীতিমালা"
      introduction="Courier-এর বাস্তব charge ও serviceability অনুসরণ করে পরিষ্কার, trackable এবং সাশ্রয়ী delivery experience দেওয়াই আমাদের নীতি।"
      sections={sections}
    />
  );
}
