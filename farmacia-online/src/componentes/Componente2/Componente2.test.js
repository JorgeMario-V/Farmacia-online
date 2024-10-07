// Componente1.test.js
import { render, screen } from '@testing-library/react';
import Componente1 from './Componente2';

test('renderiza el componente Componente2', () => {
  render(<Componente2 />);
  expect(screen.getByText(/Hola desde Componente2/i)).toBeInTheDocument();
});
