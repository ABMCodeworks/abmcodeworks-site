import {
  FaAndroid,
  FaApple,
  FaCheckCircle,
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import { SiFirebase, SiFlutter, SiWordpress } from "react-icons/si";

import ruzawi from "../assets/ruzawi.png";
import zimgin from "../assets/zimgin.png";
import cranesafaris from "../assets/cranesafaris.png";
import thf from "../assets/thf.png";
import thrifta from "../assets/thrifta.png";
import proactivewildlife from "../assets/proactivewildlife.png";
import acutabovemeats from "../assets/acutabovemeats.png";
import butterfliesOfZimbabwe from "../assets/butterflies-of-zimbabwe.png";

export const site = {
  name: "ABM Codeworks",
  url: "https://www.abmcodeworks.com",
  email: "admin@abmcodeworks.com",
};

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Clients", href: "/#clients" },
  { label: "Portfolio", href: "/portfolio" },
];

export const trustItems = [
  {
    icon: FaCheckCircle,
    text: "Custom systems built around real workflows",
  },
  {
    icon: FaShieldAlt,
    text: "Security, reliability and maintainability first",
  },
  {
    icon: FaLaptopCode,
    text: "Modern React, Flutter, Firebase and cloud tooling",
  },
];

export const values = [
  {
    title: "Clear scope",
    text: "You get a practical build plan before development starts.",
  },
  {
    title: "Strong foundations",
    text: "We build systems that can grow without becoming painful to maintain.",
  },
  {
    title: "Useful design",
    text: "Interfaces are designed around the people who actually use them.",
  },
  {
    title: "Ongoing support",
    text: "Launch is not the end. We help refine and improve after release.",
  },
];

export const services = [
  {
    icon: FaMobileAlt,
    title: "Mobile Applications",
    desc: "Flutter apps for Android and iOS with polished interfaces and reliable data flows.",
    href: "/mobile-app-development-zimbabwe",
  },
  {
    icon: FaGlobe,
    title: "Website Design",
    desc: "Modern websites for businesses, schools, NGOs and service providers.",
    href: "/website-design-zimbabwe",
  },
  {
    icon: FaLaptopCode,
    title: "Software Development",
    desc: "Custom systems, portals, dashboards and internal tools for real operations.",
    href: "/software-development-zimbabwe",
  },
  {
    icon: FaReact,
    title: "Web Applications",
    desc: "Fast React front-ends connected to reliable back-end and cloud services.",
    href: "/web-development-zimbabwe",
  },
  {
    icon: SiFirebase,
    title: "Firebase & Cloud",
    desc: "Authentication, databases, storage, serverless functions and app infrastructure.",
    href: "/software-development-zimbabwe",
  },
  {
    icon: SiFlutter,
    title: "Flutter Development",
    desc: "Multi-platform app development with a single maintainable codebase.",
    href: "/mobile-app-development-zimbabwe",
  },
  {
    icon: SiWordpress,
    title: "Websites & CMS",
    desc: "Marketing websites and content systems that are easy to update.",
    href: "/website-design-zimbabwe",
  },
  {
    icon: FaAndroid,
    title: "Android Delivery",
    desc: "Play Store preparation, testing, integrations and app release support.",
    href: "/mobile-app-development-zimbabwe",
  },
  {
    icon: FaApple,
    title: "iOS Delivery",
    desc: "App Store readiness, publishing support and platform-specific implementation.",
    href: "/mobile-app-development-zimbabwe",
  },
];

