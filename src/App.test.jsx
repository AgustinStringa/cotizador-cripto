import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cotiza criptomonedas header', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /cotiza criptomonedas/i });
  expect(headerElement).toBeInTheDocument();
});

