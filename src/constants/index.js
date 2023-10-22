import {
  c,
  wp,
  cpp,
  web,
  css,
  git,
  audi,
  html,
  japan,
  python,
  nodejs,
  docker,
  threejs,
  porsche,
  hungary,
  germany,
  backend,
  reactjs,
  creator,
  tailwind,
  frontend,
  javascript,
  woodworker,
  photographer,
  fortytwologo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "git",
    title: "Github"
  },
  {
    id: "linkedin",
    title: "Linkedin"
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
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "WordPress",
    icon: wp,
  },
  {
    name: "Python",
    icon: python,
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
    title: "Audi RealLabor Kreathon",
    language: "Languages/Tools: C++, C#",
    icon: audi,
    iconBg: "#E6DEDD",
    date: "October 2023",
    points: [
      "With my team I worked on simplifying the work of the logistic workers whom still do most of the job manually by hand which takes a lot of time.",
      "We were looking on the way they store the information of marketplaces/zones/shelfs/boxes",
      "Our goal was to shorten the process time, for example if they get a request to move something from A to B",
      "In short, we created a UI with C# for workers as an easy to use interface which displays every information they need",
      "Which was connected to our C++ backend. IF we recieve throught our UI a part they want to move, and to which shelf. Then we automatically check if there is a spot on that shelf and if it's suitable, or the next possible and closest location.",
      "This is returned as an output, where the user prompted to multiple choice, eg move the item and update it's position in the database.",
      "We were quite happy to introduce a working prototype which were liked the logistic department and recieving a 3rd place in the theoretical topic.",
    ],
  },
  {
    title: "Porsche Hackathon",
    language: "Languages/Tools: ML, Parquet, Python, SQL, Postgres",
    icon: porsche,
    iconBg: "#E6DEDD",
    date: "September 2023",
    points: [
      "Worked with a large, real dataset which was over one billion lines collected from the Taycan models druing different campaigns.",
      "None of the team members had previus experience with data science beforehand. We prepared ourselfs in the 2 weeks prior the challange when we recieved the topics.",
      "It was a challanging task to manage the type of dataset whcih we haven't used before and also to understand the correalations between the different segments of the data.",
      "Wasn't easy to extract useful information from the dataset, but we managed to do so quiet well.",
      "At the end we found quite a few correalations what we visualized with different graphs and presented to the topic owners.",
    ],
  },
  {
    title: "Python for Data Science",
    language: "Languages/Tools: Python, SQL, PostgreSQL",
    icon: python,
    iconBg: "#E6DEDD",
    date: "August 2023",
    points: [
      "Learned about the basic structure of Python.",
      "Image manipulation, transformation, datatables and statistics.",
    ],
  },
  {
    title: "42 core corriculum C++ projects",
    language: "Languages/Tools: C++, docker",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "CPP 1-9 modules: Basics of C++ overloads, polymorphism, classes, inheritance, try/catch, templates, containers, etc.",
      "ft_irc: We wrote a server for an existing IRC client with a bot, file transfers, different type of channels and a range of commands.",
      "inception: This project introduced me how docker containers, docker-compose and docker in general works.",
    ],
  },
  {
    title: "42 core curriculum C projects",
    language: "Languages/Tools: C, Git, Vscode",
    icon: fortytwologo,
    iconBg: "#E6DEDD",
    date: "October 2022 - May 2023",
    points: [
      "libft: Created my first basic C library with various recreated standard functions.",
      "get_next_line: How to read and return a file contents.",
      "ft_printf: An attempt to recreate the original printf function.",
      "so_long: First time I created a 2d minigame with the help of MLX42 library.",
      "push_swap: Wrote a simple sorting algorithm to sort the numbers between two stack.",
      "pipex: I learned how child/parent processes are created via fork(), and the way execution works inside of shell",
      "philosophers: I had to solve the dying philosophers problem, using threads and mutexes.",
      "minishell: Frist group project where we created our own fully working implementation of shell.",
      "netpractice: basic of networking, learned about IP addresses, switches, routers, netmasks and subnetting.",
      "cub3D: we created a first person 3D game based on the famous Wolfeinstein.",
    ],
  },
  {
    title: "Moved to Germany",
    language: "skill: Computer Science",
    icon: germany,
    iconBg: "#E6DEDD",
    date: "October 2022",
    points: [
      "Started my programming journey at the school called 42 Heilbronn, which provides a way different learning experience, than a normal university.",
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
    title: "Recepcionist & English teacher",
    language: "skill: English, Japanese, Teaching",
    icon: japan,
    iconBg: "#E6DEDD",
    date: "February 2020 - September 2021",
    points: [
      "I was a recepcionist in different resorts and hostels.",
      "I worked in Hiroshima, Kyoto, Osaka, and Kumakogen and learned a lot about hospitality.",
      "Also, I was teaching English in a small local cafe on the countryside.",
      "Our customers ranged from really young to all the way 80+ years old.",
      "It was a really interesting experience.",
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
    title: "Cabinetmaker / Buildingcarpenter",
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
    title: "National Cabinetmaker Competition",
    language: "skill: Team and Precise work",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "Spring 2012",
    points: [
      "During this competition we had to build a small custom window, and a two step chair with backrest. At the end we took home the 3rd place.",
    ],
  },
  {
    title: "First, Second profession and Highschool",
    language: "skill: Cabinetmaker, Buildingcarpenter, English",
    icon: hungary,
    iconBg: "#E6DEDD",
    date: "September 2008 - June 2015",
    points: [
      "In this four year period I learned and mastered every sides of woodworking from marquetry, crafting unique and old style to modern furnitures.",
      "Achieved the a 3rd places on a national competition.",
      "Learned and mastered the importance of precise and quality work.",
      "After 2012, in a year I mastered the craft of crafting unique and common type of doors, windows and different structual elements.",
      "2013-2015 Learned English on conversational level at highschool. The school was high, but I'm definetely not during this time.",
    ],
  },
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
];

export { services, technologies, experiences };