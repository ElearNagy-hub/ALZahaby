# Al-Dahabi Dental Supplies (شركة الذهبي لمستلزمات وأجهزة الأسنان)
## UI/UX Screens and Wireframes Specification (UI_SPEC.md)
**Document Version:** 1.0 (MVP Phase)  
**Author:** Nagy (Project Manager)  
**Target Audience:** Dentists, Dental Students, and Patients [20]  
**Design Paradigm:** Concierge MVP & Bootstrap Marketing (Low-Capital Validation) [9]
The website should support Arabic and English languages 

---

# General UI/UX Guidelines

### 1. Theme & Color Palette
*   **Primary Color:** Deep Clinical Teal (`#0C4A6E`) - Represents medical hygiene, clinical trust, and professional precision.
*   **Secondary Color:** Al-Dahabi Gold (`#D97706`) - Nods directly to the "Golden" brand identity ("Al-Dahabi") [1] and highlights premium-tier equipment and key CTA states.
*   **Background Colors:** Light Clinical Gray (`#F8FAFC`) and Crisp White (`#FFFFFF`).
*   **Accent Color:** WhatsApp Green (`#22C55E`) - Used exclusively for the low-barrier Concierge order validation buttons [9].

### 2. Tone & Vibe
*   **Medical-Grade & Trustworthy:** Clean borders, generous whitespace, and sharp professional iconography.
*   **Expert-Driven:** The UI actively pushes professional medical consultation over a cold, passive checkout process [10].
*   **Simplified Navigation:** Optimized for busy practitioners on clinic mobile devices and dental students on-the-go.

### 3. Layout Grid & Responsiveness
*   **Mobile-First Approach:** 90% of dental students and clinic assistants will access the site via mobile.
*   **Grid System:** Standard 12-column grid for desktop; 1-column layout for product cards on mobile.

---

# Screen 1: The Landing Page / Hero Section

This screen serves as the immediate credibility and conversion hub. It must instantly validate the brand name, address, and expert consultation USP [2, 10].

### Wireframe Layout (Desktop View)

+-----------------------------------------------------------------------------------------+ | [GOLD LOGO: Al-Dahabi]   |  Search Materials & Devices...  | B2B Portal | Student Hub | | [Navbar] +-----------------------------------------------------------------------------------------+ |                                                                                         | |   👑 EL-DAHABI: VALUE FOR MONEY DENTAL SUPPLIES [21]                                     | |   Empowering Egyptian Dentists with Up-to-Date Clinical Materials & Devices [21]         | |                                                                                         | |   [USP Badge 1: Expert-Led Consultation (Doctors & Pharmacists, NOT traditional traders)] [10] |   [USP Badge 2: Immediate Kasr Al-Ainy Pickup (3 Fahmy Street, off El-Rashidy)] [2]     | |                                                                                         | |   +-------------------------------+      +------------------------------------------+   | |   |   💬 ASK OUR CLINICAL EXPERT  |      |   🟢 DISCUSS & ORDER VIA WHATSAPP (MVP)  |   | [CTAs] |   |   (Request Free Consultation) |      |   (Immediate Order & Delivery)           |   | |   +-------------------------------+      +------------------------------------------+   | |                                                                                         | |   ⭐ LOYALTY POINTS PROGRAM: Earn points on every consumable purchase! [Nagy]           | +-----------------------------------------------------------------------------------------+


### Element Breakdown
1.  **Navigation Bar (Navbar):**
    *   **Logo:** Left-aligned, Al-Dahabi Gold [1].
    *   **Universal Search Bar:** Centered with placeholder *"Search 1,000+ items (Materials, Brands, Devices)..."* [21]
    *   **B2B Portal Toggle:** Quick filter switch for private clinic owners [7].
    *   **Student Hub Toggle:** Direct routing to Ezz's Student Ambassador Network [12].
2.  **Hero Copy & USP Headline:**
    *   **Headline:** *"Al-Dahabi Dental Supplies: Your Expert Partner in Clinical Excellence."* [10, 21]
    *   **Sub-headline:** *"Bridging the gap between everyday clinical consumables and heavy dental equipment with expert-led service."* [10]
3.  **Concierge CTAs (The Validation Engine):**
    *   **Primary CTA (WhatsApp Green):** *"Direct Order via WhatsApp"* - Links to the sales representative WhatsApp line to validate demand manually [3, 9].
    *   **Secondary CTA (Teal/Gold Outline):** *"Request Medical Consultation"* - Direct routing to Hassan or on-staff pharmacist for equipment advice [3, 10].
4.  **Loyalty Points Icon:** 
    *   A golden crown or coin icon with the text: *"Al-Dahabi Loyalty Circle - Scan or register to track points."* [Nagy]

---

# Screen 2: Product Catalog & Categories

A structured presentation of Al-Dahabi's core offerings, segmented by target audiences [20].

### Wireframe Layout

