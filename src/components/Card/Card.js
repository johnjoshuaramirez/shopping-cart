import styles from './Card.module.css';

export default function Card({ mainBook, onAddToCart }) {
  return (
    <div className={styles.card} data-testid="card">
      <img src={mainBook.url} alt={mainBook.title} />
      <h3>{mainBook.title}</h3>
      <p>{mainBook.author}</p>
      <p>$ {mainBook.price}</p>
      <button onClick={() => onAddToCart(mainBook)}>Add to cart</button> 
    </div>
  );
}