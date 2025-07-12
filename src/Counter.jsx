import useCounter from "./useCounter";
function Counter(){
    const {count,increment,decrement,reset} = useCounter();
    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;