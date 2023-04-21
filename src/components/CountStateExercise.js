import { useState } from "react";
import "../App.css"

export function CountStateExercise() {
    let [count,setCount] = useState(0);

    return (
        <div className="App">
            <button className="btn-minimalistic" onClick={() => setCount(count = count + 1)}> Increase count </button>
            <button className="btn-minimalistic" onClick={() => setCount(count = count - 1)}> Decrease count </button>
            <button className="btn-minimalistic" onClick={() => setCount(0)}> Set to zero </button>

            <div style={{color: "black", fontSize: 25, fontWeight: "bold"}}>{count}</div>
        </div>
    );
}