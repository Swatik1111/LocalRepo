import React, { useState } from 'react'
import './App.css';
//import index from './index.css';

function MyComponents() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => setCount(count + 1)
    const decrementCounter = () => setCount(count - 1)
    const reset = () => {

        setCount(0)
    }



    return (<div className="container">
        <p className="counter-display">Count:{count}</p>

        <buttton className="button-display" onClick={incrementCounter}>Increment</buttton>

        <buttton className="button-display" onClick={decrementCounter}>Decrement</buttton>

        <buttton className="button-display" onClick={reset}>Reset</buttton>
    </div>);
}
export default MyComponents