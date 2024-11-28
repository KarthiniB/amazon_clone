import { useEffect, useState} from "react"
import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoriesPage(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then((response)=>response.json())
            .then((data)=>setCategories(data))
            .catch((error) => console.error('Error fetching categories:', error));
        }, []);
    
    return(
        <div className="card-categories-container">
           {categories.map((categories) => (
            <div key={categories} className="categories-card">
                <Link to={categories}>
                    <button className="btn">View {categories}</button> 
                </Link>
        </div>
      ))}
        </div>
    );
}