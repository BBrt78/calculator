import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';

export const Output = (props) => {
    return (
        <div className="output">{props.value}</div>
    )
}