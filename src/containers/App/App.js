import React from "react";
import Layout from "../../components/Layout/Layout";
import "./App.css";
import Homescreen from "../Homscreen/Homescreen";

function App() {
  return (
    <div className="App">
      <Layout>
        <Homescreen></Homescreen>
      </Layout>
    </div>
  );
}

export default App;
