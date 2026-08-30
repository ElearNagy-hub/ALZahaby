// =========================================================
// AL-DAHABI DENTAL SUPPLIES — Full Dual-Language App Engine
// Arabic (العربية) & English (EN)
// =========================================================

const WHATSAPP_NUMBER = "201000000000"; // Replace with real number
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}?text=`;

// =========================================================
// I18N TRANSLATION DICTIONARY
// =========================================================
const I18N = {
  en: {
    langBtn: "العربية",
    langCode: "AR",
    logoSubtitle: "Expert Dental Supplies",
    searchPlaceholder: "Search 1,000+ items (Materials, Brands, Devices)...",
    navB2B: "B2B Portal",
    navStudent: "Student Hub",
    navAskExpert: "Ask Expert",
    heroBadge: "Kasr Al-Ainy, Cairo — EDA Registered",
    heroTitle: `<span>Al-Dahabi</span> Dental Supplies:<br />Your Expert Partner in<br />Clinical Excellence`,
    heroSubtitle: "Bridging the gap between everyday clinical consumables and heavy dental equipment with expert-led service — vetted by dentists & pharmacists, not traditional traders.",
    usp1Title: "Expert-Led Consultation",
    usp1Desc: "Doctors & Pharmacists on call",
    usp2Title: "Immediate Kasr Al-Ainy Pickup",
    usp2Desc: "3 Fahmy St, off El-Rashidy",
    usp3Title: "EDA Certified Imports",
    usp3Desc: "Full compliance documentation",
    usp4Title: "Student Ambassador Prices",
    usp4Desc: "Special academic tier pricing",
    heroCtaWhatsApp: "Discuss & Order via WhatsApp",
    heroCtaConsult: "Ask Doctor: Free Consultation",
    loyaltyTitle: "⭐ Al-Dahabi Loyalty Circle",
    loyaltyDesc: "Earn points on every consumable purchase — scan or register to track your rewards.",
    statSkus: "SKUs in Stock",
    statClinics: "Clinics Served",
    statResponse: "WhatsApp Response",
    statHub: "Fahmy St. Hub",
    trust1: "Egyptian Drug Authority (EDA) Registered",
    trust2: "Founder: Licensed Dentist + Pharmacist",
    trust3: "Single-Member LLC | Commercial Register",
    trust4: "Dual B2B & B2C Supply Chain",
    trust5: "Student Ambassador Program Active",
    trustBar1Title: "EDA Certified",
    trustBar1Desc: "All imports fully licensed",
    trustBar2Title: "Same-Day Delivery",
    trustBar2Desc: "Kasr Al-Ainy & surroundings",
    trustBar3Title: "Expert Consultation",
    trustBar3Desc: "Dentist & Pharmacist team",
    trustBar4Title: "Loyalty Rewards",
    trustBar4Desc: "Points on every order",
    filterLabel: "Filter by:",
    tabB2B: "Private Clinics (B2B)",
    tabStudent: "Dental Students",
    tabPatient: "End Patients",
    egp: "EGP",
    clinicPrice: "Clinic Price",
    studentPrice: "Student Price",
    retailPrice: "Retail Price",
    promoPrice: "Promo Price",
    btnWhatsApp: "Order via WhatsApp",
    btnConsult: "Ask Doctor: Consultation",
    modalTitle: "Ask Doctor: Consultation",
    modalSubtitle: "Our clinical team (Dentist & Pharmacist) will respond within 15 minutes.",
    modalProductLabel: "About product:",
    modalNameLabel: "Your Name *",
    modalNamePlaceholder: "Dr. Ahmed Hassan",
    modalSpecialtyLabel: "Specialty",
    modalQuestionLabel: "Your Clinical Question *",
    modalQuestionPlaceholder: "e.g. What's the difference between this composite and Brand X? Is it compatible with my curing light?...",
    modalCancel: "Cancel",
    modalSubmit: "Send via WhatsApp",
    specialties: {
      "General Dentist": "General Dentist",
      "Dental Student": "Dental Student",
      "Endodontist": "Endodontist",
      "Orthodontist": "Orthodontist",
      "Oral Surgeon": "Oral Surgeon",
      "Clinic Owner": "Clinic Owner",
      "Distributor": "Distributor / B2B",
      "Patient": "Patient"
    },
    footerTagline: "Expert-Led Professional Service & Value for Money — Bridging consumables & equipment since Phase 1.",
    footerShop: "Shop",
    footerServices: "Services",
    footerContact: "Contact",
    footerAddress: "3 Fahmy Street, off El-Rashidy & Bostan El-Fadel,<br/>Kasr Al-Ainy, Cairo, Egypt<br/><em style='font-size:11px;color:rgba(255,255,255,0.5);'>Inside the Kasr Al-Ainy Dental Market</em>",
    footerFastResponse: "Fastest Response — Within 15 min",
    footerEdaBadge: "Registered with the Egyptian Drug Authority (EDA) | Single-Member LLC",
    footerRights: "© 2026 Al-Dahabi Dental Supplies (شركة الذهبي). All Rights Reserved. | MVP Phase 1",
    legalSingleLLC: "Single-Member LLC",
    legalEda: "EDA Registered",
    legalCommercial: "Commercial Register",
    searchResultsTitle: "Search Results for",
    itemsFound: "item(s) found",
    noResultsTitle: "No results for",
    noResultsDesc: "Try a different search term or",
    noResultsAction: "ask via WhatsApp"
  },
  ar: {
    langBtn: "English",
    langCode: "EN",
    logoSubtitle: "مستلزمات وأجهزة الأسنان",
    searchPlaceholder: "ابحث بين أكثر من 1,000 منتج (مواد، أجهزة، ماركات)...",
    navB2B: "بوابة العيادات (B2B)",
    navStudent: "بوابة الطلاب",
    navAskExpert: "استشر خبيراً",
    heroBadge: "قصر العيني، القاهرة — مسجل بهيئة الدواء المصرية",
    heroTitle: `<span>شركة الذهبي</span> لمستلزمات الأسنان:<br />شريككم الخبير في<br />التميز الإكلينيكي`,
    heroSubtitle: "نسد الفجوة بين المستلزمات اليومية والأجهزة والمعدات الكبرى بخدمة يقودها نخبة من أطباء الأسنان والصيادلة، وليس مجرد تجار تقليديين.",
    usp1Title: "استشارة طبية متخصصة",
    usp1Desc: "أطباء وصيادلة متاحون فوراً",
    usp2Title: "استلام فوري من قصر العيني",
    usp2Desc: "3 شارع فهمي، متفرع من الرشيدي",
    usp3Title: "استيراد معتمد من هيئة الدواء",
    usp3Desc: "أوراق ترخيص رسمية كاملة",
    usp4Title: "أسعار سفراء الطلاب",
    usp4Desc: "خصومات حصرية للجامعات",
    heroCtaWhatsApp: "اطلب وناقش فوراً عبر واتساب",
    heroCtaConsult: "استشر الطبيب: استشارة مجانية",
    loyaltyTitle: "⭐ دائرة ولاء الذهبي",
    loyaltyDesc: "اكسب نقاطاً ومكافآت مع كل طلب مستلزمات — تواصل لتفعيل رصيدك.",
    statSkus: "صنف متوفر بالمخزن",
    statClinics: "عيادة ومركز متعاقد",
    statResponse: "سرعة الرد بالدقائق",
    statHub: "شارع فهمي المقر",
    trust1: "مسجل ومعتمد بهيئة الدواء المصرية (EDA)",
    trust2: "المؤسسون: طبيب أسنان وصيدلي مرخصان",
    trust3: "شركة ذات مسؤولية محدودة (ش.ش.و) | سجل تجاري",
    trust4: "سلسلة إمداد مزدوجة للعيادات والمرضى",
    trust5: "برنامج سفراء طلاب طب الأسنان مفعل",
    trustBar1Title: "معتمد من هيئة الدواء",
    trustBar1Desc: "واردات رسمية ومطابقة",
    trustBar2Title: "توصيل في نفس اليوم",
    trustBar2Desc: "منطقة قصر العيني ومحيطها",
    trustBar3Title: "استشارة إكلينيكية",
    trustBar3Desc: "فريق أطباء وصيادلة",
    trustBar4Title: "مكافآت الولاء",
    trustBar4Desc: "نقاط مع كل عملية شراء",
    filterLabel: "تصفية حسب:",
    tabB2B: "العيادات الخاصة (B2B)",
    tabStudent: "طلاب الأسنان",
    tabPatient: "المرضى والعناية المنزلية",
    egp: "ج.م",
    clinicPrice: "سعر العيادات",
    studentPrice: "سعر الطلاب",
    retailPrice: "سعر الجمهور",
    promoPrice: "سعر العرض",
    btnWhatsApp: "اطلب بنقرة عبر واتساب",
    btnConsult: "استشر الطبيب: استشارة",
    modalTitle: "استشر الطبيب: استشارة طبية",
    modalSubtitle: "سيقوم فريقنا الطبي (طبيب أسنان وصيدلي) بالرد عليك خلال 15 دقيقة.",
    modalProductLabel: "بخصوص منتج:",
    modalNameLabel: "الاسم الكريم *",
    modalNamePlaceholder: "د. أحمد حسن",
    modalSpecialtyLabel: "التخصص / الصفة",
    modalQuestionLabel: "استفسارك الإكلينيكي *",
    modalQuestionPlaceholder: "مثال: ما الفرق بين هذا الكومبوزيت وباقي الماركات؟ هل متوافق مع جهاز الكيورنج لدي؟...",
    modalCancel: "إلغاء",
    modalSubmit: "إرسال عبر واتساب",
    specialties: {
      "General Dentist": "طبيب أسنان عام",
      "Dental Student": "طالب طب أسنان",
      "Endodontist": "أخصائي علاج جذور",
      "Orthodontist": "أخصائي تقويم أسنان",
      "Oral Surgeon": "جراح وجه وفكين",
      "Clinic Owner": "صاحب مركز / عيادة",
      "Distributor": "موزع / تاجر جملة",
      "Patient": "مريض / مستخدم منزلي"
    },
    footerTagline: "خدمة مهنية يقودها خبراء وقيمة مقابل السعر — نلبي احتياجات العيادات والجامعات من اليوم الأول.",
    footerShop: "المتجر والأقسام",
    footerServices: "الخدمات",
    footerContact: "بيانات التواصل",
    footerAddress: "3 شارع فهمي، متفرع من الرشيدي وبستان الفاضل،<br/>قصر العيني، القاهرة، مصر<br/><em style='font-size:11px;color:rgba(255,255,255,0.5);'>قلب سوق قصر العيني لمستلزمات الأسنان</em>",
    footerFastResponse: "أسرع استجابة — خلال 15 دقيقة",
    footerEdaBadge: "مسجل بهيئة الدواء المصرية (EDA) | شركة الشخص الواحد",
    footerRights: "© 2026 شركة الذهبي لمستلزمات الأسنان. جميع الحقوق محفوظة. | المرحلة التجريبية MVP",
    legalSingleLLC: "شركة الشخص الواحد",
    legalEda: "مسجل بهيئة الدواء",
    legalCommercial: "سجل تجاري وبطاقة ضريبية",
    searchResultsTitle: "نتائج البحث عن",
    itemsFound: "منتج(ات) متاحة",
    noResultsTitle: "لا توجد نتائج مطابقة لـ",
    noResultsDesc: "يرجى تجربة كلمات بحث أخرى أو",
    noResultsAction: "الاستفسار عبر واتساب"
  }
};

// =========================================================
// BILINGUAL PRODUCT DATA
// =========================================================
const CATEGORIES = [
  {
    id: "devices",
    labelEn: "Dental Devices",
    labelAr: "أجهزة ومعدات الأسنان",
    iconType: "teal",
    icon: "monitor",
    audience: ["b2b"],
    descriptionEn: "High-value equipment with guaranteed maintenance & EDA-compliant import documentation.",
    descriptionAr: "معدات وأجهزة متطورة عالية القيمة مع ضمان الصيانة المعتمدة وأوراق الاستيراد من هيئة الدواء.",
    subcategoriesEn: ["Autoclaves & Sterilizers", "Dental Units & Chairs", "Digital Imaging", "Handpieces & Motors"],
    subcategoriesAr: ["أجهزة التعقيم والأوتوكلاف", "كراسي ووحدات الأسنان", "الأشعة والمستشعرات الرقمية", "التوربينات والقبضات"],
    products: [
      {
        id: "dev-001",
        nameEn: "Autoclave Sterilizer Class B — 22L",
        nameAr: "جهاز تعقيم أوتوكلاف كلاس B — سعة 22 لتر",
        brandEn: "MedTech Pro (EU Import)",
        brandAr: "ميدتيك برو (استيراد أوروبي)",
        tagsEn: ["EDA Certified", "B2B"],
        tagsAr: ["معتمد بهيئة الدواء", "عيادات ومراكز"],
        clinicPrice: 78000,
        studentPrice: null,
        placeholder: "teal",
        descriptionEn: "Class B vacuum autoclave, 22-liter capacity. Fully validated, comes with EDA import documentation.",
        descriptionAr: "أوتوكلاف تفريغ هواء كلاس B بسعة 22 لتراً، فائق الاعتمادية ومرفق معه شهادات هيئة الدواء."
      },
      {
        id: "dev-002",
        nameEn: "Full Electric Dental Unit Chair",
        nameAr: "وحدة وكرسي أسنان كهربائي بالكامل",
        brandEn: "SinoDent (Premium Line)",
        brandAr: "سينودنت (الفئة المتميزة)",
        tagsEn: ["EDA Certified", "New Arrival"],
        tagsAr: ["معتمد بهيئة الدواء", "وصل حديثاً"],
        clinicPrice: 145000,
        studentPrice: null,
        placeholder: "teal",
        descriptionEn: "6-function fully electric dental chair with integrated suction, light, and delivery unit.",
        descriptionAr: "كرسي أسنان كهربائي متكامل بـ 6 حركات مع نظام الشفط، الإضاءة، ووحدة التحكم الرئيسية."
      },
      {
        id: "dev-003",
        nameEn: "Digital X-Ray RVG Sensor System",
        nameAr: "مستشعر أشعة سينية رقمي RVG فائق الدقة",
        brandEn: "ScanMax Europe",
        brandAr: "سكان ماكس أوروبا",
        tagsEn: ["EDA Certified", "B2B"],
        tagsAr: ["معتمد بهيئة الدواء", "عيادات"],
        clinicPrice: 42000,
        studentPrice: null,
        placeholder: "teal",
        descriptionEn: "Size 2 digital RVG sensor with software license. Instant imaging, minimal radiation.",
        descriptionAr: "حساس رقمي مقاس 2 مع ترخيص البرنامج الأصلي، تصوير فوري مع أقل نسبة إشعاع."
      },
      {
        id: "dev-004",
        nameEn: "Surgical High-Speed Handpiece Set (4-pc)",
        nameAr: "طقم توربينات جراحية عالية السرعة (4 قطع)",
        brandEn: "DentalTech KSL",
        brandAr: "دينتال تك KSL",
        tagsEn: ["B2B"],
        tagsAr: ["مستلزمات مهنية"],
        clinicPrice: 5800,
        studentPrice: 4900,
        placeholder: "teal",
        descriptionEn: "NSK-compatible high-speed turbine handpieces. 4-piece set with wrench and lubricant.",
        descriptionAr: "توربينات عالية السرعة متوافقة مع نظام NSK، طقم من 4 قطع مع مفتاح التثبيت وزيت التشحيم."
      }
    ]
  },
  {
    id: "materials",
    labelEn: "Materials & Consumables",
    labelAr: "المواد والمستلزمات الطبية",
    iconType: "gold",
    icon: "flask",
    audience: ["b2b", "student"],
    descriptionEn: "Value-priced, high-turnover daily essentials for Egyptian dentists — in stock at Kasr Al-Ainy.",
    descriptionAr: "مستلزمات يومية عالية الاستهلاك بأسعار تنافسية لأطباء الأسنان — متوفرة فوراً بقصر العيني.",
    subcategoriesEn: ["Composite & Bonding", "Endodontic Files", "Impression Materials", "Disposables & PPE"],
    subcategoriesAr: ["حشوات الكومبوزيت واللاصق", "مبارد علاج الجذور", "مواد المقاسات والطبعات", "المستهلكات والوقاية"],
    products: [
      {
        id: "mat-001",
        nameEn: "Composite Restorative Material Kit (A1–A4)",
        nameAr: "طقم حشوات تجميلية كومبوزيت نانو (A1–A4)",
        brandEn: "PremiumCure Nano",
        brandAr: "بريميوم كيور نانو",
        tagsEn: ["Materials", "Student Discount"],
        tagsAr: ["مواد تجميلية", "خصم خاص للطلاب"],
        clinicPrice: 3400,
        studentPrice: 2950,
        placeholder: "gold",
        descriptionEn: "Nano-hybrid composite kit including shades A1, A2, A3, A3.5, A4. 4g syringes each.",
        descriptionAr: "طقم كومبوزيت نانو هجين يشمل الدرجات A1, A2, A3, A3.5, A4 بحجم 4 جرام لكل محقن."
      },
      {
        id: "mat-002",
        nameEn: "NiTi Rotary Endodontic Files Set",
        nameAr: "طقم مبارد روتاري لعلاج الجذور (NiTi)",
        brandEn: "EndoPro Gold Series",
        brandAr: "إندو برو السلسلة الذهبية",
        tagsEn: ["Endodontics", "Student Discount"],
        tagsAr: ["علاج جذور", "خصم طلاب"],
        clinicPrice: 550,
        studentPrice: 480,
        placeholder: "gold",
        descriptionEn: "Gold heat-treated NiTi rotary files. 6-piece sequence: 15–40. Box of 6 files.",
        descriptionAr: "مبارد نيكل تيتانيوم معالجة حرارياً، تسلسل 6 قطع من مقاس 15 حتى 40 بجودة فائقة."
      },
      {
        id: "mat-003",
        nameEn: "Irreversible Alginate Impression Material (1kg)",
        nameAr: "مادة أخذ المقاسات الجينات سريعة التصلب (1 كجم)",
        brandEn: "FastSet Pro",
        brandAr: "فاست سيت برو",
        tagsEn: ["Materials", "Student Discount"],
        tagsAr: ["طبعات ومقاسات", "خصم طلاب"],
        clinicPrice: 720,
        studentPrice: 620,
        placeholder: "gold",
        descriptionEn: "High-quality alginate impression material. Regular set, mint flavored, 1kg tin.",
        descriptionAr: "مادة الجينات عالية الدقة لأخذ المقاسات بنكهة النعناع المنعشة، عبوة 1 كجم اقتصادية."
      },
      {
        id: "mat-004",
        nameEn: "Disposable Isolation Gowns — Box of 100",
        nameAr: "جونات عزل طبية للاستخدام مرة واحدة — علبة 100 قطعة",
        brandEn: "CleanGuard Medical",
        brandAr: "كلين جارد الطبية",
        tagsEn: ["PPE", "Student Discount"],
        tagsAr: ["مستهلكات وقاية", "خصم طلاب"],
        clinicPrice: 2850,
        studentPrice: 2500,
        placeholder: "gold",
        descriptionEn: "Non-woven fluid-resistant isolation gowns. Universal size. Meets ISO 13485 standards.",
        descriptionAr: "جونات طبية مقاومة للسوائل غير منسوجة مقاس موحد ومطابقة للمواصفات القياسية."
      }
    ]
  },
  {
    id: "homecare",
    labelEn: "B2C Home Care",
    labelAr: "منتجات العناية المنزلية للمرضى",
    iconType: "green",
    icon: "heart",
    audience: ["b2b", "student", "patient"],
    descriptionEn: "Direct-to-patient oral hygiene products — high-margin, accessible retail essentials.",
    descriptionAr: "منتجات موثوقة لصحة الفم والأسنان تناسب المرضى وتلبي توصيات أطباء الأسنان.",
    subcategoriesEn: ["Oral Irrigators", "Orthodontic Care", "Whitening", "Interdental"],
    subcategoriesAr: ["خيوط مائية ومضخات", "عناية التقويم", "التبييض والعناية", "فرش ما بين الأسنان"],
    products: [
      {
        id: "hc-001",
        nameEn: "Cordless Oral Irrigator (600ml Tank)",
        nameAr: "جهاز تنظيف الأسنان بالماء اللاسلكي (خزان 600 مل)",
        brandEn: "AquaDent Pro",
        brandAr: "أكوادنت برو",
        tagsEn: ["Home Care", "Patient Safe"],
        tagsAr: ["عناية منزلية", "آمن للمرضى"],
        clinicPrice: 1650,
        studentPrice: 1450,
        placeholder: "green",
        descriptionEn: "Cordless water flosser with 5 pressure settings. Ideal for orthodontic patients and implants.",
        descriptionAr: "خيط مائي لاسلكي بـ 5 سرعات ضغط، مثالي لمرضى التقويم وزراعة الأسنان واللثة."
      },
      {
        id: "hc-002",
        nameEn: "Orthodontic Toothbrush Set (3-pack)",
        nameAr: "طقم فرش أسنان مخصصة للتقويم (3 فرش)",
        brandEn: "OrthoClean",
        brandAr: "أورثو كلين",
        tagsEn: ["Ortho Care", "Patient Safe"],
        tagsAr: ["عناية بالتقويم", "آمن للمرضى"],
        clinicPrice: 210,
        studentPrice: 175,
        placeholder: "green",
        descriptionEn: "V-shaped soft-bristle toothbrush designed for braces. 3-pack with travel caps.",
        descriptionAr: "فرشاة أسنان بشعيرات V ناعمة مصممة للوصول حول أجهزة التقويم مع أغطية حماية."
      },
      {
        id: "hc-003",
        nameEn: "Orthodontic Wax — Mint Flavored (5 strips)",
        nameAr: "شمع تقويم الأسنان بنكهة النعناع (5 شرائح)",
        brandEn: "OrthoWax Relief",
        brandAr: "أورثو واكس ريليف",
        tagsEn: ["Ortho Care", "Patient Safe"],
        tagsAr: ["راحة التقويم", "آمن للمرضى"],
        clinicPrice: 85,
        studentPrice: 70,
        placeholder: "green",
        descriptionEn: "Natural wax for brace irritation relief. Mint flavored, 5 strips per pack.",
        descriptionAr: "شمع طبي طبيعي مهدئ لاحتكاك وتقرحات سلك التقويم بنكهة النعناع، عبوة 5 شرائح."
      },
      {
        id: "hc-004",
        nameEn: "Interdental Brush Kit — Mixed Sizes (8-pc)",
        nameAr: "مجموعة فرش تنظيف ما بين الأسنان — مقاسات متعددة (8 قطع)",
        brandEn: "Tepe Style EG",
        brandAr: "تيبي ستايل مصر",
        tagsEn: ["Home Care", "Patient Safe"],
        tagsAr: ["عناية منزلية", "صحة اللثة"],
        clinicPrice: 220,
        studentPrice: 185,
        placeholder: "green",
        descriptionEn: "8-piece interdental brush kit with sizes ISO 0–5. For gum health and implant cleaning.",
        descriptionAr: "طقم 8 فرش لتنظيف الفراغات بين الأسنان والجسور والزرعات بمقاسات مختلفة ISO 0-5."
      }
    ]
  }
];

// =========================================================
// APP STATE
// =========================================================
let currentLang    = localStorage.getItem('aldahabi_lang') || 'ar'; // Default to Arabic or saved
let activeAudience = "b2b"; // 'b2b' | 'student' | 'patient'
let activeProduct  = null;

// =========================================================
// DOM HELPERS & SVG ICONS
// =========================================================
function qs(sel, ctx = document)  { return ctx.querySelector(sel); }
function qsa(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function svgIcon(name, size = 20) {
  const icons = {
    globe:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    search:      `<svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
    whatsapp:    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    stethoscope: `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`,
    mappin:      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    shield:      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    crown:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>`,
    check:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
    monitor:     `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M8 21h8M12 17v4"/></svg>`,
    flask:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>`,
    heart:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    building:    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4"/><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>`,
    graduation:  `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>`,
    truck:       `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11v14H5"/><rect width="7" height="14" x="14" y="3" rx="2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`,
    star:        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  };
  return icons[name] || '';
}

