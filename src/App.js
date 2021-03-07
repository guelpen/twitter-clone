import React from "react";
import Sidebar from "./Sidebar"
import './App.css';

function App() {
  return (
    //BEM
    <div className="app">
      <h1>Hey Clever Programmers... Let's build a Twitter Clone</h1>
      {/*Side bar */}
      <Sidebar />
      {/* Feed */}

      {/*Widgets */}
    </div>
  );
}

export default App;
