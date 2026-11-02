// ============= Membership pricing =============
// Prices are quoted in Indian rupees (INR) per month, never in another currency.
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

async function renderMembership() {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: ["/membership"] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  render(<RouterProvider router={router} />);
}

describe("Membership pricing", () => {
  it("shows every plan price in rupees", async () => {
    await renderMembership();

    expect(screen.getByText("₹1,499")).toBeInTheDocument();
    expect(screen.getByText("₹2,499")).toBeInTheDocument();
    expect(screen.getByText("₹3,999")).toBeInTheDocument();
  });

  it("shows no price in another currency", async () => {
    await renderMembership();

    expect(screen.queryByText(/£/)).not.toBeInTheDocument();
    expect(screen.queryByText(/US\$/)).not.toBeInTheDocument();
  });
});
