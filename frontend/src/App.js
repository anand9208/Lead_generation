import React from "react";
import LeadForm from "./components/LeadForm";
import LeadList from "./components/LeadList";

function App() {
  return (
    <div style={{ margin: "2rem" }}>
      <h1>Lead Generation App</h1>
      <LeadForm />
      <LeadList />
    </div>
  );
}

export default App;