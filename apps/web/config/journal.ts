export type JournalArticle = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  excerpt: string;
  readTime: string;
  published: string;
  media: {
    kind: "image";
    src: string;
    alt: string;
    width: number;
    height: number;
    sizes: string;
  };
  lead: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  quote: string;
  takeaways: string[];
  action: { label: string; href: string };
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "quiet-luxury",
    eyebrow: "House notes",
    title: "Why quiet luxury needs restraint.",
    intro: "The pieces people return to are rarely defined by noise. They are defined by material, proportion, and the confidence to let those things speak.",
    excerpt: "A practical look at why cloth, fit and repeated wear matter more than visible status.",
    readTime: "6 min read",
    published: "2026-08-01",
    media: { kind: "image", src: "/campaigns/house-hero-v1.jpg", alt: "Porsion Studio quiet luxury wardrobe in a warm architectural setting.", width: 1672, height: 941, sizes: "100vw" },
    lead: "For Porsion Studio, luxury begins with a quieter question: will this piece still feel right when the season has passed? The answer should live in how it fits, how it wears, and how naturally it becomes part of a wardrobe.",
    sections: [
      { title: "Restraint is an editing discipline", paragraphs: ["Quiet design is not the absence of ideas. It is the decision to keep only the lines, details and materials that make the garment more useful or more beautiful.", "A collar should hold its shape because that improves the piece. A seam should sit cleanly because it changes the silhouette. Decoration has to earn its place."] },
      { title: "Fit is the first signal", paragraphs: ["Before a label is noticed, proportion is felt. Shoulder, sleeve, rise, length and drape determine whether a garment looks natural on the person wearing it.", "That is why FARIS and LAAJ use different silhouette languages while sharing one standard of clarity and comfort."] },
      { title: "Longevity is a form of sustainability", paragraphs: ["The most responsible piece is often the one worn repeatedly. Versatile colour, repairable construction and sensible care allow a garment to remain useful beyond one campaign.", "Timeless does not mean without character. It means character strong enough to outlive a trend."] }
    ],
    quote: "The most lasting things rarely need to speak loudly.",
    takeaways: ["Choose proportion before decoration.", "Judge fabric by feel, recovery and repeat wear.", "Build combinations, not isolated purchases."],
    action: { label: "Explore the house collection", href: "/collection" }
  },
  {
    slug: "faris-laaj",
    eyebrow: "The House",
    title: "FARIS and LAAJ inside one house.",
    intro: "Two distinct wardrobe perspectives share one promise of product quality, customer care and quiet confidence.",
    excerpt: "Why Porsion Studio keeps menswear and womenswear distinct without making the customer experience fragmented.",
    readTime: "5 min read",
    published: "2026-08-03",
    media: { kind: "image", src: "/campaigns/house-hero-v1.jpg", alt: "FARIS menswear and LAAJ womenswear presented together by Porsion Studio.", width: 1672, height: 941, sizes: "100vw" },
    lead: "One shared house gives every customer the same foundation of trust. Separate brand worlds allow a visitor arriving from an advertisement, a recommendation or a search to enter through the wardrobe that already feels relevant.",
    sections: [
      { title: "One company, two clear entrances", paragraphs: ["FARIS is modern menswear shaped by quiet confidence. LAAJ is refined womenswear shaped by modest elegance and ease.", "The visual mood changes between them, but bag, checkout, delivery, returns and support remain connected under Porsion Studio."] },
      { title: "Separation without awkwardness", paragraphs: ["A FARIS visitor sees menswear first; a LAAJ visitor sees womenswear first. Neither path hides the other, and switching remains simple.", "This makes campaign tracking clearer while respecting the customer’s immediate intent."] },
      { title: "Shared standards matter", paragraphs: ["Fabric review, fit guidance, photography, product information and after-sales care follow one house standard.", "The result should feel like two departments inside one flagship, not unrelated websites stitched together."] }
    ],
    quote: "Different wardrobes, one standard of care.",
    takeaways: ["Enter through the brand relevant to you.", "Keep one bag and one customer relationship.", "Expect the same clarity from product page to delivery."],
    action: { label: "Choose FARIS or LAAJ", href: "/#brands" }
  },
  {
    slug: "faris-wardrobe",
    eyebrow: "FARIS guide",
    title: "Build a FARIS wardrobe that works harder.",
    intro: "Start with a small foundation, then add texture, warmth and character without losing clarity.",
    excerpt: "A practical menswear sequence from shirts and trousers to knitwear, outerwear and finishing pieces.",
    readTime: "7 min read",
    published: "2026-08-05",
    media: { kind: "image", src: "/catalog/faris-core-v1.jpg", alt: "FARIS core wardrobe of shirt, polo, T-shirt and tailored trouser.", width: 1122, height: 1402, sizes: "100vw" },
    lead: "A useful wardrobe reduces decisions without reducing expression. FARIS begins with pieces that combine easily, then introduces layers and accessories only where they add function.",
    sections: [
      { title: "Begin with four anchors", paragraphs: ["A crisp shirt, a well-made T-shirt, a composed polo and a balanced trouser cover most ordinary weeks.", "Choose navy, ivory, charcoal and stone first. Their value is not neutrality alone, but the number of combinations they create."] },
      { title: "Add seasonal depth", paragraphs: ["Knitwear softens tailoring. An overshirt bridges indoor and outdoor dressing. A Harrington or lightweight jacket adds structure without making the outfit formal.", "Bangladesh asks for breathable layers and sensible fabric weight; warmth should never come at the cost of wearability."] },
      { title: "Finish without overloading", paragraphs: ["A leather belt, reliable wallet, restrained footwear and considered socks are enough to complete most looks.", "The aim is coherence. Accessories should support the silhouette rather than compete with it."] }
    ],
    quote: "Good menswear should look considered and feel effortless.",
    takeaways: ["Build around four core colours.", "Balance one structured piece with one relaxed piece.", "Buy the next layer only when it creates several new combinations."],
    action: { label: "Shop the FARIS wardrobe", href: "/collection?brand=faris" }
  },
  {
    slug: "laaj-proportion",
    eyebrow: "LAAJ guide",
    title: "The quiet art of modest proportion.",
    intro: "Coverage, movement and femininity become more expressive when every layer is considered as part of one silhouette.",
    excerpt: "How LAAJ balances length, volume, layering and colour across everyday and occasion dressing.",
    readTime: "7 min read",
    published: "2026-08-06",
    media: { kind: "image", src: "/catalog/laaj-everyday-v1.jpg", alt: "LAAJ modest dresses, kurti, coordinated set and fluid trouser.", width: 1122, height: 1402, sizes: "100vw" },
    lead: "Modest dressing should not feel like a list of restrictions. LAAJ approaches it as composition: the relationship between neckline, sleeve, volume, length, fabric and movement.",
    sections: [
      { title: "Let one line lead", paragraphs: ["When the outer layer is fluid, keep the inner line calm. When a wide trouser creates volume below, use a cleaner tunic above.", "This balance gives the wearer room to move while keeping the whole look resolved."] },
      { title: "Use tone to connect layers", paragraphs: ["Ivory, taupe, rosewood, plum and muted sage can move from everyday to occasion without feeling overworked.", "A tonal scarf or dupatta connects the look; a single deeper shade provides focus."] },
      { title: "Occasion does not require excess", paragraphs: ["Meaningful moments can be marked through beautiful cloth, controlled embroidery and graceful drape.", "A piece becomes more valuable when it can return in a quieter form after the event."] }
    ],
    quote: "Elegance begins with how a piece lets you move.",
    takeaways: ["Balance volume across the whole silhouette.", "Connect layers through tone rather than exact matching.", "Choose occasion pieces that can be styled again."],
    action: { label: "Explore the LAAJ wardrobe", href: "/collection?brand=laaj" }
  },
  {
    slug: "fabric-care-bangladesh",
    eyebrow: "Care notes",
    title: "Care for clothes in a warm, humid climate.",
    intro: "Small habits around washing, drying and storage help fabric hold its colour, shape and hand feel for longer.",
    excerpt: "Practical garment care for Bangladesh, from cotton and linen to knitwear and occasion cloth.",
    readTime: "6 min read",
    published: "2026-08-08",
    media: { kind: "image", src: "/catalog/faris-layers-v1.jpg", alt: "Folded FARIS knitwear and outer layers prepared for careful storage.", width: 1122, height: 1402, sizes: "100vw" },
    lead: "Heat and humidity make thoughtful care more important, not more complicated. The essential rules are gentle washing, complete drying, breathable storage and attention before a small issue becomes permanent.",
    sections: [
      { title: "Wash less, wash better", paragraphs: ["Air a garment after wear when it is not visibly soiled. When washing is needed, use cool water, a gentle cycle and a mild detergent.", "Fast spinning and harsh heat shorten the life of fibres, elastics, dark colour and surface finish."] },
      { title: "Dry completely in shade", paragraphs: ["Direct sun can fade deeper colours, while damp storage encourages odour and mildew. Reshape garments and dry them fully in moving air.", "Knitwear should dry flat. Structured garments should be supported on an appropriate hanger."] },
      { title: "Store with breathing room", paragraphs: ["Avoid tightly packed wardrobes and sealed plastic for regular storage. Clean garments before storing them for a season.", "Check leather, metal trims and delicate embroidery separately; each material needs its own simple routine."] }
    ],
    quote: "Care is the final stage of good design.",
    takeaways: ["Use cool water and mild detergent.", "Dry fully away from aggressive sun.", "Store clean garments with air around them."],
    action: { label: "Read product care details", href: "/collection" }
  },
  {
    slug: "finding-your-size",
    eyebrow: "Fit guide",
    title: "Find your size with more confidence.",
    intro: "Three measurements, an honest fit preference and the product notes are usually enough to make a calmer choice.",
    excerpt: "A straightforward measuring process for FARIS and LAAJ, with guidance for choosing between sizes.",
    readTime: "5 min read",
    published: "2026-08-10",
    media: { kind: "image", src: "/guides/laaj-measuring-guide-v1.png", alt: "Porsion Studio body measuring guide for choosing a garment size.", width: 1122, height: 1402, sizes: "100vw" },
    lead: "A size label is only a starting point. The better choice comes from comparing your body measurement with the garment’s intended fit and deciding how much ease you prefer.",
    sections: [
      { title: "Measure without pulling", paragraphs: ["Use a flexible tape over a light layer. Keep it level and close to the body without compressing it.", "For tops, begin with chest or bust. For trousers, begin where the waistband will naturally sit."] },
      { title: "Read the fit description", paragraphs: ["Regular, tailored, relaxed and fluid describe different amounts of ease. The same body measurement may reasonably choose two sizes depending on the intended silhouette.", "Product pages explain the fit and identify the primary measurement for that piece."] },
      { title: "When between sizes", paragraphs: ["Choose the larger size for comfort, layering or a more relaxed modest line. Choose the smaller only when the product is designed with generous ease and you prefer a closer fit.", "Support can help compare measurements before an order is placed."] }
    ],
    quote: "The right size should support the intended silhouette and your comfort.",
    takeaways: ["Measure chest or bust, waist and hip.", "Compare against the specific product guide.", "Use fit preference to decide between sizes."],
    action: { label: "Open a product size guide", href: "/product/old-money-polo#fit-guide" }
  }
];

export function getJournalArticle(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}
