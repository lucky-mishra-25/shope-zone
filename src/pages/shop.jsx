import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="shop-container">
      <h1>Our Products</h1>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} />
            <h3>{product.title}</h3>
            <p className="price">${product.price}</p>

            <Link to={`/product/${product.id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;