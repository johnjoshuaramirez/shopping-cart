import styles from './Card.module.css';

export default function Card({ mainBook, onAddToCart }) {
  const { title, author, price, url } = mainBook;
  return (
    <div className={styles.card} data-testid="card">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <p>$ {price}</p>
      <button onClick={() => onAddToCart(mainBook)}>Add to cart</button>
    </div>
  );
}