import { useEffect, useState } from "react"
import React from 'react';
export default function CategoriesPage(){
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
            .catch((error) => console.error('Error fetching data:', error));
        }, []);

    const [data, setData] = useState(null);
    
    return(
        <div>
            {data (
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
           </ul> 
            )}
        </div>
    );
}