export const Bio = {
  name: "Herby Francois",
  roles: [
    "Computer Science Student",
    "Full Stack Developer",
    "Systems & Networking Enthusiast",
  ],
  description:
    "Computer Science student with hands‑on experience in full‑stack web development, systems programming, and network configuration. Skilled in JavaScript, Node.js, PostgreSQL, and Linux, with a strong track record of building and debugging complex applications and interactive user experiences. Proven ability to contribute to academic projects, integrate APIs, and develop accessible, real‑world software solutions.",
  // Correct link to  GitHub profile
  github: "https://github.com/Francoi-H",
  // Link to the PDF resume stored in the public folder
  resume: "/Herby_Francois_Resume.pdf",
  // Social profiles can be filled in once available
  linkedin: "",
  twitter: "",
  insta: "",
  facebook: "",
};

// Technical skills broken down into logical categories.  Each entry includes a name
// and a representative icon.  When possible, official logos or well‑known
// open‑source images are used to give visitors an instant visual cue.
export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Angular",
        image: "https://angular.io/assets/images/logos/angular/angular.svg",
      },
      {
        name: "Vue",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Linux",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
    ],
  },
];

// Practical experiences derived from academic coursework.  These entries replace
// the placeholder internship and provide context for Herby's hands‑on learning.
export const experiences = [
  {
    id: 0,
    img: "/images/robotic_sweeper.png",
    role: "Software Engineering Project",
    company: "Robotic Floor Sweeper System",
    date: "Spring 2024",
    desc:
      "Created detailed UML diagrams to model a robotic cleaning system. Designed subsystems, database schema and servlet interactions following structured software engineering methodologies.",
    skills: ["UML", "Software Design", "Databases", "Java"],
  },
  {
    id: 1,
    img: "/images/linux_network.png",
    role: "Networking Lab",
    company: "Linux Networking Lab – CPS‑4200",
    date: "Fall 2023",
    desc:
      "Configured virtual networks using Linux namespaces, bridges and iperf3 for performance testing. Set up NAT masquerade and DNS forwarding to enable external internet access from isolated environments.",
    skills: ["Linux", "Networking", "NAT", "DNS"],
  },
  {
    id: 2,
    img: "/images/web_game.png",
    role: "Web Development Project",
    company: "Software Development Project – Web Game",
    date: "Fall 2023",
    desc:
      "Designed and developed a unique browser game using HTML, CSS and JavaScript. Implemented game mechanics and restart logic for an interactive user experience. Deployed the game to the web using Git and static hosting platforms.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

// Education section summarising current academic pursuit.
export const education = [
  {
    id: 0,
    img: "/images/education.png",
    school: "Kean University – Union, NJ",
    date: "Sep 2022 - Expected May 2026",
    grade: "3.51 GPA",
    desc:
      "Currently pursuing a Bachelor of Science in Computer Science. Completed courses in Data Structures, Algorithms, Systems Programming, Database Systems, Operating Systems and Networking.",
    degree: "Bachelor of Science in Computer Science",
  },
];

// Projects drawn directly from the résumé.  Each project description is concise
// and highlights the technologies used.  Links can be added later when
// repositories or live demos are available.
export const projects = [
  {
    id: 0,
    title: "Matching Card Game",
    date: "",
    description:
      "Created a simple matching card game featuring custom visuals and interactive gameplay using HTML, CSS and JavaScript.",
    image: "/images/matching_card_game.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 1,
    title: "Pet Foster Website",
    date: "",
    description:
      "Collaborated with peers to develop a pet foster website using HTML, CSS, JavaScript and MongoDB. Enabled users to browse and foster pets through an intuitive interface.",
    image: "/images/pet_foster.png",
    tags: ["HTML", "CSS", "JavaScript", "MongoDB"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Personal Portfolio with AI ChatBot",
    date: "",
    description:
      "Created a personal portfolio website with an integrated AI chatbot using HTML, CSS and JavaScript.",
    image: "/images/portfolio_chatbot.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web app",
    github: "",
    webapp: "",
  },
  {
    id: 3,
    title: "Trip Advisor App",
    date: "",
    description:
      "Developed a simple trip advisor application in Java, enabling users to search and plan trips.",
    image: "/images/trip_advisor.png",
    tags: ["Java"],
    category: "software",
    github: "",
    webapp: "",
  },
];

// Timeline entries remain generic for now and can be customised later.
export const TimeLineData = [
  { year: 2022, text: "Started my journey at Kean University" },
  { year: 2023, text: "Completed networking and web development projects" },
  { year: 2024, text: "Expanded full‑stack development and systems skills" },
];