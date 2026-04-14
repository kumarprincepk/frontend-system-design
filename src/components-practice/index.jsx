// import Debouncing from "./debouncing/Debouncing";

import { Provider } from "react-redux";
import Counter from "./simpleCounterWithReduxToolkit/counterComponent/Counter";
import store from "./simpleCounterWithReduxToolkit/store";

const MainComponent = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
      {/* <Debouncing/> */}
    </div>
  );
};
export default MainComponent;
