export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Puneet Chandok',
    position: 'CEO & Proprietor Of Digismiths',
    img: 'assets/review1.png',
    review:
      'Collaborating with Adarsh was an excellent experience; he was a tremendous asset to our company. He developed the Google Autocomplete widget for Zoho CRM, which significantly lowered our API costs. He is a dedicated programmer with outstanding problem-solving skills. For more info, feel free to contact us on info@digismiths.org',
  },
  {
    id: 2,
    name: 'Amit Sharma',
    position: 'Software Developer at Codsoft',
    img: 'assets/review2.png',
    review:
      'Collaborating with Adarsh was an impressive experience; his work ethic and technical skills were commendable. He contributed to various real-life projects, enhancing our technical solutions and improving workflows. His ability to quickly grasp and implement complex web development concepts made him a valuable addition to our team. For more information, feel free to contact us at info@codsoft.org.',
  }
];

export const myProjects = [
  {
    "title": "Blogify - MERN Stack Blog Web App",
    "desc": "Blogify is a feature-rich blog platform that allows users to Create, Read, Update, and Delete (CRUD) blogs with user authentication.",
    "subdesc": "Built with MongoDB, React.js, Node.js, and Express.js. Utilized JWT for authentication and deployed on Heroku.",
    "href": "https://mernstack-blog-adarsh-a7a45ef8836d.herokuapp.com/",
    "texture": "/textures/project/project1.mp4",
    "logo": "/assets/project-logo1.png",
    "logoStyle": {
      "backgroundColor": "#2A1816",
      "border": "0.2px solid #36201D",
      "boxShadow": "0px 0px 60px 0px #AA3C304D"
    },
    "spotlight": "/assets/spotlight1.png",
    "tags": [
      { "id": 1, "name": "React.js", "path": "/assets/react.svg" },
      { "id": 2, "name": "MongoDB", "path": "/assets/mongodb.svg" },
      { "id": 3, "name": "Express.js", "path": "/assets/express.svg" },
      { "id": 4, "name": "Node.js", "path": "/assets/nodejs.svg" }
    ]
  },
  {
    "title": "YouTube React Clone",
    "desc": "A clone of YouTube offering video playback and real-time dynamic content rendering through API integration.",
    "subdesc": "Developed using React.js, JavaScript, HTML/CSS, and Tailwind CSS. Showcased expertise in UI/UX design.",
    "href": "https://adarsh-youtubeclone.netlify.app/",
    "texture": "/textures/project/project1.mp4",
    "logo": "/assets/youtube.svg",
    "logoStyle": {
      "backgroundColor": "#1A1A1A",
      "border": "0.2px solid #282828",
      "boxShadow": "0px 0px 60px 0px #1A1A1A4D"
    },
    "spotlight": "/assets/spotlight2.png",
    "tags": [
      { "id": 1, "name": "React.js", "path": "/assets/react.svg" },
      { "id": 2, "name": "TailwindCSS", "path": "/assets/tailwindcss.png" }
    ]
  },
  {
    "title": "Todo List App",
    "desc": "A streamlined Todo List app that allows users to add, edit, and delete tasks, with Firebase Storage for synchronization.",
    "subdesc": "Built with React.js, Tailwind CSS, JavaScript, and Firebase Storage.",
    "href": "https://react-todo-adarsh.netlify.app/",
    "texture": "/textures/project/project1.mp4",
    "logo": "/assets/project-logo2.png",
    "logoStyle": {
      "backgroundColor": "#3B3B3B",
      "border": "0.2px solid #444444",
      "boxShadow": "0px 0px 60px 0px #3B3B3B4D"
    },
    "spotlight": "/assets/spotlight3.png.png",
    "tags": [
      { "id": 1, "name": "React.js", "path": "/assets/react.svg" },
      { "id": 2, "name": "Firebase", "path": "/assets/firebase.svg" },
      { "id": 2, "name": "TailwindCSS", "path": "/assets/tailwindcss.png" }
    ]
  }
]


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'DigiSmiths',
    pos: 'Full Stack Developer',
    duration: 'Dec 2023 - Jul 2024 · 8 mos',
    title: "Digismiths Digital Agency is a full-service digital agency dedicated to empowering businesses through innovative digital solutions.We are passionate about helping businesses achieve their online goals and build lasting success. ",
    icon: '/assets/digi.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'IBM SkillsBuild',
    pos: 'Frontend Developer',
    duration: 'Jun 2024 - Aug 2024 · 3 mos',
    title: "IBM SkillsBuild specializes in web development and data science, emphasizing hands-on learning experiences.",
    icon: '/assets/ibm.png',
    animation: 'victory',
  },

  {
    id: 3,
    name: 'Codsoft',
    pos: 'Web Developer',
    duration: 'Aug 2023 - Sep 2023 · 2 mos',
    title: "At CodSoft, we believe practical knowledge is the key to success in the tech industry.",
    icon: '/assets/codsoft.png',
    animation: 'salute',
  },
];