export const clients = [
  {
    name: "Ruzawi School",
    href: "https://ruzawi.com",
    src: ruzawi,
    alt: "Ruzawi School",
  },
  {
    name: "Zimbabwe Gin",
    href: "https://zimgin.com",
    src: zimgin,
    alt: "Zimbabwe Gin",
  },
  {
    name: "Crane Safaris",
    href: "https://cranesafaris.co.zw",
    src: cranesafaris,
    alt: "Crane Safaris",
  },
  {
    name: "Tikki Hywood Foundation",
    href: "https://tikkihywoodfoundation.org",
    src: thf,
    alt: "Tikki Hywood Foundation",
  },
  {
    name: "Thrifta",
    href: "https://wearethrifta.com",
    src: thrifta,
    alt: "Thrifta",
  },
  {
    name: "Proactive Wildlife",
    href: "https://proactivewildlife.org",
    src: proactivewildlife,
    alt: "Proactive Wildlife",
  },
  {
    name: "A Cut Above Meats",
    href: "https://acutabovemeats.com",
    src: acutabovemeats,
    alt: "A Cut Above Meats",
  },
  {
    name: "Butterflies of Zimbabwe",
    href: "#",
    src: butterfliesOfZimbabwe,
    alt: "Butterflies of Zimbabwe App",
  },
];

