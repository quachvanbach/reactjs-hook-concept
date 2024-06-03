import React, {useState} from 'react';

const ExampleUseState7 = () => {

    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        return JSON.parse(localStorage.getItem('jobs')) ?? []; // or localStorage.jobs
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job];

            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobs', jsonJobs)

            return newJobs;
        })
        setJob('')
    }

    return (
        <div className="example">
            <h1>Example 7: Todo list app</h1>
            <input value={job} onChange={e => setJob(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleUseState7;