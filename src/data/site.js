// All the website's text lives here.
// Change the words in this file and the whole site updates. No need to touch the components.

export const siteConfig = {
  name: "NextGen",
  description: "A modern website built with Next.js.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Build something great",
  subtitle:
    "This is your starting point. Edit src/data/site.js to change this text.",
  primaryButton: { label: "Get in touch", href: "#contact" },
  secondaryButton: { label: "Our services", href: "#services" },
};

export const services = {
  title: "What we do",
  items: [
    {
      title: "Web Development",
      description: "Fast, modern websites built with the latest tools.",
    },
    {
      title: "Design",
      description: "Clean layouts that look good on every screen size.",
    },
    {
      title: "Marketing",
      description: "Get your website in front of the right people.",
    },
  ],
};

export const contact = {
  title: "Ready to start?",
  text: "Send us a message and we will get back to you.",
  button: { label: "Email us", href: "mailto:hello@example.com" },
};
