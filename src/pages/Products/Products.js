import Card from '../../components/Card';
import styles from './Products.module.css';

export default function Products({ mainBooks, onAddToCart }) {
  return (
    <div className={styles.products}>
      {mainBooks.map(mainBook => (
        <Card
          key={mainBook.id}
          mainBook={mainBook}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}