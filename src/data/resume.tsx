import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Aarthi Kumari",
  initials: "AK",
  url: "https://your-portfolio.vercel.app",
  location: "Hyderabad, India",
  locationLink: "https://maps.google.com/?q=Hyderabad",
  description:
    "Computer Science undergraduate specializing in AI & Machine Learning. Passionate about building scalable backend systems, developer tools, and intelligent applications.",

  summary:
    "Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with hands-on experience building full-stack and backend systems using Java, Python, and TypeScript. Strong foundation in Data Structures, Algorithms, and relational database design. I enjoy building developer tools, AI-driven applications, and scalable backend systems. Currently seeking opportunities as a Software Engineering Intern or Fresher to contribute to impactful real-world software.",

  avatarUrl: "/aarthi.jpeg",

  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js/Express", icon: Nodejs },
    { name: "FastAPI", icon: Python },
    { name: "Prisma", icon: Typescript },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "TimescaleDB", icon: Postgresql },
    { name: "Firebase", icon: Nodejs },
    { name: "Google Maps API", icon: Nodejs },
    { name: "Recharts", icon: ReactLight },
    { name: "REST APIs", icon: Nodejs },
    { name: "scikit-learn", icon: Python },
    { name: "Composio", icon: Python },
    { name: "Docker", icon: Docker },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  contact: {
    email: "aarthik584@gmail.com",
    tel: "+91-6301002145",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aarthi-kumari",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aarthi9984",
        icon: Icons.linkedin,
        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "mailto:aarthik584@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Personal Projects",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack & Backend Developer",
      logoUrl: "/project.png",
      start: "2024",
      end: "Present",
      description:
        "Developing full-stack and backend applications focused on developer tools, observability platforms, and AI-powered systems using Java, Python, FastAPI, and modern web frameworks.",
    },
  ],

  education: [
    {
      school: "CMR Engineering College",
      href: "",
      degree: "B.Tech in Computer Science (AI & ML)",
      logoUrl: "/collegelogo.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Narayana Junior College",
      href: "",
      degree: "Intermediate (MPC) - 98%",
      logoUrl: "/interlogo.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "Little Star High School",
      href: "",
      degree: "SSC - CGPA 10/10",
      logoUrl: "/school.jpg",
      start: "2020",
      end: "2020",
    },
  ],

  projects: [
    {
      title: "Tracer - Mini Observability Platform",
      href: "https://github.com/aarthi-kumari/tracerWebApp",
      dates: "2025",
      active: true,
      description:
        "A lightweight observability platform that collects application logs via HTTP APIs and processes them in real time for monitoring and anomaly detection.",
      technologies: [
        "Python",
        "FastAPI",
        "TimescaleDB",
        "PostgreSQL",
        "Composio",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aarthi-kumari/tracerWebApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [],
      video: "",
    },

    {
      title: "Invoice Management System",
      href: "https://github.com/aarthi-kumari/linea-app",
      dates: "2025",
      active: true,
      description:
        "Full-stack invoicing platform with client management, invoice lifecycle tracking, and payment status. Built with a normalized relational schema and REST APIs.",
      technologies: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "REST APIs",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aarthi-kumari/linea-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      images: [],
      video: "",
    },

    {
      title: "Digital Guidance Platform (SikshaSarthi Project)",
      href: "https://github.com/aarthi-kumari/career-guidance",
      dates: "2025",
      active: true,
      description:
        "Developed a web/mobile platform to guide students in choosing academic streams and careers using aptitude-based quizzes, career mapping, and a location-based college directory. Implemented personalized recommendations and a timeline tracker for admissions and scholarships.",
      technologies: [
        "React.js",
        "React Native",
        "Node.js/Express",
        "PostgreSQL",
        "Firebase",
        "Google Maps API",
        "Recharts",
        "Python (scikit-learn)",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aarthi-kumari/career-guidance",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/sikshasarthi-home.png",
      images: [
        "/projects/sikshasarthi-home.png",
        "/projects/sikshasarthi-college.png",
        "/projects/sikshasarthi-quiz.png",
        "/projects/sikshasarthi-timeline.png",
      ],
      video: "",
    },

    
  ],

  hackathons: [],

} as const;