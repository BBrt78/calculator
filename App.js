import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';
import {Input} from "./input.js"
import {Output} from "./output.js"

function App() {

    const [output, setOutput] = useState("");
    const [input, setInput] = useState([]);

    const addInput = (e) => {
        if (input.includes(".") && e.target.value === ".") {
        } else if (e.target.value === "+") {
            setInput([...input, e.target.value, " "]);
            setOutput([...output, input])
        } else {
            setInput([...input, e.target.value, " "])
        } console.log(input)
    }
   
    return (
        <div className="container">
            <div className="container1">
                <Output value={output}/>
                <Input value={input}/>
            </div>

            <div className="container2">
                <button className="ca button-a" value="CA">CA</button>
                <button className="c button-a" value="C">C</button>
                <button className="button-a" value="%" onClick={addInput}>%</button>
                <button className="button-a" value="+" onClick={addInput}>+</button>

                <button className="button-b" value="7" onClick={addInput}>7</button>
                <button className="button-b" value="8" onClick={addInput}>8</button>
                <button className="button-b" value="9" onClick={addInput}>9</button>
                <button className="button-b" value="-" onClick={addInput}>-</button>

                <button className="button-c" value="4" onClick={addInput}>4</button>
                <button className="button-c" value="5" onClick={addInput}>5</button>
                <button className="button-c" value="6" onClick={addInput}>6</button>
                <button className="button-c" value="*" onClick={addInput}>*</button>

                <button className="button-d" value="1" onClick={addInput}>1</button>
                <button className="button-d" value="2" onClick={addInput}>2</button>
                <button className="button-d" value="3" onClick={addInput}>3</button>
                <button className="button-d" value="/" onClick={addInput}>/</button>	
		
                <button className="button-e" value="0" onClick={addInput}>0</button>
                <button className="button-e" value="." onClick={addInput}>.</button>
                <button className="button-e" value="+/-" onClick={addInput}>+/-</button>
                <button className="= button-e" value="=">=</button>
            </div>	
		</div>
    )
}
export default App;
