import UserInfo from "./UserInfo";

function UserProfile() {
  const user = {
    name: "Bhavya Reddy",
    age: 21,
  };

  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
}

export default UserProfile;

