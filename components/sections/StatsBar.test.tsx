import { render, screen } from '@testing-library/react';
import StatsBar from '@/components/sections/StatsBar';

describe('StatsBar', () => {
  it('renders the section landmark', () => {
    render(<StatsBar />);
    expect(screen.getByTestId('stats-bar')).toBeInTheDocument();
    expect(screen.getByLabelText('Stats')).toBeInTheDocument();
  });

  it('renders all four stat values', () => {
    render(<StatsBar />);
    expect(screen.getByText('12k+')).toBeInTheDocument();
    expect(screen.getByText('340')).toBeInTheDocument();
    expect(screen.getByText('27')).toBeInTheDocument();
    expect(screen.getByText('4.9/5')).toBeInTheDocument();
  });
});