import React from "react";
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs border border-neutral-700 text-neutral-300 rounded-full px-2.5 py-1">
      {children}
    </span>
  );
}