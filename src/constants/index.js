import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  fortytwologo,
  carrent,
  jobit,
  tripguide,
  threejs,
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

const services = [
  {
    title: "Software Developer",
    icon: creator,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "libft",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Created my first basic C library with various recreated standard functions",
      "what we expanded later on with extra functions needed by other projects.",
    ],
  },
  {
    title: "get_next_line",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "September 2022",
    points: [
      "A simple function for reading a file line by line, and returning the lines.",
    ],
  },
  {
    title: "ft_printf",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "September 2022",
    points: [
      "An attempt to recreate the original printf in a simplified version.",
    ],
  },
  {
    title: "Born2beroot",
    language: "Virtual Machine",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "November 2022",
    points: [
      "This project introduced me the beutiful world of virtualization,",
      "and how does a virtual machine work in general.",
    ],
  },
  {
    title: "so_long",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "December 2022",
    points: [
      "First time I created a 2d minigame with the help of MLX42 library.",
      "The theme of my game is, that you are the Spaceman and on your",
      "journey you need to be able to drink enough coffe to debug your code",
      "and survive norminette to be able to successfully submit your project.",
    ],
  },
  {
    title: "push_swap",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Wrote a simple sorting algorithm which is attempting to",
      "to sort the numbers between two stack.",
    ],
  },
  {
    title: "pipex",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "February 2023",
    points: [
      "This project introduced me to the child/parent processes created via fork().",
    ],
  },
  {
    title: "minishell",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "This is the first bigger project, made in a group of two person",
      "where we wrote the fully working, smaller version of bash.",
    ],
  },
  {
    title: "philosophers",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "In this project I had to solve the dying philosophers problem, using threads",
    ],
  },
  {
    title: "cub3D",
    language: "C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "The next group project where we created a 3D game",
    ],
  },
  {
    title: "CPP modules 0-4",
    language: "C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
      "I learned some of the basics of C++ like ",
    ],
  },
  {
    title: "netpractice",
    language: "Web",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
      "Here I was introduced the basic of networking.",
      "I learned about IP addresses, switches, routers, netmasks and subnetting.",
    ],
  },
  {
    title: "ft_irc",
    language: "C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "In this project we worked as three, and we wrote a server with a bot",
      "for an existing IRC client.",
    ],
  },
  {
    title: "CPP modules 5-9",
    language: "C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "I learned some of the basics of C++ like ",
    ],
  },
  {
    title: "inception",
    language: "Docker",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "This project introduced me ",
    ],
  },
  {
    title: "transendence",
    language: "Not decided",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "This project introduced us to ",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
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
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
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

export { services, technologies, experiences, testimonials, projects };