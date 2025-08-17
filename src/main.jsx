import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from './toDoList.jsx'
import TestMount from './Content.jsx'
import AxiosTest from './axios.jsx'

// Fake Comment
function emitComment(id){
    setInterval(() => {
        window.dispatchEvent(
            new CustomEvent(`lesson-${id}`, {
                detail: `Nội dung comment của lesson ${id}`
            })
        )
    },2000)
}

emitComment(1)
emitComment(2)
emitComment(3)


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <AxiosTest/> */}
        <TestMount/>
    </React.StrictMode>
)
