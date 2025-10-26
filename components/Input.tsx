import React from "react";
export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={[
        "w-full rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 px-3 py-2",
        props.className || "",
      ].join(" ")}
    />
  );
}