// All the website's general text lives here.
// Services, sectors and city pages have their own files: services.js, sectors.js, locations.js.
// Anything in [brackets] is a placeholder waiting for the client's real details; it stays hidden until filled in.
// House style: British English, "shortlist" as one word, no em dashes.

export const siteConfig = {
  url: "https://nextgenhr.ae",
  name: "NextGen HR",
  legalName: "NextGen HR Consultancy L.L.C-FZ",
  alternateName: "NextGen HR Consultancy",
  foundingYear: "2024",
  title: "Recruitment Agency & HR Consultancy in Dubai | NextGen HR",
  description:
    "Licensed recruitment agency and HR consultancy in Dubai: executive search, senior hiring, HR set-up and outsourced HR for UAE companies. Candidates never pay a fee.",
  phone: "+971 50 301 5933",
  whatsapp: "+971 50 301 5933",
  email: "info@nextgenhr.ae",
  address: ["Meydan Grandstand, 6th floor, Meydan Road", "Nad Al Sheba, Dubai, UAE"],
  hours: "Monday to Friday, [9am to 6pm]",
  licence: "Licensed by Meydan Free Zone, Dubai",
  licenceNumber: "[Licence No.]",
  // Google Search Console "HTML tag" code: only the part inside content="..." (verification is already done by file).
  googleVerification: "[Google code]",
  // Official social accounts. Shown in the footer and listed for Google and AI assistants as the
  // company's own profiles. Links still in [brackets] are hidden until filled in.
  social: [
    { label: "Facebook", url: "https://www.facebook.com/nextgenhrconsultancy" },
    { label: "Instagram", url: "https://www.instagram.com/nextgenhrae/" },
    { label: "Threads", url: "https://www.threads.com/@nextgenhrae" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/nextgen-hr-consultancy/" },
  ],
  // Google Business Profile share link (from the profile's "Share" button, once verified).
  // Listed for Google as the company's own profile, not shown in the footer.
  googleBusiness: "https://share.google/fnZfX4jcMEFiFrkTl",
  // The two activities on the trade licence, word for word.
  activities: [
    { name: "Human resources consultancy", code: "7490.14" },
    { name: "Labor Recruitment Brokerage Office Services", code: "7810.97" },
  ],
};

// Google Analytics, Google Ads and Meta Pixel IDs. Paste each ID in place of the [bracket] text.
// While an ID is still in [brackets], that tool stays off. When at least one is real, the site shows
// a cookie banner and loads the tool only after the visitor clicks "Accept".
export const tracking = {
  // Google Analytics 4 measurement ID, e.g. "G-ABC123XYZ9"
  ga4: "G-2W6RZTBJJE",
  // Google Ads tag ID, e.g. "AW-123456789"
  googleAds: "[AW-XXXXXXXXX]",
  // Google Ads conversion label for the "Lead" conversion, e.g. "AbC-D_efG-h12_34-567"
  googleAdsLeadLabel: "[conversion label]",
  // Meta (Facebook and Instagram) Pixel ID, e.g. "123456789012345"
  metaPixel: "[Meta Pixel ID]",
};

// The company profile PDF in /public. Linked from the About section, Contact section, footer and closing band,
// and shareable on WhatsApp and email as https://nextgenhr.ae/nextgen-hr-company-profile.pdf
export const companyProfile = {
  label: "Download our company profile (PDF)",
  href: "/nextgen-hr-company-profile.pdf",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Sectors", href: "/sectors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  // The page's main heading (H1) for Google: says exactly what NextGen is and where.
  heading: "Recruitment agency and HR consultancy in Dubai, UAE",
  titleLine1: "Exceptional talent.",
  titleLine2: "Strategic HR.",
  text: "A licensed recruitment and HR consultancy in Dubai. We find heads of department, senior managers and specialists for UAE companies, and help you build HR that supports growth, backed by 18+ years of combined HR and recruitment experience, much of it in UAE real estate.",
  // Two doors: hiring (opens the brief form) and HR support. Job seekers get a quiet way out underneath.
  links: [
    { label: "Send your brief →", href: "/contact" },
    { label: "Get HR support →", href: "/services/hr-consultancy" },
  ],
  jobSeekers: "Looking for a job? Please email your CV to info@nextgenhr.ae.",
  image: { src: "/images/hero-dubai-skyline.jpg", alt: "Dubai skyline at night with the Burj Khalifa" },
};

export const about = {
  label: "About NextGen HR",
  // Heading in two lines: the first large, the second about 70% of its size.
  titleLine1: "A licensed recruitment agency",
  titleLine2: "and HR consultancy in Dubai.",
  text: "NextGen HR Consultancy helps employers in Dubai, Abu Dhabi and Sharjah hire senior and specialist staff directly, and sets up the HR department, policies, handbooks and team structure growing companies need.",
  link: { label: "More about us →", href: "/about" },
  facts: [
    { label: "Company", value: "NextGen HR Consultancy L.L.C-FZ" },
    { label: "Founded", value: "2024, Dubai" },
    { label: "Team experience", value: "18+ years of combined HR and recruitment experience, most of it in the UAE" },
    { label: "Team track record", value: "3,700+ people hired in previous in-house HR roles; HR departments built for 5 new UAE developers" },
    { label: "Based in", value: "Meydan, Dubai, UAE" },
    { label: "Licensed by", value: "Meydan Free Zone, Dubai" },
    { label: "Services", value: "Executive search, recruitment, HR consultancy and outsourced HR" },
  ],
};

// The trust strip under the home page hero: the four facts an employer should see first.
// Team figures come from the team's previous in-house HR roles, not NextGen placements.
export const trust = [
  { value: "18+", label: "Years of combined HR and recruitment experience" },
  { value: "3,700+", label: "People hired by our team in previous in-house HR roles" },
  { value: "5", label: "New UAE developers given an HR department by our team" },
  { value: "Licensed", label: "By Meydan Free Zone, Dubai. Candidates never pay a fee." },
];

// The real estate band on the home page: the team's strongest sector.
export const realEstateBand = {
  label: "Our strongest sector",
  title: "Real estate recruitment, from people who know property.",
  text: "Our team has led HR and hiring inside UAE developers and brokerages, and built HR departments for five new developers. We recruit property consultants, sales leaders and development specialists, with track record and RERA registration checked before you meet anyone.",
  links: [
    { label: "Real estate recruitment →", href: "/sectors/real-estate" },
    { label: "Executive search →", href: "/services/executive-search" },
  ],
};

// The key facts, shown as a "bento" grid of tiles. Only true, checkable facts.
// tone: "bronze", "stone", "dark" or "white". size: "big" (the large tile) or "wide" (spans two columns).
// links: optional small tags shown on a wide tile. When real figures are available
// (placements, employers served, average days to shortlist), they can replace any tile.
// Team figures come from the team's previous in-house HR roles, not NextGen placements, and never name the people or employers.
export const stats = [
  { value: "18+", label: "Years of combined HR and recruitment experience", icon: "experience", tone: "bronze", size: "big" },
  { value: "3,700+", label: "People hired by our team in previous in-house HR roles", icon: "direct", tone: "stone" },
  { value: "No fees", label: "For candidates, ever", icon: "shield", tone: "dark" },
  {
    value: "3 Emirates",
    label: "Recruitment and HR support for employers across the UAE, from our base in Dubai.",
    icon: "map",
    tone: "white",
    size: "wide",
    links: [
      { label: "Dubai", href: "/recruitment-agency/dubai" },
      { label: "Abu Dhabi", href: "/recruitment-agency/abu-dhabi" },
      { label: "Sharjah", href: "/recruitment-agency/sharjah" },
    ],
  },
  { value: "5", label: "New UAE real estate developers given an HR department by our team", icon: "location", tone: "stone" },
  {
    value: "5 Sectors",
    label: "Hiring for the industries driving the UAE economy.",
    icon: "sectors",
    tone: "white",
    size: "wide",
    links: [
      { label: "Real estate", href: "/sectors/real-estate" },
      { label: "Construction", href: "/sectors/construction" },
      { label: "Hospitality", href: "/sectors/hospitality" },
      { label: "Retail", href: "/sectors/retail" },
      { label: "Technology", href: "/sectors/technology" },
    ],
  },
];

export const servicesIntro = {
  title: "Services",
  intro: "Senior and specialist recruitment and HR consultancy from one licensed Dubai team that knows UAE hiring inside out.",
};

export const sectorsIntro = {
  title: "Sectors",
  intro: "Specialist recruitment for the sectors that keep the UAE growing.",
};

export const whyUs = {
  title: "Why companies hire with NextGen HR",
  items: [
    {
      title: "A team with 18+ years in HR and hiring",
      text: "Founded in 2024, NextGen HR is led by HR professionals who have run HR inside UAE developers, brokerages and international retail franchise groups, hired more than 3,700 people in those in-house roles, and built HR departments for five new developers.",
    },
    { title: "Screened shortlists", text: "Every candidate is interviewed and checked before you meet them." },
    { title: "Recruitment and HR in one place", text: "Executive search and senior hiring, plus HR department set-up, policies and outsourced HR support." },
    { title: "Licensed and transparent", text: "Licensed by Meydan Free Zone, Dubai. Candidates never pay a fee." },
  ],
};

export const testimonial = {
  quote: "[Client testimonial: the result NextGen delivered, in one strong sentence.]",
  author: "[Client name], [Role, Company]",
  photo: "A placed team at work",
};

export const process = {
  title: "How hiring works",
  items: [
    { title: "Share your brief", text: "Role, skills, salary range and start date." },
    { title: "We source and screen", text: "Interviews and checks on every candidate." },
    { title: "You interview", text: "A shortlist of people who fit." },
    { title: "You hire, we follow up", text: "You hire directly; we support onboarding." },
  ],
};

// The process shown on the HR consultancy page instead of the hiring process.
export const hrProcess = {
  title: "How HR consultancy works",
  items: [
    { title: "Tell us what you need", text: "Your team size, current HR set-up and priorities." },
    { title: "We review", text: "We look at your existing policies, documents and structure." },
    { title: "We draft", text: "Policies, handbook or structure, written for how you work." },
    { title: "You review and launch", text: "We refine the documents with you and stay on hand for questions." },
  ],
};

// Job seekers are not the target audience: the home page section is hidden and a one-line note sits in the footer.
export const jobSeekers = {
  label: "For job seekers",
  title: "Find your next role in the UAE.",
  text: "Email your CV to info@nextgenhr.ae with the role you want in the subject line. We match you with suitable roles and never charge candidates a fee.",
  links: [{ label: "Email your CV →", href: "mailto:info@nextgenhr.ae?subject=CV%3A%20role%20I%20am%20looking%20for" }],
  image: { src: "/images/job-seekers-handshake.jpg", alt: "A candidate and an employer shaking hands after an interview" },
};

// The /job-seekers page: one link to send in reply to job seeker messages on WhatsApp and email.
// Kept out of Google search (the site targets employers); the job seeker questions are marked up on /faq.
export const jobSeekerPage = {
  title: "For job seekers",
  description:
    "How to send your CV to NextGen HR, what happens next, and why we never charge candidates a fee.",
  intro:
    "We recruit for UAE employers. We do not have jobs to offer on request, but we keep experienced professionals' CVs on file and contact you if a suitable role opens with one of our clients.",
  emailSubject: "CV: [Job title], [years] years experience",
  sections: [
    {
      heading: "How to send your CV",
      paragraphs: ["Email your CV to info@nextgenhr.ae. Please do not send it on WhatsApp."],
      items: [
        "Subject line: your job title and years of experience, for example \"Accountant, 5 years experience\".",
        "Attach your CV as a PDF.",
        "In the email, mention where you are based and when you can start.",
        "Designers, developers and other creative or technical roles: add a portfolio or GitHub link.",
      ],
    },
    {
      heading: "What happens next",
      paragraphs: [
        "We keep your CV on file and contact you only when a role with one of our clients matches your experience. We receive many CVs, so we may not be able to reply to every email.",
        "Sending your CV does not guarantee an interview or a job offer.",
      ],
    },
    {
      heading: "Roles we recruit for",
      paragraphs: [
        "We mainly recruit senior, managerial and specialist roles for companies in real estate, construction, hospitality, retail and technology.",
        "We do not recruit for fresher, labour, warehouse, driver or domestic roles, and we do not arrange visas or jobs from abroad on request.",
      ],
    },
    {
      heading: "We never charge candidates",
      paragraphs: [
        "NextGen HR never asks job seekers for money, at any stage. If anyone asks you for a fee in our name, please do not pay and tell us at info@nextgenhr.ae.",
      ],
    },
    {
      heading: "Your privacy",
      paragraphs: [
        "We only keep CVs sent by email, and we use them only to match you with roles. You can ask us to update or delete your CV at any time by emailing info@nextgenhr.ae. Our Privacy Policy explains how we handle your data.",
      ],
    },
  ],
};

// General questions, shown on the home page and the FAQ page.
export const faq = {
  title: "Questions, answered",
  byline: "Answered by the NextGen HR recruitment team.",
  items: [
    {
      question: "What does a recruitment agency in Dubai do?",
      answer:
        "A recruitment agency finds, screens and shortlists candidates for an employer's open roles. NextGen HR handles sourcing, interviews and experience checks, so employers meet candidates who fit the brief.",
    },
    {
      question: "Is NextGen HR a licensed company?",
      answer:
        "Yes. NextGen HR Consultancy L.L.C-FZ is licensed by Meydan Free Zone, Dubai, for Human resources consultancy and Labor Recruitment Brokerage Office Services.",
    },
    {
      question: "Do job seekers pay a fee?",
      answer:
        "No. NextGen HR never charges candidates. In the UAE, recruitment costs are paid by the employer, not the job seeker.",
    },
    {
      question: "Who employs the candidates you find?",
      answer:
        "The employer does. NextGen HR finds and introduces candidates, and the employer hires them directly on its own contract and visa.",
    },
    {
      question: "Is NextGen HR an employment agency?",
      answer:
        "We are a licensed recruitment brokerage and HR consultancy: we introduce candidates, and employers hire them directly. We recruit for businesses, not for private households.",
    },
    {
      question: "Which parts of the UAE do you recruit for?",
      answer:
        "We recruit for employers in Dubai, Abu Dhabi, Sharjah and across the wider UAE from our office in Meydan, Dubai.",
    },
    {
      question: "Do you offer HR consultancy as well as recruitment?",
      answer:
        "Yes. Besides recruitment, we help companies with HR policies, employee handbooks and team structure, so hiring and HR are handled by one team.",
    },
    { question: "How much does a recruitment agency cost in the UAE?", answer: "[Your fee model.]" },
    { question: "How long does it take to hire?", answer: "[Typical time to shortlist and to signed offer.]" },
  ],
};

// Questions for job seekers, shown on the FAQ page only, so candidates get answers before they message us.
export const jobSeekerFaq = [
  {
    question: "I am looking for a job. Can NextGen HR help?",
    answer:
      "We work for UAE employers, mainly on senior, managerial and specialist roles, so we do not have jobs to offer on request. If you are an experienced professional, email your CV to info@nextgenhr.ae with your job title in the subject line, and we will contact you if a suitable role opens with one of our clients.",
  },
  {
    question: "Do you recruit freshers, labour, drivers or household staff?",
    answer:
      "No. We do not recruit for fresher, labour, warehouse, driver or domestic roles. In the UAE, domestic workers are hired through licensed Tadbeer centres.",
  },
  {
    question: "Can you arrange a UAE visa or a job from abroad?",
    answer:
      "No. We do not arrange visas or relocation on request. When one of our clients hires a candidate, the employer makes the job offer and arranges the work permit and visa.",
  },
  {
    question: "Can I send my CV on WhatsApp?",
    answer:
      "Please email it to info@nextgenhr.ae instead. For your privacy, we do not keep CVs sent on WhatsApp. We never charge candidates any fee, and if anyone asks you for money in our name, please do not pay.",
  },
];

export const contact = {
  title: "Let's talk.",
  intro: "For employers: tell us who you need to hire or the HR support you need, and we will reply on working days, Monday to Friday. Job seekers, please email your CV to info@nextgenhr.ae.",
  fields: [
    { name: "name", label: "Full name", required: true, autoComplete: "name", maxLength: 120 },
    { name: "company", label: "Company", autoComplete: "organization", maxLength: 120 },
    { name: "contact", label: "Work email or mobile", required: true, autoComplete: "off", maxLength: 160 },
    { name: "message", label: "How can we help?", required: true, multiline: true, maxLength: 2000 },
  ],
  // The words "Privacy Policy" become a link to /privacy-policy.
  consent:
    "I agree that NextGen HR may use these details to reply to my enquiry and, if I am a job seeker, to match me with suitable roles, as explained in the Privacy Policy.",
  button: "Send your brief",
  // Shown under the button, so visitors know what happens after they send.
  nextSteps: "What happens next: we read your brief and reply on working days, Monday to Friday, with any questions or a proposal.",
};

// Questions shown on the Contact page.
export const contactFaq = [
  {
    question: "How do I send a hiring brief?",
    answer:
      "Fill in the form on this page, email info@nextgenhr.ae, or message us on WhatsApp. Tell us the role and we will come back to you to confirm the details.",
  },
  {
    question: "What should my hiring brief include?",
    answer:
      "The job title, number of hires, key skills and experience, salary range, work location and preferred start date. If you are not sure of everything yet, send what you have and we will help you complete it.",
  },
  {
    question: "I am looking for a job. How do I send my CV?",
    answer:
      "Email your CV to info@nextgenhr.ae with the role you want in the subject line. We work mainly on senior and specialist roles for our clients, contact candidates when a suitable role opens, and never charge candidates a fee.",
  },
  {
    question: "Do you work with companies outside Dubai?",
    answer:
      "Yes. From our office at Meydan Grandstand in Dubai, we work with employers in Abu Dhabi, Sharjah and across the UAE.",
  },
  {
    question: "When will you reply?",
    answer: "We reply to enquiries on working days, Monday to Friday.",
  },
];

// Questions shown on the Services page.
export const servicesFaq = [
  {
    question: "Which service do I need?",
    answer:
      "For heads of department and senior leaders, choose executive search. For professional and specialist roles, choose recruitment. To set up or improve your HR, choose HR consultancy, and for ongoing HR support without a full-time HR manager, choose HR on demand.",
  },
  {
    question: "Can you help with both hiring and HR?",
    answer:
      "Yes. Many growing companies use both: we recruit the people they need and set up the HR policies, handbook, appraisals and team structure to support them.",
  },
  {
    question: "Do you supply staff on your own payroll?",
    answer:
      "No. Employers hire every candidate directly, on their own contract and visa. We find, interview and check candidates, and you make the hiring decision.",
  },
  {
    question: "Which sectors do you recruit for?",
    answer:
      "We recruit for real estate, construction, hospitality, retail and technology companies across the UAE.",
  },
  {
    question: "Are you licensed?",
    answer:
      "Yes. NextGen HR Consultancy is licensed by Meydan Free Zone, Dubai, for Human resources consultancy and Labor Recruitment Brokerage Office Services.",
  },
];

// The enquiry popup, opened by the "Hire talent" and "Send your brief" buttons.
export const enquiryPopup = {
  title: "Tell us who you need to hire",
  intro: "Share the role and we will reply on working days, Monday to Friday. Prefer to talk? Call or WhatsApp us.",
};

export const aboutPage = {
  title: "About NextGen HR",
  description:
    "NextGen HR Consultancy is a licensed recruitment and HR consultancy in Dubai, Meydan Free Zone, with 18+ years of combined HR and recruitment experience.",
  // The company tagline, shown under the About page title.
  intro: "Strategic HR solutions. Exceptional talent. Sustainable growth.",
  // The company description, word for word with the LinkedIn page and the WhatsApp profile.
  sections: [
    {
      heading: "Recruitment",
      paragraphs: [
        "NextGen HR Consultancy is a recruitment and HR consultancy licensed by Meydan Free Zone in Dubai. We partner with businesses across the UAE to attract and secure top talent through permanent and fixed-term recruitment solutions.",
        "Our end-to-end recruitment process covers candidate sourcing, screening, interviews and assessments, delivering carefully shortlisted professionals aligned with each client's requirements, culture and business objectives.",
      ],
    },
    {
      heading: "HR consultancy and organisational development",
      paragraphs: [
        "We help businesses establish, strengthen and optimise their HR functions through practical, business-focused solutions, including:",
      ],
      items: [
        "HR function set-up and operational frameworks",
        "HR policies, procedures and employee handbooks",
        "Organisational design and workforce planning",
        "Performance management and appraisal systems",
        "Salary benchmarking and compensation structures",
      ],
    },
    {
      heading: "Experience you can trust",
      paragraphs: [
        "With over 18 years of combined HR and recruitment experience, predominantly in the UAE market, our team brings strong local expertise and a results-driven approach to every engagement.",
        "We work closely with employers to deliver tailored solutions that support business growth, improve organisational effectiveness and strengthen workforce capability.",
        "We never charge candidates recruitment fees.",
      ],
    },
  ],
  // "How we work" on the About page.
  principles: [
    "Fair and consistent. A people decision is only right if it would look the same applied to anyone else in the business.",
    "Built to stand up to inspection. Policies, contracts and records that are clear and correct let a company grow with confidence.",
    "Close to the business plan. Hiring and HR decisions are business decisions, so we start from your growth plans, not from a template.",
    "Plain language for multicultural teams. UAE teams span many nationalities, so we keep policies and communication simple and clear.",
  ],
};

// The Hire landing page (/hire), used only for Google Ads visitors. Kept short and focused on one action.
export const hirePage = {
  title: "Hire screened candidates in the UAE",
  description: "Tell NextGen HR the role you need to fill and receive a shortlist of interviewed, checked candidates.",
  intro:
    "Tell us the role you need to fill. Our team, with 18+ years of combined HR and recruitment experience, sends you a shortlist of interviewed and checked candidates.",
  points: [
    "Screened, interview-ready candidates",
    "Senior, managerial and specialist roles, permanent or fixed-term",
    "Licensed by Meydan Free Zone, Dubai",
    "You hire directly, on your own contract and visa",
  ],
  formTitle: "Get candidates for your role",
  fields: [
    { name: "name", label: "Full name", required: true, autoComplete: "name", maxLength: 120 },
    { name: "company", label: "Company", required: true, autoComplete: "organization", maxLength: 120 },
    { name: "contact", label: "Work email or mobile", required: true, autoComplete: "off", maxLength: 160 },
    {
      name: "message",
      label: "Which role do you need to fill? (Role, number of hires, location, start date)",
      required: true,
      multiline: true,
      maxLength: 2000,
    },
  ],
  button: "Send your brief",
};

// The page shown for any address that does not exist.
export const notFoundPage = {
  title: "Page not found",
  intro: "The page you are looking for has moved or no longer exists.",
  links: [
    { label: "Go to the home page →", href: "/" },
    { label: "See our services →", href: "/services" },
    { label: "Send your hiring brief →", href: "/contact" },
  ],
};
