import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders without crashing', () => {
    render(<Navbar />);
    expect(screen.getByText(/Helix/i)).toBeInTheDocument();
  });
});