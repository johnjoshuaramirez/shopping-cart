import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Shopping Cart
      </Link>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/shop" className={styles.link}>
          Shop
        </NavLink>
        <button className={styles.cart}>Cart</button>
      </nav>
    </header>
  );
};

export default Header;
