import { Check } from "lucide-react";
import { Card, Reveal, ButtonLink } from "./site";
import { PROGRAMMES, PLANS, TRAINERS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProgrammeGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {PROGRAMMES.slice(0, limit).map((p, i) => (
        <Reveal key={p.title} delay={i * 80}>
          <Card>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <p.icon size={22} />
            </div>
            <h3 className="mt-6 text-lg uppercase">{p.title}</h3>
            <p className="mt-2 text-muted-foreground">{p.text}</p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}

export function PlanGrid() {
  return (
    <>
      <div className="grid gap-5 md:grid-cols-3">
        {PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <Card className={cn("flex flex-col", p.featured && "border-primary shadow-glow")}>
              {p.featured && <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase text-primary-foreground">Most popular</span>}
              <h3 className="text-xl uppercase">{p.name}</h3>
              <p className="mt-4"><span className="font-display text-5xl">₹{p.price.toLocaleString("en-IN")}</span><span className="text-muted-foreground"> / month</span></p>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-muted-foreground"><Check size={18} className="mt-0.5 shrink-0 text-primary" />{f}</li>
                ))}
              </ul>
              <ButtonLink to="/contact" variant={p.featured ? "primary" : "outline"} className="mt-8 w-full">Enquire</ButtonLink>
            </Card>
          </Reveal>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">Example prices for illustration — replace with your real membership pricing.</p>
    </>
  );
}

export function TrainerGrid() {
  return (
    <>
    <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TRAINERS.map((t, i) => (
        <Reveal key={t.name} delay={i * 100} className="h-full">
          <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
            <div className="overflow-hidden">
              <img src={t.img} alt={`${t.name}, fictional ${t.role.toLowerCase()}`} loading="lazy" width={768} height={960} className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            </div>
            <div className="p-6">
              <h3 className="text-xl uppercase">{t.name}</h3>
              <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-primary lg:min-h-9">{t.role}</p>
              <p className="mt-3 text-muted-foreground">{t.bio}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
    <p className="mt-6 text-sm text-muted-foreground">Fictional demonstration profiles with illustrative imagery — not actual employees or claims of professional certification.</p>
    </>
  );
}
