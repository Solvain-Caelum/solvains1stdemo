import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";

class FakeIO { observe(){} unobserve(){} disconnect(){} takeRecords(){return []} }
Object.defineProperty(globalThis, "IntersectionObserver", { writable: true, value: FakeIO });

describe("dbg", () => {
  it("renders", async () => {
    const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: ["/membership"] }), context: { queryClient: new QueryClient() } });
    await router.load();
    console.log("status:", router.state.status, "isLoading:", router.state.isLoading, "matched:", router.state.matches.map(m=>m.routeId));
    render(<RouterProvider router={router} />);
    console.log("body:", document.body.innerHTML.slice(0, 400));
    expect(true).toBe(true);
  });
});
