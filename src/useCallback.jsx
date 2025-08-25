import {useCallback, useState } from "react";
import Tet from "./text.jsx";

export default function UseCallB(){
    const [count, setCount] = useState(0)

    const handleIncrease = useCallback(() => {
        setCount(prev => prev + 1)
    },[])

    return (
        <div>
            <Tet onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}