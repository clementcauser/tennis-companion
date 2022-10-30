import { render } from '@testing-library/react';
import TextInput from '../text-input';

const mockFn = jest.fn((value) => value);

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TextInput label="Username" onChange={mockFn} value="hello" />
    );

    expect(baseElement).toBeTruthy();
  });

  it('contains a label and an input that share the same id', () => {
    const { getByText, getByTestId } = render(
      <TextInput
        label="Username"
        onChange={console.log}
        value=""
        id="shared-id"
      />
    );

    const label = getByText('Username');
    const input = getByTestId('text-input');

    expect(label).toHaveProperty('htmlFor', 'shared-id');
    expect(input).toHaveProperty('id', 'shared-id');
  });

  it('should display an error message and danger style when an error is given', () => {
    const { getByRole, getByTestId } = render(
      <TextInput
        label="Username"
        onChange={console.log}
        value="this is wrong"
        error="An error occured"
      />
    );

    const input = getByTestId('text-input');
    const errorMessage = getByRole('alert');

    expect(input.classList.contains('border-danger-500')).toBe(true);
    expect(errorMessage.textContent).toBe('An error occured');
  });
});
