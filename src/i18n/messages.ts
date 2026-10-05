export type Lang = "en" | "ar"

const en = {
  skip: "Skip to content",
  nav: {
    products: "Products",
    designs: "Designs",
    directory: "Directory",
    contact: "Contact",
    login: "Log in",
    start: "Get started",
    menu: "Menu",
    close: "Close",
    closeMenu: "Close menu",
    about: "About",
    terms: "Terms",
    privacy: "Privacy",
    language: "Language",
  },
  hero: {
    line1: "A Profile that",
    line2: "Speaks for you",
    copy: "get instant access to more information about your social media",
  },
  companies: {
    title: "companies portal.",
    copy: "Issue branded cards, keep team profiles current, and send people to your company — not a stack of paper.",
    points: [
      "One branded design for every card on the team.",
      "Update a profile once, and every card stays current.",
      "Watch the taps, scans, and details people leave with you.",
    ],
    open: "Open portal",
    leadsValue: "2,500",
    leads: "Leads",
    leadsNote: "From team cards",
    taps: "Taps",
    scans: "Scans",
    kicker: "For teams",
    pageTitle: "companies portal",
    pageCopy:
      "Issue branded Deets cards, keep every profile current, and give your people one tap to share who they are.",
    talk: "Talk to us",
  },
  products: {
    heading:
      "Deets card is made for those looking for modernity, convenience, and elegance.",
    copy: "Get instant access to more information about your social media and contact information directly from your Deets card.",
    prev: "Previous product",
    next: "Next product",
    items: {
      "nfc-business-cards": {
        title: "NFC Business cards",
        copy: "Premium NFC cards — tap a phone to share who you are. No app required.",
      },
      "digital-business-card": {
        title: "Digital Business Card",
        copy: "Your deets.pro page — share your photo, contact info, and links from one tap.",
      },
      "wallet-card": {
        title: "Wallet card",
        copy: "Add Deets to Apple Wallet or Google Wallet for one-tap sharing from your phone.",
      },
      "qr-menu": {
        title: "QR Menu",
        copy: "A scan-to-open menu for restaurants, cafés, and venues — update it anytime.",
      },
      "link-in-bio": {
        title: "Link in bio",
        copy: "One link for Instagram, TikTok, and everywhere else you show up.",
      },
      "event-lead-capture": {
        title: "Event lead capture",
        copy: "Collect names, contacts, and interest at events — no clipboards, no apps.",
      },
    },
  },
  how: {
    heading: "tap, scan, share — in seconds.",
    copy: "No app required. Your Deets card opens your profile the moment someone taps or scans it.",
    steps: {
      customize: {
        title: "Customize Your Digital Profile",
        copy: "Pick a design, add your details, and we ship your Deets card ready to use.",
      },
      share: {
        title: "Tap or scan",
        copy: "Anyone can tap with their phone or scan the QR — no app download needed.",
      },
      update: {
        title: "Update anytime",
        copy: "Change your links, photo, or contact info from your account. The card stays current.",
      },
    },
  },
  templates: {
    heading: "A Deets template to suit every brand and creator",
    copy: "Different layouts, colors, and styles. Pick a starting point, then make it yours with your links, photo, and brand.",
    link1: "Browse Templates or create your own",
    link2: "with us.",
  },
  cta: {
    heading: "tap, scan, share — in seconds.",
    copy: "No app required. Your Deets card opens your profile the moment someone taps or scans it.",
  },
  pricing: {
    line1: "Free to start",
    line2: "and built to scale",
    monthly: "Monthly",
    yearly: "Yearly",
    plans: {
      free: {
        label: "Free",
        badge: "",
        copy: "Get your first profile live in minutes.",
        cta: "Get started",
        includes: "",
        notes: { monthly: "Forever free", yearly: "Forever free" },
        units: { monthly: "", yearly: "" },
        prices: { monthly: "0", yearly: "0" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "1 digital profile",
              "Ready-made design templates",
              "Unlimited sharing",
              "Apple Wallet support (live-updating)",
              "Basic view analytics (total count)",
              "One-tap contact download",
              "Deets watermark visible",
            ],
          },
        ],
      },
      premium: {
        label: "Premium",
        badge: "",
        copy: "Everything in Free, plus full control over your profile and its data.",
        cta: "Get started",
        includes: "",
        notes: { monthly: "", yearly: "" },
        units: { monthly: "/ month", yearly: "/ month" },
        prices: { monthly: "Per user", yearly: "Per user" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "Everything in Free",
              "Full design customization (colors, fonts, background)",
              "Watermark removed",
              "Public directory listing to boost discovery",
              "Detailed analytics — every link and click tracked individually",
              "Visitors can leave their contact details with you directly",
              "Faster support response",
            ],
          },
        ],
      },
      business: {
        label: "Business",
        badge: "",
        copy: "Everything in Premium, built for teams.",
        cta: "Get Deets Business",
        includes: "",
        notes: {
          monthly: "Minimum 5 seats required",
          yearly: "Minimum 5 seats required",
        },
        units: { monthly: "/ month", yearly: "/ month" },
        prices: { monthly: "Per seat", yearly: "Per seat" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "Everything in Free and Premium",
              "Unlimited profiles under one account (billed per seat, minimum seats apply)",
              "Centralized management with roles and permissions",
              "Organization-wide branded templates",
              "Automatic team member import",
              "Centralized team analytics, visitor location mapping, and bot filtering",
              "Custom domain for the admin portal",
              "Event lead capture forms — collect attendee details at events, including offline mode and per-rep assignment",
              "SSO and advanced security controls",
              "Priority support",
            ],
          },
        ],
      },
      enterprise: {
        label: "Enterprise",
        badge: "Custom",
        copy: "For organizations with specialized needs: large teams, custom integrations, or strict security and contractual requirements.",
        cta: "Contact Sales",
        includes: "",
        notes: { monthly: "No published price", yearly: "No published price" },
        units: { monthly: "", yearly: "" },
        prices: { monthly: "Contact Sales", yearly: "Contact Sales" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "Everything in Business",
              "SSO and advanced security controls",
              "Custom integrations, built to request",
              "Dedicated account manager",
              "Custom SLA with response-time guarantees",
              "Custom pricing and contract terms",
            ],
          },
        ],
      },
    },
  },
  faq: {
    kicker: "Your questions, answered",
    line1: "Frequently",
    line2: "Asked",
    line3: "Questions",
    copy: "Everything you need to know about ordering, sharing, and updating your Deets card.",
    still: "Still have questions?",
    stillCopy:
      "Every team is different. If you want to talk through cards, pricing, or a company rollout, we're here to help.",
    stillMore: "Reach out — we'll walk you through the details so you get the most out of Deets.",
    demo: "Book a demo",
    items: {
      app: {
        question: "Does the person I share with need an app?",
        answer:
          "No. Anyone can tap your card with their phone or scan the QR code — your profile opens instantly in their browser. No download required.",
      },
      update: {
        question: "Can I update my details after my card is printed?",
        answer:
          "Yes. Log in to your account anytime to change your links, photo, contact info, or design. Your physical card stays the same — the profile behind it updates instantly.",
      },
      phones: {
        question: "Which phones work with NFC?",
        answer:
          "Most modern iPhones (iPhone 7 and later) and Android phones with NFC support can tap a Deets card. Every card also includes a QR code as a backup.",
      },
      shipping: {
        question: "How long does shipping take?",
        answer:
          "Orders are typically processed within a few business days. Delivery times depend on your location in Saudi Arabia — you'll receive tracking once your card ships.",
      },
      company: {
        question: "Can my company order cards for the whole team?",
        answer:
          "Yes. Use the Companies portal to issue branded cards, manage employee profiles, and update details across your organization from one place.",
      },
      privacy: {
        question: "Who can see my information?",
        answer:
          "Only people you share your card with can view your profile. Your details are stored securely in your private account — not publicly listed.",
      },
    },
  },
  contact: {
    heading: "Let's talk",
    copy: "Whether you're ordering your first card, planning a bulk rollout for your team, or need help with your account — we'd love to hear from you.",
    points: [
      "Personal and business inquiries welcome",
      "Corporate orders and custom branding",
      "Account support and technical questions",
    ],
    sent: "message sent — we'll be in touch.",
    name: "Full name",
    phone: "Phone",
    email: "Email",
    message: "Message",
    send: "Send message",
  },
  footer: {
    offices: "Offices",
    country: "Saudi Arabia",
    how: "How we work",
    howCopy:
      "A smart NFC/QR card that shares your socials and contact info with a tap. No app required.",
    about: "About us",
    services: "Our services",
    projects: "Our projects",
    connect: "Connect with us",
    touch: "Get in touch",
    terms: "Terms",
    privacy: "Privacy",
  },
  startModal: {
    title: "How will you use Deets?",
    copy: "This helps us tailor the best experience for you.",
    personal: "For me only",
    team: "For my team or company",
    continue: "Continue",
    close: "Close",
    role: "Product designer",
  },
  login: {
    title: "log in",
    copy: "Enter your email and password to open your account.",
    email: "Email",
    emailPlaceholder: "you@example.com",
    password: "Password",
    passwordPlaceholder: "Your password",
    submit: "Log in",
    new: "New here?",
    help: "Need help?",
    contact: "Contact us",
    error: "Use the live account at my/login on deets.pro to sign in.",
  },
  designs: {
    kicker: "Gallery",
    title: "Choose your design",
    copy: "Browse professionally crafted profile templates. Each design is fully customizable to match your brand.",
    soon: "Coming soon · Layouts will add pre-designed page structures and default schemas for profiles — different orders and sub-layouts for profile components so you can start from a composition, not just colors and typography.",
  },
  directory: {
    kicker: "Directory · people",
    title: "people",
    copy: "Profiles that opted into the public directory. More directory types (stores, events, …) coming later.",
    search: "Search",
    placeholder: "Name, handle, or bio",
    empty: "No profiles match that search.",
  },
  onboard: {
    back: "Back",
    skip: "Skip for now",
    continue: "Continue",
    finish: "Finish",
  },
  authNotes: [
    {
      label: "Tap or scan",
      copy: "Anyone can tap your card or scan the QR. Your profile opens in their browser — no app to download.",
    },
    {
      label: "Always current",
      copy: "Change your title, photo, or links anytime. The card in their hand stays the same, and the page behind it updates.",
    },
    {
      label: "One page",
      copy: "Photo, contact info, and socials live on a single deets.pro page you can hand out anywhere.",
    },
    {
      label: "In your wallet",
      copy: "Add Deets to Apple Wallet or Google Wallet and share who you are straight from your phone.",
    },
    {
      label: "For a team",
      copy: "Issue branded cards and keep every profile up to date from one place, instead of reprinting a stack.",
    },
    {
      label: "At an event",
      copy: "Collect names and interest as people tap or scan. No clipboards, and no extra app for them.",
    },
  ],
}

