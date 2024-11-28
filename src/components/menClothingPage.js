import React, { useState, useEffect } from 'react';
import Popup from './Popup';

function MenclothingPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then(res => res.json())
      .then(json => setItems(json))  // Update the state with fetched data
      .catch((error) => console.error('Error fetching items:', error));
  }, []);

  return (
    <div className="card-container">
      {items.map((item) => (
        <div key={item.id} className="card">
          <h3>ID={item.id}</h3>
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} className="item-image" />
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button className='btn'>Add To Cart</button>
          <br/>
          <br/>
          <button className='btn' onClick={Popup}>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default MenclothingPage;