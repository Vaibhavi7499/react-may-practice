import useCounter from "./useCounter";
import "./counterEx.scss";

const CounterEx = () => {
  const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <div>
      <div>
        <h2>Counter is : {counter}</h2>
      </div>
      <div>
        <button className="btn btn-success" onClick={increment}>Inc</button>
        <button className="btn btn-secondary" onClick={decrement}>Dec</button>
        <button className="btn btn-danger" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default CounterEx;
