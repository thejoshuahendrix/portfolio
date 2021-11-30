import React from 'react'
import { Job } from '../types/jobs'
import JobCard from './JobCard'


const hs: Job = {
    company: "Hendrix Software",
    description: "My personal freelance company, I worked on game and web development.",
    dates: "2017-2021"
}

const acxiom: Job = {
    company: "Acxiom",
    description: "I contracted for Acxiom working on developing a frontend platform for data visualizations and business intelligence products.",
    dates: "2021-Current"
}

const JobList = () => {
    return (
        <div>
            <JobCard job={hs}/>
            <JobCard job={acxiom}/>
        </div>
    )
}

export default JobList
