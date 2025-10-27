export type Project = {
  id: string;
  name: string;
  summary: string;
  highlights: string[];
  tech: string[];
  year: string;
  repo?: string;
  demo?: string;
  category: "Security" | "Full-Stack" | "Data/Finance" | "Systems";
};

export const PROJECTS = [
  {
    id: "svc-app",
    name: "Summer Ventures Camp App",
    year: 2025,
    category: "Full-Stack",
    summary:
      "Full-stack operations platform for camp management, check-ins, announcements, and logistics — designed with secure defaults and deploy-ready guardrails.",
    tech: ["Next.js", "React", "Tailwind", "Prisma", "Node", "Postgres", "Docker"],
    highlights: [
      "RBAC & least-privilege service roles; scoped API keys",
      "Input validation, rate-limits, and audit/event logging",
      "Containerized dev (Docker) with SBOM scanning in CI",
      "12-factor config; secrets via env/CI vault (no hard-coded creds)",
    ],
    repo: "https://github.com/Logank0704/summer-ventures-app",
  },
  {
    id: "efm",
    name: "Encrypted File Manager",
    year: 2025,
    category: "Security",
    summary:
      "Security-first file service with client/server encryption and presigned object access for S3-compatible storage.",
    tech: ["Java", "Spring Boot", "Next.js", "Postgres", "S3/MinIO", "Docker"],
    highlights: [
      "AES-GCM encryption; integrity checks per object",
      "Presigned URL uploads/downloads with short TTL",
      "IAM-style role-based authorization and least-privilege access",
      "Content-type & size enforcement; malware-scan hook point",
    ],
    repo: "https://github.com/Logank0704/encrypted-file-manager",
  },
  {
    id: "vigilai",
    name: "VigilAI",
    year: 2025,
    category: "Security",
    summary:
      "AI safety and compliance tool that detects and mitigates improper or unsafe AI usage across enterprise workflows.",
    tech: ["Next.js", "TypeScript", "FastAPI", "Python", "Postgres", "Docker"],
    highlights: [
      "Prompt rewriting and risk scoring microservice",
      "Policy pack enforcement and telemetry dashboard",
      "Role-based org management and secure API integration",
    ],
    repo: "https://github.com/Logank0704/vigilai",
  },
  {
    id: "psv",
    name: "Password Strength Visualizer",
    year: 2025,
    category: "Security",
    summary:
      "Interactive UI component that visualizes password entropy and guess-rate patterns to encourage stronger credentials.",
    tech: ["TypeScript", "React", "Vite"],
    highlights: [
      "Real-time feedback using zxcvbn-style heuristics",
      "Guides users toward passphrases and MFA adoption",
      "Embeddable widget for signup/reset flows",
    ],
    repo: "https://github.com/Logank0704/password-strength-visualizer",
  },
  {
    id: "fft",
    name: "Financial Forecasting Tool",
    year: 2025,
    category: "Data/Finance",
    summary:
      "Business-focused financial dashboard with deployment hardening for cloud DB access and CI/CD guardrails.",
    tech: ["Next.js", "Node", "Postgres", "Prisma", "Charts", "Docker"],
    highlights: [
      "Multi-scenario models for NPV/IRR/WACC summaries",
      "Least-privilege DB creds with rotated secrets via env/CI",
      "Type-safe CI checks for lint and vulnerability scanning",
    ],
    repo: "https://github.com/Logank0704/financial-forecasting-tool",
  },
];
