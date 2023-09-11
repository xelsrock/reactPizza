import { CartItemState } from "../redux/slices/cartSlice";
import { calcTotalPrice } from "./calcTotalPrice";

export const getItemLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);

  return {
    items: items as CartItemState[],
    totalPrice
  }
}