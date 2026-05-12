import { createFileRoute } from "@tanstack/react-router";
import { Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, Award, Code2, Cloud, Database, Sparkles, Wrench, FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 pt-12 md:pt-20 pb-24 grid md:grid-cols-12 gap-10 items-center min-h-[calc(100vh-4rem)]">
      <div className="md:col-span-7">
        <div className="flex items-center gap-3 mb-8">
          {/* <span className="h-2 w-2 rounded-full bg-accent" /> */}
          {/* <span className="eyebrow">Available · May 2026</span> */}
        </div>
        <h1 className="display text-[16vw] md:text-[8.5rem]">
          Aishwarya<br /><em className="text-accent">Kore.</em>
        </h1>
        <p className="mt-8 font-serif text-2xl md:text-3xl text-muted-foreground">
          Software Engineer & Computer Science Graduate
        </p>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Hi, I'm a full-stack engineer with an MS in Computer Science from Indiana University. I build web applications end-to-end, and bring AI into the heart of them.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className="px-5 py-3 rounded-full bg-foreground text-background text-sm hover:bg-accent transition-colors">
            View my work →
          </a>
          <a href="#contact" className="px-5 py-3 rounded-full border border-foreground/20 text-sm hover:border-foreground transition-colors">
            Get in touch
          </a>
        </div>
        <div className="mt-8 flex gap-3">
          {[{ Icon: Mail, href: "mailto:aishwaryakore072@gmail.com", label: "Email" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/aishwaryakore", label: "LinkedIn" },
          { Icon: Github, href: "https://github.com/aishwaryakore", label: "GitHub" },
          { Icon: FileText, href: "https://drive.google.com/drive/folders/1zdrxUcwj7j9VhgdB5F87wnY1PGqD344l?usp=drive_link", label: "Resume" }].map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label}
              className="h-11 w-11 grid place-items-center rounded-full border border-border hover:border-foreground hover:bg-secondary transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="md:col-span-5">
        <div className="relative aspect-[4/5] rounded-3xl border border-border bg-card overflow-hidden">
          <img
            src="/portrait.jpg"
            alt="Aishwarya Kore"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between text-xs text-white mix-blend-difference">
            <span className="eyebrow">Portrait</span>
            <span className="eyebrow">2026</span>
          </div>
        </div>
      </div>

    </section>
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ num, title, kicker }: { num: string; title: string; kicker: string }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="eyebrow">{num} — {kicker}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="display text-5xl md:text-7xl">{title}</h2>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="01" kicker="About" title="A short note." />
      <div className="grid md:grid-cols-12 gap-10">
        {/* <p className="md:col-span-7 text-xl leading-relaxed">
          I'm a software engineer with four years of experience across frontend, backend,
          and AI systems. I care about clarity, velocity, and the small details users never
          notice but always feel — building software that's <em className="text-accent">quietly obvious</em>.
        </p> */}
        <p className="md:col-span-7 text-xl leading-relaxed">
          I'm a Full Stack Engineer with 2 years of experience building end-to-end web applications, with a Master's in Computer Science from Indiana University Bloomington.
          Over time, my focus has gravitated strongly toward AI, specifically GenAI and Agentic AI systems. I work with tools like LangChain, LangGraph, and RAG pipelines to build intelligent, production-ready products that go beyond simple chatbots and actually get things done.
          I enjoy working across the entire stack, designing clean, responsive frontends, architecting scalable backends, and weaving AI capabilities into the core of what I build.
          I'm actively looking for full-time roles where I can contribute to teams building innovative, AI-powered products. If that sounds like you, I'd love to connect!
        </p>

        <div className="md:col-span-5 grid gap-4">
          <Card icon={MapPin} label="Location" value="Bloomington, IN" sub="Open to relocation" />
          <Card icon={Briefcase} label="Experience" value="2+ years" sub="Full Stack · AI" />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card flex gap-4 items-start">
      <div className="h-10 w-10 grid place-items-center rounded-full bg-accent/10 text-accent shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="eyebrow">{label}</div>
        <div className="font-serif text-2xl mt-1">{value}</div>
        <div className="text-sm text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

/* ---------- EDUCATION ---------- */
const education = [
  {
    school: "Indiana University Bloomington",
    degree: "MS, Computer Science",
    period: "Aug 2024 — May 2026",
    gpa: "3.71 / 4.0",
    courses: ["Applied Algorithms", "Applied Machine Learning", "Computer Networks", "Advanced Database Concepts", "Software Engineering", "Engineering Cloud Computing", "Data Visualization", "Security for Networked Systems", "Distributed Systems"],
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.E., Computer Engineering",
    period: "Aug 2018 — May 2022",
    gpa: "3.73 / 4.0",
    courses: ["Fundamentals of Programming Languages", "Data Structures and Algorithms", "Object Oriented Programming", "Advanced Data Structures", "Operating Systenms", "Microprocessor", "Database Management Systems", "Web Technology", "Embedded Systems and Internet of Things", "High Performance Computing", "Data Mining and Warehousing", "Data Analytics", "Cloud Computing", "AI and Robotics"],
  },
];

function Education() {
  return (
    <section id="education" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="02" kicker="Education" title="Where I studied." />
      <div className="space-y-6">
        {education.map((e) => (
          <article key={e.school} className="grid md:grid-cols-12 gap-6 p-8 rounded-2xl border border-border bg-card">
            <div className="md:col-span-1">
              <div className="h-12 w-12 grid place-items-center rounded-full bg-accent/10 text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
            </div>
            <div className="md:col-span-7">
              <h3 className="font-serif text-3xl">{e.degree}</h3>
              <p className="mt-1 text-muted-foreground">{e.school}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {e.courses.map((c) => (
                  <span key={c} className="text-xs px-2.5 py-1 rounded-full bg-secondary">{c}</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-4 md:text-right text-sm">
              <div className="tabular-nums">{e.period}</div>
              <div className="font-serif text-2xl mt-2">GPA {e.gpa}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
const roles = [
  {
    company: "Olei Labs",
    title: "Software Engineer",
    period: "May 2025 — Dec 2025",
    location: "Remote, USA",
    points: [
      "Core frontend engineer owning end‑to‑end features for a healthcare SaaS platform used by 100+ clinicians, including RBAC dashboards for scheduling and patient management.",
      "Drove frontend architecture and API integrations in React, TypeScript, and Tailwind — increasing operational efficiency by 30%.",
      "Acted as product owner for appointment scheduling: 30+ JIRA stories, sprint demos, stakeholder presentations.",
    ],
    stack: ["React", "TypeScript", "Tailwind", "REST"],
  },
  {
    company: "Data Axle",
    title: "Software Engineer",
    period: "Jul 2022 — Jul 2024",
    location: "Pune, India",
    points: [
      "Led work on the OESS platform in C#, ASP.NET, AngularJS, and SQL Server — reduced order processing time by 25%.",
      "Integrated APIs across 5+ customer‑facing apps with 99.9% data consistency.",
      "Single point of contact for cross‑team OESS support; cut issue resolution time by 40%.",
    ],
    stack: ["C#", "ASP.NET", "AngularJS", "SQL Server"],
  },
];

const awards = [
  {
    title: "Rising Star Award", org: "Data Axle Annual R&R", date: "Jan 2023",
    desc: "Honored for exceptional contributions to enterprise application performance."
  },
  {
    title: "IEEE Publication", org: "ICECA 2023", date: "Jan 2023",
    desc: "Co‑authored: Burp Suite Extension for Script‑Based Attacks, presented at the 6th International Conference on Electronics, Communication and Aerospace Technology."
  },
];

function Experience() {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="03" kicker="Experience" title="Professional work." />
      <div className="space-y-6">
        {roles.map((r) => (
          <article key={r.company} className="p-8 rounded-2xl border border-border bg-card">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="font-serif text-3xl">{r.title}</h3>
                <p className="text-accent mt-1">{r.company}</p>
              </div>
              <div className="text-sm md:text-right">
                <div className="tabular-nums">{r.period}</div>
                <div className="text-muted-foreground">{r.location}</div>
              </div>
            </div>
            <ul className="mt-6 space-y-3 text-lg leading-relaxed">
              {r.points.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-accent shrink-0 mt-2">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {r.stack.map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full border border-border">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="font-serif text-3xl mb-6">Awards & Recognition</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((a) => (
            <div key={a.title} className="p-6 rounded-2xl border border-border bg-card flex gap-4">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-accent/10 text-accent shrink-0">
                <Award className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-serif text-xl">{a.title}</h4>
                <div className="text-sm text-muted-foreground">{a.org} · {a.date}</div>
                <p className="mt-2 text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
type Project = {
  title: string;
  desc: string;
  stack: string[];
  featured?: boolean;
  code?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Autonomous Content Generation",
    desc: "An AI-powered multi-agent blog generation system using LangGraph and LangChain that autonomously researches, structures, and produces high-quality long-form content from a single topic prompt.",
    stack: ["Python", "LangGraph", "LangChain", "OpenAI", "LangSmith"],
    code: "https://github.com/aishwaryakore/blog-writing-agent",
    demo: "#",
    featured: true
  },
  {
    title: "Developer Knowledge Assistant",
    desc: "A production-grade RAG system over LangChain docs using LCEL and OpenAI embeddings, optimizing retrieval to deliver accurate, citation-backed responses with reduced hallucination",
    stack: ["Python", "LCEL", "ChromaDB", "OpenAI"],
    featured: true,
    code: "https://github.com/aishwaryakore/grep-it",
    demo: "#"
  },
  {
    title: "Real‑Time Code Collaboration",
    desc: "Real-time collaborative code editor that lets users create shared rooms, invite collaborators, and code together live directly in the browser",
    stack: ["React", "Node.js", "Socket.IO", "Piston"],
    code: "https://github.com/aishwaryakore/code-colab",
    demo: "https://code-colab-client.onrender.com/",
    featured: true
  },
  {
    title: "Event/Venue Management Platform",
    desc: "Full-stack event and venue management platform built on a scalable microservices architecture with real-time booking, live chat, secure Stripe payments, and automated CI/CD deployment.",
    stack: ["TypeScript", "Node", "Postgres", "Stripe", "Azure"],
    code: "https://github.com/cs-b556-g7",
    demo: "#",
    featured: true
  },
  {
    title: "Distributed CI/CD Pipeline System",
    desc: "Production-style distributed CI/CD platform inspired by Jenkins, featuring Kafka-based job orchestration, distributed worker execution, GitHub webhook automation, Kubernetes auto-scaling, and containerized pipeline execution.",
    stack: ["Python", "FastAPI", "Kafka", "Docker", "Kubernetes"],
    code: "https://github.com/CSCI-P434-DS/distributed-cicd-engine",
    demo: "#",
    featured: true
  },
  {
    title: "AI Chatbot",
    desc: "ChatGPT-style conversational AI chatbot built with LangGraph and LangChain featuring persistent multi-turn memory, real-time tool calling, streaming responses, and multi-session chat management with SQLite-backed state persistence.",
    stack: ["Python", "LangGraph", "LangChain", "Streamlit", "SQLite"],
    code: "https://github.com/aishwaryakore/ai-chatbot",
    demo: "#"
  },
  {
    title: "AI Accessibility Enhancer",
    desc: "AI-powered Chrome extension that improves web accessibility through intelligent alt text generation, content simplification, text-to-speech, and real-time accessibility analysis for users with visual and cognitive disabilities.",
    stack: ["JavaScript", "Chrome Extension", "Manifest V3", "HTML/CSS", "AI APIs"],
    code: "https://github.com/aishwaryakore/ai-accessibility-enhancer",
    demo: "#"
  }
];

function Projects() {
  const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="04" kicker="Projects" title="Featured work." />
      <ul className="divide-y divide-border border-y border-border">
        {ordered.map((p, i) => (
          <li key={p.title}>
            <article className="group grid md:grid-cols-12 gap-6 py-8 items-start hover:bg-secondary/30 transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl">
              <div className="md:col-span-1 eyebrow tabular-nums pt-1">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-7">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                  {p.featured && (
                    <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-secondary">{s}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-4 flex md:justify-end gap-2 flex-wrap">
                <a href={p.code ?? "#"} className="text-sm px-4 py-2 rounded-full border border-border hover:border-foreground transition-colors inline-flex items-center gap-2">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                {p.demo && p.demo !== "#" && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full bg-foreground text-background hover:bg-accent transition-colors"
                  >
                    Live demo →
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------- SKILLS ---------- */
const skills = [
  { icon: Code2, title: "Languages", items: ["Python", "Java", "C++"] },
  { icon: Sparkles, title: "Frontend", items: ["React.js", "Redux", "TypeScript", "Tailwind CSS"] },
  { icon: Database, title: "Backend & DB", items: ["FastAPI", "Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { icon: Cloud, title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD"] },
  { icon: Sparkles, title: "Generative AI", items: ["LangChain", "LangGraph", "RAG", "OpenAI API"] },
  { icon: Wrench, title: "Tools", items: ["Git", "GitHub", "Postman", "JIRA"] },
];

function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="05" kicker="Skills" title="Tools of trade." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((s) => (
          <div key={s.title} className="p-6 rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 grid place-items-center rounded-full bg-accent/10 text-accent">
                <s.icon className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-xl">{s.title}</h3>
            </div>
            <ul className="space-y-1.5">
              {s.items.map((i) => (
                <li key={i} className="text-sm flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-5">
        <div className="md:col-span-1 p-6 rounded-2xl border border-border bg-card flex items-center gap-4">
          <div className="h-10 w-10 grid place-items-center rounded-full bg-accent/10 text-accent">
            <Award className="h-4 w-4" />
          </div>
          <div>
            <div className="eyebrow">Certification</div>
            <div className="font-serif text-lg mt-1">AWS Certified Cloud Practitioner</div>
          </div>
        </div>
        {/* <Stat label="Years shipping" value="4+" />
        <Stat label="Users served" value="100+" /> */}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-6 rounded-2xl border border-border bg-card">
      <div className="eyebrow">{label}</div>
      <div className="font-serif text-4xl mt-1">{value}</div>
    </div>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 md:px-10 py-24 scroll-mt-20">
      <SectionHeader num="06" kicker="Contact" title="Let's connect." />
      <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed mb-12">
        I’m always excited to connect with people, learn from different experiences, and exchange ideas. Feel free to connect via LinkedIn or Email. I'd love to chat!
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <a href="mailto:aishwaryakore072@gmail.com"
          className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground transition-colors flex items-center gap-5">
          <div className="h-12 w-12 grid place-items-center rounded-full bg-accent/10 text-accent">
            <Mail className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="eyebrow">Email</div>
            <div className="font-serif text-2xl mt-1 group-hover:text-accent transition-colors break-all">
              aishwaryakore072@gmail.com
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/aishwaryakore"
          className="group p-8 rounded-2xl border border-border bg-card hover:border-foreground transition-colors flex items-center gap-5">
          <div className="h-12 w-12 grid place-items-center rounded-full bg-accent/10 text-accent">
            <Linkedin className="h-5 w-5" />
          </div>
          <div>
            <div className="eyebrow">LinkedIn</div>
            <div className="font-serif text-2xl mt-1 group-hover:text-accent transition-colors">
              /in/aishwaryakore →
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
