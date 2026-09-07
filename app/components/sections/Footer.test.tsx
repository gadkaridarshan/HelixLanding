import * as Canonical from "@/components/sections/footer/Footer";
import * as Shim from "./Footer";

describe("app/components/sections/Footer re-export shim", () => {
  it("re-exports Footer as the canonical implementation (same reference)", () => {
    expect(Shim.Footer).toBe(Canonical.Footer);
  });

  it("re-exports default as the canonical implementation (same reference)", () => {
    expect(Shim.default).toBe(Canonical.default);
  });

  it("re-exports the FooterProps type (compile-time identity)", () => {
    const props: Shim.FooterProps = {};
    expect(props).toEqual({});
  });
});