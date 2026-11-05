// ============= Awards & Achievements =============
// The section must stay clearly labelled as fictional demo content, and every
// achievement card must carry its own one-sentence description.
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Reveal fades sections in via IntersectionObserver, which jsdom does not provide.
class FakeIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
Object.defineProperty(globalThis, "IntersectionObserver", {
  writable: true,
  value: FakeIntersectionObserver,
});

async function renderPage(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  render(<RouterProvider router={router} />);
}

const TITLES = [
  "Excellence in Fitness",
  "Outstanding Training Achievement",
  "Strength & Conditioning Recognition",
  "Commitment to Fitness",
];

describe("Awards & Achievements", () => {
  it("gives every achievement card a description", async () => {
    await renderPage("/trainers");

    const section = screen.getByRole("region", { name: "Awards & Achievements" });
    const cards = section.querySelectorAll("article");
    expect(cards).toHaveLength(4);

    for (const title of TITLES) {
      const heading = screen.getByRole("heading", { name: title });
      const card = heading.closest("article");
      expect(card).not.toBeNull();
      const description = card?.querySelector("p");
      expect(description?.textContent?.trim().length).toBeGreaterThan(20);
    }
  });

  it("keeps the fictional-demo disclaimer", async () => {
    await renderPage("/trainers");

    expect(
      screen.getByText(/Illustrative achievements for this fictional demo/i),
    ).toBeInTheDocument();
  });
});
