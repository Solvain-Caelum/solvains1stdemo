import { Trophy, Medal, Award, ScrollText } from "lucide-react";
import { Reveal } from "./site";

const ACHIEVEMENTS = [
  {
    title: "Excellence in Fitness",
    description: "Recognising consistent, well-rounded training across strength, conditioning and recovery.",
    Icon: Trophy,
  },
  {
    title: "Outstanding Training Achievement",
    description: "Marking a personal milestone reached through steady, well-coached progress.",
    Icon: Medal,
  },
  {
    title: "Strength & Conditioning Recognition",
    description: "Celebrating measurable gains in power, endurance and movement quality.",
    Icon: Award,
  },
  {
    title: "Commitment to Fitness",
    description: "Honouring the habit of showing up and training with intent, week after week.",
    Icon: ScrollText,
  },
];

export function Achievements() {
  return (
    <section aria-labelledby="achievements-title" className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-achievement">Discipline. Dedication. Excellence.</p>
          <h2 id="achievements-title" className="mt-3 max-w-3xl text-3xl uppercase md:text-5xl">Awards &amp; Achievements</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">A celebration of the discipline to show up, the dedication to keep progressing and the pursuit of excellence in every session.</p>
          <p className="mt-4 text-sm text-achievement">Illustrative achievements for this fictional demo — not real awards, rankings or credentials.</p>
        </Reveal>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map(({ title, description, Icon }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <article className="group flex h-full flex-col items-center rounded-lg border border-achievement/25 bg-background px-7 py-11 text-center transition-all duration-300 hover:-translate-y-1 hover:border-achievement/60 hover:shadow-achievement motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-achievement/30 bg-achievement-surface text-achievement transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                  <Icon size={38} strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3 className="mt-7 flex min-h-[3.25rem] items-center justify-center text-center text-base uppercase leading-relaxed">{title}</h3>
                <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-muted-foreground">{description}</p>
                <div className="mt-auto flex w-full justify-center pt-8">
                  <span aria-hidden="true" className="h-px w-10 bg-achievement/50" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
