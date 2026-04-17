import React from "react";

const SuggestionLists = ({ data, handleSelect }) => {
 
  function handleClick (value){
    return ()=> handleSelect(value)
  }
  return (
    <div>
      {data.map((item) => (
        <button key={item.value} onClick={handleClick(item.label)}>{item.label}</button>
      ))}
    </div>
  );
};
export default SuggestionLists;