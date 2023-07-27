import './App.css';
import {useState, useRef, useEffect, useReducer, createContext, useContext} from 'react';

export const Input = (props) => {
    return (
        <div className="input">{props.value}</div>
    )
}