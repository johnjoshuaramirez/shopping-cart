import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import styles from './CartList.module.css';

export default function CartList({
  cartBook,
  onDeleteFromCart,
  onDecrementCount,
  onIncrementCount,
  onChangeCount
}) {
  return (
    <div className={styles.cartList}>
      <img src={cartBook.url} alt={cartBook.title} />
      <p className={styles.title}>{cartBook.title}</p>
      <p className={styles.stock}>Stock: {cartBook.stock}</p>
      <p className={styles.price}>${cartBook.price}</p>
      <div className={styles.quantity}>
        <button
          className={
            cartBook.count > 1 ? styles.buttonEnabled : styles.buttonDisabled
          }
          disabled={cartBook.count <= 1}
          onClick={() => onDecrementCount(cartBook)}
        >
          -
        </button>
        <input
          type="text"
          value={cartBook.count}
          onChange={e => onChangeCount(cartBook, e)}
        />
        <button
          className={
            cartBook.count < cartBook.stock
              ? styles.buttonEnabled
              : styles.buttonDisabled
          }
          disabled={!cartBook.count > cartBook.stock}
          onClick={() => onIncrementCount(cartBook)}
        >
          +
        </button>
      </div>
      <button className={styles.trash} data-testId="trash">
        <FontAwesomeIcon
          onClick={() => onDeleteFromCart(cartBook)}
          icon={faTrashCan}
        />
      </button>
      <p className={styles.total} data-testId="cart-item-total-price">
        Total: ${(cartBook.price * cartBook.count).toFixed(2)}
      </p>
    </div>
  );
}
