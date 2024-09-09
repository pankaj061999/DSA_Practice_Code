import React from "react";
import { useCart } from "../CartContext";

export const ProductList = () => {
  const productData = [
    {
      id: 1,
      path: "https://i.postimg.cc/pLj22V9h/animal-Bend.jpg",
      price: 12,
      quantity: 12,
    },
    {
      id: 2,
      path: "https://i.postimg.cc/pLj22V9h/animal-Bend.jpg",
      price: 12,
      quantity: 12,
    },
    {
      id: 3,
      path: "https://i.postimg.cc/pLj22V9h/animal-Bend.jpg",
      price: 12,
      quantity: 12,
    },
    {
      id: 4,
      path: "https://i.postimg.cc/pLj22V9h/animal-Bend.jpg",
      price: 12,
      quantity: 12,
    },
  ];

  const { addToCart } = useCart();

  return (
    <div>
      <h1 style={{ fontSize: "20px", textAlign: "center" }}>Product List</h1>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          padding: 0,
          listStyleType: "none",
        }}
      >
        {productData.map((item) => (
          <li
            key={item.id}
            style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}
          >
            <img
              alt={item.id}
              src={item.path}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => addToCart(item)} style={{ marginTop: "10px" }}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
