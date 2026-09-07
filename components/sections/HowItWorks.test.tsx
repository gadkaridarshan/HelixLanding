import { render, screen } from '@testing-library/react';
import HowItWorks from '@/components/sections/HowItWorks';

describe('HowItWorks', () => {
  it('renders the section with the expected heading', () => {
    render(<HowItWorks />);
    expect(screen.getByTestId('how-it-works')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument();
  });

  it('renders three ordered steps', () => {
    render(<HowItWorks />);
    expect(screen.getByText('Install')).toBeInTheDocument();
    expect(screen.getByText('Compose')).toBeInTheDocument();
    expect(screen.getByText('Ship')).toBeInTheDocument();
  });
});