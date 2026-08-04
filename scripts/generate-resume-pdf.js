const fs = require("fs");
const path = require("path");

const lines = [
  "AARTHI KUMARI",
  "Full Stack & Backend Developer | AI & ML",
  "Hyderabad, India | aarthik584@gmail.com | +91-6301002145",
  "GitHub: github.com/aarthi-kumari | LinkedIn: linkedin.com/in/aarthi9984",
  "",
  "SUMMARY",
  "CS undergrad (AI & ML) building full-stack and backend systems with Java,",
  "Python, and TypeScript. Strong DSA foundation (280+ LeetCode). Focused on",
  "developer tools, AI apps, and scalable backends.",
  "",
  "EXPERIENCE",
  "Independent Full-Stack Engineer | 2024 - Present",
  "- Built Nodebase: AI workflow automation SaaS with tRPC, Prisma, Inngest, Polar",
  "- Built Linea: GST/IRN invoicing platform with NLP invoice generation",
  "- Built TalkTrack: real-time AI meeting assistant with LiveKit and voice AI",
  "",
  "PROJECTS",
  "Nodebase - AI Workflow Automation SaaS",
  "Next.js 15, tRPC, Prisma, PostgreSQL, Vercel AI SDK, Inngest, Polar",
  "",
  "Invoice Management System (Linea)",
  "Next.js, Prisma, PostgreSQL, REST APIs, GST/IRN workflows",
  "",
  "TalkTrack - AI Meeting Assistant",
  "Next.js, LiveKit, Gemini, Deepgram, ElevenLabs, Socket.IO, Prisma",
  "",
  "EDUCATION",
  "CMR Engineering College | B.Tech CSE (AI & ML) | 2023 - 2027",
  "",
  "SKILLS",
  "Java, Python, TypeScript, JavaScript, React, Next.js, Node.js, FastAPI,",
  "Prisma, PostgreSQL, Firebase, Docker, REST APIs, scikit-learn",
];

function escapePdf(s) {
  return s.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const contentParts = ["BT", "/F1 11 Tf", "50 780 Td"];
lines.forEach((line, i) => {
  if (i === 0) {
    contentParts.push("/F1 18 Tf", `(${escapePdf(line)}) Tj`);
  } else if (
    line === "SUMMARY" ||
    line === "EXPERIENCE" ||
    line === "PROJECTS" ||
    line === "EDUCATION" ||
    line === "SKILLS"
  ) {
    contentParts.push(
      "0 -18 Td",
      "/F1 12 Tf",
      `(${escapePdf(line)}) Tj`,
      "/F1 10 Tf"
    );
  } else {
    contentParts.push("0 -14 Td", `(${escapePdf(line || " ")}) Tj`);
  }
});
contentParts.push("ET");
const stream = contentParts.join("\n");

const objs = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n",
  `4 0 obj\n<< /Length ${Buffer.byteLength(stream, "utf8")} >>\nstream\n${stream}\nendstream\nendobj\n`,
  "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
for (const obj of objs) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += obj;
}
const xrefStart = Buffer.byteLength(pdf, "utf8");
pdf += `xref\n0 ${objs.length + 1}\n`;
pdf += "0000000000 65535 f \n";
for (let i = 1; i < offsets.length; i++) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objs.length + 1} /Root 1 0 R >>\n`;
pdf += `startxref\n${xrefStart}\n%%EOF`;

const out = path.join(__dirname, "..", "public", "Aarthi-Kumari-Resume.pdf");
fs.writeFileSync(out, pdf);
console.log("Wrote", out);
