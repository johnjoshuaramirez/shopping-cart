import styles from './Book.module.css';

const Book = ({url, title, author, price}) => {
  return (
    <div className={styles.book}>
      <img src={url} />
      <h4>{title}</h4>
      <p>{author}</p>
      <p>$ {price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Book;