function buildWAMsg(productName) {
  if (currentLang === 'ar') {
    return encodeURIComponent(
      `مرحباً شركة الذهبي لمستلزمات الأسنان 👋\nأود الاستفسار وطلب: *${productName}*\nيرجى تأكيد التوافر والسعر النهائي. شكراً!`
    );
  }
  return encodeURIComponent(
    `Hello Al-Dahabi Dental Supplies 👋\nI would like to inquire about and order: *${productName}*\nPlease confirm availability and current pricing. Thank you!`
  );
}

// =========================================================
// LANGUAGE SWITCHING LOGIC
// =========================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aldahabi_lang', lang);
  
  const isAr = lang === 'ar';
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);

  const t = I18N[lang];

  // Update static text via data-i18n attributes
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  qsa('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update Language Button label
  qsa('.lang-toggle-btn').forEach(btn => {
    btn.innerHTML = `${svgIcon('globe', 15)} <span>${t.langBtn}</span> <span class="lang-badge">${t.langCode}</span>`;
  });

  // Update Specialty Dropdown options in Consultation Modal
  const specSelect = qs('#consult-specialty');
  if (specSelect) {
    const val = specSelect.value;
    specSelect.innerHTML = Object.entries(t.specialties)
      .map(([key, label]) => `<option value="${key}">${label}</option>`)
      .join('');
    specSelect.value = val;
  }

  // Re-render dynamic catalog
  renderCatalog();
}

