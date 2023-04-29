import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import styles from './CartItem.module.css';

const CartItem = ({ item, onDelete, onIncrement, onDecrement, onInputChange }) => {
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const isMinimum = item.quantity <= 1;
  const isMaximum = item.quantity >= item.stock;

  useEffect(() => {
    setTotalItemPrice(item.price * item.quantity);
  }, [item]);

  return (
    <div className={styles.item}>
      <img src={item.url} />
      <h5 className={styles.title}>{item.title}</h5>
      <p className={styles.stock}>Stock: {item.stock}</p>
      <p className={styles.itemPrice}>$ {item.price}</p>
      <div className={styles.quantity}>
        <button 
          className={styles.increment}
          disabled={isMinimum} 
          onClick={() => onDecrement(item)}
        >
          -
        </button>
        <input
          type="text"
          value={item.quantity}
          onChange={e => onInputChange(item, e)}
        />
        <button
          className={styles.decrement}
          disabled={isMaximum}
          onClick={() => onIncrement(item)}
        >
          +
        </button>
      </div>
      <button className={styles.trash} onClick={() => onDelete(item)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <p className={styles.totalItemPrice}>
        Total: $ {totalItemPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
