// Privacy Policy, Cookie Policy and Terms of Use text, in plain language.
// This is a starting point, not legal advice: have it reviewed by a qualified UAE adviser before launch.
// Update "lastUpdated" whenever the text changes.

import { ids, trackingEnabled } from "@/lib/tracking";

export const privacyPolicy = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description: "How NextGen HR Consultancy collects, uses and protects personal data from employers, job seekers and website visitors, and how to contact us about it.",
  lastUpdated: "26 October 2026",
  sections: [
    {
      heading: "Who we are",
      paragraphs: [
        "This website is run by NextGen HR Consultancy L.L.C-FZ, a company licensed by Meydan Free Zone, Dubai, UAE. In this policy, \"we\" and \"us\" mean NextGen HR.",
      ],
    },
    {
      heading: "What we collect",
      paragraphs: [
        "When you contact us through our website, by email, by phone or on WhatsApp, we collect the details you give us, such as your name, company, phone number, email address and message.",
        "If you are a job seeker, we also collect the information you choose to share with us, such as your CV, work history, qualifications and the roles you are interested in.",
        "Our hosting provider may record basic technical information when you visit, such as your IP address and browser type, to keep the website secure and working.",
        ...(trackingEnabled
          ? ["If you accept cookies on our website, we also collect information about how you use the site, such as the pages you visit and how you found us. See our Cookie Policy for details."]
          : []),
      ],
    },
    {
      heading: "How we use it",
      paragraphs: [
        "We use your details to reply to your enquiry, provide our recruitment and HR consultancy services, match candidates with suitable roles, and meet our legal obligations.",
        "We do not sell your personal data.",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "If you are a candidate, we share your details with a potential employer only for a specific role and only with your agreement.",
        "We use trusted service providers who process data on our behalf, such as website hosting, email, and messaging services like WhatsApp when you choose to contact us that way. We may also share data when the law requires it.",
        "Some of these providers may store or process data outside the UAE. When this happens, we take reasonable steps to make sure your data stays protected.",
      ],
    },
    {
      heading: "How long we keep it",
      paragraphs: [
        "We keep enquiry details for as long as needed to respond and follow up.",
        "We keep candidate CVs for [X months] after our last contact, unless you ask us to delete them sooner.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        "Under UAE data protection law, including Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data, you can ask to see the personal data we hold about you, correct it, delete it, or withdraw your consent.",
        "To make a request, email us at info@nextgenhr.ae or call +971 50 310 6920. We may ask you to confirm your identity before acting on a request. We will reply within a reasonable time.",
      ],
    },
    {
      heading: "Keeping your data safe",
      paragraphs: [
        "We use reasonable technical and organisational measures to protect your data from loss, misuse and unauthorised access.",
      ],
    },
    {
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The date at the top shows when it last changed.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "NextGen HR Consultancy L.L.C-FZ, Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE. Email: info@nextgenhr.ae. Phone: +971 50 310 6920.",
      ],
    },
  ],
};

export const cookiePolicy = {
  slug: "cookie-policy",
  title: "Cookie Policy",
  description: "How the NextGen HR website uses cookies, which tools we use only with your consent, and how to change your cookie choice at any time.",
  lastUpdated: "24 October 2026",
  sections: [
    {
      heading: "What cookies are",
      paragraphs: [
        "Cookies are small text files that a website saves in your browser. They can help a site work properly or show how people use it.",
      ],
    },
    {
      heading: "How we use cookies",
      // The wording switches automatically once tracking IDs are added in src/data/site.js.
      paragraphs: trackingEnabled
        ? [
            "We use a small number of cookies only if you click \"Accept\" on our cookie banner. If you click \"Reject\", none of them are set.",
            ids.ga4 && "Analytics: Google Analytics helps us understand how visitors use the site, for example which pages are read most.",
            (ids.googleAds || ids.metaPixel) &&
              `Advertising: ${[ids.googleAds && "Google Ads", ids.metaPixel && "the Meta Pixel (Facebook and Instagram)"].filter(Boolean).join(" and ")} ${ids.googleAds && ids.metaPixel ? "tell" : "tells"} us whether our adverts lead to enquiries, so we can improve them.`,
            "We save your choice in your browser so we do not ask again on every page. You can change it at any time with the \"Cookie settings\" link at the bottom of every page.",
          ].filter(Boolean)
        : [
            "This website does not currently use cookies for analytics or advertising.",
            "If we add analytics or advertising tools in the future, we will update this policy and ask for your consent before setting those cookies.",
          ],
    },
    {
      heading: "Managing cookies",
      paragraphs: [
        "You can block or delete cookies at any time in your browser settings. Blocking cookies does not stop you using this website.",
      ],
    },
    {
      heading: "Questions",
      paragraphs: ["If you have questions about this policy, email us at info@nextgenhr.ae."],
    },
  ],
};

