import React from 'react'
import { Job } from '../types/jobs'

interface Props {
    job: Job;

}

const JobCard = ({ job }: Props) => {
    return (
        <div>
            <h2>{job.company}</h2>
            <h5>{job.description}</h5>
            <p>{job.dates}</p>
        </div>
    )
}

export default JobCard
