import Book from '../../components/Book';
import styles from './Shop.module.css';

const Shop = ({ books, onAddToCart }) => {
  return (
    <main className={styles.shop}>
      {books.map(book => (
        <Book key={book.id} book={book} onAddToCart={onAddToCart} />
      ))}
    </main>
  );
};

export default Shop;
