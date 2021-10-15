import React from "react";

const Synonyms = (props) => {
  if (props.data) {
    return (
      <div className="Synonyms">
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
