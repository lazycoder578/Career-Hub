import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    return (
        <div>
            <h2 className="text-2xl">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2>Job Description: {job.job_description}</h2>
                    <h2>Job Responsibility: {job.job_responsibility}</h2>
                    <h2>Education Requirements: {job.educational_requirements}</h2>
                    <h2>Experiences: {job.experiences}</h2>
                </div>
                <div className="border">
                    <h2>Job Details</h2>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;