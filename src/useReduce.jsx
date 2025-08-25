import { useState, useMemo, memo,useRef, useReducer } from "react";

//  useState
//  1. Init state: 0
//  2. action: (state + 1)  Down(state -1)


//  useReducer
//  1. Init state: 0
//  2. Action: Up(state + 1)    down(state -1)
//  3. Reducer
//  4. Dispatch

// Init State
const initState = 0;

// Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

// Reducer
const reducer = (state, action) => {
    switch(action){
        case UP_ACTION:
            return state + 1
        case DOWN_ACTION:
            return state - 1
        default:
            throw new Error('Invalid Action');
    }
}


function UseReduce(){
    const [count, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <h1>{count}</h1>
            <button 
                onClick={() => dispatch(DOWN_ACTION)}
            >
                Down
            </button>
            <button
                onClick={() => dispatch(UP_ACTION)}
            >
                Up
            </button>
        </div>
    )
}

export default UseReduce