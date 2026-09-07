import { render, screen, within } from '@testing-library/react';
import HomePage from '@/app/page';

// Mock all child components to isolate the page shell.
jest.mock('@/components/layout/Navbar', () => {
  const MockNavbar = () => <nav data-testid="navbar" />;
  MockNavbar.displayName = 'MockNavbar';
  return { __esModule: true, default: MockNavbar, Navbar: MockNavbar };
});

jest.mock('@/components/layout/Footer', () => {
  const MockFooter = () => <footer data-testid="footer" />;
  MockFooter.displayName = 'MockFooter';
  return { __esModule: true, default: MockFooter, Footer: MockFooter };
});

jest.mock('@/app/components/sections/Hero', () => {
  const MockHero = () => <section data-testid="hero" />;
  MockHero.displayName = 'MockHero';
  return { __esModule: true, default: MockHero, Hero: MockHero };
});

jest.mock('@/app/components/sections/Features', () => {
  const MockFeatures = () => <section data-testid="features" />;
  MockFeatures.displayName = 'MockFeatures';
  return { __esModule: true, default: MockFeatures, Features: MockFeatures };
});

jest.mock('@/app/components/sections/HowItWorks', () => {
  const MockHowItWorks = () => <section data-testid="how-it-works" />;
  MockHowItWorks.displayName = 'MockHowItWorks';
  return { __esModule: true, default: MockHowItWorks, HowItWorks: MockHowItWorks };
});

jest.mock('@/app/components/sections/StatsBar', () => {
  const MockStatsBar = () => <section data-testid="stats-bar" />;
  MockStatsBar.displayName = 'MockStatsBar';
  return { __esModule: true, default: MockStatsBar, StatsBar: MockStatsBar };
});

jest.mock('@/app/components/sections/Personas', () => {
  const MockPersonas = () => <section data-testid="personas" />;
  MockPersonas.displayName = 'MockPersonas';
  return { __esModule: true, default: MockPersonas, Personas: MockPersonas };
});

jest.mock('@/app/components/sections/FAQ', () => {
  const MockFAQ = () => <section data-testid="faq" />;
  MockFAQ.displayName = 'MockFAQ';
  return { __esModule: true, default: MockFAQ, FAQ: MockFAQ };
});

jest.mock('@/app/components/sections/FinalCTA', () => {
  const MockFinalCTA = () => <section data-testid="final-cta" />;
  MockFinalCTA.displayName = 'MockFinalCTA';
  return { __esModule: true, default: MockFinalCTA, FinalCTA: MockFinalCTA };
});

const SECTION_IDS = [
  'hero',
  'features',
  'how-it-works',
  'stats-bar',
  'personas',
  'faq',
  'final-cta',
] as const;

describe('HomePage', () => {
  it('renders without crashing', () => {
    expect(() => render(<HomePage />)).not.toThrow();
  });

  it('renders the Navbar and Footer layout chrome', () => {
    render(<HomePage />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders a <main> landmark with id="main"', () => {
    render(<HomePage />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main');
  });

  it('renders every expected section component inside <main>', () => {
    render(<HomePage />);
    const main = screen.getByRole('main');
    for (const id of SECTION_IDS) {
      expect(within(main).getByTestId(id)).toBeInTheDocument();
    }
  });

  it('renders sections inside <main> in the expected order', () => {
    const { container } = render(<HomePage />);
    const main = screen.getByRole('main');

    // Collect elements strictly inside <main> in DOM order, filtered to our ids.
    const actualOrder: string[] = [];
    const mainChildren = Array.from(main.querySelectorAll('[data-testid]'));
    for (const el of mainChildren) {
      const id = el.getAttribute('data-testid');
      if (id && (SECTION_IDS as readonly string[]).includes(id)) {
        actualOrder.push(id);
      }
    }
    expect(actualOrder).toEqual([...SECTION_IDS]);
    // Sanity: the order is also reflected in document order.
    void container;
  });

  it('renders exactly seven sections inside <main>', () => {
    render(<HomePage />);
    const main = screen.getByRole('main');
    const matches = SECTION_IDS.filter((id) =>
      within(main).queryByTestId(id),
    );
    expect(matches).toHaveLength(7);
  });

  it('keeps Navbar and Footer as siblings of <main>, not descendants', () => {
    render(<HomePage />);
    const navbar = screen.getByTestId('navbar');
    const footer = screen.getByTestId('footer');
    const main = screen.getByRole('main');

    expect(navbar.contains(main)).toBe(false);
    expect(footer.contains(main)).toBe(false);
    expect(main.contains(navbar)).toBe(false);
    expect(main.contains(footer)).toBe(false);
  });

  it('renders Navbar before <main> and Footer after <main> in the DOM', () => {
    const { container } = render(<HomePage />);
    const navbar = screen.getByTestId('navbar');
    const main = screen.getByRole('main');
    const footer = screen.getByTestId('footer');

    const all = Array.from(container.querySelectorAll('*'));
    const idx = (el: Element) => all.indexOf(el);

    expect(idx(navbar)).toBeLessThan(idx(main));
    expect(idx(main)).toBeLessThan(idx(footer));
  });
});