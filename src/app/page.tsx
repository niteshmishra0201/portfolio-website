import Link from "next/link";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { profile } from "@/lib/resume-data";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <main>
      <Section id="overview">
        <Reveal>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: intro */}
          <div>
            <Badge status="success">Available for opportunities</Badge>
            <h1 className="font-display text-4xl md:text-5xl text-ink mt-4 leading-tight">
              {profile.name}
            </h1>
            <p className="text-text-secondary text-lg mt-2">{profile.title}</p>
            <p className="text-text-primary mt-4 max-w-md">{profile.summary}</p>

            <div className="flex gap-3 mt-6">
              <Link href="/resume">
                <Button variant="primary">View Resume</Button>
              </Link>
              <Link href="/systems">
                <Button variant="accent">See Live Systems</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline">Contact</Button>
              </Link>
            </div>
          </div>

          {/* Right: reserved for the live Traffic Pulse feature (Phase 5) */}
          <div className="border border-border rounded-xl bg-surface h-64 flex items-center justify-center text-text-secondary text-sm">
            Live feature placeholder
          </div>
        </div>
        </Reveal>
      </Section>
    </main>
  );
}