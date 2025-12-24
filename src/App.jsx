import React, { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 80000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 },
  // imagine 1000+ products...
];

export default function App() {
  const [counter, setCounter] = useState(0);
  const [products] = useState(productsData);

  // ❌ Without useMemo → recalculates every render
  // ✔️ With useMemo → recalculates only when products change
  const totalPrice = useMemo(() => {
    console.log("Recalculating TOTAL PRICE...");
    return products.reduce((sum, item) => sum + item.price, 0);
  }, [products]);

  // ❌ Without useCallback → new function created every render
  // ✔️ With useCallback → stable function reference
  const handleSelect = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Performance Optimization</h1>

      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList products={products} onSelect={handleSelect} />
    </div>
  );
}
