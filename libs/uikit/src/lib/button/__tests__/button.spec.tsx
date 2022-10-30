import { fireEvent, render } from '@testing-library/react';

import Button from '../button';

const mockFn = jest.fn(() => true);

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button />);

    expect(baseElement).toBeTruthy();
  });

  it('should render a child string', () => {
    const { baseElement } = render(<Button onClick={mockFn}>Click me</Button>);

    expect(baseElement.textContent).toContain('Click me');
  });

  it('should have "button" as default type', () => {
    const { getByTestId: defaultGetByTestId } = render(
      <Button onClick={mockFn}>Click me</Button>
    );
    const defaultButton = defaultGetByTestId('button');
    expect(defaultButton).toHaveProperty('type', 'button');
  });

  it('should executes "onClick" function when clicking on it', () => {
    const { getByTestId } = render(<Button onClick={mockFn}>Click me</Button>);
    const button = getByTestId('button');

    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalled();
  });
});
