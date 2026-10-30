import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

// PLACEHOLDER business details — replace with your real information.
export const BUSINESS = {
  name: "Titan Fitness",
  address: "[123 Example Street, Your Town, AB1 2CD]",
  phone: "[000 0000 0000]",
  email: "[hello@yourgym.example]",
  hours: [
    ["Monday – Friday", "[6:00 – 22:00]"],
    ["Saturday", "[8:00 – 20:00]"],
    ["Sunday", "[8:00 – 18:00]"],
  ],
};

const NAV = [
  { to: "/programmes", label: "Programmes" },
  { to: "/membership", label: "Membership" },
  { to: "/trainers", label: "Trainers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="font-display text-xl tracking-tight text-foreground">
      TITAN<span className="text-primary">.</span>FITNESS
    </Link>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: "/contact" | "/membership" | "/programmes" | "/trainers" | "/";
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:brightness-110"
          : "border border-border text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
          <ButtonLink to="/contact" className="px-5 py-2">Join Now</ButtonLink>
        </nav>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-5 py-4 md:hidden">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-3 text-lg text-foreground">
              {n.label}
            </Link>
          ))}
          <div onClick={() => setOpen(false)} className="pt-2">
            <ButtonLink to="/contact" className="w-full">Join Now</ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            A fictional demo gym. Replace bracketed details with your own business information.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} className="text-muted-foreground hover:text-primary">{n.label}</Link>
          ))}
        </div>
        <div>
          <p className="text-sm font-semibold">Follow us</p>
          <div className="mt-3 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              // Replace "#" with your real social profile URLs.
              <a key={label} href="#" aria-label={`${label} (placeholder link)`} className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <Icon size={18} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">© {new Date().getFullYear()} Titan Fitness (placeholder).</p>
        </div>
      </div>
    </footer>
  );
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShown(true), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("transition-all duration-700 ease-out", shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0", className)}
    >
      {children}
    </div>
  );
}

export function Section({ eyebrow, title, intro, children, className }: { eyebrow: string; title: string; intro?: string; children: ReactNode; className?: string }) {
  return (
    <section className={cn("mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28", className)}>
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl uppercase md:text-5xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>}
      </Reveal>
      <div className="mt-12">{children}</div>
    </section>
  );
}

export function PageHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="border-b border-border bg-card pt-32 pb-14">
      <div className="mx-auto max-w-7xl animate-rise px-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
        <h1 className="mt-3 text-4xl uppercase md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      </div>
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50", className)}>
      {children}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
      <Reveal className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-primary p-10 text-primary-foreground md:flex-row md:items-center md:p-14">
        <div>
          <h2 className="text-3xl uppercase md:text-4xl">Ready to start?</h2>
          <p className="mt-2 opacity-80">Send us an enquiry and we'll get back to you about membership.</p>
        </div>
        <Link to="/contact" className="rounded-full bg-background px-7 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-transform hover:-translate-y-0.5">
          Join Now
        </Link>
      </Reveal>
    </section>
  );
}

export function meta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
