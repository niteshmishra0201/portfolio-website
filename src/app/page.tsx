import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";

export default function Home() {
  return (
    <main>
      <Section id="overview">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: intro */}
          <div>
            <Badge status="success">Available for opportunities</Badge>
            <h1 className="font-display text-4xl md:text-5xl text-ink mt-4 leading-tight">
              Nitesh Mishra
            </h1>
            <p className="text-text-secondary text-lg mt-3">
              Full-stack developer building backend systems — rate limiters,
              job schedulers, distributed gateways.
            </p>
          </div>

          {/* Right: reserved for the live Traffic Pulse feature (Phase 5) */}
          <div className="border border-border rounded-xl bg-surface h-64 flex items-center justify-center text-text-secondary text-sm">
            Live feature placeholder
          </div>
        </div>
      </Section>
    </main>
  );
}