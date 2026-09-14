import { CONTACT_EMAIL, STORE_URL } from "../media/higgsfield"
import { withBase } from "../lib/base"

export const navLinks = [
  { label: "Products", to: "/#products" },
  { label: "Designs", to: "/designs" },
  { label: "Directory", to: "/directory" },
  { label: "Contact", to: "/#contact" },
] as const

export const products = [
  {
    id: "nfc-business-cards",
    title: "NFC Business cards",
    copy: "Premium NFC cards — tap a phone to share who you are. No app required.",
    images: [withBase("/media/products/nfc-cards.jpg")],
  },
  {
    id: "digital-business-card",
    title: "Digital Business Card",
    copy: "Your deets.pro page — share your photo, contact info, and links from one tap.",
    images: [withBase("/media/products/digital-business-card.jpg")],
  },
  {
    id: "wallet-card",
    title: "Wallet card",
    copy: "Add Deets to Apple Wallet or Google Wallet for one-tap sharing from your phone.",
    images: [withBase("/media/products/wallet.jpg")],
  },
  {
    id: "qr-menu",
    title: "QR Menu",
    copy: "A scan-to-open menu for restaurants, cafés, and venues — update it anytime.",
    images: [withBase("/media/products/qr-menu.jpg")],
  },
  {
    id: "link-in-bio",
    title: "Link in bio",
    copy: "One link for Instagram, TikTok, and everywhere else you show up.",
    images: [withBase("/media/products/link-in-bio.png")],
  },
  {
    id: "event-lead-capture",
    title: "Event lead capture",
    copy: "Collect names, contacts, and interest at events — no clipboards, no apps.",
    images: [withBase("/media/products/event-lead-capture.jpg")],
  },
] as const

export const howItWorksSteps = [
  {
    id: "customize",
    title: "Customize Your Digital Profile",
    copy: "Pick a design, add your details, and we ship your Deets card ready to use.",
    imageSrc: withBase("/media/how-it-works/customize.jpg"),
  },
  {
    id: "share",
    title: "Tap or scan",
    copy: "Anyone can tap with their phone or scan the QR — no app download needed.",
    imageSrc: withBase("/media/how-it-works/tap.jpg"),
    videoSrc: withBase("/media/how-it-works/tap.mp4"),
  },
  {
    id: "update",
    title: "Update anytime",
    copy: "Change your links, photo, or contact info from your account. The card stays current.",
    imageSrc: withBase("/media/how-it-works/update.jpg"),
  },
] as const

export type Template = {
  slug: string
  title: string
  url: string
  foil: string
  previewSrc?: string
  category: (typeof templateCategories)[number]["id"]
}

export const templateCategories = [
  { id: "all", label: "All templates" },
  { id: "corporate", label: "Corporate" },
  { id: "creative", label: "Creative" },
  { id: "aviation", label: "Aviation" },
  { id: "tech", label: "Tech" },
  { id: "personal", label: "Personal" },
] as const

export const templates: Template[] = [
  {
    slug: "six-degrees-technologies",
    title: "6 Degrees Technologies",
    url: "https://www.deets.pro/demo/design-samples/six-degrees-technologies",
    foil: "linear-gradient(135deg, #00d4ff 0%, #1a6dff 55%, #0a0a0a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.jpg"),
    category: "tech",
  },
  {
    slug: "burooj",
    title: "Burooj",
    url: "https://www.deets.pro/demo/design-samples/burooj",
    foil: "linear-gradient(135deg, #c9a227 0%, #8a5a12 50%, #1a1208 100%)",
    previewSrc: withBase("/media/templates/burooj.jpg"),
    category: "corporate",
  },
  {
    slug: "burooj-air",
    title: "Burooj Air",
    url: "https://www.deets.pro/demo/design-samples/burooj-air",
    foil: "linear-gradient(135deg, #7cf0ff 0%, #3aa0ff 48%, #e8f6ff 100%)",
    previewSrc: withBase("/media/templates/burooj-air.jpg"),
    category: "aviation",
  },
  {
    slug: "corporate-blue",
    title: "Corporate Blue",
    url: "https://www.deets.pro/demo/design-samples/corporate-blue",
    foil: "linear-gradient(135deg, #0b3a6e 0%, #1f7ae0 60%, #d6ecff 100%)",
    previewSrc: withBase("/media/templates/corporate-blue.jpg"),
    category: "corporate",
  },
  {
    slug: "deets",
    title: "deets",
    url: "https://www.deets.pro/demo/design-samples/deets",
    foil: "linear-gradient(135deg, #00d4ff 0%, #ff2d92 55%, #ff6b1a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.jpg"),
    category: "creative",
  },
  {
    slug: "efficiency-center",
    title: "Efficiency Center",
    url: "https://www.deets.pro/demo/design-samples/efficiency-center",
    foil: "linear-gradient(135deg, #b6ff3a 0%, #1fa37a 55%, #06332a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.jpg"),
    category: "corporate",
  },
]

