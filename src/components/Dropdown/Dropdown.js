import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Aside from '../Aside';
import CartList from '../CartList';
import styles from './Dropdown.module.css';

export default function Dropdown({
  cartBooks,
  totalPrice,
  onDeleteFromCart,
  onDecrementCount,
  onIncrementCount,
  onChangeCount
}) {
  return (
    <Aside>
      {cartBooks.length === 0 && (
        <div className={styles.dropdown}>
          <FontAwesomeIcon className={styles.icon} icon={faCartShopping} />
          <span>Cart is empty...</span>
        </div>
      )}
      {cartBooks.map(cartBook => (
        <CartList
          key={cartBook.id}
          cartBook={cartBook}
          onDeleteFromCart={onDeleteFromCart}
          onDecrementCount={onDecrementCount}
          onIncrementCount={onIncrementCount}
          onChangeCount={onChangeCount}
        />
      ))}
      {cartBooks.length > 0 && (
        <div className={styles.checkout}>
          <span className={styles.total}>
            Total: $<strong>{totalPrice}</strong>
          </span>
          <button>Checkout</button>
        </div>
      )}
    </Aside>
  );
}
