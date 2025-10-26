"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Button from "@/components/Button";
import { Card, CardContent } from "@/components/Card";
import Badge from "@/components/Badge";
import Input from "@/components/Input";
import Select from "@/components/Select";
import SectionHeading from "@/components/SectionHeading";
import { useMemo, useState } from "react";
import { PROJECTS } from "@/data/projects";
import { CERTS } from "@/data/certs";

const theme = {
  primary: "#7f1d1d",
  accent: "#e5e7eb",
  subtext: "#d1d5db",
};

function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-black/40 border-b border-neutral-900">
      <div className="container py-3 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight text-neutral-200">
          Logan Klein
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certs" className="hover:text-white">Certifications</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="secondary">
            <a href="#projects">Explore Projects</a>
          </Button>
          <Button asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28">
      <div className="container grid md:grid-cols-5 gap-6 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-3"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs border border-neutral-700 text-neutral-300 rounded-full px-2.5 py-1">
              CS @ NC State · Cybersecurity
            </span>
            <span className="text-xs border border-neutral-700 text-neutral-300 rounded-full px-2.5 py-1">
              Business Administration Minor
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-neutral-100">
            Building secure, cloud-ready software.
          </h1>

          <p className="text-base md:text-lg mt-4 text-neutral-300">
            I’m Logan Klein, a rising junior specializing in <strong>cloud security</strong> and full-stack
            engineering. I enjoy hardening AWS workloads, automating guardrails with IaC and CI/CD, and building
            secure-by-default services. I’m open to opportunities across AppSec and platform/infra, with a strong
            focus on cloud-first environments.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#about">About me</a>
            </Button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center text-sm underline underline-offset-4 text-neutral-200"
            >
              Download résumé <ExternalLink className="h-4 w-4 ml-1" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-neutral-300">
            <span className="inline-flex items-center">
              <MapPin className="h-4 w-4 mr-1" /> North Carolina, USA
            </span>
            <a className="inline-flex items-center hover:text-white" href="mailto:Lnklein@ncsu.edu">
              <Mail className="h-4 w-4 mr-1" /> Email
            </a>
            <a className="inline-flex items-center hover:text-white" href="https://github.com/Logank0704">
              <Github className="h-4 w-4 mr-1" /> GitHub
            </a>
            <a
              className="inline-flex items-center hover:text-white"
              href="https://www.linkedin.com/in/logan-klein-25043b2b5/"
            >
              <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="grid gap-4">
            {["Cloud Security", "Platform/DevSecOps", "Application Security"].map((k) => (
              <Card key={k} className="bg-neutral-900/40 border-neutral-800">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-neutral-400">Focus Area</div>
                      <div className="text-lg font-semibold text-neutral-100">{k}</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl" style={{ backgroundColor: theme.primary }} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: typeof PROJECTS[number] }) {
  return (
    <Card className="bg-neutral-900/40 border-neutral-800 hover:bg-neutral-900/70 transition-colors">
      <CardContent>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-white">{p.name}</h3>
          <span className="text-xs text-neutral-400">{p.year}</span>
        </div>
        <p className="text-sm mb-3 text-neutral-300">{p.summary}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {p.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <ul className="list-disc pl-5 space-y-1 mb-4 text-sm text-neutral-200">
          {p.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          {p.repo && (
            <Button asChild variant="secondary" size="sm">
              <a href={p.repo}>Repository</a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function Projects() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchText = [p.name, p.summary, ...p.tech, ...p.highlights]
        .join(" ")
        .toLowerCase()
        .includes(q.toLowerCase());
      const matchCat = cat === "all" ? true : p.category === cat;
      return matchText && matchCat;
    });
  }, [q, cat]);

  return (
    <section id="projects" className="py-14 md:py-16">
      <div className="container">
        <SectionHeading title="Projects" subtitle="A selection of security, cloud, data, and systems work." />
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-6">
          <div className="md:col-span-2 flex items-center gap-2">
            <Input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, tech, or feature…"
            />
          </div>
          <Select
            value={cat}
            onChange={(v) => setCat(v)}
            options={[
              { label: "All categories", value: "all" },
              { label: "Security", value: "Security" },
              { label: "Full-Stack", value: "Full-Stack" },
              { label: "Data/Finance", value: "Data/Finance" },
              { label: "Systems", value: "Systems" },
            ]}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certs" className="py-14 md:py-16 bg-neutral-950/50 border-y border-neutral-900">
      <div className="container">
        <SectionHeading
          title="Certifications"
          subtitle="Credentials I’m pursuing to formalize and extend my cloud security skills."
        />
        <div className="grid md:grid-cols-2 gap-4">
          {CERTS.map((c) => (
            <Card key={c.id} className="bg-neutral-900/40 border-neutral-800">
              <CardContent>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold text-white">{c.name}</div>
                    <div className="text-sm mt-1 text-neutral-400">{c.provider}</div>
                  </div>
                  <span className="text-xs border border-neutral-700 text-neutral-300 rounded-full px-2.5 py-1">
                    {c.status}
                  </span>
                </div>
                {c.notes && <div className="mt-3 text-sm text-neutral-200">{c.notes}</div>}
                {c.eta && <div className="mt-3 text-xs text-neutral-400">Target: {c.eta}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-14 md:py-16">
      <div className="container">
        <SectionHeading title="About me" />

        {/* 2/3 + 1/3 layout, align to top */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* LEFT 2/3 */}
          <div className="md:col-span-2 space-y-6">
            {/* Professional Summary */}
            <Card className="bg-neutral-900/40 border-neutral-800 text-neutral-200">
              <CardContent className="space-y-3 text-sm md:text-base text-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-100">Professional Summary</h3>
                <p className="text-neutral-200">
                  I’m a Computer Science student at NC State (Class of 2027) concentrating in cybersecurity with a
                  Business Administration minor. I focus on <strong>cloud security</strong>: applying least-privilege
                  IAM, encrypting data at rest and in transit, and building CI/CD guardrails so teams ship faster
                  without sacrificing security.
                </p>
                <p className="text-neutral-200">
                  My projects include a full-stack operations app, an encrypted file manager with presigned access, and
                  financial dashboards—each built with secure-by-default practices. I’m actively pursuing Security+ and
                  AWS certifications to deepen my cloud foundation. I’m open to internships across cloud security,
                  application security, and platform/infra.
                </p>
              </CardContent>
            </Card>

            {/* Education & Coursework */}
            <Card className="bg-neutral-900/40 border-neutral-800 text-neutral-200">
              <CardContent className="text-sm md:text-base text-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-100 mb-2">
                  Education & Relevant Coursework
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-neutral-300 text-sm mb-1">North Carolina State University</div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-200">
                      <li>B.S. Computer Science (Cybersecurity), Class of 2027</li>
                      <li>Business Administration minor</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-neutral-300 text-sm mb-1">Selected Coursework</div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-200">
                      <li>Data Structures & Algorithms</li>
                      <li>Systems Programming (C)</li>
                      <li>Databases & SQL</li>
                      <li>Computer Security (intro)</li>
                      <li>Software Engineering</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT 1/3 */}
          <div>
            <Card className="bg-neutral-900/40 border-neutral-800 text-neutral-200">
              <CardContent className="space-y-6 text-neutral-200">
                <div>
                  <div className="text-sm font-semibold text-neutral-300 mb-2">Key Skills</div>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Programming: Java, Python, C, TypeScript/JavaScript</li>
                    <li>Cloud Platforms: AWS, Azure, GCP (learning)</li>
                    <li>Security: IAM, encryption, DevSecOps pipelines</li>
                    <li>Frameworks/Tools: React/Next.js, Spring Boot, Docker, Prisma, Postgres, GitHub Actions</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-300 mb-2">Current Focus</div>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Cloud security engineering and least-privilege IAM</li>
                    <li>Embedding security checks into CI/CD pipelines</li>
                    <li>Pursuing AWS Cloud Practitioner & Security+ certifications</li>
                  </ul>
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-300 mb-2">Professional Interests</div>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Cloud security & secure infrastructure design</li>
                    <li>Application security assessments</li>
                    <li>DevSecOps automation and tooling</li>
                    <li>Data protection & identity management</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}






function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-neutral-900 bg-neutral-950/70">
      <div className="container grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-xl font-semibold text-white">Let’s connect</h3>
          <p className="text-sm mt-2 text-neutral-300">
            Open to internships in cloud security, application security, and platform engineering.
          </p>
        </div>
        <div className="flex flex-wrap md:justify-end gap-3">
          <Button asChild>
            <a href="mailto:Lnklein@ncsu.edu">Email me</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://github.com/Logank0704">GitHub</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="https://www.linkedin.com/in/logan-klein-25043b2b5/">LinkedIn</a>
          </Button>
        </div>
      </div>
      <div className="container mt-6 text-xs text-neutral-400">
        © {new Date().getFullYear()} Logan Klein · Built with Next.js + Tailwind.
      </div>
    </footer>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen" style={{ fontFeatureSettings: '"ss01" on' }}>
      <NavBar />
      <main>
        <Hero />
        <Projects />
        <Certifications />
        <About />
      </main>
      <Footer />
    </div>
  );
}
