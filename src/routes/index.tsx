import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { ButtonLink, CtaBand, Reveal, Section, meta } from "@/components/site";
import { PlanGrid, ProgrammeGrid, TrainerGrid } from "@/components/blocks";
import { BENEFITS } from "@/lib/content";
import { Achievements } from "@/components/achievements";

export const Route = createFileRoute("/")({
  head: () => meta("Titan Fitness — Train Stronger", "Strength, conditioning and coached classes at Titan Fitness, your local gym."),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <img src={hero} alt="Athlete lifting a barbell in the gym" width={1600} height={1008} className="absolute inset-0 h-full w-full object-cover object-[70%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 md:px-8">
          <p className="animate-rise text-xs font-semibold uppercase tracking-[0.3em] text-primary">Your local gym</p>
          <h1 className="mt-4 max-w-3xl animate-rise text-5xl uppercase leading-[0.95] [animation-delay:120ms] md:text-8xl">
            Build your <span className="text-primary">strongest</span> self.
          </h1>
          <p className="mt-6 max-w-lg animate-rise text-lg text-muted-foreground [animation-delay:240ms]">
            Expert coaching, quality equipment and a focused space to train — whatever your starting point.
          </p>
          <div className="mt-10 flex animate-rise flex-wrap gap-4 [animation-delay:360ms]">
            <ButtonLink to="/contact">Join Now</ButtonLink>
            <ButtonLink to="/membership" variant="outline">View Plans</ButtonLink>
          </div>
        </div>
      </section>

      <Section eyebrow="Training" title="Programmes for every goal" intro="Choose from structured programmes and coached sessions designed around how you want to train.">
        <ProgrammeGrid limit={3} />
        <div className="mt-10"><ButtonLink to="/programmes" variant="outline">All programmes</ButtonLink></div>
      </Section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Why Titan</p>
            <h2 className="mt-3 text-3xl uppercase md:text-5xl">Everything you need to train well</h2>
          </Reveal>
          <ul className="space-y-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={b} delay={i * 80}>
                <li className="flex items-center gap-4 border-b border-border pb-5 text-lg">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check size={16} /></span>
                  {b}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Section eyebrow="Membership" title="Simple, clear pricing">
        <PlanGrid />
      </Section>

      <Section eyebrow="Coaches" title="Meet the team" className="pt-0 md:pt-0">
        <TrainerGrid />
      </Section>

      <Achievements />
      <div className="pt-20 md:pt-28"><CtaBand /></div>
    </>
  );
}
