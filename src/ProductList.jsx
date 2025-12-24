import React from "react";

export default function ProductList({ products, onSelect }) {
  console.log("ProductList rendered!");

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Products</h3>
      {products.map((p) => (
        <div
          key={p.id}
          style={{ border: "1px solid #aaa", padding: 10, marginTop: 5 }}
        >
          <p>{p.name} — ₹{p.price}</p>
          <button onClick={() => onSelect(p)}>Select</button>
        </div>
      ))}
    </div>
  );
}
