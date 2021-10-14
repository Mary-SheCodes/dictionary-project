import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeywordChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    setResults(response.data[0]);
  };

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results data={results} />
    </div>
  );
};

export default Dictionary;
