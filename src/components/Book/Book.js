import styles from './Book.module.css';

const Book = ({ book, onAddToCart }) => {
  return (
    <div className={styles.book}>
      <img src={book.url} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>$ {book.price}</p>
      <button onClick={() => onAddToCart(book)}>Add to cart</button>
    </div>
  );
};

export default Book;