function toggleLanguage() {
  setLanguage(currentLang === 'ar' ? 'en' : 'ar');
}

// =========================================================
// PRODUCT RENDERING
// =========================================================
function renderProductCard(product, categoryColor) {
  const isAr = currentLang === 'ar';
  const name = isAr ? product.nameAr : product.nameEn;
  const brand = isAr ? product.brandAr : product.brandEn;
  const tags = isAr ? product.tagsAr : product.tagsEn;
  const t = I18N[currentLang];

  const waLink = `${WHATSAPP_BASE}${buildWAMsg(name)}`;
  const colorClass = {teal: 'teal', gold: 'gold', green: 'green'}[categoryColor] || 'teal';

  const badgesHtml = tags.map(tag => {
    let cls = 'badge-category';
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('student') || tagLower.includes('طلاب')) cls = 'badge-student';
    if (tagLower.includes('eda') || tagLower.includes('دواء') || tagLower.includes('هيئة')) cls = 'badge-eda';
    if (tagLower.includes('new') || tagLower.includes('حديث')) cls = 'badge-new';
    return `<span class="badge ${cls}">${tag}</span>`;
  }).join('');

  // Context-sensitive price labels
  const clinicLabel  = activeAudience === 'patient' ? t.retailPrice : t.clinicPrice;
  const studentLabel = activeAudience === 'patient' ? t.promoPrice  : t.studentPrice;

  const studentPriceHtml = product.studentPrice ? `
    <div class="price-divider"></div>
    <div class="price-row">
      <span class="price-label">
        ${svgIcon('graduation', 12)}
        ${studentLabel}
      </span>
      <span class="price-value student-price">${t.egp} ${product.studentPrice.toLocaleString()}</span>
    </div>` : '';

  const placeholderIconSize = 72;
  const iconName = categoryColor === 'teal' ? 'monitor' : categoryColor === 'gold' ? 'flask' : 'heart';

  return `
    <article class="product-card reveal" id="product-${product.id}">
      <div class="card-image-wrap">
        <div class="card-image-placeholder placeholder-${colorClass}">
          <span style="color:white;">${svgIcon(iconName, placeholderIconSize)}</span>
        </div>
        <div class="card-badges">${badgesHtml}</div>
      </div>
      <div class="card-body">
        <p class="card-brand">${brand}</p>
        <h3 class="card-name">${name}</h3>
        <div class="card-pricing">
          <div class="price-row">
            <span class="price-label">
              ${svgIcon('building', 12)}
              ${clinicLabel}
            </span>
            <span class="price-value">${t.egp} ${product.clinicPrice.toLocaleString()}</span>
          </div>
          ${studentPriceHtml}
        </div>
        <div class="card-ctas">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-whatsapp" id="wa-${product.id}">
            ${svgIcon('whatsapp', 16)}
            ${t.btnWhatsApp}
          </a>
          <button class="btn-consult" id="consult-${product.id}" data-pid="${product.id}" data-pname="${name.replace(/"/g,'&quot;')}">
            ${svgIcon('stethoscope', 16)}
            ${t.btnConsult}
          </button>
        </div>
      </div>
    </article>`;
}

