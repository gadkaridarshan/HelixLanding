import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

jest.mock('@/components/sections/Navbar', () => {
  const MockNavbar = () => <nav data-testid="navbar" />;
  MockNavbar.displayName = 'MockNavbar';
  return { __esModule: true, default: MockNavbar, Navbar: MockNavbar };
});

jest.mock('@/components/sections/Footer', () => {
  const MockFooter = () => <footer data-testid="footer" />;
  MockFooter.displayName = 'MockFooter';
  return { __esModule: true, default: MockFooter, Footer: MockFooter };
});

jest.mock('@/components/sections/Hero', () => {
  const MockHero = () => <section data-testid="hero" />;
  MockHero.displayName = 'MockHero';
  return { __esModule: true, default: MockHero, Hero: MockHero };
});

jest.mock('@/components/sections/StatsBar', () => {
  const MockStatsBar = () => <section data-testid="stats-bar" />;
  MockStatsBar.displayName = 'MockStatsBar';
  return { __esModule: true, default: MockStatsBar, StatsBar: MockStatsBar };
});

jest.mock('@/components/sections/Features', () => {
  const MockFeatures = () => <section data-testid="features" />;
  MockFeatures.displayName = 'MockFeatures';
  return { __esModule: true, default: MockFeatures, Features: MockFeatures };
});

jest.mock('@/components/sections/HowItWorks', () => {
  const MockHowItWorks = () => <section data-testid="how-it-works" />;
  MockHowItWorks.displayName = 'MockHowItWorks';
  return { __esModule: true, default: MockHowItWorks, HowItWorks: MockHowItWorks };
});

jest.mock('@/components/sections/Personas', () => {
  const MockPersonas = () => <section data-testid="personas" />;
  MockPersonas.displayName = 'MockPersonas';
  return { __esModule: true, default: MockPersonas, Personas: MockPersonas };
});

jest.mock('@/components/sections/FAQ', () => {
  const MockFAQ = () => <section data-testid="faq" />;
  MockFAQ.displayName = 'MockFAQ';
  return { __esModule: true, default: MockFAQ, FAQ: MockFAQ };
});

jest.mock('@/components/sections/FinalCTA', () => {
  const MockFinalCTA = () => <section data-testid="final-cta" />;
  MockFinalCTA.displayName = 'MockFinalCTA';
  return { __esModule: true, default: MockFinalCTA, FinalCTA: MockFinalCTA };
});

describe('HomePage', () => {
  it('renders the marketing surface shell', () => {
    render(<HomePage />);

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('hero')).toBeInTheDocument();
    expect(screen.getByTestId('stats-bar')).toBeInTheDocument();
    expect(screen.getByTestId('features')).toBeInTheDocument();
    expect(screen.getByTestId('how-it-works')).toBeInTheDocument();
    expect(screen.getByTestId('personas')).toBeInTheDocument();
    expect(screen.getByTestId('faq')).toBeInTheDocument();
    expect(screen.getByTestId('final-cta')).toBeInTheDocument();
  });
});