export const servicePages = {
  websiteDesign: {
    path: "/website-design-zimbabwe",
    eyebrow: "Website Design Zimbabwe",
    title: "Website Design in Zimbabwe",
    seoTitle: "Website Design Zimbabwe | ABM Codeworks",
    seoDescription:
      "ABM Codeworks designs fast, modern and mobile-friendly websites for Zimbabwean businesses, schools, NGOs, tourism operators and e-commerce brands.",
    intro:
      "ABM Codeworks builds websites that look professional, load quickly, work well on mobile and are structured to help your organisation turn visitors into enquiries.",
    bullets: [
      "Business websites",
      "School and education websites",
      "NGO and conservation websites",
      "Tourism and hospitality websites",
      "Landing pages and campaign pages",
      "Website redesigns and SEO improvements",
    ],
    sections: [
      {
        title: "Websites built around your goals",
        text: "A good website should do more than look polished. It should explain your offer clearly, make trust easy, and guide visitors towards action.",
      },
      {
        title: "Designed for mobile users",
        text: "Many users in Zimbabwe browse on mobile first. We design responsive pages that stay clear, fast and easy to use across screen sizes.",
      },
      {
        title: "Structured for Google",
        text: "We build clear pages, logical headings, clean metadata, useful content, schema markup and technical foundations that support SEO.",
      },
    ],
    faqs: [
      {
        q: "Do you design websites for Zimbabwean businesses?",
        a: "Yes. ABM Codeworks builds websites for businesses, schools, NGOs, tourism organisations, e-commerce brands and service providers in Zimbabwe.",
      },
      {
        q: "Can you redesign an existing website?",
        a: "Yes. We can redesign an existing site, improve performance, improve SEO structure and make the user experience cleaner.",
      },
      {
        q: "Do you help with SEO?",
        a: "Yes. We build SEO foundations into the site and can create dedicated service pages, case studies and content structures for search visibility.",
      },
    ],
  },

  softwareDevelopment: {
    path: "/software-development-zimbabwe",
    eyebrow: "Software Development Zimbabwe",
    title: "Software Development in Zimbabwe",
    seoTitle: "Software Development Zimbabwe | ABM Codeworks",
    seoDescription:
      "ABM Codeworks builds custom software, dashboards, portals, reporting systems and operational tools for organisations in Zimbabwe.",
    intro:
      "We design and build practical software systems for teams that need more than a template or off-the-shelf tool.",
    bullets: [
      "Custom business systems",
      "Admin dashboards",
      "Reporting platforms",
      "School systems",
      "Workflow tools",
      "Cloud-connected applications",
    ],
    sections: [
      {
        title: "Custom systems for real workflows",
        text: "We start by understanding how your team already works, then build software that reduces manual work and makes important information easier to manage.",
      },
      {
        title: "Built for maintainability",
        text: "Good software should be easy to improve. We structure projects so they can grow without becoming painful to maintain.",
      },
      {
        title: "Cloud-ready architecture",
        text: "We work with modern front-end, back-end and cloud tools so your system can be secure, reliable and accessible.",
      },
    ],
    faqs: [
      {
        q: "What types of software do you build?",
        a: "We build dashboards, portals, school systems, reporting tools, e-commerce systems, workflow software and custom internal tools.",
      },
      {
        q: "Can you improve an existing system?",
        a: "Yes. We can review, refactor, redesign or extend an existing system depending on its condition and your goals.",
      },
      {
        q: "Do you provide support after launch?",
        a: "Yes. We can provide ongoing improvements, bug fixes and support after launch.",
      },
    ],
  },

  webDevelopment: {
    path: "/web-development-zimbabwe",
    eyebrow: "Web Development Zimbabwe",
    title: "Web Development in Zimbabwe",
    seoTitle: "Web Development Zimbabwe | React & Cloud Apps | ABM Codeworks",
    seoDescription:
      "ABM Codeworks builds modern React web applications, portals, dashboards and cloud-connected systems for Zimbabwean organisations.",
    intro:
      "We build modern web applications for organisations that need fast, useful and reliable digital tools.",
    bullets: [
      "React applications",
      "Admin portals",
      "Dashboards",
      "Customer portals",
      "API integrations",
      "Cloud-connected web apps",
    ],
    sections: [
      {
        title: "React front-ends",
        text: "We build modern user interfaces using React and component-based patterns that keep the application easier to maintain.",
      },
      {
        title: "Reliable integrations",
        text: "We connect web apps to APIs, databases, authentication, payments, cloud storage and third-party services.",
      },
      {
        title: "Performance-focused builds",
        text: "We keep web apps fast and usable, with attention to loading speed, mobile design and practical UX.",
      },
    ],
    faqs: [
      {
        q: "Do you build React websites and web apps?",
        a: "Yes. React development is one of the main services offered by ABM Codeworks.",
      },
      {
        q: "Can you build dashboards?",
        a: "Yes. We build dashboards for reporting, administration, order management, school systems and internal workflows.",
      },
      {
        q: "Can you connect to existing APIs?",
        a: "Yes. We can connect your web app to existing APIs, databases and third-party platforms.",
      },
    ],
  },

  mobileDevelopment: {
    path: "/mobile-app-development-zimbabwe",
    eyebrow: "Mobile App Development Zimbabwe",
    title: "Mobile App Development in Zimbabwe",
    seoTitle: "Mobile App Development Zimbabwe | Flutter Apps | ABM Codeworks",
    seoDescription:
      "ABM Codeworks builds Flutter mobile apps for Android and iOS, including marketplace apps, business apps and cloud-connected mobile products.",
    intro:
      "We build mobile apps for organisations that need reliable Android and iOS experiences without maintaining two separate codebases.",
    bullets: [
      "Flutter app development",
      "Android apps",
      "iOS apps",
      "Firebase integrations",
      "Marketplace apps",
      "App Store and Play Store support",
    ],
    sections: [
      {
        title: "Flutter development",
        text: "Flutter allows us to build polished Android and iOS apps from one codebase while keeping the experience smooth and consistent.",
      },
      {
        title: "Connected to your systems",
        text: "We can connect mobile apps to Firebase, APIs, authentication, cloud storage and existing business systems.",
      },
      {
        title: "Launch support",
        text: "We can help prepare your app for Play Store and App Store submission, testing and release.",
      },
    ],
    faqs: [
      {
        q: "Do you build apps for both Android and iOS?",
        a: "Yes. We use Flutter to build apps for both Android and iOS.",
      },
      {
        q: "Can you connect an app to Firebase?",
        a: "Yes. We work with Firebase authentication, Firestore, Storage, Cloud Functions and related services.",
      },
      {
        q: "Can you help publish the app?",
        a: "Yes. We can assist with Play Store and App Store release preparation.",
      },
    ],
  },

  ecommerceDevelopment: {
    path: "/ecommerce-website-development-zimbabwe",
    eyebrow: "E-commerce Development Zimbabwe",
    title: "E-commerce Website Development in Zimbabwe",
    seoTitle: "E-commerce Website Development Zimbabwe | ABM Codeworks",
    seoDescription:
      "ABM Codeworks builds e-commerce websites, ordering systems, checkout flows and admin dashboards for Zimbabwean businesses.",
    intro:
      "We build e-commerce systems that support real ordering, stock visibility, customer checkout and admin workflows.",
    bullets: [
      "Online stores",
      "Custom checkout flows",
      "Product catalogues",
      "Order dashboards",
      "Stock and pricing logic",
      "Delivery and fulfilment workflows",
    ],
    sections: [
      {
        title: "More than a product grid",
        text: "A good e-commerce system needs clear products, smooth checkout, admin control, order tracking and practical fulfilment workflows.",
      },
      {
        title: "Built around your operations",
        text: "We can build logic for delivery areas, order cutoffs, stock limits, wholesale pricing and operational reporting.",
      },
      {
        title: "Designed for conversion",
        text: "We create e-commerce interfaces that help customers find products, understand pricing and complete orders easily.",
      },
    ],
    faqs: [
      {
        q: "Do you build custom e-commerce websites?",
        a: "Yes. We can build custom e-commerce sites and ordering platforms for Zimbabwean businesses.",
      },
      {
        q: "Can you build admin dashboards?",
        a: "Yes. We can build admin dashboards for orders, products, delivery and stock management.",
      },
      {
        q: "Can the system support special business rules?",
        a: "Yes. Custom rules such as delivery areas, minimum orders, wholesale pricing and cutoff times can be included.",
      },
    ],
  },

  schoolSoftware: {
    path: "/school-software-development-zimbabwe",
    eyebrow: "School Software Zimbabwe",
    title: "School Software Development in Zimbabwe",
    seoTitle: "School Software Development Zimbabwe | ABM Codeworks",
    seoDescription:
      "ABM Codeworks builds custom school software, reporting systems, parent portals, dashboards and education websites for schools in Zimbabwe.",
    intro:
      "We build school-focused software and websites that support reporting, communication, administration and parent-facing experiences.",
    bullets: [
      "School websites",
      "Reporting systems",
      "Parent portals",
      "Teacher dashboards",
      "Academic workflows",
      "Custom education tools",
    ],
    sections: [
      {
        title: "Built for school workflows",
        text: "Schools often need custom logic that generic systems do not handle well. We build tools around the way your school actually operates.",
      },
      {
        title: "Clear experiences for staff and parents",
        text: "We design systems so teachers, administrators and parents can find what they need without unnecessary friction.",
      },
      {
        title: "Reliable and maintainable",
        text: "School systems need to be dependable. We focus on data structure, permissions, usability and long-term maintainability.",
      },
    ],
    faqs: [
      {
        q: "Do you build school websites?",
        a: "Yes. ABM Codeworks builds modern websites for schools in Zimbabwe.",
      },
      {
        q: "Can you build school reporting systems?",
        a: "Yes. We can build custom report input, report generation, parent-facing reports and academic dashboards.",
      },
      {
        q: "Can you build parent portals?",
        a: "Yes. Parent portals and secure school communication systems can be designed and built.",
      },
    ],
  },
};

