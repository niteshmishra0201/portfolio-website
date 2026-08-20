import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="bg-background text-text-primary min-h-screen">
      <div className="flex gap-4 p-8">
        <Button variant="primary">View Resume</Button>
        <Button variant="accent">See Live Systems</Button>
        <Button variant="outline">Contact</Button>
      </div>
    </main>
  );
}