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

export const PROJECTS: Project[] = [
  {
    id: "summer-ventures-app",
    name: "Summer Ventures Camp App",
    summary:
      "Full-stack operations app (check-in, rosters, announcements, talent-show logistics) designed with secure defaults and deploy-ready guardrails.",
    highlights: [
      "RBAC & least-privilege service roles; scoped API keys",
      "Input validation + request rate-limits; audit/event logs",
      "Containerized dev (Docker); image scanning & SBOM in CI",
      "12-factor config; secrets via env/CI vault (no hard-coded creds)",
    ],
    tech: ["Next.js", "React", "Tailwind", "Prisma", "Node", "Postgres", "Docker", "GitHub Actions"],
    year: "2025",
    repo: "https://github.com/Logank0704/summer-ventures-app",
    category: "Full-Stack",
  },
  {
    id: "encrypted-file-manager",
    name: "Encrypted File Manager",
    summary:
      "Security-first storage service with client/server encryption and **presigned object access** for S3-compatible storage.",
    highlights: [
      "AES-GCM file encryption; per-object IVs; integrity checks",
      "Presigned URL uploads/downloads with short TTL & allowlists",
      "Least-privilege, role-based authorization (IAM-style policies)",
      "Content-type & size enforcement; malware scan hook point",
    ],
    tech: ["Java", "Spring Boot", "Next.js", "Postgres", "S3/MinIO", "Docker", "GitHub Actions"],
    year: "2025",
    repo: "https://github.com/Logank0704/encrypted-file-manager",
    category: "Security",
  },
  {
    id: "password-strength-visualizer",
    name: "Password Strength Visualizer",
    summary:
      "Interactive component that visualizes entropy/guess-rates and common patterns to reduce weak credentials in cloud accounts.",
    highlights: [
      "Real-time feedback with zxcvbn-style heuristics",
      "Guides users toward passphrases & MFA adoption",
      "Embeddable widget for signup/reset flows",
    ],
    tech: ["TypeScript", "React", "Vite"],
    year: "2025",
    repo: "https://github.com/Logank0704/password-strength-visualizer",
    category: "Security",
  },
  {
    id: "financial-forecasting-tool",
    name: "Financial Forecasting Tool",
    summary:
      "Business-focused financial dashboards with deployment hardening for cloud DB access and CI/CD guardrails.",
    highlights: [
      "Multi-scenario models; NPV/IRR/WACC summaries",
      "Least-privilege DB creds; rotated secrets via env/CI",
      "CI checks: type-safety, lint, vulnerability scan",
    ],
    tech: ["Next.js", "Node", "Postgres", "Prisma", "Charts", "Docker"],
    year: "2025",
    repo: "https://github.com/Logank0704/financial-visualizer",
    category: "Data/Finance",
  },
  {
    id: "c-systems-segtree",
    name: "Generic Segment Tree (C)",
    summary:
      "Low-level data structure for range queries/updates with a secure-coding mindset.",
    highlights: [
      "O(log n) operations; cache-aware layout",
      "Bounds-checked APIs; negative/overflow test cases",
      "Unit tests with address sanitizers",
    ],
    tech: ["C", "Make", "GDB"],
    year: "2025",
    repo: "https://github.com/Logank0704/seg-tree-c",
    category: "Systems",
  },
];
