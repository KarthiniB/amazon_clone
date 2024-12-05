import React,{useState, useEffect} from 'react';
import Delete from './delete';
import Edit from './edit';
export default function ProductButton(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>setData(data))
        .catch((error) => console.error('Error fetching categories:', error));
    },[]);

     return (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Image</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="product-image" 
                    style={{ width: '50px', height: '50px' }} 
                  />
                </td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>
                    <button className='btn' onClick={Delete}>Delete</button>
                    <br/>
                    <br/>
                    <button className='btn' onClick={Edit}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );   
}

