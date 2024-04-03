import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const query = enteredValue;
    props.onSaveQuery(query);
    setEnteredValue("");
  };

  const formResetHandler = () => {
    setEnteredValue("");
  };

  return (
    <div className="form">
      <div className="form-control">
        <input type="text" value={enteredValue} onChange={valueChangeHandler} />
      </div>
      <div className="form-actions__reset" onClick={formResetHandler}>
        <button>RESET</button>
      </div>
      <div className="form-actions__search">
        <button onClick={formSubmissionHandler}>SEARCH</button>
      </div>
    </div>
  );
};

export default SearchForm;
