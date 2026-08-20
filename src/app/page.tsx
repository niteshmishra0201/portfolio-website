import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen">
      <div className="flex gap-4 p-8">
        <Button variant="primary">View Resume</Button>
        <Button variant="accent">See Live Systems</Button>
        <Button variant="outline">Contact</Button>
      </div>

      <div className="p-8">
        <Card>
          <h3 className="font-display text-lg">Test Card</h3>
          <p className="text-text-secondary text-sm mt-2">
            Confirming the Card primitive renders with the right surface,
            border, and shadow.
          </p>
        </Card>
      </div>

      <div className="flex gap-2 mt-4">
        <Badge status="neutral">idle</Badge>
        <Badge status="live">live</Badge>
        <Badge status="success">operational</Badge>
      </div>
    </main>
  );
}