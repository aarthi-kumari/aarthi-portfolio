import React from "react";
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
    `Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience building full-stack and backend systems using Java, Python, and TypeScript. Strong foundation in Data Structures and Algorithms — solved 280+ problems on LeetCode.

I enjoy building developer tools, AI-driven applications, and scalable backend systems. My recent work spans an AI workflow automation SaaS, a real-time AI meeting assistant, and an AI-powered invoicing platform for GST/IRN workflows- each built end-to-end as solo projects.

I'm drawn to problems at the intersection of AI and developer tooling, where good engineering and useful products meet.`,

  avatarUrl: "/Aarthi-pic.png",

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
  title: "Nodebase - AI Workflow Automation SaaS",
  href: "https://github.com/aarthi-kumari/nodebase",
  dates: "2026",
  active: true,
  description:
    "A full-stack AI workflow automation SaaS that lets users visually build, connect, and automate multi-step workflows powered by AI nodes, with billing and background job processing.",
  technologies: [
    "Next.js 15",
    "tRPC",
    "Prisma",
    "PostgreSQL",
    "Vercel AI SDK",
    "Inngest",
    "better-auth",
    "Polar",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/aarthi-kumari/nodebase",
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
        "An AI-powered invoicing platform built for GST-compliant e-invoice workflows. Supports natural language interaction for invoice generation, client management, and IRN lifecycle tracking — backed by a normalized relational schema and REST APIs.",
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
  title: "TalkTrack - AI Meeting Assistant",
  href: "https://github.com/aarthi-kumari/TalkTrack",
  dates: "2026",
  active: true,
  description:
    "A real-time AI meeting assistant that transcribes live calls, generates summaries, and surfaces action items — powered by voice AI and WebSocket-based streaming.",
  technologies: [
    "Next.js 14",
    "Clerk",
    "LiveKit",
    "Gemini",
    "Deepgram",
    "ElevenLabs",
    "Socket.IO",
    "PostgreSQL",
    "Prisma",
  ],
  links: [
    {
      type: "Source",
      href: "https://github.com/aarthi-kumari/TalkTrack",
      icon: <Icons.github className="size-3" />,
    },
  ],
  image: "",
  images: [],
  video: "",
},

    
  ],

  hackathons: [] as Array<{
    title: string;
    dates: string;
    location: string;
    image?: string;
    links?: Array<{
      type: string;
      title: string;
      href: string;
      icon?: React.ReactNode;
    }>;
    description?: string;
  }>,

} as const;