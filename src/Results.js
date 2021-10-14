import React from "react";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.data) {
    return (
      <div className="Results">
        <h3>{props.data.word}</h3>
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
