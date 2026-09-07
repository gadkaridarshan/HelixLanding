import { render, screen } from '@testing-library/react';
import Features from '@/components/sections/Features';

describe('Features', () => {
  it('renders the section with the expected heading', () => {
    render(<Features />);
    expect(screen.getByTestId('features')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /features/i })).toBeInTheDocument();
  });

  it('renders exactly three feature items', () => {
    render(<Features />);
    expect(screen.getByText('Composable')).toBeInTheDocument();
    expect(screen.getByText('Typed')).toBeInTheDocument();
    expect(screen.getByText('Tested')).toBeInTheDocument();
  });
});