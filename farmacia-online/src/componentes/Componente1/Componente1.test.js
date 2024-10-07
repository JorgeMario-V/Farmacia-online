// Componente1.test.js
import { render, screen } from '@testing-library/react';
import Componente1 from './Componente1';

test('renderiza el componente Componente1', () => {
  render(<Componente1 />);
  expect(screen.getByText(/Hola desde Componente1/i)).toBeInTheDocument();
});
