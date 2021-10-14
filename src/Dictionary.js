import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    setError();
    setResults();
    axios.get(apiUrl).then(handleResponse).catch(showError);
  };

  const handleKeywordChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    setResults(response.data[0]);
  };

  const showError = (error) => {
    if (error.response) {
      // Request made and server responded
      if (error.response.status === 404) {
        setError(
          "Sorry, We couldn't find definitions for the word you were looking for. Please try again or check the word"
        );
        setResults();
      } else {
        setError(error.response.data.message);
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      setError("Could not connect to server");
    }
  };

  return (
    <div className="Dictionary">
      Search a word ...
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      {error}
      <Results data={results} />
    </div>
  );
};

export default Dictionary;
