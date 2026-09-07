import { render, screen } from '@testing-library/react';
import FAQ from '@/components/sections/FAQ';

describe('FAQ', () => {
  it('renders the section with the expected heading', () => {
    render(<FAQ />);
    expect(screen.getByTestId('faq')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /frequently asked questions/i })).toBeInTheDocument();
  });

  it('renders all three Q/A pairs', () => {
    render(<FAQ />);
    expect(screen.getByText('Is it open source?')).toBeInTheDocument();
    expect(screen.getByText('Yes, MIT licensed.')).toBeInTheDocument();
    expect(screen.getByText('Does it support SSR?')).toBeInTheDocument();
    expect(screen.getByText('First-class SSR and RSC support.')).toBeInTheDocument();
    expect(screen.getByText('Can I theme it?')).toBeInTheDocument();
    expect(screen.getByText('Tokens and CSS variables throughout.')).toBeInTheDocument();
  });
});