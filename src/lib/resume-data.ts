export const profile = {
  name: "Nitesh Mishra",
  title: "Java Full-Stack Developer · Backend Engineer",
  location: "Mumbai, Maharashtra",
  summary:
    "Backend-focused Java Full Stack Developer skilled in Java, Spring Boot, Spring Security, REST APIs, PostgreSQL, Hibernate, and React.js. Experienced in designing scalable backend systems, authentication, clean architecture, and production-ready applications.",
};

export const skills = {
  languages: ["Java", "JavaScript (ES6+)", "HTML5", "CSS3"],
  backend: ["Spring Boot", "Spring MVC", "Spring Data JPA", "RESTful APIs"],
  frontend: ["React.js", "Next.js", "Responsive UI Design"],
  security: ["Spring Security", "JWT Authentication", "Bean Validation"],
  architecture: ["Microservices", "MVC", "Clean Architecture", "Dependency Injection"],
  database: ["PostgreSQL", "MySQL", "Redis", "SQL"],
  cloud: ["AWS (EC2, S3, IAM)"],
  devops: ["Docker", "Git", "GitHub Actions", "CI/CD"],
  testing: ["JUnit 5", "Mockito"],
};

export const experience = [
  {
    role: "Freelance Full-Stack Developer — TDG",
    period: "2026 – Present",
    location: "Mumbai, Maharashtra",
    points: [
      "Designed and developed a full-stack business web app using Node.js, Express.js, React.js — 95+ Lighthouse score.",
      "Built and deployed the TDG business website with a responsive, modern UI and optimized performance.",
      "Owned the complete SDLC — requirement analysis, API development, debugging, testing, deployment, post-launch support.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  stack: string[];
  points: string[];
  status: "operational" | "live" | "in-development";
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "flowgate",
    name: "FlowGate",
    tagline: "API Gateway & Adaptive Traffic Control Platform",
    stack: ["Java", "Spring WebFlux", "Redis", "Docker"],
    points: [
      "Reactive API Gateway with dynamic request routing and health checks.",
      "Distributed rate limiter using Redis + Lua scripting.",
      "Containerized with Docker Compose for multi-service communication.",
    ],
    status: "operational",
  },
  {
    slug: "payflow",
    name: "PayFlow",
    tagline: "Payment Orchestration & Ledger Engine",
    stack: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    points: [
      "Transaction handling with optimistic/pessimistic locking and idempotency.",
      "Secure REST APIs with Spring Security, JWT, DTOs, Bean Validation.",
      "Centralized exception handling, Swagger/OpenAPI documentation.",
    ],
    status: "operational",
  },
  {
    slug: "ai-pipeline-monitor",
    name: "AI Pipeline CI/CD Monitor",
    tagline: "Full-Stack CI/CD Monitoring Platform",
    stack: ["FastAPI", "React", "TypeScript", "Docker", "GitHub Actions"],
    points: [
      "Tracks and displays build/deployment status in real time via GitHub Actions API.",
      "AI-powered log summarization for failed-build debugging insights.",
    ],
    status: "operational",
  },
];

export const education = {
  institution: "Shree L.R. Tiwari College of Engineering, Mumbai",
  degree: "B.E. — Electronics and Computer Science",
  graduated: "May 2026",
};

export const certifications = [
  "AWS Certified Cloud Practitioner — Nov 2025",
  "Sigma Full Stack Development — Apna College, 2024",
  "Pyverse – Application Creation Using Python — SLRTCE, Jun 2025",
];