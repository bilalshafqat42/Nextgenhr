// All the website's text lives here.
// Change the words in this file and the whole site updates. No need to touch the components.
// Anything in [brackets] is a placeholder waiting for the client's real details.

export const siteConfig = {
  name: "NextGen HR",
  legalName: "NextGen HR Consultancy L.L.C-FZ",
  title: "NextGen HR | Recruitment agency and HR consultancy in Dubai",
  description:
    "NextGen HR Consultancy is a recruitment agency and HR consultancy in Dubai, licensed by Meydan Free Zone, with 20+ years of UAE market experience.",
  phone: "[+971 XX XXX XXXX]",
  email: "[hello@nextgenhr.ae]",
  address: ["Meydan Grandstand, 6th floor, Meydan Road", "Nad Al Sheba, Dubai, UAE"],
  hours: "Monday to Friday, [9am to 6pm]",
  licence: "Meydan Free Zone licence no. [Licence No.]",
};

export const navLinks = [
  { label: "Employers", href: "#services" },
  { label: "Job seekers", href: "#jobs" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
];

export const hero = {
  eyebrow: "20+ years in the UAE market · Licensed by Meydan Free Zone",
  titleLine1: "People first.",
  titleLine2: "Hiring done right.",
  text: "Recruitment and HR consultancy in Dubai, led by a founder with two decades of experience placing people across the UAE.",
  links: [
    { label: "I'm hiring →", href: "#contact" },
    { label: "I'm looking for a job →", href: "#jobs" },
  ],
  photo: "Founder with a client, Dubai office (video loop or photo)",
};

export const about = {
  label: "About NextGen HR",
  lead: "NextGen HR Consultancy is a recruitment agency and HR consultancy in Dubai, licensed by Meydan Free Zone.",
  rest: "We help UAE employers hire permanent, contract and project staff, and advise on HR policy and team structure.",
  facts: [
    { label: "Company", value: "NextGen HR Consultancy L.L.C-FZ" },
    { label: "Experience", value: "20+ years in the UAE" },
    { label: "Based in", value: "Meydan, Dubai, UAE" },
    { label: "Licensed by", value: "Meydan Free Zone, no. [Licence No.]" },
    { label: "Services", value: "Recruitment, HR consultancy, workforce supply" },
    { label: "Languages", value: "English, Arabic, [others]" },
  ],
};

export const stats = [
  { value: "20+", label: "Years in the UAE market", highlight: true },
  { value: "[X]+", label: "Placements" },
  { value: "[X]", label: "Employers served" },
  { value: "[X]d", label: "Average time to shortlist" },
];

export const services = {
  title: "Services",
  intro: "Three services, one team that knows UAE hiring inside out.",
  items: [
    {
      title: "Recruitment and staffing",
      description:
        "Permanent and contract hiring. We source, interview and check candidates, then send you a short list.",
    },
    {
      title: "HR consultancy",
      description:
        "HR policies, employee handbooks, team structure and ongoing HR advice for growing UAE companies.",
    },
    {
      title: "Workforce supply",
      description:
        "Labour recruitment brokerage for projects and operations that need skilled and general workers.",
    },
  ],
};

export const founder = {
  label: "The founder",
  quote: "[Founder's personal quote: why they started NextGen and what they promise every client.]",
  name: "[Founder name]",
  role: "Founder and Managing Director · 20+ years in UAE recruitment",
  credentials: [
    "[Previous senior role]",
    "[Professional certification]",
    "[Number] hires led personally",
    "[Key sectors of expertise]",
  ],
  photo: "Founder portrait, black and white, natural light",
};

export const timeline = {
  title: "Two decades in the UAE.",
  items: [
    { year: "[Year]", text: "[Founder starts career in UAE recruitment]" },
    { year: "[Year]", text: "[Milestone]" },
    { year: "[Year]", text: "[Milestone]" },
    { year: "2024", text: "NextGen HR Consultancy founded in Meydan Free Zone, Dubai" },
  ],
};

export const testimonial = {
  quote: "[Client testimonial: the result NextGen delivered, in one strong sentence.]",
  author: "[Client name], [Role, Company]",
  photo: "A placed team at work",
};

export const process = {
  title: "How hiring works",
  steps: [
    { title: "Share your brief", text: "Role, skills, salary range and start date." },
    { title: "We source and screen", text: "Interviews and checks on every candidate." },
    { title: "You interview", text: "A short list of people who fit." },
    { title: "We place and follow up", text: "Onboarding support after the hire." },
  ],
};

export const jobSeekers = {
  label: "For job seekers",
  title: "Find your next role in the UAE.",
  text: "Browse open jobs or send us your CV. We match you with roles that fit your skills.",
  links: [
    { label: "View open jobs →", href: "#" },
    { label: "Upload your CV →", href: "#" },
  ],
  photo: "Job seeker in an interview",
};

export const faq = {
  title: "Questions, answered",
  byline: "Answered by [Founder name], 20+ years in UAE recruitment. Last updated [date].",
  items: [
    {
      question: "What does a recruitment agency in Dubai do?",
      answer:
        "A recruitment agency finds, screens and shortlists candidates for an employer's open roles. NextGen HR handles sourcing, interviews and reference checks, so employers only meet suitable candidates.",
    },
    { question: "How much does a recruitment agency cost in the UAE?", answer: "[Your fee model.]" },
    {
      question: "Is NextGen HR a licensed company?",
      answer:
        "Yes. NextGen HR Consultancy L.L.C-FZ is licensed by Meydan Free Zone, Dubai, licence no. [Licence No.], for HR consultancy and labour recruitment brokerage.",
    },
    { question: "How long does it take to hire?", answer: "[Typical time to shortlist and to signed offer.]" },
    { question: "Do job seekers pay a fee?", answer: "[Confirm your policy.]" },
  ],
};

export const insights = {
  title: "Insights",
  items: [
    { title: "How to hire your first employee in Dubai", meta: "[Date] · By [Founder name]" },
    { title: "What every UAE employee handbook should cover", meta: "[Date] · By [Founder name]" },
    { title: "20 years of UAE hiring: what has changed", meta: "[Date] · By [Founder name]" },
  ],
};

export const contact = {
  title: "Let's talk.",
  fields: ["Full name", "Company", "Phone or email", "Who do you need to hire?"],
  consent:
    "I agree to NextGen HR processing my details to reply to this enquiry, as set out in the Privacy Policy.",
  button: "Send enquiry",
};
