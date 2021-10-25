import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import Results from "./Results";

import "./Dictionary.css";

const Dictionary = () => {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = (event) => {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    setError();
    setResults();
    setLoading(true);
    axios.get(apiUrl).then(handleResponse).catch(showError);
  };

  const handleKeywordChange = (event) => {
    event.preventDefault();
    setKeyword(event.target.value);
  };

  const handleResponse = (response) => {
    setLoading(false);
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
        setLoading(false);
      } else {
        setError(error.response.data.message);
      }
    } else {
      // Something happened in setting up the request that triggered an Error
      setError("Could not connect to server");
    }
  };

  if (loading) {
    return (
      <div className="Dictionary">
        <h1 className="header-search">What word are you looking for?</h1>
        <form onSubmit={search}>
          <div className="input-group flex-nowrap">
            <span className="input-group-text">🔎</span>
            <input
              type="search"
              className="form-control"
              placeholder="Enter a Word"
              aria-label="Search"
              onChange={handleKeywordChange}
            />
          </div>
        </form>
        {error}
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />{" "}
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <h1 className="header-search">What word are you looking for?</h1>
        <form onSubmit={search}>
          <div className="input-group flex-nowrap">
            <span className="input-group-text">🔎</span>
            <input
              type="search"
              className="form-control"
              placeholder="Enter a Word"
              aria-label="Search"
              onChange={handleKeywordChange}
            />
          </div>
        </form>

        {error}
        <Results data={results} />
      </div>
    );
  }
};

export default Dictionary;
