import React, { useState } from "react";

export function Dialog({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span onClick={() => setOpen(true)} className="cursor-pointer">{trigger}</span>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="relative z-10 card max-w-xl w-full mx-4 bg-neutral-950 border-neutral-800 text-neutral-100">
            <div className="p-5">
              <button className="absolute right-4 top-3 text-neutral-400 hover:text-white" onClick={() => setOpen(false)}>✕</button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}