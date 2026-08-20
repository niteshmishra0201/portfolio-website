import { HTMLAttributes, ReactNode } from "react";

type BadgeStatus = "neutral" | "live" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  status?: BadgeStatus;
}

const statusStyles: Record<BadgeStatus, string> = {
  neutral: "bg-border text-text-secondary",
  live: "bg-lightning/15 text-lightning",
  success: "bg-pulse/15 text-pulse",
};

const statusDot: Record<BadgeStatus, string> = {
  neutral: "bg-text-secondary",
  live: "bg-lightning animate-pulse",
  success: "bg-pulse",
};

export default function Badge({
  children,
  status = "neutral",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${statusStyles[status]} ${className}`}
      {...props}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[status]}`} />
      {children}
    </span>
  );
}