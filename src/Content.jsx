import { useState } from "react"
import {Content , TimerFunction, PreviewAvatar , FakeChatApp}  from "./useEffect"
import { UseLayout, UseRef,Memo } from "./useLayoutEffect";
import UseCallB from "./useCallback";
import UseMem from "./useMem.jsx";
import UseReduce from "./useReduce.jsx";

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

                // <UseRef/>
                // <UseCallB/>
                // <UseLayout/>
                // <Memo/>
                // <UseMem/>
                <UseReduce/>
            }
        </div>
    )
}


export default TestMount