import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import CartItem from '../CartItem';
import styles from './Cart.module.css';

const Cart = ({
  cartItems,
  onDelete,
  onIncrement,
  onDecrement,
  onInputChange,
  dropdownOpen,
  openDropdown,
  closeDropdown
}) => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalOverallPrice, setTotalOverallPrice] = useState(0);

  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (acc, curr) => acc + curr.quantity,
      0
    );

    setTotalQuantity(totalQuantity);

    const totalOverallPrice = cartItems.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    setTotalOverallPrice(totalOverallPrice);
  }, [cartItems]);

  return (
    <div
      className={styles.dropdown}
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button className={styles.cart}>
        <FontAwesomeIcon icon={faCartShopping} className={styles.icon} />
        {totalQuantity !== 0 && (
          <span className={styles.totalQuantity}>{totalQuantity}</span>
        )}
      </button>
      {dropdownOpen && (
        <div className={styles.content}>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              onInputChange={onInputChange}
            />
          ))}
          {totalQuantity > 0 ? (
            <div className={styles.bottom}>
              <p className={styles.totalOverallPrice}>
                Total: $ {totalOverallPrice.toFixed(2)}
              </p>
              <button className={styles.checkout}>Checkout</button>
            </div>
          ) : (
            <p className={styles.noItems}>No items</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
