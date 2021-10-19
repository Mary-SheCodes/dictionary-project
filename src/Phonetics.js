import React from "react";
import "./Phonetics.css";

const Phonetics = (props) => {
  console.log(props.data);

  return (
    <div className="Phonetics">
      {props.data.map((phonetic, index) => {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noreferrer">
              <i class="fas fa-play"></i>
            </a>{" "}
            <span className="phonetic-text">{phonetic.text}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Phonetics;
