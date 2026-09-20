function publicValue(name: string) {
  return process.env[name]?.trim() || undefined;
}

const courierPartners = publicValue("NEXT_PUBLIC_COURIER_PARTNERS")
  ?.split(",")
  .map((partner) => partner.trim())
  .filter(Boolean);

export const businessProfile = {
  name: "Porsion Studio",
  nameBn: publicValue("NEXT_PUBLIC_BUSINESS_NAME_BN") ?? "পোরশন স্টুডিও",
  email: publicValue("NEXT_PUBLIC_CONTACT_EMAIL") ?? "hello@porsionstudio.com",
  phone: publicValue("NEXT_PUBLIC_CONTACT_PHONE"),
  whatsapp: publicValue("NEXT_PUBLIC_WHATSAPP_NUMBER"),
  addressBn: publicValue("NEXT_PUBLIC_BUSINESS_ADDRESS_BN") ?? publicValue("NEXT_PUBLIC_BUSINESS_ADDRESS"),
  addressEn: publicValue("NEXT_PUBLIC_BUSINESS_ADDRESS_EN"),
  supportHoursBn: publicValue("NEXT_PUBLIC_SUPPORT_HOURS_BN"),
  dbidNumber: publicValue("NEXT_PUBLIC_DBID_NUMBER"),
  social: {
    facebook: publicValue("NEXT_PUBLIC_FACEBOOK_URL"),
    instagram: publicValue("NEXT_PUBLIC_INSTAGRAM_URL")
  }
} as const;

export const fulfillmentPolicy = {
  couriers: courierPartners?.length ? courierPartners : ["Steadfast Courier", "Pathao Courier"],
  pricingMode: "courier-calculated",
  insideDhaka: {
    chargeBdt: publicValue("NEXT_PUBLIC_DHAKA_DELIVERY_FEE_BDT"),
    window: publicValue("NEXT_PUBLIC_DHAKA_DELIVERY_WINDOW_BN") ?? "সাধারণত ১–২ কর্মদিবস"
  },
  outsideDhaka: {
    chargeBdt: publicValue("NEXT_PUBLIC_OUTSIDE_DHAKA_DELIVERY_FEE_BDT"),
    window: publicValue("NEXT_PUBLIC_OUTSIDE_DHAKA_DELIVERY_WINDOW_BN") ?? "সাধারণত ২–৩ কর্মদিবস"
  },
  returnWindowDays: publicValue("NEXT_PUBLIC_RETURN_WINDOW_DAYS") ?? "৩",
  returnAddressBn: publicValue("NEXT_PUBLIC_RETURN_ADDRESS_BN"),
  nonReturnableBn: publicValue("NEXT_PUBLIC_NON_RETURNABLE_ITEMS_BN"),
  refundMethodBn: publicValue("NEXT_PUBLIC_REFUND_METHOD_BN"),
  refundProcessingWindowBn: publicValue("NEXT_PUBLIC_REFUND_PROCESSING_WINDOW_BN") ?? "যাচাই সম্পন্ন হওয়ার পর সর্বোচ্চ ১০ দিনের মধ্যে",
  exchangePolicyBn: publicValue("NEXT_PUBLIC_EXCHANGE_POLICY_BN")
} as const;

export const dbidPublicProfileComplete = Boolean(
  businessProfile.phone
  && businessProfile.addressBn
  && businessProfile.social.facebook
  && businessProfile.social.instagram
  && fulfillmentPolicy.insideDhaka.window
  && fulfillmentPolicy.outsideDhaka.window
  && fulfillmentPolicy.returnWindowDays
);