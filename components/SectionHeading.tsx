import React from "react";
export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-neutral-100">{title}</h2>
      {subtitle && <p className="text-sm md:text-base mt-2 text-neutral-300">{subtitle}</p>}
    </div>
  );
}