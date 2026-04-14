import { useDispatch, useSelector } from "react-redux";
import { decrementFun, incrementFun, incrementFunByNum } from "./counterSlice";


const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value)
  return(
    <div>
      <h1>Counter with redux toolkit {count}</h1>
      <button onClick={()=>dispatch(incrementFun())}>Increment</button>
      <button onClick={()=>dispatch(decrementFun())}>Decrement</button>
      <button onClick={()=>dispatch(incrementFunByNum(5))}>Increment By 5</button>
    </div>
  )
}
export default Counter;