import {
  brand,
  DEFAULT_BRAND_URL,
  DEFAULT_OG_IMAGE,
  DEFAULT_TWITTER_HANDLE,
  DEFAULT_THEME_COLOR_DARK,
  ogImageUrl,
  twitterHandle,
  themeColorDark,
} from "./brand";

describe("brand", () => {
  const originalEnv = { ...process.env };

  afterEach(() => {
    // Restore env so each test sees a clean slate.
    for (const key of Object.keys(process.env)) {
      if (!(key in originalEnv)) {
        delete process.env[key];
      }
    }
    for (const [key, value] of Object.entries(originalEnv)) {
      process.env[key] = value;
    }
  });

  it("brand.name, shortName, tagline, description match documented strings", () => {
    expect(brand.name).toBe("Helix");
    expect(brand.shortName).toBe("Helix");
    expect(brand.tagline).toMatch(/atomic units/i);
    expect(brand.description).toMatch(/atomic/i);
  });

  it("defaults url to DEFAULT_BRAND_URL with trailing slash stripped", () => {
    expect(brand.url).toBe(DEFAULT_BRAND_URL.replace(/\/+$/, ""));
  });

  it("NEXT_PUBLIC_BRAND_URL override is used and trailing slash is trimmed", () => {
    process.env["NEXT_PUBLIC_BRAND_URL"] = "https://example.com///";
    // Re-import to pick up env. Use jest.isolateModules to reload.
    let captured: typeof brand | undefined;
    jest.isolateModules(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const mod = require("./brand");
      captured = mod.brand;
    });
    expect(captured!.url).toBe("https://example.com");
  });

  it("ogImageUrl default is an absolute URL composed from canonicalUrl + DEFAULT_OG_IMAGE", () => {
    const expected = `${DEFAULT_BRAND_URL.replace(/\/+$/, "")}${DEFAULT_OG_IMAGE}`;
    expect(ogImageUrl).toBe(expected);
  });

  it("NEXT_PUBLIC_BRAND_OG_IMAGE absolute URL passes through unchanged", () => {
    jest.isolateModules(() => {
      process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"] = "https://cdn.example.com/og.png";
      const mod = require("./brand");
      expect(mod.ogImageUrl).toBe("https://cdn.example.com/og.png");
    });
  });

  it("NEXT_PUBLIC_BRAND_OG_IMAGE relative path is joined with canonicalUrl", () => {
    jest.isolateModules(() => {
      process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"] = "og.png";
      const mod = require("./brand");
      expect(mod.ogImageUrl).toBe(`${brand.url}/og.png`);
    });
  });

  it("NEXT_PUBLIC_BRAND_OG_IMAGE path with leading slash is joined cleanly", () => {
    jest.isolateModules(() => {
      process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"] = "/custom/og.png";
      const mod = require("./brand");
      expect(mod.ogImageUrl).toBe(`${brand.url}/custom/og.png`);
    });
  });

  it("twitterHandle defaults to DEFAULT_TWITTER_HANDLE and env override applies", () => {
    expect(twitterHandle).toBe(DEFAULT_TWITTER_HANDLE);
    jest.isolateModules(() => {
      process.env["NEXT_PUBLIC_BRAND_TWITTER_HANDLE"] = "@custom";
      const mod = require("./brand");
      expect(mod.twitterHandle).toBe("@custom");
    });
  });

  it("themeColorDark defaults and env override applies", () => {
    expect(themeColorDark).toBe(DEFAULT_THEME_COLOR_DARK);
    jest.isolateModules(() => {
      process.env["NEXT_PUBLIC_BRAND_THEME_COLOR_DARK"] = "#000000";
      const mod = require("./brand");
      expect(mod.themeColorDark).toBe("#000000");
    });
  });

  it("empty-string env vars fall back to defaults", () => {
    process.env["NEXT_PUBLIC_BRAND_URL"] = "   ";
    process.env["NEXT_PUBLIC_BRAND_OG_IMAGE"] = "";
    process.env["NEXT_PUBLIC_BRAND_TWITTER_HANDLE"] = "";
    process.env["NEXT_PUBLIC_BRAND_THEME_COLOR_DARK"] = "";

    jest.isolateModules(() => {
      const mod = require("./brand");
      expect(mod.brand.url).toBe(DEFAULT_BRAND_URL.replace(/\/+$/, ""));
      expect(mod.ogImageUrl).toBe(
        `${DEFAULT_BRAND_URL.replace(/\/+$/, "")}${DEFAULT_OG_IMAGE}`,
      );
      expect(mod.twitterHandle).toBe(DEFAULT_TWITTER_HANDLE);
      expect(mod.themeColorDark).toBe(DEFAULT_THEME_COLOR_DARK);
    });
  });
});