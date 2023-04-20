import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navigation({ count, onShowCart }) {
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
        <li>
          <button onClick={onShowCart}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: '#ffffff' }}
              className={styles.icon}
            />
            <span>{count}</span>
          </button>
        </li>
      </ul>
    </div>
  );
}
