import React, { useState } from "react";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);
  const search = (event) => {
    event.preventDefault();
    alert(`Seraching for ${keyword}`);
  };

  const handleKeywordChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
};

export default Dictionary;
