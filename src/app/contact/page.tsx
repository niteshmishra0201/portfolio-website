import Section from "@/components/ui/Section";

export const metadata = {
  title: "Contact — Nitesh Mishra",
  description: "Get in touch with Nitesh Mishra.",
};

export default function ContactPage() {
  return (
    <Section id="contact">
      <h1 className="font-display text-3xl text-ink">Contact</h1>
      <p className="text-text-secondary mt-2">Contact form will render here.</p>
    </Section>
  );
}