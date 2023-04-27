import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartList from '../CartList';

const cartBook = {
  id: 1001,
  url: 'random url',
  title: 'Beyond Order',
  author: 'Jordan B. Peterson',
  price: 12.99,
  stock: 7,
  count: 1
};

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

  test('cart item price total renders correctly', async () => {
    const cartItemTotalPrice = screen.getByTestId('cart-item-total-price');
    expect(cartItemTotalPrice).toBeInTheDocument();
    expect(cartItemTotalPrice).toHaveTextContent(`Total: $${cartBook.price}`);
  });

  test('increment button renders correctly', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    expect(incrementButton).toBeInTheDocument();
  });

  test('input value is incremented by 1 when increment button is clicked', async () => {
    const user = userEvent.setup();
    const incrementButton = screen.getByRole('button', { name: '+' });
    await user.click(incrementButton);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(2);
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
