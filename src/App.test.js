import { render, screen } from '@testing-library/react';
import App from './App';

test('App render Title', () => {
  render(<App />);
  const title = screen.getByTestId('app-title');
  expect(title).toHaveTextContent('Hello')
});
