import { render, screen } from '@testing-library/react';
import Personas from '@/components/sections/Personas';

describe('Personas', () => {
  it('renders the section with the expected heading', () => {
    render(<Personas />);
    expect(screen.getByTestId('personas')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /built for every role/i })).toBeInTheDocument();
  });

  it('renders all three persona cards', () => {
    render(<Personas />);
    expect(screen.getByText('Product Managers')).toBeInTheDocument();
    expect(screen.getByText('Engineers')).toBeInTheDocument();
    expect(screen.getByText('Designers')).toBeInTheDocument();
  });
});