import Card from '../../components/Card';
import styles from './Products.module.css';

export default function Products({ allBooks, onAddToCart }) {
  return (
    <div className={styles.products}>
      {allBooks.map(book => (
          <Card key={book.id} book={book} onAddToCart={onAddToCart} />
        ))}
    </div>
  );
}
