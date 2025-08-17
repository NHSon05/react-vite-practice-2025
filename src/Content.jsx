import { useState } from "react"
import {Content , TimerFunction, PreviewAvatar , FakeChatApp}  from "./useEffect"


function TestMount() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {(show) && 
                // <Content/>
                // <TimerFunction/>
                // <PreviewAvatar/>
                <FakeChatApp/>
            }
        </div>
    )
}


export default TestMount