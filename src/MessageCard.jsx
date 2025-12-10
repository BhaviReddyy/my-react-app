function MessageCard({ title, message }) {
  const cardStyle = {
    border: "1px solid #444",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
    background: "#ffffff",
    width: "300px",
    color: "#222",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.2)"
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>
      <p>{message}</p>
    </div>
  );
}

export default MessageCard;
