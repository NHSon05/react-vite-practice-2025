// import { useState } from "react"
import {Content , TimerFunction, PreviewAvatar , FakeChatApp}  from "./useEffect"
import { UseLayout, UseRef,Memo } from "./useLayoutEffect";
import UseCallB from "./useCallback";
import UseMem from "./useMem.jsx";
import UseReduce from "./useReduce.jsx";
import ToDoApp from "./toDoApp.jsx";
import UseContest from "./UseContext.jsx";
import ConReducer from "./ConReducer.jsx";


function TestMount() {
    return (
        <div>
            <button>Change theme</button>
            <ConReducer/>
        </div>
    )
}


export default TestMount