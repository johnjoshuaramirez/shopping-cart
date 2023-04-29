import { Link, NavLink } from 'react-router-dom';
import Cart from '../Cart';
import styles from './Header.module.css';

const Header = ({ cartItems, onDelete, onIncrement, onDecrement, onInputChange, dropdownOpen, openDropdown, closeDropdown }) => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Shopping Cart
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/shopping-cart">
          Home
        </NavLink>
        <NavLink to="/shop">
          Shop
        </NavLink>
        <Cart
          cartItems={cartItems}
          dropdownOpen={dropdownOpen}
          openDropdown={openDropdown}
          closeDropdown={closeDropdown}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onInputChange={onInputChange}
        />
      </nav>
    </header>
  );
};

export default Header;
