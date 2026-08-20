import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/resume-data";
import Reveal from "@/components/ui/Reveal";

const statusLabel: Record<string, string> = {
  operational: "operational",
  live: "live",
  "in-development": "in development",
};

const statusBadgeStatus: Record<
  string,
  "success" | "live" | "neutral"
> = {
  operational: "success",
  live: "live",
  "in-development": "neutral",
};

export default function SystemsPage() {
  return (
    <main>
      <Section id="systems">
        <h1 className="font-display text-3xl text-ink">Systems</h1>

        <p className="text-text-secondary mt-2 max-w-2xl">
          Backend systems and platforms, rendered like a service registry, not a
          portfolio grid.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <Card key={project.slug}>
                <div className="flex justify-between items-start gap-2">
                  <h2 className="font-display text-lg text-ink">
                    {project.name}
                  </h2>

                  <Badge status={statusBadgeStatus[project.status]}>
                    {statusLabel[project.status]}
                  </Badge>
                </div>

                <p className="text-text-secondary text-sm mt-1">
                  {project.tagline}
                </p>

                <div className="mt-4">
                  <span className="font-mono text-xs text-text-secondary">
                    dependencies:
                  </span>

                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs bg-background border border-border rounded px-2 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="mt-4 space-y-1.5 text-sm text-text-primary list-disc list-inside">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                {(project.githubUrl || project.liveUrl) && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="font-mono text-xs text-text-secondary">
                      endpoint:
                    </span>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-lightning underline ml-2"
                      >
                        {project.liveUrl}
                      </a>
                    ) : null}

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-lightning underline ml-3"
                      >
                        GitHub Repo
                      </a>
                    ) : null}
                  </div>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}