import MessageCard from "./MessageCard";

function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <MessageCard 
        title="Welcome" 
        message="This is the first message card!" 
      />

      <MessageCard 
        title="Updates" 
        message="Here are some recent updates." 
      />

      <MessageCard 
        title="Reminder" 
        message="Don't forget to submit your assignments!" 
      />

      <MessageCard 
        title="Thank You!" 
        message="Thank you for learning React!" 
      />
    </div>
  );
}

export default App;

