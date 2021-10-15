import React from "react";

const Phonetics = (props) => {
  console.log(props.data);

  return (
    <div className="Phonetics">
      {props.data.map((phonetic, index) => {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>{" "}
            {phonetic.text}
          </div>
        );
      })}
    </div>
  );
};
export default Phonetics;
