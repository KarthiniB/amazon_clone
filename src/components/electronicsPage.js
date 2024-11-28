import React, { useState, useEffect } from "react";
import PopUpPage from "./popupPage";
export default function ElectronicsPage(){
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then((response) => (response.json))
        .then((json)=>setItems(json))
        .catch((error)=> console.error('Error fetching items: ', error));
    }, []);
    return(
        <div className="card-container">
            {items.map((item)=> (
                <div key={item.id} className="card">
                    <h3>ID={item.id}</h3>
                    <h2>{item.title}</h2>
                    <img src={item.image} alt={item.title} className="item-image"></img>
                    <p>{item.description}</p>
                    <p>Price: ${item.price}</p>
                    <button className="btn">Add to Cart</button>
                    <br/>
                    <br/>
                    <button className="btn" onClick={PopUpPage}>Buy now</button>
                </div>
            ))}
        </div>
    );
}