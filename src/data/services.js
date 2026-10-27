// The services, one page each at /services/<slug>.
// Every service falls under one of the two activities on NextGen's trade licence:
//   Human resources consultancy (7490.14)
//   Labor Recruitment Brokerage Office Services (7810.97)
// seoTitle = the browser tab and Google title. heading = the visible page heading (sentence case).
// details = extra sections shown on the page. relatedPost = the blog article linked from the page.

export const services = [
  {
    slug: "recruitment",
    title: "Recruitment",
    navTitle: "Recruitment",
    licence: "Labor Recruitment Brokerage Office Services",
    seoTitle: "Recruitment Consultancy & Services in Dubai",
    heading: "Recruitment consultancy in Dubai",
    description:
      "Recruitment consultancy in Dubai for UAE employers. We find, interview and shortlist candidates for permanent and fixed-term roles you hire directly.",
    summary: "Permanent and fixed-term hiring. We source, interview and check candidates, then send you a shortlist.",
    intro:
      "Hiring the wrong person costs time and money. As a licensed recruitment consultancy in Dubai, we take your brief, search our network and the market, interview and check every candidate, and send you a shortlist of people who genuinely fit the role.",
    includes: [
      { title: "Role brief and market check", text: "We agree the role, skills, salary range and timeline before the search starts." },
      { title: "Sourcing", text: "We search our UAE network, referrals and the open market for suitable people." },
      { title: "Screening and interviews", text: "Every candidate is interviewed and their experience checked before you see them." },
      { title: "Offer and onboarding support", text: "We help agree the offer and stay in touch after the start date." },
    ],
    details: [
      {
        heading: "What a recruitment consultancy does for you",
        paragraphs: [
          "A recruitment consultancy takes the time-consuming part of hiring off your desk: writing the brief, finding candidates, screening them and arranging interviews. You spend your time meeting a few strong people, not reading hundreds of CVs.",
          "NextGen HR works for employers in Dubai, Abu Dhabi, Sharjah and across the UAE. You hire every candidate directly, on your own contract and visa, and candidates never pay us a fee.",
        ],
      },
      {
        heading: "What your shortlist includes",
        paragraphs: [
          "Every shortlisted candidate has been interviewed by our team. For each one you receive a short summary of their experience, why they fit the role, their notice period and their salary expectations, so you can decide quickly who to meet.",
        ],
      },
      {
        heading: "Roles we recruit for",
        paragraphs: [
          "We recruit for permanent and fixed-term roles from entry level to management, in real estate, construction, hospitality, retail and technology. For senior leadership roles, see our executive search service.",
        ],
      },
    ],
    relatedPost: "how-to-choose-a-recruitment-agency-in-dubai",
    faq: [
      {
        question: "What roles do you recruit for?",
        answer:
          "We recruit for permanent and fixed-term roles from entry level to management, across sectors including real estate, construction, hospitality, retail and technology.",
      },
      {
        question: "Can you recruit for fixed-term roles?",
        answer:
          "Yes. We recruit for fixed-term as well as permanent roles. In both cases your company hires the candidate directly.",
      },
    ],
  },
  {
    slug: "hr-consultancy",
    title: "HR consultancy",
    navTitle: "HR consultancy",
    licence: "Human resources consultancy",
    seoTitle: "HR Consultancy in Dubai and the UAE",
    heading: "HR consultancy in Dubai and the UAE",
    description:
      "HR consultancy in Dubai and across the UAE: HR set-up for new companies, policies and handbooks, appraisals, salary benchmarking and practical HR advice.",
    summary: "HR set-up, policies and handbooks, organisational design, appraisals and salary benchmarking for growing UAE companies.",
    intro:
      "Growing companies often hire faster than their HR can keep up. Our HR consultancy in Dubai helps you build an HR function that holds up as the business grows: clear policies, a handbook your team understands, fair performance reviews and a structure that scales.",
    includes: [
      { title: "HR policies", text: "Clear, practical policies written for how your company actually works." },
      { title: "Employee handbook", text: "One document that explains rules, benefits and expectations to your team." },
      { title: "Organisational design", text: "Roles, reporting lines, job descriptions and workforce plans that support your next stage of growth." },
      { title: "Ongoing HR advice", text: "A team to ask when day-to-day people questions come up." },
    ],
    details: [
      {
        heading: "An HR partner for growing UAE companies",
        paragraphs: [
          "Many companies reach the point where HR questions take up management time, but a full in-house HR team is not yet needed. Our HR consultancy fills that gap, for companies in Dubai, Abu Dhabi, Sharjah and across the UAE.",
        ],
      },
      {
        heading: "HR policy review",
        paragraphs: [
          "We review the policies you already have, identify what is missing or out of date, and rewrite them in plain language so managers apply them the same way.",
        ],
      },
      {
        heading: "Employee handbook",
        paragraphs: [
          "Your handbook is the one place where team members find how the company works: working hours, leave, conduct, benefits and expectations. We write it for your company, not from a generic template.",
        ],
      },
      {
        heading: "Organisational design and workforce planning",
        paragraphs: [
          "Clear roles make hiring and performance conversations easier. We map your structure, define reporting lines and write job descriptions that match the work people actually do.",
          "We also help you plan the team you will need as the business grows: which roles to add, when to hire them and how they fit the structure, so hiring follows a plan rather than urgent gaps.",
        ],
      },
      {
        heading: "Setting up HR for a new company",
        paragraphs: [
          "Our team has set up HR functions from the ground up, including for new real estate developers. For a new company or a first HR hire, we put the foundations in place: structure, core policies, contracts and processes, and the first senior hires.",
        ],
      },
      {
        heading: "Performance management and appraisals",
        paragraphs: [
          "We design appraisal cycles your managers can actually run, such as mid-year and year-end reviews, with clear objectives and fair improvement plans when performance falls short.",
        ],
      },
      {
        heading: "Salary benchmarking and reward",
        paragraphs: [
          "We compare your salaries and benefits with the UAE market for similar roles, and help you design bonus and reward structures that are fair, affordable and easy to explain.",
        ],
      },
      {
        heading: "HR systems",
        paragraphs: [
          "Choosing and setting up an HR system (HRIS) is easier with someone who has done it before. We help you define what you need, compare options and plan the move from spreadsheets or an older system.",
        ],
      },
      {
        heading: "Employee relations",
        paragraphs: [
          "Grievances, investigations and disciplinary matters need to be handled fairly and consistently. We guide your managers through the process so the outcome would look the same whoever it applied to.",
        ],
      },
      {
        heading: "Onboarding",
        paragraphs: [
          "A consistent onboarding process helps new hires settle in faster. We set up simple checklists and first-week plans your managers can follow.",
          "For questions about employment law, we work alongside your legal adviser rather than replacing them.",
        ],
      },
    ],
    relatedPost: "what-does-an-hr-consultancy-do",
    faq: [
      {
        question: "Do you replace an in-house HR team?",
        answer:
          "No. We support companies that have no HR function yet, and HR teams that need extra hands or a second opinion.",
      },
      {
        question: "Can you set up HR for a new company?",
        answer:
          "Yes. We can build your HR function from the ground up: structure, policies, handbook, appraisal process and the first key hires, so the basics are right from day one.",
      },
      {
        question: "Do you offer HR consultancy outside Dubai?",
        answer:
          "Yes. We work with companies in Abu Dhabi, Sharjah and across the UAE from our office in Meydan, Dubai.",
      },
      {
        question: "Do you give legal advice?",
        answer:
          "No. We give practical HR guidance. For legal questions about employment law, we recommend speaking to a qualified UAE legal adviser.",
      },
    ],
  },
  {
    slug: "workforce-recruitment",
    title: "Skilled workforce recruitment",
    navTitle: "Skilled workforce",
    licence: "Labor Recruitment Brokerage Office Services",
    seoTitle: "Skilled and Blue-Collar Recruitment in the UAE",
    heading: "Skilled workforce recruitment in the UAE",
    description:
      "Skilled workforce recruitment in the UAE. NextGen HR finds tradespeople, technicians and operations staff for employers who hire them directly.",
    summary: "We find skilled tradespeople and operations staff for your projects, hired directly by your company.",
    intro:
      "Projects and operations depend on reliable people on the ground. We find skilled tradespeople, technicians and operations staff, check their experience, and introduce them to you to hire directly.",
    includes: [
      { title: "Skilled trades", text: "Electricians, plumbers, HVAC technicians, welders, carpenters and other trades." },
      { title: "Operations staff", text: "Drivers, operators, warehouse and logistics staff." },
      {
        title: "Hospitality and service",
        text: "Hotel, restaurant and facilities staff: kitchen, housekeeping and front-line service roles for businesses.",
      },
      { title: "Experience checks", text: "We check work history and trade experience before every introduction." },
    ],
    faq: [
      {
        question: "Do you supply workers on your own visas?",
        answer:
          "No. NextGen HR is a recruitment brokerage. We find and introduce candidates, and your company hires them directly on your own visas.",
      },
      {
        question: "Do you recruit domestic workers?",
        answer: "No. We recruit for businesses only, not for private households.",
      },
      {
        question: "Can you recruit several workers at once?",
        answer: "Yes. Tell us the number of roles and the start date, and we plan the search around it.",
      },
    ],
  },
  {
    slug: "emiratisation",
    title: "Emiratisation hiring",
    navTitle: "Emiratisation",
    licence: "Labor Recruitment Brokerage Office Services",
    seoTitle: "Emiratisation Recruitment in the UAE",
    heading: "Emiratisation recruitment in the UAE",
    description:
      "Emiratisation recruitment for UAE private-sector companies. We help you find, screen and hire Emirati talent for real, long-term roles in your business.",
    summary: "Find and hire Emirati talent for real, long-term roles in your company.",
    intro:
      "Many UAE private-sector companies have Emiratisation targets set by the Ministry of Human Resources and Emiratisation (MOHRE). We help you find Emirati candidates for meaningful roles, so hires are more likely to stay and grow with your business.",
    includes: [
      { title: "Role planning", text: "We help you identify roles where Emirati talent can grow and contribute." },
      { title: "Candidate search", text: "We find Emirati candidates who match the role and your culture." },
      { title: "Screening and interviews", text: "Every candidate is interviewed and checked before you meet them." },
      { title: "Retention focus", text: "We focus on fit and growth, to give each hire the best chance of staying." },
    ],
    faq: [
      {
        question: "What are my company's Emiratisation targets?",
        answer:
          "Targets depend on your company's size and sector and are set by MOHRE. Check your current requirements with MOHRE directly; we can then help you hire for them.",
      },
      {
        question: "What is Nafis?",
        answer:
          "Nafis is the UAE federal programme that supports Emirati citizens working in the private sector. Your HR team can find details on the official Nafis platform.",
      },
    ],
    relatedPost: "emiratisation-targets-uae-private-companies",
  },
  {
    slug: "executive-search",
    title: "Executive search",
    navTitle: "Executive search",
    licence: "Labor Recruitment Brokerage Office Services",
    seoTitle: "Executive Search Firm and Headhunters in Dubai",
    heading: "Executive search and headhunters in Dubai",
    description:
      "Executive search and headhunting in Dubai: NextGen HR finds senior managers and leaders for UAE companies through a confidential, research-led search.",
    summary: "Confidential search for senior managers and leaders.",
    intro:
      "Senior hires shape a company for years. As headhunters in Dubai, we run a confidential, research-led search, approach people who are not actively looking, and present a small number of leaders worth your time.",
    includes: [
      { title: "Confidential brief", text: "We agree the role, the leadership profile and how discreet the search must be." },
      { title: "Market research", text: "We map who is doing similar work in the UAE and the wider region." },
      { title: "Direct approach", text: "We approach strong people directly, including those not looking to move." },
      { title: "Shortlist and close", text: "We present a shortlist, manage interviews and help close the offer." },
    ],
    details: [
      {
        heading: "How a senior search differs",
        paragraphs: [
          "The best senior candidates are usually busy doing a good job elsewhere and are not reading job adverts. Executive search finds them through research and direct, discreet conversations.",
          "We keep you informed at each stage: the market map, the people approached, their level of interest and the final shortlist. Candidates hear about the role only in the way you have agreed.",
        ],
      },
      {
        heading: "Senior hiring in real estate",
        paragraphs: [
          "Real estate is where our team has spent much of its career. For developers and brokerages, we search for senior and specialist roles through long-standing relationships across the UAE property market.",
        ],
      },
    ],
    faq: [
      {
        question: "Is the search confidential?",
        answer: "Yes. We agree with you how the role is described and who is approached before the search begins.",
      },
      {
        question: "How is executive search different from recruitment?",
        answer:
          "Executive search is a targeted search for senior roles, often approaching people who are not applying for jobs. Recruitment covers a wider range of roles and candidates.",
      },
    ],
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
