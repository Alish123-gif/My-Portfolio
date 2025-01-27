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
  VibeHub,
  workoutplanner,
  threejs,
  django,
  python,
  unity,
  java,
  SpaceShooter,
  nextjs,
  mongodb,
  expressjs,
  fastapi
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: creator,
  },
  {
    title: "Django Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Fast Api",
    icon: fastapi,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  }, {
    name: "java",
    icon: java,
  }, {
    name: "Node JS",
    icon: nodejs,
  }, {
    name: "python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "unity",
    icon: unity,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
      "Independently studied Unity and C#, building a strong foundation in game development through self-guided learning.",
      "Enhanced gaming experiences by implementing sound effects and music, demonstrating proficiency in Unity’s sound design tools.",
      "Created dynamic and engaging projects by animating characters, objects, and interfaces using Unity’s animation capabilities.",
      "Demonstrated self-motivation and time management by setting clear goals and achieving milestones in game development projects.",
      "Self-studied web development, gaining proficiency in core technologies such as HTML, CSS, JavaScript, and server-side frameworks like Django and Node.js.",
      "Applied knowledge through the development of multiple web projects, showcasing a goal-oriented approach by delivering high-quality web applications.",
    ],
  },
  {
    title: "Game/Web Development",
    company_name: "InfiniteRealm",
    icon: InfiniteRealm,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developed expertise in game development, full-stack web development, and 3D development, providing a holistic approach to digital solutions.",
      "Fostered strong client relationships by delivering tailored solutions that met their requirements consistently.",
      "Managed multiple projects simultaneously, demonstrating exceptional organizational and project management skills to ensure timely delivery.",
      "Encouraged creative thinking and innovative problem-solving, driving technical growth and project success.",
      "Collaborated closely with a small team, enhancing communication and teamwork to achieve collective goals.",
      "Stayed ahead of industry trends by quickly learning and adapting to new tools and technologies, maintaining a competitive edge.",
    ],
  },
  {
    title: "Full-Stack Development",
    company_name: "Zylio Platform",
    icon: programmer,
    iconBg: "#383E56",
    date: "Feb 2025 - Present",
    points: [
      "Currently working as a Full-Stack Developer, contributing to the development of a B2B financial SaaS application.",
      "Responsible for designing new features, fixing bugs, and maintaining a high-quality codebase.",
      "Utilize React.js for front-end development, FastAPI for backend services, and Tailwind CSS for styling to create responsive and visually appealing web applications.",
      "Collaborate with a multidisciplinary team of developers and designers to deliver projects within an Agile environment using Jira.",
      "Maintain a focus on delivering robust and scalable solutions while ensuring alignment with project timelines and objectives.",
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
    name: "Vibe Hub",
    description:
      "Vibe Hub is a social media platform that connects, allowing them to share and discover.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: VibeHub,
    source_code_link: "https://github.com/Alish123-gif/VibeHub",
  },
  {
    name: "Space Shooter",
    description:
      "Engage in intense space battles with my sleek 2D shooter, combining responsive controls and vibrant graphics for a cool gaming experience",
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
    name: "Workout Planner",
    description:
      "Plan your workouts with this easy-to-use web app, featuring a sleek design and intuitive interface.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: workoutplanner,
    source_code_link: "https://github.com/Alish123-gif/workoutplanner",
  },
];

export { services, technologies, experiences, testimonials, projects };
