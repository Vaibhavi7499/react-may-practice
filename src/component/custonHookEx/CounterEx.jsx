import useCounter from "./useCounter";

const CounterEx = () => {
  const [counter, increment, decrement, reset] = useCounter(0);
  return (
    <div>
      <h2>Counter is : {counter}</h2>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterEx;
