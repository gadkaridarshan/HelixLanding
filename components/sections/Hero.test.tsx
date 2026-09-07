import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

describe('Hero', () => {
  it('renders a section landmark labelled Hero', () => {
    render(<Hero />);
    const hero = screen.getByTestId('hero');
    expect(hero.tagName.toLowerCase()).toBe('section');
    expect(hero).toHaveAttribute('aria-label', 'Hero');
  });

  it('renders the title and CTAs', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByText('Get started')).toBeInTheDocument();
    expect(screen.getByText('How it works')).toBeInTheDocument();
  });
});