import React from 'react';
import { useParams } from 'react-router-dom';

import useFetch from './usefetch';
// import ProductDetails from './productDetails';
import PopUpPage from './popupPage';

export default function CartComp() {
  const { id } = useParams();

  const [data] = useFetch((`https://fakestoreapi.com/products/${id}`),[id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card">
      <h3>ID={data.id}</h3>
      <hr />
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} className="item-image" />
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <button className="btn" onClick={() => PopUpPage(data.id)}>Buy Now</button>
    </div>
  );
}
