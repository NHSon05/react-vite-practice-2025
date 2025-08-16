import { useState } from "react"
import {Content , TimerFunction, PreviewAvatar}  from "./useEffect"


function TestMount() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {(show) && 
                // <Content/>
                // <TimerFunction/>
                <PreviewAvatar/>
            }
        </div>
    )
}


export default TestMount