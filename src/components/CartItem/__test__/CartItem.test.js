import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import CartItem from '../CartItem';

const item = {
  id: 1009,
  url: 'url',
  title: 'Think Again',
  author: 'Adam Grant',
  price: 24.99,
  stock: 5,
  quantity: 3
};

test('renders cart item correctly', () => {
  render(<CartItem item={item} />);
  const imgElement = screen.getByRole('img');
  const titleElement = screen.getByText(item.title);
  const stockElement = screen.getByText(`Stock: ${item.stock}`);
  const priceElement = screen.getByText(`$ ${item.price}`);
  const inputElement = screen.getByRole('textbox');
  expect(imgElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  expect(stockElement).toBeInTheDocument();
  expect(priceElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
});

test('increments item quantity when increment button is clicked', async () => {
  user.setup();
  const handleIncrement = jest.fn();
  render(<CartItem item={item} onIncrement={handleIncrement} />);
  const incrementButton = screen.getByRole('button', { name: '+' });
  await user.click(incrementButton);
  expect(handleIncrement).toHaveBeenCalledTimes(1);
  expect(handleIncrement).toHaveBeenCalledWith(item);
});

test('decrements item quantity when decrement button is clicked', async () => {
  user.setup();
  const handleDecrement = jest.fn();
  render(<CartItem item={item} onDecrement={handleDecrement} />);
  const decrementButton = screen.getByRole('button', { name: '-' });
  await user.click(decrementButton);
  expect(handleDecrement).toHaveBeenCalledTimes(1);
});

test('updates item quantity when input value is changed', async () => {
  user.setup();
  const handleInputChange = jest.fn();
  render(<CartItem item={item} onInputChange={handleInputChange} />);
  const inputElement = screen.getByRole('textbox');
  await user.type(inputElement, '3');
  expect(handleInputChange).toHaveBeenCalledTimes(1);
  expect(inputElement).toHaveValue('3');
});

test('disables increment button when item quantity is maximum', () => {
  const itemWithMaximumQuantity = {
    ...item,
    quantity: item.stock
  };
  render(<CartItem item={itemWithMaximumQuantity} />);
  const incrementButton = screen.getByRole('button', { name: '+' });
  expect(incrementButton).toBeDisabled();
});

test('disables decrement button when item quantity is minimum', () => {
  const itemWithMinimumQuantity = {
    ...item,
    quantity: 1
  };
  render(<CartItem item={itemWithMinimumQuantity} />);
  const decrementButton = screen.getByRole('button', { name: '-' });
  expect(decrementButton).toBeDisabled();
});
