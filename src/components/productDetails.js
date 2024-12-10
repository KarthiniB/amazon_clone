import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useNavigate } from "react-router-dom";
import PopUpPage from "./popupPage";

export default function ProductDetails() {

    const [data] = useFetch((`https://fakestoreapi.com/products/${id}`),[id]);
    // const navigate = useNavigate();

  const { id } = useParams()
  // Find the product based on the id
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="card">
    <h3>ID={product.id}</h3>
    <hr />
    <h2>{product.title}</h2>
    <img src={product.image} alt={product.title} className="item-image" />
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <button className="btn" onClick={() => PopUpPage(data.id)}>Buy Now</button>
  </div>
  );
}


