import { useEffect, useState, useLayoutEffect, useRef } from "react";
import MemoContent from "./Memo";

export function UseLayout() {
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3){
            setCount(0)
        }
    },[count])

    const handleRun = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun}>Run</button>
        </div>
    )
}

export function UseRef() {
    const [count, setCount] = useState(60)

    const ref = useRef(36)
    let timeId = useRef()
    console.log(ref.current)

    const handleStart = () => {

        timeId.current = setInterval(() => {

            ref.current = Math.random()

            setCount(prevCount => prevCount - 1)
        },1000)

        console.log('Start -->', timeId.current);
    }

    const handleStop = () => {
        clearInterval(timeId.current);

        console.log('Stop -->', timeId.current);
    }  
    
    const inputRef = useRef(null);

    useEffect(() => {
        // Tự động focus vào input khi component được mount
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export function Memo() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const increase = () => {
        setCount(count + 1)
    }
    const increase1 = () => {
        setCount1(count1 + 1)
    }
    

    return(
        <div> 
            <MemoContent count={count}/>
            <h1>{count}</h1>
            <h1>{count1}</h1>
            <button onClick={increase}>CLick me!</button>
            <button onClick={increase1}>CLick me 2!</button>
        </div>
    )
}