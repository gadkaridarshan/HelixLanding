import { render, screen } from '@testing-library/react';
import FinalCTA from '@/components/sections/FinalCTA';

describe('FinalCTA', () => {
  it('renders the section with the expected heading', () => {
    render(<FinalCTA />);
    expect(screen.getByTestId('final-cta')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /ready to build/i })).toBeInTheDocument();
  });

  it('renders the primary CTA link', () => {
    render(<FinalCTA />);
    const cta = screen.getByRole('link', { name: /get started/i });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#main');
  });
});