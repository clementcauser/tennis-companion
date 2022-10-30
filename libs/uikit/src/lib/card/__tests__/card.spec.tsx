import { render } from '@testing-library/react';
import Card from '../card';

describe('Card', () => {
  it('should renders correctly', () => {
    const { baseElement } = render(
      <Card>
        <p>hello world</p>
      </Card>
    );

    expect(baseElement).toBeTruthy();
  });

  it('can render a string title', () => {
    const { getByText } = render(
      <Card title="This is my title">
        <p>hello world</p>
      </Card>
    );

    const title = getByText('This is my title');

    expect(title.tagName).toBe('H5');
  });

  it('can render a component title', () => {
    const { getByText } = render(
      <Card title={<h1>My H1 title</h1>}>
        <p>hello world</p>
      </Card>
    );

    const title = getByText('My H1 title');

    expect(title.tagName).toBe('H1');
  });
});
