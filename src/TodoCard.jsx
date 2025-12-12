import React from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      borderRadius: "8px"
    }}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p><strong>Completed:</strong> {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default TodoCard;
