// All the website's general text lives here.
// Services, sectors and city pages have their own files: services.js, sectors.js, locations.js.
// Anything in [brackets] is a placeholder waiting for the client's real details.

export const siteConfig = {
  url: "https://nextgenhr.ae",
  name: "NextGen HR",
  legalName: "NextGen HR Consultancy L.L.C-FZ",
  title: "NextGen HR | Recruitment agency and HR consultancy in Dubai",
  description:
    "NextGen HR Consultancy is a recruitment agency and HR consultancy in Dubai, licensed by Meydan Free Zone, backed by a team with 20+ years of UAE recruitment experience.",
  phone: "[+971 XX XXX XXXX]",
  email: "[hello@nextgenhr.ae]",
  address: ["Meydan Grandstand, 6th floor, Meydan Road", "Nad Al Sheba, Dubai, UAE"],
  hours: "Monday to Friday, [9am to 6pm]",
  licence: "Meydan Free Zone licence no. [Licence No.]",
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
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  // The page's main heading (H1) for Google: says exactly what NextGen is and where.
  heading: "Recruitment agency and HR consultancy in Dubai, UAE",
  titleLine1: "People first.",
  titleLine2: "Hiring done right.",
  text: "Recruitment and HR consultancy in Dubai, backed by a team with more than 20 years of experience placing people across the UAE.",
  links: [
    { label: "I'm hiring →", href: "/contact" },
    { label: "I'm looking for a job →", href: "/#jobs" },
  ],
  photo: "Our team with a client, Dubai office (video loop or photo)",
};

export const about = {
  label: "About NextGen HR",
  lead: "NextGen HR Consultancy is a recruitment agency and HR consultancy in Dubai, licensed by Meydan Free Zone.",
  rest: "We help UAE employers hire permanent and contract staff, and advise on HR policy and team structure.",
  facts: [
    { label: "Company", value: "NextGen HR Consultancy L.L.C-FZ" },
    { label: "Team experience", value: "20+ years in UAE recruitment" },
    { label: "Based in", value: "Meydan, Dubai, UAE" },
    { label: "Licensed by", value: "Meydan Free Zone, no. [Licence No.]" },
    { label: "Services", value: "Recruitment and HR consultancy" },
    { label: "Languages", value: "English, Arabic, [others]" },
  ],
};

export const stats = [
  { value: "20+", label: "Years of UAE recruitment experience", highlight: true },
  { value: "[X]+", label: "Placements" },
  { value: "[X]", label: "Employers served" },
  { value: "[X]d", label: "Average time to shortlist" },
];

export const servicesIntro = {
  title: "Services",
  intro: "Recruitment and HR consultancy from one team that knows UAE hiring inside out.",
};

export const sectorsIntro = {
  title: "Sectors",
  intro: "We recruit across the UAE's busiest sectors.",
};

export const whyUs = {
  title: "Why companies hire with NextGen",
  items: [
    { title: "20+ years of UAE experience", text: "Our team has spent more than two decades recruiting across the UAE market." },
    { title: "Screened short lists", text: "Every candidate is interviewed and checked before you meet them." },
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
    { title: "You interview", text: "A short list of people who fit." },
    { title: "We place and follow up", text: "Onboarding support after the hire." },
  ],
};

export const jobSeekers = {
  label: "For job seekers",
  title: "Find your next role in the UAE.",
  text: "Send us your CV and we will match you with suitable roles. We never charge candidates a fee.",
  links: [{ label: "Send your CV →", href: "/contact" }],
  photo: "Job seeker in an interview",
};

// General questions, shown on the home page and the FAQ page.
export const faq = {
  title: "Questions, answered",
  byline: "Answered by the NextGen HR recruitment team. Last updated [date].",
  items: [
    {
      question: "What does a recruitment agency in Dubai do?",
      answer:
        "A recruitment agency finds, screens and shortlists candidates for an employer's open roles. NextGen HR handles sourcing, interviews and reference checks, so employers only meet suitable candidates.",
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
    { question: "How much does a recruitment agency cost in the UAE?", answer: "[Your fee model.]" },
    { question: "How long does it take to hire?", answer: "[Typical time to shortlist and to signed offer.]" },
  ],
};

export const contact = {
  title: "Let's talk.",
  intro: "Tell us who you need to hire, or send your CV. We reply on working days.",
  fields: ["Full name", "Company", "Phone or email", "Who do you need to hire?"],
  consent:
    "I agree to NextGen HR processing my details to reply to this enquiry, as set out in the Privacy Policy.",
  button: "Send enquiry",
};

export const aboutPage = {
  title: "About NextGen HR",
  description:
    "NextGen HR Consultancy is a Dubai recruitment agency and HR consultancy licensed by Meydan Free Zone, backed by a team with 20+ years of UAE recruitment experience.",
  intro:
    "NextGen HR Consultancy helps UAE employers find the right people and put good HR foundations in place. We are based in Meydan, Dubai, and licensed by Meydan Free Zone.",
  story: [
    "NextGen HR was founded in Dubai in 2024 to offer a more personal kind of recruitment: fewer CVs, better matches and honest advice.",
    "Our team brings more than 20 years of experience recruiting across the UAE market, in sectors from real estate and construction to hospitality, healthcare, retail and technology.",
    "We work for employers. We never charge candidates a fee, and the companies we work with hire their new team members directly.",
  ],
};
