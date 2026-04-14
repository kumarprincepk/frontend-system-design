import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const Debouncing = () => {
  const [input, setInput] = useState("");
  // const [debouncedValue, setDebouncedValue] = useState("");

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setDebouncedValue(input);
  //   }, 500);
  //   return () => clearTimeout(timer);
  // }, [input]);

  const debouncedValue = useDebounce(input, 3000);

  return (
    <div>
      <h1>Debouncing</h1>
      <input
        type="text"
        placeholder="search.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {debouncedValue}
    </div>
  );
};
export default Debouncing;
