import Book from '../../components/Book';
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

const ShopWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

export default Shop;