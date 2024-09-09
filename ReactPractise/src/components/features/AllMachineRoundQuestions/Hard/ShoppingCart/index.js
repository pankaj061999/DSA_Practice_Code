import React from "react";
import { ProductList } from "./ProductList";
import { CartProvider } from "./CartContext";
import Cart from "./Cart";

export const ShoppingCart = () => {
  return (
    <CartProvider>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};
