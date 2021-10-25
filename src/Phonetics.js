import React from "react";
import "./Phonetics.css";

const Phonetics = (props) => {
  const PlayAudio = (props) => {
    console.log(props);
    let audio = new Audio(props);
    audio.play();
  };

  return (
    <div className="Phonetics">
      {props.data.map((phonetic, index) => {
        return (
          <div key={index}>
            <span>
              <i
                onClick={() => PlayAudio(phonetic.audio)}
                className="fas fa-play"
              ></i>
            </span>
            {"  "}
            <span className="phonetic-text">{phonetic.text}</span>
          </div>
        );
      })}
    </div>
  );
};
export default Phonetics;
