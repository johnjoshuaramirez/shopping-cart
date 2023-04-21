import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown';
import styles from './Navigation.module.css';

export default function Navigation({
  count,
  totalPrice,
  cartBooks,
  isHovering,
  onMouseEnter,
  onMouseLeave,
  onDeleteFromCart,
  onDecrementCount,
  onIncrementCount,
  onChangeCount
}) {
  return (
    <div className={styles.navigation}>
      <h1>shopping-cart</h1>
      <ul>
        <li>
          <NavLink to="/shopping-cart">Home</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <button className={styles.cart}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
            {count !== 0 && <span>{count}</span>}
          </button>
          {isHovering && (
            <Dropdown
              cartBooks={cartBooks}
              totalPrice={totalPrice}
              onDeleteFromCart={onDeleteFromCart}
              onDecrementCount={onDecrementCount}
              onIncrementCount={onIncrementCount}
              onChangeCount={onChangeCount}
            />
          )}
        </li>
      </ul>
    </div>
  );
}
