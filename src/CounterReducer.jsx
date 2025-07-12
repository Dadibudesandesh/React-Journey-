
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        case 'reset': return initialState;
        default: return state;
    }
}

function CounterReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default CounterReducer;
