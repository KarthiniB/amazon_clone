import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from './usefetch';

function MenclothingPage() {
  const [data] = useFetch("https://fakestoreapi.com/products/category/men's clothing");
  const navigate = useNavigate();

  const handleAddToCart = (itemId) => {
    navigate("/cart/${itemId}");
  };
  


  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch("https://fakestoreapi.com/products/category/men's clothing")
  //     .then(res => res.json())
  //     .then(json => setItems(json))  // Update the state with fetched data
  //     .catch((error) => console.error('Error fetching items:', error));
  // }, []);

  return (
    <div className="card-container">
      {data.map((item) => (
        <div key={item.id} className="card">
          <h3>ID={item.id}</h3>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} className="item-image" />
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button className='btn' onClick={handleAddToCart}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default MenclothingPage;