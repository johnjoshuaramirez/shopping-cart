import styles from './Book.module.css';
import { books } from '../../data/books';

const Book = () => {
  return (
    <div className={styles.book}>
      <img src={books[0].url} />
      <h4>Beyond Order</h4>
      <p>Jordan Peterson</p>
      <p>$ 12.99</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Book;
