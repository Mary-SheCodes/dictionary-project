import React from "react";
import "./Synonyms.css";

const Synonyms = (props) => {
  if (props.data) {
    return (
      <div className="Synonyms">
        <span className="synonym-words">Synonyms: </span>

        {props.data.map((synonym, index) => {
          return <span key={index}> {synonym},</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Synonyms;
