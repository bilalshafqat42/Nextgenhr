// The city pages, one each at /recruitment-agency/<slug>.

export const locations = [
  {
    slug: "dubai",
    city: "Dubai",
    seoTitle: "Recruitment Agency in Dubai",
    description:
      "NextGen HR is a licensed recruitment agency and HR consultancy based in Meydan, Dubai, helping Dubai employers hire permanent and contract staff.",
    intro:
      "Our office is in Meydan, Dubai. We recruit for Dubai employers across real estate, construction, hospitality, healthcare, retail and technology, and advise on HR as companies grow.",
    points: [
      "Office in Meydan Grandstand, Dubai",
      "Permanent, contract and skilled workforce recruitment",
      "HR consultancy for growing Dubai companies",
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    seoTitle: "Recruitment Agency in Abu Dhabi",
    description:
      "Recruitment for Abu Dhabi employers: NextGen HR finds and screens permanent and contract candidates for companies across Abu Dhabi.",
    intro:
      "We recruit for employers across Abu Dhabi from our Dubai office, with the same screening and short-list process we use everywhere in the UAE.",
    points: [
      "Recruitment for Abu Dhabi employers",
      "Candidates screened before you meet them",
      "Healthcare candidates checked for DOH licensing needs",
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    seoTitle: "Recruitment Agency in Sharjah",
    description:
      "Recruitment for Sharjah employers: NextGen HR finds and screens permanent, contract and skilled workforce candidates for Sharjah companies.",
    intro:
      "Sharjah is home to many manufacturing, logistics and trading businesses. We recruit office, skilled and operations staff for Sharjah employers from our Dubai office.",
    points: [
      "Recruitment for Sharjah employers",
      "Skilled workforce and operations roles",
      "Office and management roles",
    ],
  },
];

export const getLocation = (slug) => locations.find((location) => location.slug === slug);
