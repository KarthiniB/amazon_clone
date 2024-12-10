import { useEffect, useState} from "react"
import React from 'react';
import { Link } from 'react-router-dom';
// import useFetch from "./usefetch";

export default function CategoriesPage(){
    const [data, setData] = useState([]);

    // const [data] = useFetch("https://fakestoreapi.com/products/categories");
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(json => setData(json))  // Update the state with fetched data
        .catch((error) => console.error('Error fetching items:', error));
    }, []);
    
    
    return(
        <div className="card-categories-container">
            <div className="design-img"></div>
           {data.map((category) => (
            <div key={category} className="categories-card">
                <img src="data:image/jpeg;base64,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"></img>
                <Link to={category}>
                    <button className="btn">View {category}</button> 
                </Link>
            </div>
        ))}
        </div>
    );
}