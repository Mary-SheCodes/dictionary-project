import React from "react";

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
              Example: {definition.  example}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default Meaning;
