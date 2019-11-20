import React from "react";
import Layout from "../../components/Layout/Layout";
import "./App.css";
import TodoItems from "../TodoItems/TodoItems";

function App() {
  return (
    <div className="App">
      <Layout>
        <TodoItems></TodoItems>
      </Layout>
    </div>
  );
}

export default App;
