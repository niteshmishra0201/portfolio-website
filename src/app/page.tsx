import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen">
      <Section id="test">
        <div className="flex gap-4">
          <Button variant="primary">View Resume</Button>
          <Button variant="accent">See Live Systems</Button>
          <Button variant="outline">Contact</Button>
        </div>

        <Card className="mt-8">
          <h3 className="font-display text-lg">Test Card</h3>
          <p className="text-text-secondary text-sm mt-2">
            Confirming the Card primitive renders with the right surface, border, and shadow.
          </p>
          <div className="flex gap-2 mt-4">
            <Badge status="neutral">idle</Badge>
            <Badge status="live">live</Badge>
            <Badge status="success">operational</Badge>
          </div>
        </Card>
      </Section>
    </main>
  );
}