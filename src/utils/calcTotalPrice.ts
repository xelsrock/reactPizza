import { CartItemState } from '../redux/slices/cartSlice';

export const calcTotalPrice = (items: CartItemState[]) => {
  return items.reduce((acc, obj) => {
    return acc + obj.price * obj.count;
  }, 0);
};
