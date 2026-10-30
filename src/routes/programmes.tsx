import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader, Section, meta } from "@/components/site";
import { ProgrammeGrid } from "@/components/blocks";
import { BENEFITS } from "@/lib/content";

export const Route = createFileRoute("/programmes")({
  head: () => meta("Training Programmes — Titan Fitness", "Strength, HIIT, cardio, group classes, mobility and personal training at Titan Fitness."),
  component: () => (
    <>
      <PageHeader eyebrow="Programmes" title="Train with purpose" intro="From your first session to advanced training, there's a programme that fits." />
      <Section eyebrow="What we offer" title="Training programmes"><ProgrammeGrid /></Section>
      <Section eyebrow="Benefits" title="Included with membership" className="pt-0 md:pt-0">
        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((b) => <div key={b} className="rounded-xl border border-border bg-card p-5 text-lg">{b}</div>)}
        </div>
      </Section>
      <CtaBand />
    </>
  ),
});
