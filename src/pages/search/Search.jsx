import React, { useState } from "react";
import NavbarSearch from "./NavbarSearch";
import SearchForm from "./SearchForm";
import ResultList from "./ResultList";

const Search = () => {
  const [query, setQuery] = useState("");

  const saveQueryHandler = (queryData) => {
    setQuery(queryData);
  };

  return (
    <div className="app" style={{ backgroundColor: "black" }}>
      <NavbarSearch></NavbarSearch>
      <SearchForm onSaveQuery={saveQueryHandler}></SearchForm>
      <ResultList query={query}></ResultList>
    </div>
  );
};

export default Search;
