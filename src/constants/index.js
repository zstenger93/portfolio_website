import {
  c,
  wp,
  cpp,
  shellscript,
  hungary,
  japan,
  photographer,
  woodworker,
  germany,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
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
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "ShellScript",
    icon: shellscript,
  },
  {
    name: "WordPress",
    icon: wp,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "I was born",
    language: "Languages: Hungarian",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "14 August 1993",
    points: [
      "Probably I should have skipped this information, now T-800 Terminator will know where to go.",
      "Anyway...",
    ],
  },
  {
    title: "First profession",
    language: "skill: Cabinetmaker",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "September 2008 - June 2012",
    points: [
      "In this four year period I learned and mastered every sides of woodworking from marquetry, crafting unique and old style to modern furnitures.",
      "Achieved the a 3rd places on a national competition.",
      "Learned and mastered the importance of precise and quality work.",
    ],
  },
  {
    title: "Second profession",
    language: "skill: Buildingcarpenter",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "September 2012 - June 2013",
    points: [
      "During this year I mastered the craft of crafting unique and common type of doors, windows and different structual elements.",
    ],
  },
  {
    title: "Highschool",
    language: "skill: English",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "September 2013 - June 2015",
    points: [
      "Learned English on conversational level.",
      "The school was high, but I'm definetely not during this time.",
    ],
  },
  {
    title: "Woodworker/Cabinetmaker",
    language: "skill: Customer service, Fine Woodworking",
    icon: woodworker,
    iconBg: "#E6DEDD",
    date: "September 2015 - June 2020",
    points: [
      "Worked at three different companies during this period filling in different positions.",
      "At one of the companies I was working with normal wood mostly crafting unique stairs, doors and windows.",
      "The other two company introduced me to working with furniture panels and building all kinds of furniture, but mostly kitchens."
    ],
  },
  {
    title: "Living in Japan",
    language: "skill: Photography, English, Japanese",
    icon: japan,
    iconBg: "#E6DEDD",
    date: "February 2020 - September 2021",
    points: [
      "I applied for a working holiday visa and moved to Japan for more than 1,5 years.",
      "During this period I exploread lots of cities and mountains all around the country.",
      "I was doing photography almost every day, especially streetphotography which in Tokyo became my new favorite type of phorography.",
    ],
  },
  {
    title: "English teacher",
    language: "skill: English, Japanese",
    icon: japan,
    iconBg: "#E6DEDD",
    date: "June 2020 - September 2020",
    points: [
      "I was teaching English in a small local cafe on the countryside.",
      "Our customers ranged from really young to all the way 80+ years old.",
      "It was a really interesting experience.",
    ],
  },
  {
    title: "Recepcionist",
    language: "skill: English, Japanese",
    icon: japan,
    iconBg: "#E6DEDD",
    date: "February 2020 - September 2021",
    points: [
      "I was a recepcionist in different resorts and hostels.",
      "I worked in Hiroshima, Kyoto, Osaka, and Kumakogen.",
      "I learned a lot about hospitality.",
    ],
  },
  {
    title: "Photographer",
    language: "skill: Photography, Photoshop, Lightroom",
    icon: photographer,
    iconBg: "#E6DEDD",
    date: "February 2018 - present",
    points: [
      "Always loved to take photographs which a few years ago became my favorite hobby and since then whereever I go, the camera is the first thing I put in my backpack.",
      "Learned about composition, patience, creativity and that everything can't be perfect.",
      "I enjoy almost all styles of photography but mostly street, cityscape, abstract and nature.",
    ],
  },
  {
    title: "Self employed woodworker",
    language: "skill: Woodworking, Project Managment, Customer Service, Design",
    icon: woodworker,
    iconBg: "#E6DEDD",
    date: "September 2021 - October 2022",
    points: [
      "Worked in my own workshop for clients on various projects."
    ],
  },
  {
    title: "Moved to Germany",
    language: "skill: Computer Science",
    icon: germany,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [],
  },
  {
    title: "libft",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Created my first basic C library with various recreated standard functions",
      "Later on I expanded it with extra functions needed by other projects.",
      "I learned about memory menagement, manipulating strings, lists and so on.",
    ],
  },
  {
    title: "get_next_line",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "September 2022",
    points: [
      "A simple function for reading a file line by line in a while loop which returns each line until it reaches the end of file.",
    ],
  },
  {
    title: "ft_printf",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "September 2022",
    points: [
      "An attempt to recreate the original printf in a simplified version with a range of options available.",
    ],
  },
  {
    title: "Born2beroot",
    language: "Languages/Tools: Virtual Machine",
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
    language: "Languages/Tools: C",
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
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "January 2023",
    points: [
      "Wrote a simple sorting algorithm which is attempting to sort the numbers between two stack with the smallest amount of moves possible.",
    ],
  },
  {
    title: "pipex",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "February 2023",
    points: [
      "This project introduced me to the child/parent processes created via fork(). and how is the execution working inside of shell in a simplified way.",
    ],
  },
  {
    title: "minishell",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "March 2023",
    points: [
      "This is the first bigger project, made in a group of two person where we wrote the fully working, smaller version of bash.",
      "As the first bigger project it was a challange to organize, and write it in a clean way, but in my opinion we meneged it pretty well.",
    ],
  },
  {
    title: "philosophers",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "In this project I had to solve the dying philosophers problem, using threads and mutexes.",
      "On some parts it was challanging to avoid parts, but it worked out just fine at the end.",
    ],
  },
  {
    title: "cub3D",
    language: "Languages/Tools: C",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "May 2023",
    points: [
      "The next group project where we created a 3D game based on the famous Wolfeinstein.",
      "In reality though, this is a 2D game projected into 3D with various algorithms we had to implement to achieve the required result.",
    ],
  },
  {
    title: "CPP modules 0-4",
    language: "Languages/Tools: C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
      "I learned some of the basics of C++ like ",
      "Memory allocation, references, pointers to members, switch statements.",
      "Ad-hoc polymorphism, overloads.",
      "Inheritance between classes, like the more complicated diamond inheritance.",
      "Subtype polymorphism, abstract classes and interfaces",
    ],
  },
  {
    title: "netpractice",
    language: "Languages/Tools: Web",
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
    language: "Languages/Tools: C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "July 2023",
    points: [
      "In this project we worked as three, and we wrote a server for an existing IRC client.",
      "Implementing, operators and normal users on the server.",
      "Creating a range of commands available to use for them.",
      "Handling file transfers.",
      "Creating a bot which from you are able to ask different things.",
    ],
  },
  {
    title: "CPP modules 5-9",
    language: "Languages/Tools: C++",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "I learned some of the basics of C++ like ",
      "Try/catch blocks and exceptions.",
      "Different cast types in C++.",
      "About C++ templates and their usecases.",
      "Containers, iterators, and algorithms.",
    ],
  },
  {
    title: "inception",
    language: "Languages/Tools: Docker",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "This project introduced me how docker and docker containers work.",
      "How to deploy faster, easier different services and systems with docker.",
    ],
  },
  {
    title: "transendence",
    language: "Languages/Tools: Not decided",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "In progress",
    points: [
      "Here we have to write both back and frontend for a website.",
      "Implement a playable, multiplayer pong game.",
      "Chat and scoreboard.",
      "Authentication service.",
    ],
  },
  {
    title: "internship",
    language: "Languages/Tools: unknown",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "soon",
    points: [
      "The project I was working on:",
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