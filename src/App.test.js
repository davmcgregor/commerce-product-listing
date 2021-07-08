import {render, screen} from '@testing-library/react';
import App from './App';

test('renders App component with search element', () => {
  render(<App />);
  const searchElement = screen.getByPlaceholderText(/search.../i);
  expect(searchElement).toBeInTheDocument();
});