function renderCategory(cat) {
  const isAr = currentLang === 'ar';
  const label = isAr ? cat.labelAr : cat.labelEn;
  const altLabel = isAr ? cat.labelEn : cat.labelAr;
  const description = isAr ? cat.descriptionAr : cat.descriptionEn;
  const subcategories = isAr ? cat.subcategoriesAr : cat.subcategoriesEn;

  const productsHtml = cat.products.map(p => renderProductCard(p, cat.iconType)).join('');
  const subcatChips = subcategories.map(s => `<button class="chip">${s}</button>`).join('');

  return `
    <section class="category-block reveal" id="cat-${cat.id}">
      <div class="category-header">
        <div class="category-icon-wrap icon-${cat.iconType}">
          ${svgIcon(cat.icon, 28)}
        </div>
        <div class="category-header-text">
          <h2>${label} <span style="font-size:15px;color:var(--text-muted);font-weight:600;">| ${altLabel}</span></h2>
          <p>${description}</p>
        </div>
      </div>
      <div class="subcategory-chips">${subcatChips}</div>
      <div class="products-grid">${productsHtml}</div>
    </section>`;
}

function renderCatalog() {
  const container = qs('#catalog-container');
  if (!container) return;

  const visible = CATEGORIES.filter(c => c.audience.includes(activeAudience));
  const t = I18N[currentLang];

  if (visible.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        ${svgIcon('heart', 64)}
        <h3>${t.tabPatient}</h3>
        <p>${t.tabPatient}</p>
      </div>`;
    return;
  }

  container.innerHTML = visible.map(renderCategory).join('<div class="section-divider" style="margin:40px 0;"></div>');
  triggerReveal();
}

// =========================================================
// AUDIENCE FILTER
// =========================================================
function setAudience(value) {
  activeAudience = value;
  qsa('.filter-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.audience === value);
  });
  renderCatalog();
  const catalog = qs('#catalog');
  if (catalog) {
    setTimeout(() => catalog.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }
}

// =========================================================
// CONSULTATION MODAL
// =========================================================
function openConsultModal(productId, productName) {
  activeProduct = { id: productId, name: productName };
  const overlay = qs('#consult-modal');
  const nameEl  = qs('#modal-product-name');
  if (nameEl) nameEl.textContent = productName;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeConsultModal() {
  qs('#consult-modal').classList.remove('open');
  document.body.style.overflow = '';
  activeProduct = null;
}

function submitConsultation(e) {
  e.preventDefault();
  const form = qs('#consult-form');
  const name      = qs('#consult-name', form).value.trim();
  const specialty = qs('#consult-specialty', form).value;
  const question  = qs('#consult-question', form).value.trim();
  const product   = activeProduct ? activeProduct.name : 'General Inquiry';

  if (!name || !question) {
    alert(currentLang === 'ar' ? 'يرجى إدخال الاسم والاستفسار.' : 'Please fill in your name and question.');
    return;
  }

  const specLabel = I18N[currentLang].specialties[specialty] || specialty;

  const msg = encodeURIComponent(
    `مرحباً فريق الذهبي الطبي 👋\n\n*طلب استشارة طبية إكلينيكية | Medical Consultation*\n\n👤 الاسم/Name: ${name}\n🏥 التخصص/Specialty: ${specLabel}\n📦 المنتج/Product: ${product}\n❓ الاستفسار/Question: ${question}\n\nنرجو الإفادة. شكراً جزيلاً!`
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  closeConsultModal();
  form.reset();
}

// =========================================================
// SCROLL REVEAL
// =========================================================
function triggerReveal() {
  setTimeout(() => {
    const els = qsa('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 60);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.05 });
    els.forEach(el => io.observe(el));
  }, 50);
}

// =========================================================
// SEARCH FILTERING
// =========================================================
function handleSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) { renderCatalog(); return; }

  const container = qs('#catalog-container');
  const t = I18N[currentLang];
  const results = [];

  CATEGORIES.forEach(cat => {
    if (!cat.audience.includes(activeAudience)) return;
    cat.products.forEach(p => {
      const matchEn = p.nameEn.toLowerCase().includes(q) || p.brandEn.toLowerCase().includes(q) || p.tagsEn.some(tag => tag.toLowerCase().includes(q));
      const matchAr = p.nameAr.toLowerCase().includes(q) || p.brandAr.toLowerCase().includes(q) || p.tagsAr.some(tag => tag.toLowerCase().includes(q));
      if (matchEn || matchAr) {
        results.push({ product: p, color: cat.iconType });
      }
    });
  });

  if (results.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        ${svgIcon('search', 48)}
        <h3>${t.noResultsTitle} "${query}"</h3>
        <p>${t.noResultsDesc} <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" style="color:var(--teal-deep);font-weight:700;">${t.noResultsAction}</a></p>
      </div>`;
    return;
  }

  container.innerHTML = `
    <section class="category-block">
      <div class="category-header">
        <div class="category-icon-wrap icon-teal">${svgIcon('search', 24)}</div>
        <div class="category-header-text">
          <h2>${t.searchResultsTitle} "${query}"</h2>
          <p>${results.length} ${t.itemsFound}</p>
        </div>
      </div>
      <div class="products-grid">${results.map(r => renderProductCard(r.product, r.color)).join('')}</div>
    </section>`;
  triggerReveal();
}

