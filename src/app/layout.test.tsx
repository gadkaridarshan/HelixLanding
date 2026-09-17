import { render } from '@testing-library/react';
import Layout from './layout';

describe('Layout', () => {
  it('renders without crashing', () => {
    const { container } = render(<Layout />);
    expect(container).toBeInTheDocument();
  });

  it('renders Navbar', () => {
    const { container } = render(<Layout />);
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders all sections', () => {
    const { container } = render(<Layout />);
    const children = container.childNodes;
    const elementChildren = Array.from(children).filter(child => child.nodeType === Node.ELEMENT_NODE);
    expect(elementChildren.length).toBe(5);
  });
});