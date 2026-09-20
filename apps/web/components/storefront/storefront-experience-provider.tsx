"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { CommerceImage } from "@porsion/ui";

const WISHLIST_KEY = "porsion:wishlist";
const RECENT_KEY = "porsion:recent-products";
const CONSENT_KEY = "porsion:consent";
const PREFERRED_BRAND_KEY = "porsion:preferred-brand";
const BAG_KEY = "porsion:bag";
const BAG_GIFT_KEY = "porsion:bag-gift";
const LAST_ORDER_KEY = "porsion:last-order";

export type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  decided: boolean;
};

export type StorefrontBagItem = {
  lineId: string;
  productId: string;
  productSlug: string;
  href: string;
  title: string;
  brand: string;
  price: string;
  image: CommerceImage;
  color?: string;
  size?: string;
  quantity: number;
};

export type StorefrontBagItemInput = Omit<StorefrontBagItem, "lineId">;

export type GiftPresentation = {
  enabled: boolean;
  note: string;
};

export type StorefrontOrder = {
  reference: string;
  items: StorefrontBagItem[];
  giftPresentation: GiftPresentation;
  payment: "cod" | "sslcommerz";
  placedAt: string;
};

type StorefrontExperienceValue = {
  experienceReady: boolean;
  wishlist: string[];
  recentProducts: string[];
  bag: StorefrontBagItem[];
  bagCount: number;
  giftPresentation: GiftPresentation;
  lastOrder: StorefrontOrder | null;
  consent: ConsentPreferences;
  consentSettingsOpen: boolean;
  conciergeOpen: boolean;
  preferredBrand: "faris" | "laaj" | "labannya" | null;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  recordRecentlyViewed: (productId: string) => void;
  addToBag: (item: StorefrontBagItemInput) => void;
  updateBagQuantity: (lineId: string, quantity: number) => void;
  removeFromBag: (lineId: string) => void;
  updateGiftPresentation: (gift: GiftPresentation) => void;
  completeCheckout: (payment: StorefrontOrder["payment"]) => string | null;
  openConsentSettings: () => void;
  closeConsentSettings: () => void;
  saveConsent: (preferences: Pick<ConsentPreferences, "analytics" | "marketing">) => void;
  setConciergeOpen: (open: boolean) => void;
  rememberBrand: (brand: "faris" | "laaj" | "labannya") => void;
};

const defaultConsent: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false
};

const defaultGiftPresentation: GiftPresentation = { enabled: false, note: "" };
const StorefrontExperienceContext = createContext<StorefrontExperienceValue | null>(null);

function readStringArray(key: string) {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) ?? "[]") as unknown;
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function readBag() {
  try {
    const value = JSON.parse(window.localStorage.getItem(BAG_KEY) ?? "[]") as unknown;
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is StorefrontBagItem => {
      if (!item || typeof item !== "object") return false;
      const candidate = item as Partial<StorefrontBagItem>;
      return typeof candidate.lineId === "string"
        && typeof candidate.productId === "string"
        && typeof candidate.productSlug === "string"
        && typeof candidate.href === "string"
        && typeof candidate.title === "string"
        && typeof candidate.brand === "string"
        && typeof candidate.price === "string"
        && typeof candidate.quantity === "number"
        && Boolean(candidate.image && typeof candidate.image.src === "string");
    }).map((item) => ({ ...item, quantity: Math.min(10, Math.max(1, Math.round(item.quantity))) }));
  } catch {
    return [];
  }
}

function readGiftPresentation() {
  try {
    const value = JSON.parse(window.localStorage.getItem(BAG_GIFT_KEY) ?? "null") as Partial<GiftPresentation> | null;
    return value
      ? { enabled: Boolean(value.enabled), note: typeof value.note === "string" ? value.note.slice(0, 180) : "" }
      : defaultGiftPresentation;
  } catch {
    return defaultGiftPresentation;
  }
}

function readLastOrder() {
  try {
    const value = JSON.parse(window.localStorage.getItem(LAST_ORDER_KEY) ?? "null") as Partial<StorefrontOrder> | null;
    if (!value || typeof value.reference !== "string" || !Array.isArray(value.items)) return null;
    if (value.payment !== "cod" && value.payment !== "sslcommerz") return null;
    return {
      reference: value.reference,
      items: value.items as StorefrontBagItem[],
      giftPresentation: value.giftPresentation
        ? { enabled: Boolean(value.giftPresentation.enabled), note: String(value.giftPresentation.note ?? "").slice(0, 180) }
        : defaultGiftPresentation,
      payment: value.payment,
      placedAt: typeof value.placedAt === "string" ? value.placedAt : new Date().toISOString()
    };
  } catch {
    return null;
  }
}

