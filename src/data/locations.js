// The city pages, one each at /recruitment-agency/<slug>.
// Each page targets "recruitment agency in <city>" and related searches (recruitment companies, recruiters).

export const locations = [
  {
    slug: "dubai",
    city: "Dubai",
    seoTitle: "Recruitment Agency in Dubai",
    description:
      "Licensed recruitment agency in Dubai. NextGen HR finds, interviews and shortlists permanent and contract candidates for Dubai employers, and offers HR consultancy.",
    intro:
      "Our office is in Meydan, Dubai. As a licensed recruitment agency, we help Dubai employers hire permanent and contract staff across real estate, construction, hospitality, retail and technology, and we support growing companies with HR consultancy.",
    points: [
      "Office in Meydan Grandstand, Dubai",
      "Permanent, contract and skilled workforce recruitment",
      "Screened short lists, not piles of CVs",
      "HR consultancy for growing Dubai companies",
      "Licensed by Meydan Free Zone, Dubai",
      "Candidates never pay a fee",
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    seoTitle: "Recruitment Agency in Abu Dhabi",
    description:
      "Recruitment agency for Abu Dhabi employers. NextGen HR finds and screens permanent and contract candidates, and provides HR consultancy in Abu Dhabi.",
    intro:
      "We recruit for employers across Abu Dhabi from our Dubai office, with the same interview-and-check process we use across the UAE. Abu Dhabi companies also work with us for HR consultancy: HR policies, employee handbooks and team structure.",
    points: [
      "Recruitment for Abu Dhabi employers",
      "Permanent and contract roles",
      "Office, skilled and operations staff",
      "Every candidate interviewed and checked",
      "HR consultancy for Abu Dhabi companies",
      "Candidates never pay a fee",
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    seoTitle: "Recruitment Agency in Sharjah",
    description:
      "Recruitment agency for Sharjah employers. NextGen HR finds and screens permanent, contract and skilled workforce candidates for Sharjah companies.",
    intro:
      "Sharjah is home to many manufacturing, logistics and trading businesses. We recruit office, skilled and operations staff for Sharjah employers from our Dubai office, and help growing companies put their HR foundations in place.",
    points: [
      "Recruitment for Sharjah employers",
      "Skilled workforce and operations roles",
      "Office and management roles",
      "Every candidate interviewed and checked",
      "HR consultancy for growing companies",
      "Candidates never pay a fee",
    ],
  },
];

export const getLocation = (slug) => locations.find((location) => location.slug === slug);
