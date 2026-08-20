import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id?: string;
}

export default function Section({ children, id, className = "", ...props }: SectionProps) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`} {...props}>
      <div className="max-w-5xl mx-auto px-6">{children}</div>
    </section>
  );
}