export const extraTemplates: Template[] = [
  {
    slug: "linktree-base",
    title: "Linktree base",
    url: "https://www.deets.pro/demo/design-samples/linktree-base",
    foil: "linear-gradient(135deg, #39e07b 0%, #111 100%)",
    category: "personal",
  },
  {
    slug: "midnight",
    title: "Midnight",
    url: "https://www.deets.pro/demo/design-samples/midnight",
    foil: "linear-gradient(135deg, #1b1030 0%, #4b2a8a 60%, #00d4ff 100%)",
    category: "creative",
  },
  {
    slug: "naqsh",
    title: "Naqsh",
    url: "https://www.deets.pro/demo/design-samples/naqsh",
    foil: "linear-gradient(135deg, #d4af77 0%, #5c3d1e 100%)",
    category: "creative",
  },
  {
    slug: "neon-lime",
    title: "Neon Lime",
    url: "https://www.deets.pro/demo/design-samples/neon-lime",
    foil: "linear-gradient(135deg, #d8ff3f 0%, #1a1a1a 100%)",
    category: "personal",
  },
]

export const directoryPeople = [
  {
    name: "BuroojAir",
    handle: "@BuroojAir",
    blurb: "Burooj Air",
    href: "https://www.deets.pro/my/u/BuroojAir",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/2841/conversions/D8BOUQGnn4T1atTK07KfQ2CXxUZW9T-metaYnVyb29qYWlyLWxvZ281LnBuZw==--md.png",
  },
  {
    name: "Atheer Faihan Otaibi",
    handle: "@ETFDwXgcyB",
    blurb: "Solutions Director\n6 Degrees Technologies",
    href: "https://www.deets.pro/my/u/ETFDwXgcyB",
    avatarUrl: null,
  },
  {
    name: "Bilal Aldoos",
    handle: "@Bilal",
    blurb: "Property management\nBurooj Address Co.",
    href: "https://www.deets.pro/my/u/Bilal",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/2305/conversions/phpczaHlS-md.png",
  },
  {
    name: "Me Mohannad",
    handle: "@memohannad",
    blurb: "That Guy there somewhere",
    href: "https://www.deets.pro/my/u/memohannad",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/3185/conversions/858a8ee6-814a-48ed-a645-afbe5785cecd-md.png",
  },
  {
    name: "Mohammed Bin Faihan",
    handle: "@mohammedAlotaibi",
    blurb: "Chief Executive Officer\nNaqsh Holding Company",
    href: "https://www.deets.pro/my/u/mohammedAlotaibi",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/2969/conversions/fWrnjuTc6nUbsPBnZTCla3cCK0YqMH-metaTUZILnBuZw==--md.png",
  },
  {
    name: "Mohammed S. Barayan",
    handle: "@Mohammed_Barayan",
    blurb: "Drone Operator\nBuroojAir",
    href: "https://www.deets.pro/my/u/Mohammed_Barayan",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/2721/conversions/phpMpqv3U-md.png",
  },
  {
    name: "Mohannad Faihan Al Otaibi",
    handle: "@admin",
    blurb:
      "Techno-maniac; Founder of @6degrees_sa, CTO @promoefficiency, @zahmaola. Embracing change, coding, and innovation. #HODL",
    href: "https://www.deets.pro/my/u/admin",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/3099/conversions/a133691f-9eea-4eca-8e29-bab6e5c33be2-md.png",
  },
  {
    name: "Nabil Aljabery",
    handle: "@nabil",
    blurb: "خبير في التجارة الالكترونية والتسويق الالكتروني مستشار تسويق",
    href: "https://www.deets.pro/my/u/nabil",
    avatarUrl:
      "https://hel1.your-objectstorage.com/deets-prod/85/conversions/HdC7vpuO7tUWLsrtd7qpspQqYdH2_1629391674202_400x400-md.png",
  },
] as const

