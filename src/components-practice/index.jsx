// import Debouncing from "./debouncing/Debouncing";
// import { Provider } from "react-redux";
// import Counter from "./simpleCounterWithReduxToolkit/counterComponent/Counter";
// import store from "./simpleCounterWithReduxToolkit/store";
import DynamicButton from "./dynamicButton";

const MainComponent = () => {
  return (
    <div>
      <DynamicButton/>
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}
      {/* <Debouncing/> */}
    </div>
  );
};
export default MainComponent;
