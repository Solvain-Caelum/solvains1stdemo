import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, meta } from "@/components/site";
import { PlanGrid } from "@/components/blocks";

export const Route = createFileRoute("/membership")({
  head: () => meta("Membership Plans — Titan Fitness", "Compare Basic, Standard and Premium membership plans at Titan Fitness."),
  component: () => (
    <>
      <PageHeader eyebrow="Membership" title="Pick your plan" intro="Clear monthly pricing. Send an enquiry and our team will help you get started." />
      <Section eyebrow="Plans" title="Monthly memberships"><PlanGrid /></Section>
    </>
  ),
});
