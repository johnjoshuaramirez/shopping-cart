import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  dropdownOpen: false
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedBook = action.payload;
      const selectedCartItem = state.cartItems.find(
        item => item.id === selectedBook.id
      );
      if (!selectedCartItem) {
        state.cartItems.push({ ...selectedBook, quantity: 1 });
      } else if (selectedCartItem.quantity < selectedCartItem.stock) {
        selectedCartItem.quantity++;
      }
    },
    remove(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload.id
      );
    },
    decrement: (state, action) => {
      const selectedCartItem = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (selectedCartItem.quantity > 1) {
        selectedCartItem.quantity--;
      }
    },
    increment: (state, action) => {
      const selectedCartItem = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (selectedCartItem.quantity < action.payload.stock) {
        selectedCartItem.quantity++;
      }
    },
    update(state, action) {
      const { id, quantity } = action.payload;
      const selectedCartItem = state.cartItems.find(item => item.id === id);
      selectedCartItem.quantity = quantity;
    }
  }
});

export const { addToCart, remove, decrement, increment, update } = cartSlice.actions;
export default cartSlice.reducer;
