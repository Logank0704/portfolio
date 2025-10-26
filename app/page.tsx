"use client";

import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      {/* ========================== */}
      {/* Hero Section */}
      {/* ========================== */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
          Logan Klein
        </h1>
        <h2 className="text-xl sm:text-2xl text-gray-400 mb-6">
          Computer Science Junior @ NC State | Cybersecurity & Cloud Security
        </h2>

        <p className="text-gray-300 max-w-2xl mb-8 leading-relaxed">
          I build secure, cloud-ready software with strong engineering
          fundamentals. My work focuses on{" "}
          <span className="text-red-500 font-semibold">cloud security</span>,{" "}
          <span className="text-red-500 font-semibold">application security</span>, and{" "}
          <span className="text-red-500 font-semibold">DevSecOps</span> — combining scalable
          infrastructure with secure design principles.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="#projects"
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition"
          >
            View Projects
          </Link>

          <Link
            href="#about"
            className="border border-gray-500 text-gray-300 hover:bg-gray-800 hover:text-white font-medium px-6 py-3 rounded-lg transition"
          >
            About Me
          </Link>

          <Link
            href="/Resume_2025_Logan_Klein.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium px-6 py-3 rounded-lg transition"
          >
            Download Résumé
          </Link>
        </div>

        <div className="mt-10 flex gap-6 text-gray-400 text-sm">
          <span>📍 North Carolina, USA</span>
          <Link
            href="mailto:logank0704@gmail.com"
            className="hover:text-red-500 transition"
          >
            Email
          </Link>
          <Link
            href="https://github.com/Logank0704"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://linkedin.com/in/loganklein"
            target="_blank"
            className="hover:text-red-500 transition"
          >
            LinkedIn
          </Link>
        </div>
      </section>

      {/* ========================== */}
      {/* About Section */}
      {/* ========================== */}
      <section id="about" className="py-24 px-6 bg-gray-900 text-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-lg mb-4">
            I’m a Computer Science student at North Carolina State University
            (Class of 2027) with a minor in Business Administration. My focus is
            on <span className="text-red-500 font-semibold">cybersecurity</span>,{" "}
            <span className="text-red-500 font-semibold">cloud architecture</span>, and{" "}
            <span className="text-red-500 font-semibold">AI-driven risk mitigation</span>.{" "}
            I develop secure-by-design applications and cloud environments that
            balance performance, scalability, and privacy.
          </p>

          <p className="text-lg mb-4">
            I work primarily with Java, Python, and TypeScript using frameworks
            like Spring Boot and Next.js — integrating Docker, Prisma, and
            PostgreSQL for deployment-ready systems. My interests include IAM,
            encryption, and embedding security into CI/CD pipelines.
          </p>

          <p className="text-lg">
            Currently pursuing{" "}
            <span className="text-red-500 font-semibold">
              CompTIA Security+
            </span>{" "}
            and{" "}
            <span className="text-red-500 font-semibold">AWS certifications</span> to
            deepen my foundation in secure cloud computing.
          </p>
        </div>
      </section>
    </main>
  );
}
