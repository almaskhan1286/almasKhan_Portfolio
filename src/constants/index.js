// import { exp } from "maath/dist/declarations/src/easing";
import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  webs,
  seo,
  ui,
  app,
  // carrent,
  unichat,
  jobit,
  tripguide,
  canva,
  illustrator,
  photoshop,
  ux,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
  {
    name: "illustrator",
    icon: illustrator,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
  {
    name: "ux",
    icon: ux,
  },
];

const experiences = [
  {
    title: "Web Development",
    icon: webs,
    iconBg: "#383E56",
    points: [
      "Build your online presence with cutting-edge web development! I will turn your vision into reality and create a website that stands out and drives results.",
    ],
  },
  {
    title: "App Development",
    icon: app,
    iconBg: "#E6DEDD",
    points: [
      "Transform your ideas into reality with my app development services! Build the app of your dreams and take your business to the next level.",
    ],
  },
  {
    title: "UI/UX Design",
    icon: ui,
    iconBg: "#383E56",
    points: [
      "Elevate your digital product to the next level with my personalized UI/UX design services! I bring a unique perspective and passion to every project.",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    icon: seo,
    iconBg: "#E6DEDD",
    points: [
      "Drive traffic and boost your online visibility with my expert SEO and digital marketing services! Let's create a strategy that sets you apart and takes your business to the next level.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];



const projects = [
  {
    name: "UniChat",
    description:
      "UniChat is a modern and user-friendly real-time chat application, provides a hassle-free way to connect and chat with friends or colleagues in a secure and efficient manner.",
    tags: [
      {
        name: "⚛React",
        color: "blue-text-gradient",
      },
      {
        name: "🔥Firebase",
        color: "green-text-gradient",
      },
      {
        name: "💬Chat Engine",
        color: "pink-text-gradient",
      },
    ],
    image: unichat,
    source_code_link: "https://github.com/almaskhan1286/unichat",
  },
  {
    name: "New Here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: [
      {
        name: "⚛React",
        color: "blue-text-gradient",
      },
      {
        name: "🔥Firebase",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "New Here",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: [
      {
        name: "⚛React",
        color: "blue-text-gradient",
      },
      {
        name: "🔥Firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, testimonials, projects };
