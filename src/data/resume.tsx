import React from "react";
import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Prisma } from "@/components/ui/svgs/prisma";
import { Firebase } from "@/components/ui/svgs/firebase";

export const DATA = {
  name: "Aarthi Kumari",
  initials: "AK",
  url: "https://your-portfolio.vercel.app",
  location: "Hyderabad, India",
  locationLink: "https://maps.google.com/?q=Hyderabad",
  description:
    "Computer Science undergraduate specializing in AI & Machine Learning. Passionate about building scalable backend systems, developer tools, and intelligent applications.",

  summary:
    `With hands-on experience building full-stack and backend systems in Java, Python, and TypeScript, I bring a strong DSA foundation, having solved 280+ problems on LeetCode, to everything I build.

I build developer tools, AI-driven applications, and scalable backend systems. Recent work includes an AI workflow automation SaaS, a real-time AI meeting assistant, and an AI-powered invoicing platform for GST/IRN compliance, each designed and built end-to-end, solo.

I'm drawn to the intersection of AI and developer tooling, where solid engineering meets products people actually want to use.`,

  avatarUrl: "/Aarthi-pic.png",
  resumeUrl: "/AARTHI_RESUME.pdf",

  skills: [
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "TypeScript", icon: Typescript },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactLight },
    { name: "React Native", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Node.js/Express", icon: Nodejs },
    { name: "FastAPI", icon: Python },
    { name: "Prisma", icon: Prisma },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Firebase", icon: Firebase },
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
    {
      href: "/AARTHI_RESUME.pdf",
      icon: FileTextIcon,
      label: "Resume",
      download: true,
    },
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
      company: "Linea",
      href: "https://getlinea.app/",
      badges: [],
      location: "Remote",
      title: "AI Software Engineer Intern",
      logoUrl: "/linea-logo.png",
      start: "Feb 2026",
      end: "May 2026",
      description:
        "- Built core features for Linea, an open-source AI agent platform, spanning the orchestration layer, frontend application, and internal proxy services handling multi-service request routing.\n- Designed and implemented agent execution pipelines that coordinate multiple asynchronous steps, addressing ambiguous, broadly-defined product requirements with limited existing specs.\n- Developed frontend modules enabling users to configure, manage, and interact with distributed AI agent workflows end-to-end.",
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
      image: "/projects/nodebase-1.png",
      images: [
        "/projects/nodebase-1.png",
        "/projects/nodebase-2.png",
        "/projects/nodebase-3.png",
        "/projects/nodebase-4.png",
      ],
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
      image: "/projects/invoice-1.png",
      images: [
        "/projects/invoice-1.png",
        "/projects/invoice-2.png",
        "/projects/invoice-3.png",
        "/projects/invoice-4.png",
        "/projects/invoice-5.png",
      ],
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
