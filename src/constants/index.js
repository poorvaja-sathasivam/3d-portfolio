import {
    mobile,
    backend,
    creator,
    web,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eunoia,
    sushi,
    fotheby,
    attendance,
    threejs,
    mtab,
    strugend,
    cpp,
    java,
    python,
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
      title: "Sofware Engineer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "C++ Developer",
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
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
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
      title: "Software Developer Intern",
      company_name: "MTAB Technology Private Limited",
      icon: mtab,
      iconBg: "#383E56",
      date: "Feb 2023 - Apr 2023",
      points: [
        "Developing and maintaining web applications using JavaScript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "UI/UX Designer",
      company_name: "Strugend",
      icon: strugend,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Feb 2023",
      points: [
        "Created wireframes, user flows, prototypes, and high-fidelity mockups with the functionality of the design; demonstrated improvement of user experience by 35%.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Performed usability tests with 10 participants and made necessary improvements to wireframes and prototypes based on user feedback and analytics data",
        "Implemented the user interface design across 30+ pages utilizing Adobe XD and Figma",
      ],
    },
    // {
    //   title: "Software Engineer Intern",
    //   company_name: "Natwest",
    //   icon: natwest,
    //   iconBg: "#383E56",
    //   date: "Dec 2022 - Apr 2023",
    //   points: [
    //     "Developing and maintaining web applications using Java and Springboot.",
    //     "Optimized backend services to reduce query time by 25% and improve overall performance of the web application",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Leveraged version control systems to efficiently manage source code and deployed updates and changes to the application's production environment.",
    //   ],
    // },
  ];
  
  const projects = [
    {
      name: "Full-Stack-Art-Auction-Wesbite ",
      description:
        "A full stack art auction web application developed at University as a part of my assignment.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "software-development",
          color: "pink-text-gradient",
        },
      ],
      image: fotheby,
      source_code_link: "https://github.com/poorvaja-sathasivam/Auction-Website-Full-Stack",
    },
    // {
    //   name: "Attendance-Registration",
    //   description:
    //     "Real-time attendance monitoring system using deep learning techniques developed at Univeristy as a part of my assignment.",
    //   tags: [
    //     {
    //       name: "deep-learning",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "python",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "software-development",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: attendance,
    //   source_code_link: "https://https://github.com/poorvaja-sathasivam/Attendance-Registration-Using-Deep-Learning.com/",
    // },
    {
      name: "eunoia",
      description:
        " A blog about ideas, perspectives and things I have learned along my journey of coding.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: eunoia,
      source_code_link: "https://github.com/poorvaja-sathasivam/Attendance-Registration-Using-Deep-Learning",
    },
    {
      name: "Sushi Restaurant",
      description:
        "A website for a sushi restaurant using HTML, CSS and JavaScript. ",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascriptt",
          color: "pink-text-gradient",
        },
      ],
      image: sushi,
      source_code_link: "https://github.com/poorvaja-sathasivam/Sushi-Restaurant-Website",
    },
  ];
  
  export { services, technologies, experiences, projects };