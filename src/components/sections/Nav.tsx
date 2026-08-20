"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Systems", href: "/systems" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop: fixed left rail */}
      <nav className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-56 border-r border-border bg-surface px-6 py-10">
        <span className="font-display text-lg text-ink mb-10">Your Name</span>
        <ul className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-ink text-white"
                      : "text-text-secondary hover:bg-background"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile: fixed bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 border-t border-border bg-surface flex justify-around py-3 z-50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-medium ${
                isActive ? "text-ink" : "text-text-secondary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}