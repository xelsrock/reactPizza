import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = state.items.reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, obj) => {
        return acc + obj.price * obj.count;
      }, 0);
    },
    clearItem(state, action) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state) => state.cartSlice;
export const selectCartById = (id) => (state) => state.cartSlice.items.find((obj) => obj.id === id);

export const { addItem, removeItem, minusItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