+-----------------------------------------------------------------------------------------+ |  FILTER BY TARGET AUDIENCE:   [x] Private Clinics (B2B)  [ ] Students  [ ] End Patients | +-----------------------------------------------------------------------------------------+ |                                                                                         | |  [ CATEGORY 1: DENTAL DEVICES ]                                                         | |  "High-Value Equipment with Guaranteed Maintenance & EDA-Compliant Import Papers" [4, 8]| |  --> [Sub-Category Grid: Autoclaves | Dental Units | Imaging | Handpieces]              | |                                                                                         | |  [ CATEGORY 2: MATERIALS & CONSUMABLES ]                                                | |  "Value-Priced, High-Turnover Daily Essentials for Egyptian Dentists" [12, 21]          | |  --> [Sub-Category Grid: Composites | Endodontic Files | Impression | Disposable Gowns] | |                                                                                         | |  [ CATEGORY 3: B2C HOME CARE ]                                                          | |  "Direct-to-Patient Hygiene Products" [20]                                              | |  --> [Sub-Category Grid: Oral Irrigators | Orthodontic Brushes | Ortho Wax | Floss]     | |                                                                                         | +-----------------------------------------------------------------------------------------+


### UX Design Rules
*   **Tabbed Auditing:** Users can toggle between B2B and B2C interfaces. If the user selects "End Patients", Category 1 and 2 are hidden, showcasing only Category 3 to avoid confusing laymen [20].
*   **Visual Cards:** Each of the 3 primary categories features a high-fidelity image with a clean micro-copy explaining the category's unique value proposition.

---

# Component: Product Card

The product card is the most critical micro-UX element. It must handle different pricing models and concierge routing instead of adding to a traditional cart [12].

### Wireframe Layout

+---------------------------------------------------+ |  [ Product Image ]                                | |  [Category Tag: Material | Student Discount Eligible] [12] +---------------------------------------------------+ |  Composite Restorative Material Kit (A2)      | |  Brand: Premium Sourced Material                | +---------------------------------------------------+ |  🏷️ Clinic Price: 850 EGP                         | |  🎓 Student Ambassador Price: 720 EGP [12]        | +---------------------------------------------------+ |  [ 🟢 Order 1-Click via WhatsApp ] [9]             | |  [ 💬 Ask Doctor: Consultation ] [10]              | +---------------------------------------------------+


### UX & Content Requirements
1.  **B2B vs. Student Dual Pricing Layout:** 
    *   Displays the standard retail price alongside the discounted **Student Ambassador Price** [12] to drive high student turnover [12].
2.  **The Concierge MVP Buttons (Zero-Cart Architecture):**
    *   **Button 1 (Primary Green):** *"🟢 Order 1-Click via WhatsApp"*
        *   *Developer Action:* When clicked on mobile, it opens WhatsApp with a pre-filled message: *"Hello Al-Dahabi, I want to order [Product Name] for my clinic/university. Please confirm availability."* [9, 11]
    *   **Button 2 (Secondary Bordered Teal):** *"💬 Ask Doctor: Consultation"*
        *   *Developer Action:* Triggers a quick clinical form where the dentist can ask Hassan or the pharmacist about product specifications before buying [3, 10].

---

# Screen 3: Footer & Contact Information

The footer builds local authority and lists omnichannel routing to drive Kasr Al-Ainy market trust and on-the-ground foot traffic [2].

### Wireframe Layout (Desktop View)

+-----------------------------------------------------------------------------------------+ |                                                                                         | |   AL-DAHABI DENTAL SUPPLIES (شركة الذهبي)                                           | |   Expert-Led Professional Service & Value for Money [10, 21]                             | |                                                                                         | |   📍 CENTRAL HUB PHYSICAL ADDRESS:                                                      | |   3 Fahmy Street, off El-Rashidy & Bostan El-Fadel, Kasr Al-Ainy, Cairo, Egypt [2]      | |   (Directly inside the Kasr Al-Ainy Dental Market - Drop in for Immediate Pickup) [2]   | |                                                                                         | |   📞 OMNICHANNEL CONTACT CHANNELS:                                                      | |   - WhatsApp: +201XXXXXXXXX (Fastest Response) [11]                                     | |   - Facebook Inquiries: /ElzhabyDental [11]                                             | |   - Office Line & Storage Desk (Amr & Team Hub) [3, 4]                                  | |                                                                                         | |   ⚖️ Legal: Single-Member LLC | Registered with the Egyptian Drug Authority (EDA) [1]   | |   © 2026 Al-Dahabi Dental Supplies. All Rights Reserved.                                | |                                                                                         | +-----------------------------------------------------------------------------------------+


### Core Omnichannel Routing Elements
*   **Kasr Al-Ainy Google Maps Pin Link:** Embed a clickable map link targeting the central hub address so dental students and doctors can easily navigate for on-the-ground store walk-ins [2].
*   **EDA Registration Badge:** A visual checkmark icon confirming regulatory compliance to establish ultimate B2B trust with sub-distributors [1, 7].
