import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h2 className="header-typeofword">{props.data.partOfSpeech}</h2>

      {props.data.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <span className="example">Example: </span>
            {definition.example}
              <br />
              <Synonyms data={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Meaning;