export const termsOfUse = {
  slug: "terms",
  title: "Terms of Use",
  description: "The terms for using the NextGen HR website, including how we provide information, job seeker and employer enquiries, intellectual property and governing law.",
  lastUpdated: "26 October 2026",
  sections: [
    {
      heading: "About these terms",
      paragraphs: [
        "These terms apply to your use of nextgenhr.ae. The website is run by NextGen HR Consultancy L.L.C-FZ, a company licensed by Meydan Free Zone, Dubai, UAE. In these terms, \"we\" and \"us\" mean NextGen HR.",
        "By using this website, you agree to these terms. If you do not agree, please do not use the website.",
      ],
    },
    {
      heading: "Information on this website",
      paragraphs: [
        "The content on this website is general information about our services and about recruitment and HR in the UAE. It is not legal, tax or immigration advice. For advice about your situation, please speak to a qualified professional.",
        "We work to keep the content accurate and up to date, but laws and regulations change. We do not guarantee that every page is complete or current at all times.",
      ],
    },
    {
      heading: "Our services",
      paragraphs: [
        "Sending an enquiry through this website does not create a contract. When we agree to provide recruitment or HR consultancy services to an employer, the services are covered by a separate written agreement, which sets out the fees and terms.",
        "Employers make their own hiring decisions and hire candidates directly, on their own contract.",
      ],
    },
    {
      heading: "Job seekers",
      paragraphs: [
        "We never charge candidates a fee. If anyone asks you for money in our name, please do not pay and contact us at info@nextgenhr.ae.",
        "Sending us your CV does not guarantee an interview or a job offer. Please make sure the information you share with us is accurate and your own.",
      ],
    },
    {
      heading: "Using this website",
      paragraphs: [
        "You agree to use this website lawfully and not to misuse it, for example by trying to gain unauthorised access, introducing harmful code, sending spam through our forms, or copying content in bulk.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "The NextGen HR name, logo, website design and written content belong to NextGen HR or are used with permission. You may share links to our pages, but you may not copy or reuse our content or branding for commercial purposes without our written permission.",
      ],
    },
    {
      heading: "Links to other websites",
      paragraphs: [
        "This website may link to other websites, such as government portals. We are not responsible for the content or privacy practices of those websites.",
      ],
    },
    {
      heading: "Our liability",
      paragraphs: [
        "To the extent permitted by UAE law, we are not liable for any loss arising from your use of this website or from relying on its general information. Nothing in these terms limits any liability that cannot be limited under UAE law.",
      ],
    },
    {
      heading: "Privacy",
      paragraphs: [
        "Our Privacy Policy explains how we handle personal data, and our Cookie Policy explains how we use cookies.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Dubai. Any dispute about them will be handled by the competent courts of Dubai.",
      ],
    },
    {
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The date at the top shows when they last changed.",
      ],
    },
    {
      heading: "Contact us",
      paragraphs: [
        "Questions about these terms: email info@nextgenhr.ae or call +971 50 310 6920.",
      ],
    },
  ],
};
