import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader, Section, meta } from "@/components/site";
import { TrainerGrid } from "@/components/blocks";

export const Route = createFileRoute("/trainers")({
  head: () => meta("Our Trainers — Titan Fitness", "Meet the coaching team at Titan Fitness."),
  component: () => (
    <>
      <PageHeader eyebrow="Trainers" title="Coaches in your corner" intro="Our coaches help you train safely, stay consistent and keep progressing." />
      <Section eyebrow="The team" title="Trainer profiles"><TrainerGrid /></Section>
      <CtaBand />
    </>
  ),
});
