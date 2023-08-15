import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';
import {Input} from "./input.js"
import {Output} from "./output.js"

function App() {
	const [output, setOutput] = useState("");
    const [input, setInput] = useState("");
	const [number, setNumber] = useState("");
	const [sign, setSign] = useState("");

    const addNew = (e) => {
        if ((e.target.id === "digit") || ((e.target.id === "coma") && (!number.includes(".")) && (input !== ""))) {
            setNumber(number.concat(e.target.value));
            setInput(input.concat(e.target.value))

        } else if (e.target.id === "zero" && number.charAt(0) !== "0") {
            setNumber(number.concat(e.target.value));
            setInput(input.concat(e.target.value))

        } else if (e.target.id === "zero" && (number.includes("."))) {
            setNumber(number.concat(e.target.value));
            setInput(input.concat(e.target.value))

        } else if (number === "0" && e.target.id === 'coma') {
            setNumber(number.concat(e.target.value));
            setInput(input.concat(e.target.value))

        } else if (e.target.value === "+/-") {
                    if (!number.includes("-")) {
                        setNumber("-" + number)
                        setInput("-" + input)
                    } else if (number.includes("-")) {
                        setNumber(number.slice(1))
                        setInput(input.slice(1))
                    }

        } else if ((e.target.id === "operation") && (input !== "") && (input.charAt(input.length - 1) !== ("+" || "-" || "*" || "/"))) {
            setInput(input.concat(e.target.value));
            setNumber("")
        } 
        };
    
    const clear = () => {
        setInput(input.slice(0, -1));
        setNumber(number.slice(0, -1))
    };

    const clearAll = () => {
        setInput("");
        setNumber("")
    }

    const equals = () => {
            setOutput(eval(input))
    }

    return (
        <div className="container">
            <div className="container1">
                <Output value={output} />
                <Input value={input} />
            </div>

            <div className="container2">
                <button className="button-a" value="CA" onClick={clearAll}>CA</button>
                <button className="button-a" value="C" onClick={clear}>C</button>
                <button className="button-a">:)</button>
                <button id="operation" className="button-a" value="+" onClick={addNew}>+</button>

                <button id="digit" className="button-b" value="7" onClick={addNew}>7</button>
                <button id="digit" className="button-b" value="8" onClick={addNew}>8</button>
                <button id="digit" className="button-b" value="9" onClick={addNew}>9</button>
                <button id="operation" className="button-b" value="-" onClick={addNew}>-</button>

                <button id="digit" className="button-c" value="4" onClick={addNew}>4</button>
                <button id="digit" className="button-c" value="5" onClick={addNew}>5</button>
                <button id="digit" className="button-c" value="6" onClick={addNew}>6</button>
                <button id="operation" className="button-c" value="*" onClick={addNew}>*</button>

                <button id="digit" className="button-d" value="1" onClick={addNew}>1</button>
                <button id="digit" className="button-d" value="2" onClick={addNew}>2</button>
                <button id="digit" className="button-d" value="3" onClick={addNew}>3</button>
                <button id="operation" className="button-d" value="/" onClick={addNew}>/</button>	
		
                <button id="zero" className="button-e" value="0" onClick={addNew}>0</button>
                <button id="minusSign" className="button-e" value="+/-" onClick={addNew}>+/-</button>
                <button id="coma" className="button-e" value="." onClick={addNew}>.</button>
                <button className="button-e" value="=" onClick={equals}>=</button>
            </div>	
		</div>
    )
}
export default App;
