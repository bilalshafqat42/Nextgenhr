// The sectors, one page each at /sectors/<slug>.
// seoTitle = the browser tab and Google title. heading = the visible page heading (sentence case).

export const sectors = [
  {
    slug: "real-estate",
    title: "Real estate",
    seoTitle: "Real Estate Recruitment Agency in Dubai",
    heading: "Real estate recruitment in Dubai",
    description:
      "Real estate recruitment agency in Dubai. We recruit property consultants, leasing staff, property managers and development teams for UAE employers.",
    intro:
      "Dubai's property market moves fast, and so does hiring in it. Our team has spent years hiring for UAE developers and brokerages, and has set up HR teams for new developers. We recruit from sales and leasing to operations, support and senior roles.",
    roles: ["Property consultants and sales agents", "Leasing consultants", "Property and facilities managers", "Sales administrators and coordinators", "Customer relations staff", "Development and project staff"],
    faq: [
      {
        question: "Can you help a new developer build its team?",
        answer:
          "Yes. We can recruit the first senior hires and, through our HR consultancy, set up the structure, policies and HR processes a new developer needs.",
      },
      {
        question: "Do you recruit RERA-qualified agents?",
        answer:
          "Yes. For broker roles in Dubai we check whether candidates hold, or can obtain, the RERA broker registration the role requires.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    seoTitle: "Construction Recruitment Agency in the UAE",
    heading: "Construction recruitment in the UAE",
    description:
      "Construction recruitment agency in the UAE. We recruit project managers, engineers, quantity surveyors and senior site leaders for contractors and developers.",
    intro:
      "Construction projects run on tight schedules and depend on the right people being on site. We recruit project leaders, engineers and commercial specialists for contractors and developers. We do not recruit labour or trades staff.",
    roles: ["Project directors and project managers", "Civil, MEP and site engineers", "Quantity surveyors and commercial managers", "Construction managers", "HSE managers", "Planning and contracts specialists"],
    faq: [
      {
        question: "Can you recruit for a project start date?",
        answer: "Yes. Share the roles and the project start date, and we plan the search to match.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    seoTitle: "Hospitality Recruitment Agency in Dubai",
    heading: "Hospitality recruitment in Dubai",
    description:
      "Hospitality recruitment agency in Dubai. We recruit front office, F&B, kitchen, housekeeping and outlet management staff for UAE hotels and restaurants.",
    intro:
      "Guests notice the people first. We recruit for hotels, restaurants and service businesses, focusing on attitude and service skills as much as experience.",
    roles: ["Front office and guest relations", "Food and beverage staff", "Chefs and kitchen staff", "Housekeeping", "Supervisors and outlet managers", "Sales and events staff"],
    faq: [
      {
        question: "Do you recruit for new openings?",
        answer: "Yes. For openings we plan the hiring in stages so key roles are in place before the wider team.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    seoTitle: "Retail Recruitment Agency in Dubai",
    heading: "Retail recruitment in Dubai",
    description:
      "Retail recruitment agency in Dubai. We recruit sales associates, store managers, visual merchandisers and area managers for retail brands across the UAE.",
    intro:
      "Retail depends on people who can sell and serve well. Our team has years of experience hiring for international retail franchise operations in the UAE, and we recruit store teams and managers for retail brands across the country's malls and high streets.",
    roles: ["Sales associates", "Store and assistant managers", "Visual merchandisers", "Cashiers and customer service staff", "Stock and warehouse staff", "Area managers"],
    faq: [
      {
        question: "Can you recruit for seasonal peaks?",
        answer: "Yes. Tell us the number of roles and the dates, and we plan the search ahead of the peak.",
      },
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    seoTitle: "IT and Tech Recruitment Agency in Dubai",
    heading: "IT and technology recruitment in Dubai",
    description:
      "IT recruitment agency in Dubai. We recruit software developers, IT support, network and security specialists and data analysts for UAE employers.",
    intro:
      "Good technical people are in demand everywhere. We recruit developers, IT support and technical specialists, and check skills properly so your interview time goes on candidates with the right skills.",
    roles: ["Software developers", "IT support and systems administrators", "Network and security specialists", "Data analysts", "Product and project managers", "Technical sales"],
    faq: [
      {
        question: "Do you test technical skills?",
        answer: "We screen technical experience in interview and can arrange a skills task you provide.",
      },
    ],
  },
];

export const getSector = (slug) => sectors.find((sector) => sector.slug === slug);
