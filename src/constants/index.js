import {
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
    programmer,
    InfiniteRealm,
    AfterTheFall,
    tripguide,
    threejs,
    django,
    python,
    unity,
    java,
    SpaceShooter,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Django Backend Developer",
      icon: backend,
    },
    {
      title: "Unity Developer",
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
    {
      name: "git",
      icon: git,
    },
    {
      name: "django",
      icon: django,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "unity",
      icon: unity,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Game/Web Development",
      company_name: "Self Work",
      icon: programmer,
      iconBg: "#383E56",
      date: "Sep 2021 - May 2022",
      points: [
        "I studied Unity C# independently, refining my game development skills through self-study.",
        "I dived into sound design, enhancing gaming experiences by proficiently implementing sound effects and music within Unity.",
        "I explored Unity's animation capabilities, skillfully animating characters, objects, and interfaces to bring projects to life.",
        "Throughout this experience, I demonstrated self-motivation and effective time management by setting and consistently achieving milestones, furthering my Unity game development expertise.",
        "I pursued web development from home, self-studying to become proficient in various web technologies.",
        "I mastered HTML, CSS, JavaScript, and server-side scripting (Django and Node.js), equipping me to build seamless web solutions.",
        "I completed a series of web development projects, showcasing my goal-oriented mindset by consistently delivering high-quality websites and web applications.",

      ],
    },
    {
      title: "Game/Web Development",
      company_name: "InfiniteRealm",
      icon: InfiniteRealm,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "I gained proficiency in game, web(Full-Stack), and 3D development, providing a well-rounded perspective on digital technologies.",
        "I prioritized client satisfaction, maintaining strong relationships by delivering on their needs promptly and consistently.",
        "I honed my project management skills by overseeing multiple projects simultaneously, delivering results on time and within scope.",
        "My experience encouraged creative thinking and innovative problem-solving, enhancing my technical acumen.",
        "Working closely in a small team emphasized effective communication and collaboration, contributing to our collective success.",
        "In the ever-evolving tech industry, I demonstrated adaptability by quickly learning new tools, technologies, and trends to stay current and competitive.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "After The Fall",
      description:
        "After The Fall is a 3D adventure game set in a post-apocalyptic world overrun by zombies.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "sounds/animation",
          color: "pink-text-gradient",
        },
      ],
      image: AfterTheFall,
      source_code_link: "https://github.com/",
    },
    {
      name: "Space Shooter",
      description:
        "Engage in intense space battles with our sleek 2D shooter, combining responsive controls and vibrant graphics for a professional gaming experience",
      tags: [
        {
          name: "Unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Animations",
          color: "pink-text-gradient",
        },
        {
          name: "Post-Processing",
          color: "blue-text-gradient",
        },
      ],
      image: SpaceShooter,
      source_code_link: "https://github.com/Alish123-gif/SpaceShooter",
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