// The city pages, one each at /recruitment-agency/<slug>.
// The home page targets "recruitment agency in Dubai"; the Dubai page targets "recruiters / recruitment firm in Dubai"
// so the two pages do not compete. seoTitle = Google title, heading = visible page heading.
// We serve every city from our Dubai office, so the copy never implies a local office elsewhere.

export const locations = [
  {
    slug: "dubai",
    city: "Dubai",
    seoTitle: "Recruiters and Recruitment Firm in Dubai",
    heading: "Recruiters in Dubai",
    description:
      "Licensed recruiters in Dubai. Our recruitment firm in Meydan finds, interviews and shortlists candidates for Dubai employers, who hire them directly.",
    intro:
      "Looking for recruiters in Dubai? NextGen HR is a licensed recruitment firm based at Meydan Grandstand. Our recruiters find, interview and shortlist candidates for Dubai employers, who hire them directly.",
    points: [
      "Office in Meydan Grandstand, Dubai",
      "Permanent, fixed-term and skilled workforce recruitment",
      "Screened shortlists, not piles of CVs",
      "HR consultancy for growing Dubai companies",
      "Licensed by Meydan Free Zone, Dubai",
      "Candidates never pay a fee",
    ],
    details: [
      {
        heading: "Hiring in Dubai: what to plan for",
        paragraphs: [
          "Dubai employers hire from a large, international candidate pool, and good candidates often have several offers at once. A clear brief, a realistic salary range and a quick interview process make the biggest difference to who accepts.",
          "Allow for notice periods when you plan a start date. Many candidates need to serve a notice period with their current employer before they can join you.",
        ],
      },
      {
        heading: "Working with a recruitment firm in Dubai",
        paragraphs: [
          "When you work with NextGen HR, you agree the brief with one recruiter who manages your search from start to finish. You receive a shortlist of interviewed candidates, choose who to meet, and hire your chosen candidate directly on your own contract.",
        ],
      },
    ],
    faq: [
      {
        question: "Where is your Dubai office?",
        answer: "Our office is at Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai.",
      },
      {
        question: "Do you recruit for free zone and mainland companies in Dubai?",
        answer:
          "We recruit for Dubai employers who hire candidates directly. Tell us about your company and the role, and we will confirm how we can help.",
      },
    ],
  },
  {
    slug: "abu-dhabi",
    city: "Abu Dhabi",
    seoTitle: "Recruitment Agency in Abu Dhabi",
    heading: "Recruitment agency in Abu Dhabi",
    description:
      "Recruitment agency for Abu Dhabi employers. We find, interview and shortlist candidates you hire directly, and provide HR consultancy in Abu Dhabi.",
    intro:
      "We recruit for employers across Abu Dhabi from our Dubai office, with the same interview-and-check process we use across the UAE. Employers comparing recruitment companies in Abu Dhabi can work with us remotely: send a brief, receive a screened shortlist, and hire directly.",
    points: [
      "Recruitment for Abu Dhabi employers",
      "Permanent and fixed-term roles",
      "Office, skilled and operations staff",
      "Every candidate interviewed and checked",
      "HR consultancy for Abu Dhabi companies",
      "Candidates never pay a fee",
    ],
    details: [
      {
        heading: "HR consultancy in Abu Dhabi",
        paragraphs: [
          "Abu Dhabi companies also work with us for HR consultancy. We review and write HR policies, create employee handbooks, and define team structure and job descriptions, so growing companies have clear HR foundations.",
          "Most of this work can be done remotely, with meetings arranged as needed.",
        ],
      },
      {
        heading: "How we recruit for Abu Dhabi employers",
        paragraphs: [
          "We agree the brief with you by phone or video call, search our UAE network and the market, interview every candidate, and send you a shortlist. You interview the candidates you choose and hire them directly.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you have an office in Abu Dhabi?",
        answer: "No. We serve Abu Dhabi employers from our office in Meydan, Dubai, and can arrange meetings as needed.",
      },
      {
        question: "Which roles do you recruit for in Abu Dhabi?",
        answer:
          "Office, management, skilled workforce and operations roles in real estate, construction, hospitality, retail and technology.",
      },
    ],
  },
  {
    slug: "sharjah",
    city: "Sharjah",
    seoTitle: "Recruitment Agency in Sharjah",
    heading: "Recruitment agency in Sharjah",
    description:
      "Recruitment agency for Sharjah employers. NextGen HR finds and screens permanent, fixed-term and skilled workforce candidates for Sharjah companies.",
    intro:
      "We recruit office, skilled and operations staff for Sharjah employers from our Dubai office, and help growing companies put their HR foundations in place.",
    points: [
      "Recruitment for Sharjah employers",
      "Skilled workforce and operations roles",
      "Office and management roles",
      "Every candidate interviewed and checked",
      "HR consultancy for growing companies",
      "Candidates never pay a fee",
    ],
    details: [
      {
        heading: "Roles we recruit for in Sharjah",
        paragraphs: [
          "Sharjah employers come to us for skilled tradespeople, technicians, warehouse and operations staff, as well as office, sales and management roles. Every candidate is interviewed and their experience checked before you meet them.",
        ],
      },
    ],
    faq: [
      {
        question: "Do you have an office in Sharjah?",
        answer: "No. We serve Sharjah employers from our office in Meydan, Dubai.",
      },
      {
        question: "Can you recruit several staff at once for a Sharjah business?",
        answer: "Yes. Tell us the number of roles and the start date, and we plan the search around it.",
      },
    ],
  },
];

export const getLocation = (slug) => locations.find((location) => location.slug === slug);
