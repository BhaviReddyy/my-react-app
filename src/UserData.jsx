import { useEffect, useState } from "react";

function UserData() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 style={{ color: "#222" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "300px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
        color: "#222"   // Dark text visible
      }}
    >
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default UserData;