function persist(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function createLineId(item: Pick<StorefrontBagItemInput, "productSlug" | "color" | "size">) {
  return [item.productSlug, item.color ?? "default", item.size ?? "default"].join("::");
}

export function StorefrontExperienceProvider({ children }: { children: ReactNode }) {
  const [experienceReady, setExperienceReady] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [recentProducts, setRecentProducts] = useState<string[]>([]);
  const [bag, setBag] = useState<StorefrontBagItem[]>([]);
  const [giftPresentation, setGiftPresentation] = useState<GiftPresentation>(defaultGiftPresentation);
  const [lastOrder, setLastOrder] = useState<StorefrontOrder | null>(null);
  const [consent, setConsent] = useState<ConsentPreferences>(defaultConsent);
  const [consentSettingsOpen, setConsentSettingsOpen] = useState(false);
  const [conciergeOpen, setConciergeOpen] = useState(false);
  const [preferredBrand, setPreferredBrand] = useState<"faris" | "laaj" | "labannya" | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setWishlist(readStringArray(WISHLIST_KEY));
      setRecentProducts(readStringArray(RECENT_KEY));
      setBag(readBag());
      setGiftPresentation(readGiftPresentation());
      setLastOrder(readLastOrder());
      const storedBrand = window.localStorage.getItem(PREFERRED_BRAND_KEY);
      if (storedBrand === "faris" || storedBrand === "laaj" || storedBrand === "labannya") setPreferredBrand(storedBrand);

      try {
        const stored = JSON.parse(window.localStorage.getItem(CONSENT_KEY) ?? "null") as Partial<ConsentPreferences> | null;
        if (stored?.decided) {
          setConsent({
            necessary: true,
            analytics: Boolean(stored.analytics),
            marketing: Boolean(stored.marketing),
            decided: true
          });
        }
      } catch {
        setConsent(defaultConsent);
      }
      setExperienceReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) => {
      const next = current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId];
      persist(WISHLIST_KEY, next);
      return next;
    });
  }, []);

  const recordRecentlyViewed = useCallback((productId: string) => {
    setRecentProducts((current) => {
      const next = [productId, ...current.filter((id) => id !== productId)].slice(0, 8);
      persist(RECENT_KEY, next);
      return next;
    });
  }, []);

  const addToBag = useCallback((input: StorefrontBagItemInput) => {
    const lineId = createLineId(input);
    const quantity = Math.min(10, Math.max(1, Math.round(input.quantity)));
    setBag((current) => {
      const existing = current.find((item) => item.lineId === lineId);
      const next = existing
        ? current.map((item) => item.lineId === lineId ? { ...item, quantity: Math.min(10, item.quantity + quantity) } : item)
        : [...current, { ...input, lineId, quantity }];
      persist(BAG_KEY, next);
      return next;
    });
  }, []);

  const updateBagQuantity = useCallback((lineId: string, quantity: number) => {
    setBag((current) => {
      const next = current.map((item) => item.lineId === lineId ? { ...item, quantity: Math.min(10, Math.max(1, Math.round(quantity))) } : item);
      persist(BAG_KEY, next);
      return next;
    });
  }, []);

  const removeFromBag = useCallback((lineId: string) => {
    setBag((current) => {
      const next = current.filter((item) => item.lineId !== lineId);
      persist(BAG_KEY, next);
      return next;
    });
  }, []);

  const updateGiftPresentation = useCallback((gift: GiftPresentation) => {
    const next = { enabled: gift.enabled, note: gift.enabled ? gift.note.slice(0, 180) : "" };
    setGiftPresentation(next);
    persist(BAG_GIFT_KEY, next);
  }, []);

  const completeCheckout = useCallback((payment: StorefrontOrder["payment"]) => {
    if (!bag.length) return null;
    const now = new Date();
    const reference = `PS-${now.toISOString().slice(2, 10).replaceAll("-", "")}-${String(now.getTime()).slice(-4)}`;
    const order: StorefrontOrder = {
      reference,
      items: bag,
      giftPresentation,
      payment,
      placedAt: now.toISOString()
    };
    setLastOrder(order);
    persist(LAST_ORDER_KEY, order);
    setBag([]);
    persist(BAG_KEY, []);
    setGiftPresentation(defaultGiftPresentation);
    persist(BAG_GIFT_KEY, defaultGiftPresentation);
    return reference;
  }, [bag, giftPresentation]);

  const saveConsent = useCallback((preferences: Pick<ConsentPreferences, "analytics" | "marketing">) => {
    const next: ConsentPreferences = { necessary: true, ...preferences, decided: true };
    setConsent(next);
    persist(CONSENT_KEY, next);
    setConsentSettingsOpen(false);
  }, []);

  const rememberBrand = useCallback((brand: "faris" | "laaj" | "labannya") => {
    setPreferredBrand(brand);
    window.localStorage.setItem(PREFERRED_BRAND_KEY, brand);
  }, []);

  const bagCount = useMemo(() => bag.reduce((total, item) => total + item.quantity, 0), [bag]);
  const value = useMemo<StorefrontExperienceValue>(() => ({
    experienceReady,
    wishlist,
    recentProducts,
    bag,
    bagCount,
    giftPresentation,
    lastOrder,
    consent,
    consentSettingsOpen,
    conciergeOpen,
    preferredBrand,
    isWishlisted: (productId) => wishlist.includes(productId),
    toggleWishlist,
    recordRecentlyViewed,
    addToBag,
    updateBagQuantity,
    removeFromBag,
    updateGiftPresentation,
    completeCheckout,
    openConsentSettings: () => setConsentSettingsOpen(true),
    closeConsentSettings: () => setConsentSettingsOpen(false),
    saveConsent,
    setConciergeOpen,
    rememberBrand
  }), [addToBag, bag, bagCount, completeCheckout, conciergeOpen, consent, consentSettingsOpen, experienceReady, giftPresentation, lastOrder, preferredBrand, recentProducts, recordRecentlyViewed, rememberBrand, removeFromBag, saveConsent, toggleWishlist, updateBagQuantity, updateGiftPresentation, wishlist]);

  return <StorefrontExperienceContext.Provider value={value}>{children}</StorefrontExperienceContext.Provider>;
}

export function useStorefrontExperience() {
  const context = useContext(StorefrontExperienceContext);
  if (!context) throw new Error("useStorefrontExperience must be used inside StorefrontExperienceProvider");
  return context;
}