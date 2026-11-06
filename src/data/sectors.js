// The sectors, one page each at /sectors/<slug>.
// seoTitle = the browser tab and Google title. heading = the visible page heading (sentence case).
// roles = senior, managerial and specialist roles only: NextGen HR does not recruit labour or entry-level staff.
// details = optional extra sections shown on the page (heading, paragraphs and an optional bullet list).

export const sectors = [
  {
    slug: "real-estate",
    title: "Real estate",
    seoTitle: "Real Estate Recruitment Agency in Dubai",
    heading: "Real estate recruitment in Dubai",
    description:
      "Real estate recruitment agency in Dubai. We recruit property consultants, sales managers and leasing teams for brokerages, and leaders for UAE developers.",
    intro:
      "Real estate is where our team's experience runs deepest. Dubai's property market moves fast, and so does hiring in it. Our team has spent years leading HR and hiring inside UAE developers and brokerages, and has built HR departments for five new developers. We recruit experienced property consultants, sales leaders, operations managers and development specialists.",
    roles: ["Property consultants for secondary sales, off-plan and leasing", "Sales directors and sales managers", "Leasing and property managers", "Facilities and community managers", "Customer relations and handover managers", "Development, project and design managers"],
    details: [
      {
        heading: "How we recruit property consultants",
        paragraphs: [
          "A good agent is judged on results, not on a CV. Before you meet anyone, we check what each candidate has actually done in the Dubai market.",
        ],
        items: [
          "Specialism: secondary sales, off-plan or leasing, and the communities they know",
          "Track record: deals closed, listings handled and the price range they work in",
          "RERA broker registration: whether they hold it, or can obtain it for your brokerage",
          "Languages and the client markets they can serve",
          "Fit with your commission structure and the way your team works",
        ],
      },
      {
        heading: "For new and growing brokerages",
        paragraphs: [
          "Building a sales team means more than hiring agents. We can recruit your first sales manager, plan hiring in stages as you grow, and, through our HR consultancy, set up contracts, commission policies and onboarding so new agents become productive quickly.",
        ],
      },
    ],
    faq: [
      {
        question: "Can you recruit several agents at once?",
        answer:
          "Yes. Tell us how many agents you need and the split across secondary sales, off-plan and leasing, and we plan the search so you meet suitable candidates for each.",
      },
      {
        question: "Do you recruit RERA-qualified agents?",
        answer:
          "Yes. For broker roles in Dubai we check whether candidates hold, or can obtain, the RERA broker registration the role requires.",
      },
      {
        question: "Can you design a commission structure for a sales team?",
        answer:
          "Yes. Through our HR consultancy we can review your salary and commission structure against the UAE market, so it attracts strong sales people and stays affordable.",
      },
      {
        question: "Can you help a new developer build its team?",
        answer:
          "Yes. We can recruit the first senior hires and, through our HR consultancy, set up the structure, policies and HR processes a new developer needs.",
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
      {
        question: "Do you check professional qualifications?",
        answer:
          "Yes. We check degrees, professional memberships and project experience against the role, and confirm whether any UAE professional registration the role requires is in place or can be obtained.",
      },
      {
        question: "Do you recruit site labour or trades staff?",
        answer:
          "No. We recruit project leaders, engineers and commercial specialists only. We do not supply labour or trades staff.",
      },
    ],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    seoTitle: "Hospitality Recruitment Agency in Dubai",
    heading: "Hospitality recruitment in Dubai",
    description:
      "Hospitality recruitment agency in Dubai. We recruit general managers, F&B and rooms division leaders, sales directors and head chefs for UAE hotels.",
    intro:
      "Guests notice the people first, and the leaders set the standard. We recruit general managers, department heads and senior specialists for hotels, restaurant groups and hospitality businesses, focusing on leadership and service culture as much as experience.",
    roles: ["General managers and hotel managers", "Food and beverage directors and managers", "Rooms division and front office managers", "Directors of sales and revenue managers", "Executive chefs and head chefs", "HR, finance and operations managers for hospitality groups"],
    faq: [
      {
        question: "Do you recruit for new openings?",
        answer: "Yes. For openings we plan the hiring in stages so the leadership team and key department heads are in place before the wider team is hired.",
      },
      {
        question: "Can you recruit for a restaurant group rather than a hotel?",
        answer:
          "Yes. We recruit operations managers, area managers, head chefs and support functions such as HR and finance for restaurant and F&B groups.",
      },
      {
        question: "Do you recruit waiters, housekeeping or kitchen staff?",
        answer:
          "No. We focus on managers, department heads and senior specialists. Entry-level and operational hospitality staff are outside our service.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    seoTitle: "Retail Recruitment Agency in Dubai",
    heading: "Retail recruitment in Dubai",
    description:
      "Retail recruitment agency in Dubai. We recruit store, area and retail operations managers, buyers and e-commerce leaders for retail brands across the UAE.",
    intro:
      "Retail depends on leaders who can sell, serve and run a profitable store. Our team has years of experience running HR, hiring and compliance audits across 17 UAE stores for an international retail franchise operator, and we recruit managers and specialists for retail brands across the country's malls and high streets.",
    roles: ["Store managers and assistant store managers", "Area and regional managers", "Retail operations managers", "Buyers and merchandise planners", "Visual merchandising managers", "E-commerce and digital retail managers"],
    faq: [
      {
        question: "Can you recruit managers for a new store opening?",
        answer: "Yes. Tell us the opening date and the roles, and we plan the search so the store and area managers are in place before you hire the wider team.",
      },
      {
        question: "Do you recruit for franchise brands?",
        answer:
          "Yes. Our team has hiring experience with international retail franchise operations in the UAE and understands how brand standards and franchise reporting shape each role.",
      },
      {
        question: "Do you recruit sales associates or cashiers?",
        answer:
          "No. We focus on managers and specialists. Store-level sales and cashier roles are outside our service.",
      },
    ],
  },
  {
    slug: "technology",
    title: "Technology",
    seoTitle: "IT and Tech Recruitment Agency in Dubai",
    heading: "IT and technology recruitment in Dubai",
    description:
      "IT recruitment agency in Dubai. We recruit IT managers, senior software engineers, cyber security, data and ERP specialists for UAE employers.",
    intro:
      "Good technical people are in demand everywhere. We recruit technology leaders and senior specialists, and check skills properly so your interview time goes on candidates with the right experience for your systems and your team.",
    roles: ["Heads of IT and IT managers", "Senior software engineers and engineering leads", "Cyber security specialists", "Data analysts and data engineers", "ERP and business systems specialists", "Product and project managers"],
    faq: [
      {
        question: "Do you test technical skills?",
        answer: "We screen technical experience in interview and can arrange a skills task you provide.",
      },
      {
        question: "Can you recruit a first head of IT for a growing company?",
        answer:
          "Yes. We help you define what the role must achieve, set a realistic package, and find leaders who can both run day-to-day IT and plan for growth.",
      },
      {
        question: "Can you keep a technology search confidential?",
        answer:
          "Yes. For confidential roles, such as replacing a current manager, we approach candidates discreetly and share your company name only when you agree.",
      },
    ],
  },
];

export const getSector = (slug) => sectors.find((sector) => sector.slug === slug);
