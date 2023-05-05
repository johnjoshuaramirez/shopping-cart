import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CartItem = ({
  item,
  onDelete,
  onIncrement,
  onDecrement,
  onInputChange
}) => {
  const [totalItemPrice, setTotalItemPrice] = useState(0);
  const isMinimum = item.quantity <= 1;
  const isMaximum = item.quantity >= item.stock;

  useEffect(() => {
    setTotalItemPrice(item.price * item.quantity);
  }, [item]);

  return (
    <ItemWrapper>
      <Image src={item.url} />
      <Title>{item.title}</Title>
      <Stock>Stock: {item.stock}</Stock>
      <ItemPrice>$ {item.price}</ItemPrice>
      <Quantity>
        <IncrementButton disabled={isMinimum} onClick={() => onDecrement(item)}>
          -
        </IncrementButton>
        <QuantityInput
          type="text"
          value={item.quantity}
          onChange={e => onInputChange(item, e)}
        />
        <DecrementButton disabled={isMaximum} onClick={() => onIncrement(item)}>
          +
        </DecrementButton>
      </Quantity>
      <TrashButton onClick={() => onDelete(item)}>
        <FontAwesomeIcon icon={faTrashCan} />
      </TrashButton>
      <TotalPrice>Total: $ {totalItemPrice.toFixed(2)}</TotalPrice>
    </ItemWrapper>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    quantity: PropTypes.number
  }),
  
  onDelete: PropTypes.func,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onChange: PropTypes.func
}

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 7rem auto;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  column-gap: 1rem;
  row-gap: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`;

const Image = styled.img`
  height: 6rem;
  width: 4rem;
  grid-column: 1 / 2;
  grid-row: 1 / 5;
`;

const Title = styled.h5`
  margin: 0;
  grid-column: 2 / 4;
  grid-row: 1 / 2;
`;
const Stock = styled.p`
  margin: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  font-size: 0.875rem;
  white-space: nowrap;
`;
const ItemPrice = styled.p`
  font-size: 0.875rem;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 0;
  white-space: nowrap;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 4 / 5;
`;

const IncrementButton = styled.button`
  background: none;
  border: 1px solid gray;
  color: white;

  &:disabled {
    color: gray;
  }

  &:enabled:hover {
    border-color: white;
  }
`;

const DecrementButton = styled.button`
  background: none;
  border: 1px solid gray;
  color: white;

  &:disabled {
    color: gray;
  }

  &:enabled:hover {
    border-color: white;
  }
`;

const QuantityInput = styled.input`
  background: none;
  border: 1px solid gray;
  border-left: none;
  border-right: none;
  color: white;
  outline: none;
  width: 1rem;
  text-align: center;
`;

const TrashButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  justify-self: end;
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  padding: 0;
  width: fit-content;

  svg:hover {
    color: gray;
  }
`;

const TotalPrice = styled.p`
  font-size: 0.875rem;
  margin: 0;
  grid-column: 3 / 4;
  grid-row: 4 / 5;
  white-space: nowrap;
  width: 5.75rem;
`;

export default CartItem;
