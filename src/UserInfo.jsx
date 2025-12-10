function UserInfo({ name, age }) {
  return (
    <div style={{ 
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px",
      borderRadius: "8px",
      width: "250px",
      background: "#ffffff",
      color: "#222",       // 👈 This line makes text visible
      boxShadow: "0 0 10px rgba(0,0,0,0.15)"
    }}>
      <h3>User Information</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;
