import { render } from '@testing-library/react';
import Page from './page';

describe('Page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Page />);
    expect(container).toBeInTheDocument();
  });

  it('renders Navbar', () => {
    const { container } = render(<Page />);
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
  });

  it('renders all sections', () => {
    const { container } = render(<Page />);
    const children = container.childNodes;
    const elementChildren = Array.from(children).filter(child => child.nodeType === Node.ELEMENT_NODE);
    expect(elementChildren.length).toBe(5);
  });
});