// ============= Navigation: Awards tab =============
// The Awards link sits between Trainers and Contact and points at the
// Awards & Achievements section on the homepage, including in the mobile menu.
import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { fireEvent, render, screen, within } from "@testing-library/react";
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

async function renderSite(path: string) {
  const router = createRouter({
    routeTree,
    history: createMemoryHistory({ initialEntries: [path] }),
    context: { queryClient: new QueryClient() },
  });
  await router.load();
  render(<RouterProvider router={router} />);
}

function desktopNav(): HTMLElement {
  const banner = screen.getByRole("banner");
  const [nav] = within(banner).getAllByRole("navigation");
  if (!nav) throw new Error("desktop navigation is missing");
  return nav;
}

describe("Awards navigation tab", () => {
  it("sits between Trainers and Contact and links to the awards section", async () => {
    await renderSite("/");

    const labels = within(desktopNav())
      .getAllByRole("link")
      .map((link) => link.textContent);
    expect(labels.slice(0, 5)).toEqual(["Programmes", "Membership", "Trainers", "Awards", "Contact"]);

    const awards = within(desktopNav()).getByRole("link", { name: "Awards" });
    expect(awards.getAttribute("href")).toContain("#awards");
  });

  it("targets the Awards & Achievements section with a sticky-header offset", async () => {
    await renderSite("/");

    const section = document.getElementById("awards");
    expect(section).not.toBeNull();
    expect(section?.getAttribute("aria-labelledby")).toBe("achievements-title");
    expect(section?.className).toContain("scroll-mt-24");
  });

  it("appears in the mobile menu when it is opened", async () => {
    await renderSite("/");

    const banner = screen.getByRole("banner");
    expect(within(banner).getAllByRole("link", { name: "Awards" })).toHaveLength(1);

    fireEvent.click(screen.getByRole("button", { name: "Open menu" }));

    expect(within(banner).getAllByRole("link", { name: "Awards" })).toHaveLength(2);
  });
});
