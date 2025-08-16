import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ToDoList from './toDoList.jsx'
import TestMount from './Content.jsx'
import AxiosTest from './axios.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <AxiosTest/> */}
        <TestMount/>
    </React.StrictMode>
)
