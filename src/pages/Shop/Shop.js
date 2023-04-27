import Book from '../../components/Book';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <main className={styles.shop}>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </main>
  );
};

export default Shop;
