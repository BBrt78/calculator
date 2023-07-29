import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';
import {Input} from "./input.js"
import {Output} from "./output.js"

function App() {
    
    const addSign = () => {
        
    };
    const [output, setOutput] = useState("output");
    const [input, setInput] = useState("input");
   
    return (
        <div className="container">
            <div className="container1">
                <Output value={output} />
                <Input value={input} />
            </div>

            <div className="container2">
                <button className="ca button-a" value="CA">CA</button>
                <button className="c button-a" value="C">C</button>
                <button className="button-a" value="%">%</button>
                <button className="button-a" value="+">+</button>

                <button className="button-b" value="7" onClick={addSign}>7</button>
                <button className="button-b" value="8" onClick={addSign}>8</button>
                <button className="button-b" value="9" onClick={addSign}>9</button>
                <button className="button-b" value="-" onClick={addSign}>-</button>

                <button className="button-c" value="4" onClick={addSign}>4</button>
                <button className="button-c" value="5" onClick={addSign}>5</button>
                <button className="button-c" value="6" onClick={addSign}>6</button>
                <button className="button-c" value="*" onClick={addSign}>*</button>

                <button className="button-d" value="1" onClick={addSign}>1</button>
                <button className="button-d" value="2" onClick={addSign}>2</button>
                <button className="button-d" value="3" onClick={addSign}>3</button>
                <button className="button-d" value="/" onClick={addSign}>/</button>	
		
                <button className="button-e" value="0" onClick={addSign}>0</button>
                <button className="button-e" value="+/-" onClick={addSign}>+/-</button>
                <button className="= button-e" value="=">=</button>
            </div>	
		</div>
    )
}
export default App;
