import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="papersheet ">
        <div className="paperline">
          <Dictionary />
        </div>
      </div>
    </div>
  );
};

export default App;