const ar: typeof en = {
  skip: "تخطي إلى المحتوى",
  nav: {
    products: "المنتجات",
    designs: "التصاميم",
    directory: "الدليل",
    contact: "تواصل",
    login: "تسجيل الدخول",
    start: "ابدأ الآن",
    menu: "القائمة",
    close: "إغلاق",
    closeMenu: "إغلاق القائمة",
    about: "عن ديتس",
    terms: "الشروط",
    privacy: "الخصوصية",
    language: "اللغة",
  },
  hero: {
    line1: "ملف يعرّف بك",
    line2: "ويتحدث نيابةً عنك",
    copy: "وصول فوري إلى معلوماتك وحساباتك على وسائل التواصل",
  },
  companies: {
    title: "بوابة الشركات.",
    copy: "أصدر بطاقات بهوية شركتك، وحدّث ملفات الفريق، ووجّه الناس إلى شركتك بدل كومة من الورق.",
    points: [
      "تصميم واحد بهوية الشركة لكل بطاقات الفريق.",
      "حدّث الملف مرة واحدة، وتبقى كل البطاقات محدّثة.",
      "تابع النقرات والمسح والبيانات التي يتركها الناس معك.",
    ],
    open: "افتح البوابة",
    leadsValue: "2,500",
    leads: "عملاء",
    leadsNote: "من بطاقات الفريق",
    taps: "نقرات",
    scans: "مسح",
    kicker: "للفرق",
    pageTitle: "بوابة الشركات",
    pageCopy: "أصدر بطاقات ديتس بهوية شركتك، وأبقِ كل ملف محدّثاً، وامنح فريقك لمسة واحدة لمشاركة من هم.",
    talk: "تحدث معنا",
  },
  products: {
    heading: "بطاقة ديتس لمن يبحث عن الحداثة والسهولة والأناقة.",
    copy: "وصول فوري إلى حساباتك وبيانات التواصل مباشرة من بطاقة ديتس.",
    prev: "المنتج السابق",
    next: "المنتج التالي",
    items: {
      "nfc-business-cards": {
        title: "بطاقات أعمال NFC",
        copy: "بطاقات NFC فاخرة — قرّب الهاتف لمشاركة من أنت. بدون تطبيق.",
      },
      "digital-business-card": {
        title: "بطاقة أعمال رقمية",
        copy: "صفحتك على deets.pro — شارك صورتك وبياناتك وروابطك بلمسة واحدة.",
      },
      "wallet-card": {
        title: "بطاقة المحفظة",
        copy: "أضف ديتس إلى Apple Wallet أو Google Wallet وشارك من هاتفك.",
      },
      "qr-menu": {
        title: "قائمة QR",
        copy: "قائمة تُفتح بالمسح للمطاعم والمقاهي والأماكن — حدّثها في أي وقت.",
      },
      "link-in-bio": {
        title: "رابط في البايو",
        copy: "رابط واحد لإنستغرام وتيك توك وكل مكان تظهر فيه.",
      },
      "event-lead-capture": {
        title: "جمع العملاء في الفعاليات",
        copy: "اجمع الأسماء وبيانات التواصل والاهتمام في الفعاليات — بلا أوراق وبلا تطبيقات.",
      },
    },
  },
  how: {
    heading: "انقر، امسح، شارك — في ثوانٍ.",
    copy: "بدون تطبيق. بطاقة ديتس تفتح ملفك لحظة النقر أو المسح.",
    steps: {
      customize: {
        title: "خصّص ملفك الرقمي",
        copy: "اختر تصميماً، أضف بياناتك، ونشحن بطاقة ديتس جاهزة للاستخدام.",
      },
      share: {
        title: "انقر أو امسح",
        copy: "أي شخص يستطيع النقر بهاتفه أو مسح رمز QR — بدون تحميل تطبيق.",
      },
      update: {
        title: "حدّث في أي وقت",
        copy: "غيّر روابطك أو صورتك أو بيانات التواصل من حسابك. البطاقة تبقى محدّثة.",
      },
    },
  },
  templates: {
    heading: "قالب ديتس يناسب كل علامة وكل صانع محتوى",
    copy: "تخطيطات وألوان وأساليب مختلفة. ابدأ من قالب، ثم اجعله لك بروابطك وصورتك وهويتك.",
    link1: "تصفّح القوالب أو اصنع قالبك",
    link2: "معنا.",
  },
  cta: {
    heading: "انقر، امسح، شارك — في ثوانٍ.",
    copy: "بدون تطبيق. بطاقة ديتس تفتح ملفك لحظة النقر أو المسح.",
  },
  pricing: {
    line1: "ابدأ مجاناً",
    line2: "وتنمو معك",
    monthly: "شهري",
    yearly: "سنوي",
    plans: {
      free: {
        label: "مجاني",
        badge: "",
        copy: "اجعل ملفك الأول جاهزاً خلال دقائق.",
        cta: "ابدأ الآن",
        includes: "",
        notes: { monthly: "مجاني للأبد", yearly: "مجاني للأبد" },
        units: { monthly: "", yearly: "" },
        prices: { monthly: "0", yearly: "0" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "ملف رقمي واحد",
              "قوالب تصميم جاهزة",
              "مشاركة بلا حدود",
              "دعم Apple Wallet (يتحدّث مباشرة)",
              "تحليلات مشاهدة أساسية (العدد الإجمالي)",
              "تنزيل جهة الاتصال بلمسة واحدة",
              "علامة ديتس ظاهرة",
            ],
          },
        ],
      },
      premium: {
        label: "بريميوم",
        badge: "",
        copy: "كل ما في المجاني، مع تحكم كامل بملفك وبياناته.",
        cta: "ابدأ الآن",
        includes: "",
        notes: { monthly: "", yearly: "" },
        units: { monthly: "/ شهر", yearly: "/ شهر" },
        prices: { monthly: "لكل مستخدم", yearly: "لكل مستخدم" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "كل ما في المجاني",
              "تخصيص كامل للتصميم (الألوان والخطوط والخلفية)",
              "إزالة العلامة المائية",
              "ظهور في الدليل العام لزيادة الوصول",
              "تحليلات مفصّلة — كل رابط وكل نقرة على حدة",
              "يمكن للزوار ترك بيانات التواصل معك مباشرة",
              "استجابة دعم أسرع",
            ],
          },
        ],
      },
      business: {
        label: "أعمال",
        badge: "",
        copy: "كل ما في بريميوم، مبني للفرق.",
        cta: "احصل على ديتس للأعمال",
        includes: "",
        notes: { monthly: "الحد الأدنى 5 مقاعد", yearly: "الحد الأدنى 5 مقاعد" },
        units: { monthly: "/ شهر", yearly: "/ شهر" },
        prices: { monthly: "لكل مقعد", yearly: "لكل مقعد" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "كل ما في المجاني وبريميوم",
              "ملفات بلا حد تحت حساب واحد (تُحاسب لكل مقعد، ويُطبَّق حد أدنى)",
              "إدارة مركزية بالأدوار والصلاحيات",
              "قوالب بهوية المؤسسة لكل الفريق",
              "استيراد أعضاء الفريق تلقائياً",
              "تحليلات مركزية للفريق، وخريطة مواقع الزوار، وتصفية البوتات",
              "نطاق مخصص لبوابة الإدارة",
              "نماذج جمع العملاء في الفعاليات — بيانات الحضور، مع وضع دون اتصال وتعيين لكل مندوب",
              "تسجيل دخول موحّد وضوابط أمان متقدمة",
              "دعم بأولوية",
            ],
          },
        ],
      },
      enterprise: {
        label: "مؤسسات",
        badge: "حسب الطلب",
        copy: "للمنظمات ذات الاحتياج الخاص: فرق كبيرة، أو ربط مخصص، أو متطلبات أمان وعقود دقيقة.",
        cta: "تواصل مع المبيعات",
        includes: "",
        notes: { monthly: "بدون سعر منشور", yearly: "بدون سعر منشور" },
        units: { monthly: "", yearly: "" },
        prices: { monthly: "تواصل مع المبيعات", yearly: "تواصل مع المبيعات" },
        groups: [
          {
            heading: "",
            note: "",
            items: [
              "كل ما في الأعمال",
              "تسجيل دخول موحّد وضوابط أمان متقدمة",
              "ربط مخصص يُبنى حسب الطلب",
              "مدير حساب مخصص",
              "اتفاقية مستوى خدمة بضمان زمن الاستجابة",
              "تسعير وشروط عقد مخصصة",
            ],
          },
        ],
      },
    },
  },
  faq: {
    kicker: "إجابات لأسئلتك",
    line1: "الأسئلة",
    line2: "الشائعة",
    line3: "",
    copy: "كل ما تحتاج معرفته عن الطلب والمشاركة وتحديث بطاقة ديتس.",
    still: "ما زال لديك سؤال؟",
    stillCopy: "كل فريق مختلف. إذا أردت الحديث عن البطاقات أو الأسعار أو تجهيز الشركة، نحن هنا.",
    stillMore: "راسلنا وسنمشي معك في التفاصيل حتى تستفيد من ديتس بأفضل شكل.",
    demo: "احجز عرضاً",
    items: {
      app: {
        question: "هل يحتاج من أشارك معه إلى تطبيق؟",
        answer:
          "لا. أي شخص يستطيع النقر على بطاقتك بهاتفه أو مسح رمز QR — ويفتح ملفك فوراً في المتصفح. بدون تحميل.",
      },
      update: {
        question: "هل أستطيع تحديث بياناتي بعد طباعة البطاقة؟",
        answer:
          "نعم. سجّل الدخول في أي وقت لتغيير الروابط أو الصورة أو بيانات التواصل أو التصميم. البطاقة نفسها تبقى، والملف خلفها يتحدث فوراً.",
      },
      phones: {
        question: "أي الهواتف تعمل مع NFC؟",
        answer:
          "معظم أجهزة آيفون الحديثة (آيفون 7 وما بعده) وهواتف أندرويد التي تدعم NFC تستطيع النقر على بطاقة ديتس. وكل بطاقة فيها رمز QR احتياطي.",
      },
      shipping: {
        question: "كم يستغرق الشحن؟",
        answer:
          "تُجهَّز الطلبات عادة خلال أيام عمل قليلة. مدة التوصيل تعتمد على موقعك في السعودية — ويصلك رقم التتبع عند الشحن.",
      },
      company: {
        question: "هل تستطيع شركتي طلب بطاقات لكل الفريق؟",
        answer:
          "نعم. استخدم بوابة الشركات لإصدار بطاقات بهوية الشركة، وإدارة ملفات الموظفين، وتحديث البيانات من مكان واحد.",
      },
      privacy: {
        question: "من يستطيع رؤية معلوماتي؟",
        answer:
          "فقط من تشارك بطاقتك معه يستطيع رؤية ملفك. بياناتك محفوظة في حسابك الخاص، وليست منشورة للعموم.",
      },
    },
  },
  contact: {
    heading: "لنتحدث",
    copy: "سواء كنت تطلب بطاقتك الأولى، أو تجهّز طلباً لفريقك، أو تحتاج مساعدة في حسابك — يسعدنا أن نسمع منك.",
    points: [
      "استفسارات شخصية وتجارية",
      "طلبات الشركات والهوية المخصصة",
      "دعم الحساب والأسئلة التقنية",
    ],
    sent: "أُرسلت الرسالة — سنتواصل معك.",
    name: "الاسم الكامل",
    phone: "الجوال",
    email: "البريد",
    message: "الرسالة",
    send: "إرسال",
  },
  footer: {
    offices: "المكاتب",
    country: "السعودية",
    how: "كيف نعمل",
    howCopy: "بطاقة NFC/QR ذكية تشارك حساباتك وبيانات التواصل بلمسة. بدون تطبيق.",
    about: "من نحن",
    services: "خدماتنا",
    projects: "أعمالنا",
    connect: "تواصل معنا",
    touch: "راسلنا",
    terms: "الشروط",
    privacy: "الخصوصية",
  },
  startModal: {
    title: "كيف ستستخدم ديتس؟",
    copy: "هذا يساعدنا نجهّز التجربة الأنسب لك.",
    personal: "لي فقط",
    team: "لفريقي أو شركتي",
    continue: "متابعة",
    close: "إغلاق",
    role: "مصمم منتجات",
  },
  login: {
    title: "تسجيل الدخول",
    copy: "أدخل بريدك وكلمة المرور لفتح حسابك.",
    email: "البريد",
    emailPlaceholder: "you@example.com",
    password: "كلمة المرور",
    passwordPlaceholder: "كلمة المرور",
    submit: "تسجيل الدخول",
    new: "جديد هنا؟",
    help: "تحتاج مساعدة؟",
    contact: "تواصل معنا",
    error: "استخدم الحساب على my/login في deets.pro لتسجيل الدخول.",
  },
  designs: {
    kicker: "المعرض",
    title: "اختر تصميمك",
    copy: "تصفّح قوالب ملفات مصممة باحتراف. كل تصميم قابل للتخصيص ليطابق هويتك.",
    soon: "قريباً · ستضيف التخطيطات هياكل صفحات جاهزة وترتيباً مختلفاً لمكوّنات الملف، لتبدأ من تكوين كامل وليس من الألوان والخط فقط.",
  },
  directory: {
    kicker: "الدليل · أشخاص",
    title: "أشخاص",
    copy: "ملفات اختارت الظهور في الدليل العام. أنواع أخرى (متاجر، فعاليات، …) لاحقاً.",
    search: "بحث",
    placeholder: "الاسم أو المعرّف أو النبذة",
    empty: "لا توجد ملفات تطابق البحث.",
  },
  onboard: {
    back: "رجوع",
    skip: "تخطَّ الآن",
    continue: "متابعة",
    finish: "إنهاء",
  },
  authNotes: [
    {
      label: "انقر أو امسح",
      copy: "أي شخص يستطيع النقر على بطاقتك أو مسح رمز QR. يفتح ملفك في المتصفح — بدون تطبيق.",
    },
    {
      label: "دائماً محدّث",
      copy: "غيّر المسمى أو الصورة أو الروابط في أي وقت. البطاقة في يده تبقى، والصفحة خلفها تتحدث.",
    },
    {
      label: "صفحة واحدة",
      copy: "الصورة وبيانات التواصل والحسابات في صفحة واحدة على deets.pro تشاركها في أي مكان.",
    },
    {
      label: "في محفظتك",
      copy: "أضف ديتس إلى Apple Wallet أو Google Wallet وشارك من أنت مباشرة من هاتفك.",
    },
    {
      label: "للفريق",
      copy: "أصدر بطاقات بهويتك وأبقِ كل الملفات محدّثة من مكان واحد، بدل إعادة طباعة الكومة.",
    },
    {
      label: "في فعالية",
      copy: "اجمع الأسماء والاهتمام حين ينقر الناس أو يمسحون. بلا أوراق، وبلا تطبيق إضافي لهم.",
    },
  ],
}

export type Messages = typeof en

export const messages: Record<Lang, Messages> = { en, ar }
