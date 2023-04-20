import styles from './Products.module.css';
import Card from '../../components/Card';

export default function Products({ allBooks, onAddToCart }) {
  return (
    <div className={styles.products}>
      {allBooks.map(book => (
          <Card key={book.id} book={book} onAddToCart={onAddToCart} />
        ))}
    </div>
  );
}
