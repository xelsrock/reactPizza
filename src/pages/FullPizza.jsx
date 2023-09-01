import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = React.useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://64b0146cc60b8f941af53120.mockapi.io/pizzas/' + id,
        );
        setPizza(data);
      } catch (error) {
        alert('Ошибка при получени пиццы!');
        navigate('/');
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {pizza ? (
        <>
          <img src={pizza.imageUrl} alt="" />
          <h2>{pizza.title}</h2>
          <h4>{pizza.price}</h4>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default FullPizza;