// =========================================================
// MOBILE MENU
// =========================================================
function toggleMobileMenu() {
  const menu = qs('#mobile-menu');
  menu.classList.toggle('open');
}

// =========================================================
// INIT
// =========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved or default language
  setLanguage(currentLang);

  // Delegated click for dynamically rendered "Ask Doctor" buttons
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn-consult[data-pid]');
    if (btn) {
      openConsultModal(btn.dataset.pid, btn.dataset.pname);
    }
  });

  // Filter tabs
  qsa('.filter-tab').forEach(btn => {
    btn.addEventListener('click', () => setAudience(btn.dataset.audience));
  });

  // Search inputs (desktop + mobile)
  qsa('.search-input').forEach(input => {
    let debounce;
    input.addEventListener('input', e => {
      clearTimeout(debounce);
      debounce = setTimeout(() => handleSearch(e.target.value), 300);
    });
  });

  // Consultation form submit
  const consultForm = qs('#consult-form');
  if (consultForm) consultForm.addEventListener('submit', submitConsultation);

  // Modal close on backdrop click
  qs('#consult-modal')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeConsultModal();
  });

  // Mobile menu toggle
  qs('#hamburger-btn')?.addEventListener('click', toggleMobileMenu);

  // Hero CTA — consultation
  qs('#hero-consult-btn')?.addEventListener('click', () => {
    openConsultModal('general', currentLang === 'ar' ? 'استشارة طبية عامة' : 'General Clinical Consultation');
  });

  // Scroll reveal for above-fold elements
  triggerReveal();

  // Animate stats counters
  animateCounters();
});

function animateCounters() {
  qsa('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const increment = target / 60;
    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = Math.floor(current).toLocaleString() + suffix;
      if (current >= target) clearInterval(timer);
    }, 20);
  });
}