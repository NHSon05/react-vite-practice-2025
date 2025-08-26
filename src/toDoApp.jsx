import { useState, useMemo, memo,useRef, useReducer } from "react";

/*  useReducer
    1. Init state
*/ 
const initState = {
    job: '',
    jobs: []
}

// 2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
    return{
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// 3. Reducer
const reducer = (state, action) => {
     
    let newState

    switch(action.type){
        case SET_JOB:
            return{
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            newState =  {
                ...state,
                jobs: [...state.jobs, action.payload],
                job: ''
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('Invalid action')
    }

    console.log('New State:', newState)
    return newState
}
 


function ToDoApp(){
    const [state,dispatch] = useReducer(reducer, initState)

    const {job, jobs} = state

    const handleSumbit = () => {
        dispatch(addJob(job))
        inputRef.current.focus()
    }

    const inputRef = useRef()


    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
                placeholder="Enter todo..."
                onKeyDown={(e) => (e.key === "Enter" ? handleSumbit() : null)}
            />
            <button
                onClick={handleSumbit}
            >
                Add
            </button>
            <ul>
                {jobs.map((job,index) => (
                    <li key={index}>
                        {job} 
                        <span onClick={() => dispatch(deleteJob(index))}>
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoApp