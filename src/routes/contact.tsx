import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { BUSINESS, Card, PageHeader, meta } from "@/components/site";
import { PLANS } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => meta("Join & Contact — Titan Fitness", "Send a membership enquiry, and find Titan Fitness location, opening hours and contact details."),
  component: Contact,
});

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <>
      <PageHeader eyebrow="Join Now" title="Start your enquiry" intro="Tell us a little about yourself and we'll be in touch about membership." />
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-20 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <Card className="hover:translate-y-0">
            {sent ? (
              <div className="py-10 text-center">
                <h2 className="text-2xl uppercase text-primary">Thanks!</h2>
                <p className="mt-3 text-muted-foreground">Your enquiry form is filled in. Note: this demo doesn't send messages yet — connect an email service to receive enquiries.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-primary underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
                <label className="sm:col-span-1"><span className="mb-2 block text-sm">Name</span><input required className={field} placeholder="Your name" /></label>
                <label><span className="mb-2 block text-sm">Email</span><input required type="email" className={field} placeholder="you@example.com" /></label>
                <label><span className="mb-2 block text-sm">Phone (optional)</span><input type="tel" className={field} /></label>
                <label><span className="mb-2 block text-sm">Interested in</span>
                  <select className={field} defaultValue="">
                    <option value="">Not sure yet</option>
                    {PLANS.map((p) => <option key={p.name}>{p.name} membership</option>)}
                    <option>Personal training</option>
                  </select>
                </label>
                <label className="sm:col-span-2"><span className="mb-2 block text-sm">Message</span><textarea rows={5} className={field} placeholder="Your goals, questions or preferred start date" /></label>
                <button type="submit" className="rounded-full bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 sm:col-span-2 sm:justify-self-start">
                  Send enquiry
                </button>
              </form>
            )}
          </Card>
        </div>
        <div className="space-y-5 lg:col-span-2">
          <Card className="hover:translate-y-0">
            <h2 className="text-lg uppercase">Visit us</h2>
            <ul className="mt-5 space-y-4 text-muted-foreground">
              <li className="flex gap-3"><MapPin className="shrink-0 text-primary" size={20} />{BUSINESS.address}</li>
              <li className="flex gap-3"><Phone className="shrink-0 text-primary" size={20} />{BUSINESS.phone}</li>
              <li className="flex gap-3"><Mail className="shrink-0 text-primary" size={20} />{BUSINESS.email}</li>
            </ul>
          </Card>
          <Card className="hover:translate-y-0">
            <h2 className="flex items-center gap-2 text-lg uppercase"><Clock className="text-primary" size={20} />Opening hours</h2>
            <dl className="mt-5 space-y-3">
              {BUSINESS.hours.map(([d, h]) => (
                <div key={d} className="flex justify-between border-b border-border pb-3 text-sm"><dt className="text-muted-foreground">{d}</dt><dd>{h}</dd></div>
              ))}
            </dl>
          </Card>
          <p className="text-xs text-muted-foreground">Details in [brackets] are placeholders — replace them with your real information.</p>
        </div>
      </div>
    </>
  );
}
