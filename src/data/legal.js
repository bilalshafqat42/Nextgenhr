// Privacy Policy and Cookie Policy text, in plain language.
// This is a starting point, not legal advice: have it reviewed by a qualified UAE adviser before launch.
// Update "lastUpdated" whenever the text changes.

import { ids, trackingEnabled } from "@/lib/tracking";

export const privacyPolicy = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  description: "How NextGen HR Consultancy collects, uses and protects personal data from employers, job seekers and website visitors, and how to contact us about it.",
  lastUpdated: "23 October 2026",
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
        "When you contact us, we collect the details you give us, such as your name, company, phone number, email address and message.",
        "If you are a job seeker, we also collect the information you choose to share with us, such as your CV, work history, qualifications and the roles you are interested in.",
        "Our hosting provider may record basic technical information when you visit, such as your IP address and browser type, to keep the website secure and working.",
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
        "We use trusted service providers, such as website hosting and email, who process data on our behalf. We may also share data when the law requires it.",
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
        "To make a request, email us at info@nextgenhr.ae. We will reply within a reasonable time.",
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
