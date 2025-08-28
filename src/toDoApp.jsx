import { useState, useMemo, memo,useRef, useReducer } from "react";

/*  useReducer
    1. Init state
*/ 
//  Khai báo state ban đầu
const initState = {
//  Chuỗi rỗng  '' dùng để lưu trữ công việc đang gõ vào ô input => Khi nhập thì giá trị nhập vào sẽ là job
    job: '',
//  Một mảng rỗng [] dùng để lưu trữ danh sách các công việc
    jobs: []
}

// 2. Actions
// Hàm tạo action để khởi chạy state
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

// Gán giá trị cho job
// Payload ở đây đóng chức năng gán giá trị khi nhập vào
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
// Hàm xử lý logic thay đổi state dựa trên action
// Hàm nhận vào 1 state hiện tại và 1 action, sau đó trả về một newState mới
const reducer = (state, action) => {
     
    let newState

//  lệnh switch từ action tham chiếu tới type
    switch(action.type){
        // trường hợp set giá trị cho 'job'
        case SET_JOB:
            return{
                // dùng destructuring
                ...state,
                job: action.payload
            }
            break
        case ADD_JOB:
            // Trường hợp theme 1 job vào list và reset
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
 

// Component chính sử dụng useReducer và hiển thị giao diện
function ToDoApp(){
//  useReducer nhận vào reducer và initState, trả về State hiện tại và hàm dispatch
    const [state,dispatch] = useReducer(reducer, initState)

//  Destructuring để lấy các giá trị từ state
/*
    const job = state.job
    const jobs = stata.jobs
*/
    const {job, jobs} = state


    const handleSumbit = () => {
        // gửi action ADD_JOB đến reducer thông qua dispatch
        dispatch(addJob(job))
        // Tham chiếu đến ô input thông qua useRef để focus vào
        inputRef.current.focus()
    }
//  useRef để tham chiếu đến input element, dùng để focus sau khi thêm job
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