import { render } from '@testing-library/react';

import LinkButton from '../link-button';

describe('Link Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LinkButton />);

    expect(baseElement).toBeTruthy();
  });

  it('should render a child string', () => {
    const { baseElement } = render(
      <LinkButton href="https://google.com">Go there</LinkButton>
    );

    expect(baseElement.textContent).toContain('Go there');
  });

  it('should be a valid html link', () => {
    const { getByTestId } = render(
      <LinkButton href="https://google.com">Go there</LinkButton>
    );

    const element = getByTestId('link-button');

    expect(element).toHaveProperty('href', 'https://google.com/');
  });
});