export const testimonials = [
  {
    id: "mohannad",
    quote:
      "I stopped reprinting cards every time my title changed. One tap and people have everything.",
    name: "Mohannad Faihan Al Otaibi",
    title: "Founder",
    company: "6 Degrees Technologies",
    location: "Riyadh, Saudi Arabia",
    initials: "MO",
  },
  {
    id: "nabil",
    quote:
      "Clients actually save my details now. No more lost cards at events — they tap and go.",
    name: "Nabil Aljabery",
    title: "Marketing consultant",
    company: "Independent",
    location: "Riyadh, Saudi Arabia",
    initials: "NA",
  },
  {
    id: "sara",
    quote:
      "Our team cards look sharp and stay on brand. Updating profiles takes minutes, not a reprint run.",
    name: "Sara Al-Rashid",
    title: "Marketing Director",
    company: "Riyadh Creative Co.",
    location: "Riyadh, Saudi Arabia",
    initials: "SA",
  },
  {
    id: "layla",
    quote:
      "Networking feels effortless now. People remember me because the card actually does something.",
    name: "Layla Hassan",
    title: "Partnerships Lead",
    company: "Burooj Air",
    location: "Jeddah, Saudi Arabia",
    initials: "LH",
  },
] as const

export const pricingPlans = [
  {
    id: "free",
    label: "Free",
    badge: "For individuals",
    billing: {
      monthly: { price: "0", currency: "SAR", unit: "", note: "Free forever" },
      yearly: { price: "0", currency: "SAR", unit: "", note: "Free forever" },
    },
    copy: "Share your card, build your network and turn good meetings into good business.",
    cta: "Get started",
    href: "start",
    includes: "",
    groups: [
      {
        heading: "",
        items: [
          "Two free digital business cards",
          "Unlimited sharing",
          "Unlimited contact creation",
          "QR code, widget, email & SMS sharing",
          "Add to Google or Apple Wallet",
          "Personal email signature",
          "Virtual backgrounds",
        ],
        note: "",
      },
    ],
    header: "#156143",
    body: "#f3f8e4",
    ink: "#cfe86a",
    button: "#aed141",
    buttonInk: "#156143",
  },
  {
    id: "premium",
    label: "Premium",
    badge: "For individuals",
    billing: {
      monthly: {
        price: "37.46",
        currency: "SAR",
        unit: "/ month",
        note: "Billed monthly",
      },
      yearly: {
        price: "31.24",
        currency: "SAR",
        unit: "/ month",
        note: "Billed annually",
      },
    },
    copy: "Stand out with a branded card, capture conversations with AI Notetaker, and enrich every contact automatically.",
    cta: "Upgrade to Premium",
    href: "start",
    includes: "Everything in Free, plus:",
    groups: [
      {
        heading: "",
        items: [
          "Create up to five cards",
          "Universal contact scanner",
          "AI notetaker",
          "AI contact enrichment",
          "Branded QR code",
          "Custom card colours & design",
          "Export contacts",
        ],
        note: "",
      },
    ],
    header: "#aed141",
    body: "#dbe7e5",
    ink: "#156143",
    button: "#156143",
    buttonInk: "#aed141",
  },
  {
    id: "business",
    label: "Business",
    badge: "For teams",
    billing: {
      monthly: {
        price: "26.21",
        currency: "SAR",
        unit: "/ month",
        note: "Billed monthly, per user",
      },
      yearly: {
        price: "21.86",
        currency: "SAR",
        unit: "/ month",
        note: "Billed annually, per user",
      },
    },
    copy: "Manage your team, capture leads, and sync everything to your CRM.",
    cta: "Get Deets Business",
    href: "/companies",
    includes: "Everything in Premium, plus:",
    groups: [
      {
        heading: "Professional presence",
        items: [
          "Digital business cards for your whole team",
          "Admin controlled email signatures",
          "Custom card templates & brand control",
          "Automated card provisioning",
          "Corporate contact book",
        ],
        note: "",
      },
      {
        heading: "Lead capture & enrichment",
        items: [
          "Event campaigns & attribution",
          "Universal Lead Capture",
          "AI contact enrichment",
          "AI Notetaker",
          "Custom qualifiers & lead forms",
        ],
        note: "Unlimited usage, pay only for leads captured",
      },
      {
        heading: "Sync & intelligence",
        items: [
          "Native CRM integrations",
          "Admin platform & user management",
          "Ask Deets",
          "Individual & team analytics",
        ],
        note: "",
      },
    ],
    header: "#f6943d",
    body: "#f4dde3",
    ink: "#b61c34",
    button: "#b61c34",
    buttonInk: "#fde7d4",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    badge: "For organizations",
    billing: {
      monthly: {
        price: "Custom",
        currency: "",
        unit: "",
        note: "Pricing & terms tailored to your org",
      },
      yearly: {
        price: "Custom",
        currency: "",
        unit: "",
        note: "Pricing & terms tailored to your org",
      },
    },
    copy: "Enterprise-grade security and compliance. Next-level network insights.",
    cta: "Book a demo",
    href: "/#contact",
    includes: "Everything in Business, plus:",
    groups: [
      {
        heading: "Platform",
        items: ["Fully customisable share flow", "Subteam admin access"],
        note: "",
      },
      {
        heading: "Security",
        items: [
          "Enforced SSO",
          "SCIM user provisioning",
          "SOC 2 Type II & GDPR compliance",
        ],
        note: "",
      },
      {
        heading: "Commercial",
        items: [
          "Custom contract terms",
          "Volume-based pricing",
          "Invoice billing",
        ],
        note: "",
      },
      {
        heading: "Support",
        items: ["Dedicated CSM", "Priority support", "Custom reporting"],
        note: "",
      },
    ],
    header: "#be2041",
    body: "#f9fbed",
    ink: "#e8efa2",
    button: "#e8efa2",
    buttonInk: "#be2041",
  },
] as const

