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
    "Licensed recruitment agency and HR consultancy in Dubai. Screened shortlists and practical HR support for employers across the UAE. Candidates never pay a fee.",
  phone: "[+971 XX XXX XXXX]",
  whatsapp: "[+971 XX XXX XXXX]",
  email: "info@nextgenhr.ae",
  address: ["Meydan Grandstand, 6th floor, Meydan Road", "Nad Al Sheba, Dubai, UAE"],
  hours: "Monday to Friday, [9am to 6pm]",
  licence: "Licensed by Meydan Free Zone, Dubai",
  licenceNumber: "[Licence No.]",
  // Google Search Console "HTML tag" code: only the part inside content="..." (verification is already done by file).
  googleVerification: "[Google code]",
  // The two activities on the trade licence, word for word.
  activities: [
    { name: "Human resources consultancy", code: "7490.14" },
    { name: "Labor Recruitment Brokerage Office Services", code: "7810.97" },
  ],
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
  titleLine1: "People first.",
  titleLine2: "Hiring done right.",
  text: "A licensed recruitment agency and HR consultancy in Dubai. Share your brief and our team, with 20+ years of UAE hiring experience, sends you a shortlist of interviewed, checked candidates you hire directly.",
  links: [
    { label: "Send your hiring brief →", href: "/contact" },
    { label: "Looking for a job? →", href: "/#jobs" },
  ],
  image: { src: "/images/hero-dubai-skyline.jpg", alt: "Dubai skyline at night with the Burj Khalifa" },
};

export const about = {
  label: "About NextGen HR",
  // Heading in two lines: the first large, the second about 70% of its size.
  titleLine1: "A licensed recruitment agency",
  titleLine2: "and HR consultancy in Dubai.",
  text: "NextGen HR Consultancy helps employers in Dubai, Abu Dhabi and Sharjah hire permanent and fixed-term staff directly, and sets up the HR policies, handbooks and team structure growing companies need.",
  link: { label: "More about us →", href: "/about" },
  facts: [
    { label: "Company", value: "NextGen HR Consultancy L.L.C-FZ" },
    { label: "Founded", value: "2024, Dubai" },
    { label: "Team experience", value: "20+ years in UAE recruitment" },
    { label: "Based in", value: "Meydan, Dubai, UAE" },
    { label: "Licensed by", value: "Meydan Free Zone, Dubai" },
    { label: "Services", value: "Recruitment and HR consultancy" },
  ],
};

// Only true, checkable facts. When real figures are available (placements, employers served,
// average days to shortlist), they can replace the last three.
export const stats = [
  { value: "20+", label: "Years of UAE recruitment experience in our team", highlight: true },
  { value: "Direct", label: "You hire every candidate on your own contract" },
  { value: "No fees", label: "For candidates, ever" },
  { value: "2024", label: "Founded in Meydan, Dubai" },
];

export const servicesIntro = {
  title: "Services",
  intro: "Recruitment services and HR consultancy from one licensed Dubai team that knows UAE hiring inside out.",
};

export const sectorsIntro = {
  title: "Sectors",
  intro: "Specialist recruitment for the sectors that keep the UAE growing.",
};

export const whyUs = {
  title: "Why companies hire with NextGen HR",
  items: [
    {
      title: "A team with 20+ years in UAE hiring",
      text: "Founded in 2024, NextGen HR is run by recruiters with more than 20 years of UAE hiring experience.",
    },
    { title: "Screened shortlists", text: "Every candidate is interviewed and checked before you meet them." },
    { title: "Recruitment and HR in one place", text: "Hiring support plus HR policies, handbooks and day-to-day advice." },
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

export const jobSeekers = {
  label: "For job seekers",
  title: "Find your next role in the UAE.",
  text: "Email your CV to info@nextgenhr.ae with the role you want in the subject line. We match you with suitable roles and never charge candidates a fee.",
  links: [{ label: "Email your CV →", href: "mailto:info@nextgenhr.ae?subject=CV%3A%20role%20I%20am%20looking%20for" }],
  image: { src: "/images/job-seekers-handshake.jpg", alt: "A candidate and an employer shaking hands after an interview" },
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

export const contact = {
  title: "Let's talk.",
  intro: "Employers: tell us who you need to hire. Job seekers: email your CV to info@nextgenhr.ae. We reply on working days, Monday to Friday.",
  fields: [
    { name: "name", label: "Full name", required: true, autoComplete: "name", maxLength: 120 },
    { name: "company", label: "Company", autoComplete: "organization", maxLength: 120 },
    { name: "contact", label: "Work email or mobile", required: true, autoComplete: "off", maxLength: 160 },
    { name: "message", label: "How can we help?", required: true, multiline: true, maxLength: 2000 },
  ],
  // The words "Privacy Policy" become a link to /privacy-policy.
  consent:
    "I agree that NextGen HR may use these details to reply to my enquiry and, if I am a job seeker, to match me with suitable roles, as explained in the Privacy Policy.",
  button: "Send message",
};

export const aboutPage = {
  title: "About NextGen HR",
  description:
    "NextGen HR Consultancy is a licensed recruitment agency and HR consultancy in Dubai, Meydan Free Zone. Our team has 20+ years of UAE hiring experience.",
  intro:
    "We help UAE employers find the right people and put good HR foundations in place, from our office in Meydan, Dubai.",
  story: [
    "NextGen HR was founded in Dubai in 2024 to offer a more personal kind of recruitment: fewer CVs, better matches and honest advice.",
    "Our team brings more than 20 years of experience recruiting across the UAE market, in sectors from real estate and construction to hospitality, retail and technology.",
    "We work for employers. We never charge candidates a fee, and the companies we work with hire their new team members directly.",
  ],
};

// The Hire landing page (/hire), used only for Google Ads visitors. Kept short and focused on one action.
export const hirePage = {
  title: "Hire screened candidates in the UAE",
  description: "Tell NextGen HR the role you need to fill and receive a shortlist of interviewed, checked candidates.",
  intro:
    "Tell us the role you need to fill. Our team, with 20+ years of UAE recruitment experience, sends you a shortlist of interviewed and checked candidates.",
  points: [
    "Screened, interview-ready candidates",
    "Permanent and fixed-term roles, hired directly by you",
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
  button: "Send my brief",
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
