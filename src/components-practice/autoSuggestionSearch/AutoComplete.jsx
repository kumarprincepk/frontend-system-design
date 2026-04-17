import React, { useState } from "react";
import SuggestionLists from "./SuggestionLists";

const AutoComplete = ({ data, onSelect }) => {
  const [inputValue, setInputValue] = useState("");
  const [hide, setHide] = useState(false);

  function handleChange(e) {
    let value = e.target.value;
    setInputValue(value);
    setHide(false)
  }

  function handleClear() {
    setInputValue("");
  }

  const suggestionData =
    inputValue &&
    data.filter((element) =>
      element.value.toLowerCase().includes(inputValue.toLowerCase()),
    );

   function handleSelect (value){
    onSelect(value);
    setInputValue(value);
    setHide(true);
  }


  return (
    <div>
      <input type="text" onChange={handleChange} value={inputValue} />
      {inputValue && <button onClick={handleClear}>Clear</button>}
      {!hide && <SuggestionLists data={suggestionData || []} handleSelect= {handleSelect} />}
    </div>
  );
};

export default AutoComplete;
