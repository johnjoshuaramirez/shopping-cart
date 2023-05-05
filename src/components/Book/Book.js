import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <BookCard>
      <Image src={book.url}></Image>
      <Title>{book.title}</Title>
      <Author>{book.author}</Author>
      <Price>$ {book.price}</Price>
      <AddButton onClick={() => dispatch(addToCart(book))}>
        Add to cart
      </AddButton>
    </BookCard>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.number
  }),

  onAddToCart: PropTypes.func
};

const BookCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 1rem;
  text-align: center;
  background-color: #4444;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

const Image = styled.img`
  height: 10rem;
`;

const Title = styled.h4`
  margin: 0;
`;

const Author = styled.p`
  margin: 0;
`;

const Price = styled.p`
  margin: 0;
`;

const AddButton = styled.button`
  background: none;
  border: 1px solid gray;
  color: white;
  cursor: pointer;
  padding: 0.75rem 0;
  width: 100%;

  &:hover {
    background-color: gray;
  }
`;

export default Book;
