import React, { useState } from "react";
import axios from "axios";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    console.log(response.data[0]);
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
