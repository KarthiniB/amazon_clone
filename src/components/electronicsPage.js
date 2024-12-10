import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "./usefetch";

export default function ElectronicsPage() {
    const [data] = useFetch("https://fakestoreapi.com/products/category/electronics");
    const navigate = useNavigate();

    const handleAddToCart = (itemId) => {
      navigate(`/cart/${itemId}`);
    };
    

    return (
       <div className="card-container">
        {data.map((item) => (
          <div key={item.id} className="card">
            <h3>ID={item.id}</h3>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.title} className="item-image" />
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button className='btn' onClick={()=>handleAddToCart(item.id)}>Add To Cart</button>
          </div>
        ))}
      </div>
    );
  }
  