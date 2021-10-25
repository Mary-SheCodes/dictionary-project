import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

const App = () => {
  return (
    <div className="Main">
      <div className="App">
        <div className="papersheet ">
          <div className="paperline">
            <Dictionary />
          </div>
        </div>
      </div>
      <footer className="Footer">
        <img className="logo" src="/logo/200x156.png" alt="logo" />
        Coded by
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/maryam-mohebbi-61b905126/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Maryam Mohebbi{" "}
        </a>
        and is open-sourced on
        <a
          className="footer-link"
          href="https://github.com/Mary-SheCodes/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        , hosted on
        <a
          className="footer-link"
          href="https://app.netlify.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify{" "}
        </a>
      </footer>
    </div>
  );
};

export default App;
