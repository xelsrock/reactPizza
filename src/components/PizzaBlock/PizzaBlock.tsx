import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { CartItemState, addItem, selectCartById } from '../../redux/slices/cartSlice';

const typesTitle: string[] = ['тонкое', 'традиционное'];

export type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating?: number;
  home: boolean;
};

const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  home,
}) => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartById(id));

  const [activeSizes, setActiveSizes] = React.useState(0);
  const [activeTypes, setActiveTypes] = React.useState(0);

  const addedCount = cartCount ? cartCount.count : 0;

  const onClickAdd = () => {
    const item: CartItemState = {
      id,
      title,
      price,
      imageUrl,
      type: typesTitle[activeTypes],
      size: sizes[activeSizes],
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={home ? 'pizza-block-wrapper' : 'full-pizza-block-wrapper'}>
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveTypes(typeId)}
                className={activeTypes === typeId ? 'active' : ''}>
                {typesTitle[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => setActiveSizes(index)}
                className={activeSizes === index ? 'active' : ''}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
