import styles from './Card.module.css';

export default function Card({ book, onAddToCart }) {
  return (
    <div className={styles.card}>
      <img src={book.url} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>$ {book.price}</p>
      <button onClick={() => onAddToCart(book)}>Add to cart</button> 
    </div>
  );
}
