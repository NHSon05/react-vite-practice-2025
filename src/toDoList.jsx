import './App.css'
import { useState } from 'react'

function ToDoList(){

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])

    const handleSubmit = () => {
        setJobs(prev => [...prev, job])
        setJob('')
    }


    return(
        <div>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            >
            </input>
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList