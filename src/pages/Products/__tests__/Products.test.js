import { render, screen } from '@testing-library/react';
import { mainBooksMock } from '../../../__mocks__/mocks';
import Products from '../Products';

describe('Products', () => {
  test('renders all cards', () => {
    render(<Products mainBooks={mainBooksMock} />);

    const cards = screen.getAllByTestId('card');
    
    expect(cards[0]).toBeInTheDocument();
    expect(cards.length).toBe(mainBooksMock.length);
  });
});