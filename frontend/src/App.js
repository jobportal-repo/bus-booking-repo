import React from "react";
import Navbar from "./components/Navbar";
import BusList from "./components/BusList";

const App = () => (
  <div>
    <Navbar />
    <div style={{ padding: "1rem" }}>
      <BusList />
    </div>
  </div>
);

export default App;