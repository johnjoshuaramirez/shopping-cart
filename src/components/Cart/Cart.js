import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CartItem from '../CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalOverallPrice, setTotalOverallPrice] = useState(0);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const totalQuantity = cartItems
      .reduce((acc, curr) => acc + curr.quantity, 0);
    setTotalQuantity(totalQuantity);

    const totalOverallPrice = cartItems
      .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
      .toFixed(2);
    setTotalOverallPrice(totalOverallPrice);
  }, [cartItems]);

  return (
    <Dropdown onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
      <CartButton>
        <FontAwesomeIcon icon={faCartShopping} />
        {totalQuantity !== 0 && <TotalQuantity>{totalQuantity}</TotalQuantity>}
      </CartButton>
      {dropdownOpen && (
        <Content>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          {totalQuantity !== 0 ? (
            <Bottom>
              <TotalOverallPrice>
                Total: $ {totalOverallPrice}
              </TotalOverallPrice>
              <CheckoutButton>Checkout</CheckoutButton>
            </Bottom>
          ) : (
            <EmptyMessage>No items</EmptyMessage>
          )}
        </Content>
      )}
    </Dropdown>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onInputChange: PropTypes.func,
  dropdownOpen: PropTypes.bool,
  openDropdown: PropTypes.func,
  closeDropdown: PropTypes.func
};

const Dropdown = styled.div`
  position: relative;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 1rem;

  svg {
    font-size: 1.25rem;
  }
`;

const TotalQuantity = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  height: 16px;
  width: 16px;
  background: gray;
  border-radius: 50%;
  padding: 0.25rem;
`;

const Content = styled.div`
  box-sizing: border-box;
  position: absolute;
  background: black;
  border: 1px solid gray;
  padding: 1rem 1rem 0 1rem;
  right: 0;
  max-height: calc(100vh - 54px);
  min-height: 205px;
  min-width: 334px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  background: black;
  border-top: 1px solid gray;
  margin: 1rem 0 0;
  padding: 1rem 0;
  position: sticky;
  bottom: 0;
`;

const TotalOverallPrice = styled.p`
  margin: 0;
  white-space: nowrap;
  width: 6rem;
`;

const CheckoutButton = styled.button`
  border: 1px solid gray;
  background: none;
  color: white;
  cursor: pointer;
  padding: 0.75rem;
  width: 10rem;

  &:hover {
    background: gray;
  }
`;

const EmptyMessage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

export default Cart;
