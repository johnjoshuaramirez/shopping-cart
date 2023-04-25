import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mock_books } from '../../../__mocks__/mocks';
import CartList from '../CartList';
import Card from '../../Card/Card';

const cartBook = mock_books[0];
cartBook.count = cartBook.count + 1;

describe('cart items', () => {
  beforeEach(() => {
    render(<CartList cartBook={cartBook} />);
  });

  test('image renders correctly', () => {
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', cartBook.url);
    expect(image).toHaveAttribute('alt', cartBook.title);
    expect(image).toBeInTheDocument();
  });

  test('title renders correctly', () => {
    const title = screen.getByText(cartBook.title);
    expect(title).toBeInTheDocument();
  });

  test('stock renders correctly', () => {
    const stock = screen.getByText(`Stock: ${cartBook.stock}`);
    expect(stock).toBeInTheDocument();
  });

  test('price renders correctly', () => {
    const price = screen.getByText(`$${cartBook.price}`);
    expect(price).toBeInTheDocument();
  });

  test('cart item total price renders correctly', async () => {
    render(<Card />);
    const cartItemTotalPrice = screen.getByTestId('cart-item-total-price');
    expect(cartItemTotalPrice).toBeInTheDocument();
    expect(cartItemTotalPrice).toHaveTextContent(`Total: $${cartBook.price}`);
  });

  test('increment button renders correctly', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('decrement button renders correctly', () => {
    const decrementButton = screen.getByRole('button', { name: '-' });
    expect(decrementButton).toBeInTheDocument();
  });

  test('trash button renders correctly', () => {
    const trashButton = screen.getByTestId('trash');
    expect(trashButton).toBeInTheDocument();
  });
});

//     fireEvent.click(decrementButton);
//     expect(onDecrementCount).toHaveBeenCalledWith(cartBook);

//     fireEvent.change(count, { target: { value: '3' } });
//     expect(onChangeCount).toHaveBeenCalledWith(cartBook, expect.any(Object));

//     fireEvent.click(incrementButton);
//     expect(onIncrementCount).toHaveBeenCalledWith(cartBook);

//     fireEvent.click(trashButton);
//     expect(onDeleteFromCart).toHaveBeenCalledWith(cartBook);
