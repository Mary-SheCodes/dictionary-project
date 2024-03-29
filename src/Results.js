import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

const Results = (props) => {
  if (props.data) {
    return (
      <div className="Results">
        <h2 className="header-word">{props.data.word}</h2>
        <Phonetics data={props.data.phonetics} />

        {props.data.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
