// The sectors, one page each at /sectors/<slug>.

export const sectors = [
  {
    slug: "real-estate",
    title: "Real estate",
    seoTitle: "Real Estate Recruitment Agency in Dubai",
    description:
      "Real estate recruitment in Dubai and the UAE: sales, leasing, property management and development roles, filled by NextGen HR.",
    intro:
      "Dubai's property market moves fast, and so does hiring in it. We recruit for developers, brokerages and property managers, from sales and leasing to operations and support roles.",
    roles: ["Property consultants and sales agents", "Leasing consultants", "Property and facilities managers", "Sales administrators and coordinators", "Customer relations staff", "Development and project staff"],
    faq: [
      {
        question: "Do you recruit RERA-qualified agents?",
        answer:
          "Yes. For broker roles in Dubai we check whether candidates hold, or can obtain, the registration the role requires.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    seoTitle: "Construction Recruitment Agency in the UAE",
    description:
      "Construction recruitment in the UAE: engineers, site supervisors, skilled trades and project staff, recruited by NextGen HR.",
    intro:
      "Construction projects run on tight schedules and depend on the right people being on site. We recruit engineers, supervisors, skilled trades and project support staff for contractors and developers.",
    roles: ["Civil, MEP and site engineers", "Site supervisors and foremen", "Quantity surveyors", "Skilled trades: electricians, plumbers, welders", "Safety officers", "Project coordinators"],
    faq: [
      {
        question: "Can you recruit for a project start date?",
        answer: "Yes. Share the number of roles and the mobilisation date, and we plan the search to match.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    seoTitle: "Hospitality Recruitment Agency in Dubai",
    description:
      "Hospitality recruitment in Dubai and the UAE: hotel, restaurant and service staff, from front of house to management, recruited by NextGen HR.",
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
    slug: "healthcare",
    title: "Healthcare",
    seoTitle: "Healthcare Recruitment Agency in the UAE",
    description:
      "Healthcare recruitment in the UAE: nurses, allied health, clinic and administrative staff for clinics and hospitals, recruited by NextGen HR.",
    intro:
      "Healthcare hiring needs care and accuracy. We recruit for clinics, medical centres and hospitals, and check early whether candidates hold the professional licence the role requires.",
    roles: ["Nurses", "Allied health professionals", "Clinic and front-desk staff", "Medical administrators", "Pharmacy staff", "Practice managers"],
    faq: [
      {
        question: "Do candidates need a UAE healthcare licence?",
        answer:
          "Most clinical roles need a professional licence from the health authority in the relevant emirate, such as DHA in Dubai or DOH in Abu Dhabi. We check this early in the process.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    seoTitle: "Retail Recruitment Agency in Dubai",
    description:
      "Retail recruitment in Dubai and the UAE: store, sales and management roles for retail brands, recruited by NextGen HR.",
    intro:
      "Retail depends on people who can sell and serve well. We recruit store teams and managers for retail brands across the UAE's malls and high streets.",
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
    description:
      "IT and technology recruitment in Dubai and the UAE: developers, IT support and technical specialists, recruited by NextGen HR.",
    intro:
      "Good technical people are in demand everywhere. We recruit developers, IT support and technical specialists, and check skills properly so you only interview strong candidates.",
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
