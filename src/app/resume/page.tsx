import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { profile, skills, experience, education, certifications } from "@/lib/resume-data";
import Reveal from "@/components/ui/Reveal";


export default function ResumePage() {
  return (
    <main>
      <Section id="resume">
        <h1 className="font-display text-3xl text-ink">Resume</h1>
        <p className="text-text-secondary mt-2 max-w-2xl">{profile.summary}</p>

        <Reveal delay={0}>


        <div className="mt-10">
          <h2 className="font-display text-xl text-ink mb-4">Skills</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category}>
                <h3 className="text-sm font-medium text-text-secondary capitalize mb-2">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} status="neutral">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
        </Reveal>


        <Reveal delay={0.1}>


        <div className="mt-10">
          <h2 className="font-display text-xl text-ink mb-4">Experience</h2>
          {experience.map((job) => (
            <Card key={job.role} className="mb-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <h3 className="font-display text-lg">{job.role}</h3>
                <span className="text-text-secondary text-sm">{job.period}</span>
              </div>
              <p className="text-text-secondary text-sm mt-1">{job.location}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-text-primary list-disc list-inside">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        </Reveal>

        <Reveal delay={0.2}>


        <div className="mt-10">
          <h2 className="font-display text-xl text-ink mb-4">Education</h2>
          <Card>
            <h3 className="font-display text-lg">{education.institution}</h3>
            <p className="text-text-secondary text-sm mt-1">
              {education.degree} · Graduated {education.graduated}
            </p>
          </Card>
        </div>
        </Reveal>

        <Reveal delay={0.3}>


        {/* Certifications */}
        <div className="mt-10">
          <h2 className="font-display text-xl text-ink mb-4">Certifications</h2>
          <ul className="space-y-2 text-sm text-text-primary list-disc list-inside">
            {certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
        </div>
        </Reveal>


      </Section>
    </main>
  );
}