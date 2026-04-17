// import Debouncing from "./debouncing/Debouncing";
// import { Provider } from "react-redux";
// import Counter from "./simpleCounterWithReduxToolkit/counterComponent/Counter";
// import store from "./simpleCounterWithReduxToolkit/store";
// import DynamicButton from "./dynamicButton";

import InputSuggestion from "./autoSuggestionSearch";

const MainComponent = () => {
  return (
    <div>
      <InputSuggestion/>
      {/* <DynamicButton/> */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}
      {/* <Debouncing/> */}
    </div>
  );
};
export default MainComponent;