export const caseStudies = [
  {
    slug: "ruzawi-school",
    client: "Ruzawi School",
    title: "New website and custom school management software",
    industry: "Education",
    featuredService: "School Software",
    summary:
      "Building a new website and custom school management software tailored to Ruzawi School’s needs.",
    challenge:
      "Ruzawi School needed a modern public-facing website as well as custom school management software designed around the way the school works, rather than forcing staff into a generic system.",
    solution:
      "ABM Codeworks is building a new website and custom school management software to support school communication, administration, reporting, parent-facing information and internal academic workflows.",
    results: [
      "Modern school website designed around Ruzawi’s identity and communication needs",
      "Custom school management software shaped around the school’s actual workflows",
      "Better foundation for administration, reporting and parent-facing digital services",
    ],
    technologies: [
      "React",
      "Web design",
      "SEO",
      "School management software",
      "Custom school systems",
    ],
    website: "https://ruzawi.com",
    logo: ruzawi,
  },
  {
    slug: "thrifta",
    client: "Thrifta",
    title: "Marketplace app and landing site",
    industry: "Marketplace",
    featuredService: "Mobile App Development",
    summary:
      "A marketplace product with mobile-first user flows and supporting web presence.",
    challenge:
      "The project needed app-focused product logic, product listings, user flows, image handling and a strong public landing page.",
    solution:
      "ABM Codeworks supported app logic, marketplace workflows and a polished marketing presence for the product.",
    results: [
      "Mobile-first marketplace experience",
      "Improved product and seller workflows",
      "Supporting landing page for public launch",
    ],
    technologies: ["Flutter", "Firebase", "React", "Vite"],
    website: "https://wearethrifta.com",
    logo: thrifta,
  },
  {
    slug: "proactive-wildlife",
    client: "Proactive Wildlife",
    title: "Conservation website build",
    industry: "Conservation",
    featuredService: "Website Design",
    summary:
      "A modern website for a conservation-focused organisation with strong storytelling and partner presentation.",
    challenge:
      "The organisation needed a clear, professional website to communicate its mission, partners and conservation model.",
    solution:
      "ABM Codeworks created a structured website experience focused on credibility, storytelling and clear navigation.",
    results: [
      "Stronger public-facing conservation presence",
      "Clearer partner and model communication",
      "Modern responsive website design",
    ],
    technologies: ["React", "Vite", "SEO", "Web design"],
    website: "https://proactivewildlife.org",
    logo: proactivewildlife,
  },
  {
    slug: "a-cut-above-meats",
    client: "A Cut Above Meats",
    title: "Custom e-commerce ordering platform",
    industry: "E-commerce",
    featuredService: "E-commerce Development",
    summary:
      "A custom ordering system with product catalogues, order windows, stock logic and admin workflows.",
    challenge:
      "The business needed a practical online ordering system that could support product listings, stock visibility, checkout and operational processes.",
    solution:
      "ABM Codeworks built a custom platform around real ordering, fulfilment and admin workflows.",
    results: [
      "Custom e-commerce ordering experience",
      "Admin workflows for products and orders",
      "Operational logic for ordering and delivery",
    ],
    technologies: ["React", "Express", "Prisma", "PostgreSQL"],
    website: "https://acutabovemeats.com",
    logo: acutabovemeats,
  },
  {
    slug: "zimbabwe-gin",
    client: "Zimbabwe Gin",
    title: "Brand website for a Zimbabwean gin business",
    industry: "Food & Beverage",
    featuredService: "Website Design",
    summary:
      "A brand-focused website project supporting Zimbabwe Gin with a polished digital presence for customers, stockists and brand discovery.",
    challenge:
      "The brand needed a professional web presence that could communicate its identity clearly, present the product well and give customers an easy way to learn more.",
    solution:
      "ABM Codeworks supported a clean, responsive brand website structure focused on presentation, credibility and simple navigation.",
    results: [
      "Improved brand presentation online",
      "Clearer customer-facing product information",
      "Responsive website experience for mobile and desktop visitors",
    ],
    technologies: ["Web design", "SEO", "Responsive design"],
    website: "https://zimgin.com",
    logo: zimgin,
  },
  {
    slug: "butterflies-of-zimbabwe-app",
    client: "Butterflies of Zimbabwe",
    title: "Mobile field guide app for Zimbabwean butterfly species",
    industry: "Mobile App",
    featuredService: "Flutter App Development",
    summary:
      "A data-driven mobile app helping users explore Zimbabwean butterfly species through images, species information, search and structured filtering.",
    challenge:
      "The app needed to manage a large amount of species information in a format that was useful, searchable and practical for nature enthusiasts, learners and field use.",
    solution:
      "ABM Codeworks built a mobile-first app structure with species data, image handling, search and filtering features designed around quick discovery.",
    results: [
      "Mobile butterfly field guide experience",
      "Searchable and filterable species information",
      "Zimbabwe-focused educational and nature app",
    ],
    technologies: [
      "Flutter",
      "Firebase",
      "Mobile app development",
      "Species data",
    ],
    website: "#",
    logo: butterfliesOfZimbabwe,
  },
];
