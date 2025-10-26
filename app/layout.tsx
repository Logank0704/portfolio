import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Logan Klein – Portfolio",
  description: "Cybersecurity‑minded full‑stack portfolio by Logan Klein.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Logan Klein – Portfolio",
    description: "Projects, certifications, and contact.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}