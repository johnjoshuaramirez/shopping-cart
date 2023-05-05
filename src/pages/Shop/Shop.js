import Book from '../../components/Book';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Shop = ({ books, onAddToCart }) => {
  return (
    <ShopWrapper>
      {books.map(book => (
        <Book key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </ShopWrapper>
  );
};

Shop.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  onAddToCart: PropTypes.func
}

const ShopWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export default Shop;