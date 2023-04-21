import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown/Dropdown';

export default function Navigation({
  count,
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
          <button>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: '#ffffff' }}
              className={styles.icon}
            />
            <span>{count}</span>
          </button>
          {isHovering && (
            <Dropdown
              cartBooks={cartBooks}
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