export const trustedTeams = [
  "Shopify",
  "Kraft Heinz",
  "Marriott",
  "S&P Global",
  "Wharton",
] as const

export const faqItems = [
  {
    id: "app",
    question: "Does the person I share with need an app?",
    answer:
      "No. Anyone can tap your card with their phone or scan the QR code — your profile opens instantly in their browser. No download required.",
  },
  {
    id: "update",
    question: "Can I update my details after my card is printed?",
    answer:
      "Yes. Log in to your account anytime to change your links, photo, contact info, or design. Your physical card stays the same — the profile behind it updates instantly.",
  },
  {
    id: "phones",
    question: "Which phones work with NFC?",
    answer:
      "Most modern iPhones (iPhone 7 and later) and Android phones with NFC support can tap a Deets card. Every card also includes a QR code as a backup.",
  },
  {
    id: "shipping",
    question: "How long does shipping take?",
    answer:
      "Orders are typically processed within a few business days. Delivery times depend on your location in Saudi Arabia — you'll receive tracking once your card ships.",
  },
  {
    id: "company",
    question: "Can my company order cards for the whole team?",
    answer:
      "Yes. Use the Companies portal to issue branded cards, manage employee profiles, and update details across your organization from one place.",
  },
  {
    id: "privacy",
    question: "Who can see my information?",
    answer:
      "Only people you share your card with can view your profile. Your details are stored securely in your private account — not publicly listed.",
  },
] as const

export { CONTACT_EMAIL, STORE_URL }
