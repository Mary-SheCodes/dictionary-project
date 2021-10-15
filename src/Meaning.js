import React from "react";
import Synonyms from "./Synonyms";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h5>{props.data.partOfSpeech}</h5>

      {props.data.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              Example: {definition.example}
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
