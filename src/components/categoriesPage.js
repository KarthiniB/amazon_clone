import { useEffect, useState} from "react"
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from "./usefetch";

export default function CategoriesPage(){

    const [data] = useFetch('https://fakestoreapi.com/products/categories');
    
    return(
        <div className="card-categories-container">
           {data.map((category) => (
            <div key={category} className="categories-card">
                <Link to={category}>
                    <button className="btn">View {category}</button> 
                </Link>
            </div>
        ))}
        </div>
    );
}