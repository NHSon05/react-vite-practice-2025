import { useState } from "react"
import {Content , TimerFunction, PreviewAvatar , FakeChatApp}  from "./useEffect"
import { UseLayout, UseRef,Memo } from "./useLayoutEffect";


function TestMount() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {(show) && 
                // <Content/>
                // <TimerFunction/>
                // <PreviewAvatar/>
                // <FakeChatApp/>

                <UseRef/>
                // <UseLayout/>
                // <Memo/>
            }
        </div>
    )
}


export default TestMount