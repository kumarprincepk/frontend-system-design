import React from "react";
import AutoComplete from "./AutoComplete";

const data = [
  { label: "Mango", value: "mango" },
  { label: "Guava", value: "guava" },
  { label: "Lichi", value: "lichi" },
  { label: "Man", value: "man" },
  { label: "Lion", value: "lion" },
];
export default function InputSuggestion() {
  const handleSelect = (value) => {
    console.log("selected Value is : ", value);
  };
  return (
    <div>
      <h1>Frontend System Design (Auto Suggestion)</h1>
      <AutoComplete data={data} onSelect={handleSelect} />
    </div>
  );
}
