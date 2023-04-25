import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { mock_books } from '../../../__mocks__/mocks';
import Card from '../Card';

describe('card', () => {
  test('card content renders correctly', () => {
    render(<Card />);

    const image = screen.getByRole('img');
    const title = screen.getByRole('heading');
    const author = screen.getByText(mainBook.author);
    const price = screen.getByText(`$ ${mainBook.price}`);
    const button = screen.getByRole('button');

    expect(image).toBeVisible();
    expect(image).toHaveAttribute('src', mainBook.url);
    expect(title).toHaveTextContent(mainBook.title);
    expect(author).toHaveTextContent(mainBook.author);
    expect(price).toHaveTextContent(`$ ${mainBook.price}`);
    expect(button).toHaveTextContent('Add to cart');
  });

  test('calls onAddToCart function when "Add to cart" button is clicked', async () => {
    const onAddToCartMock = jest.fn();
    const user = userEvent.setup();
    render(<Card mainBook={mainBook} onAddToCart={onAddToCartMock} />);
    const addToCartButton = screen.getByRole('button');
    await user.click(addToCartButton);
    expect(onAddToCartMock).toHaveBeenCalledTimes(1);
    expect(onAddToCartMock).toHaveBeenCalledWith(mainBook);
  });
});