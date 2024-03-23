import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJob] = useState([])
    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter((job)=> storedJobsId.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find((job) => job.id === id)
                jobsApplied.push(job);
            }
            setAppliedJob(jobsApplied)
            // console.log(jobs, storedJobsId, jobsApplied);
        }
    }, [])
    return (
        <div>
            <h2 className="text-2xl">jobs i applied : {appliedJobs.length}</h2>
           <div className="flex justify-end">
           <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter By <FaArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to={`/applied`}>All</Link>
                    <Link>Remote</Link>
                    <Link>OnSite</Link>
                </ul>
            </div>
           </div>
            <div className="">
                {
                    appliedJobs.map((job) => <div key={job.id} className="border flex justify-between my-3 p-5">
                        <div className="flex items-center gap-5">
                            <div>
                                <img className="bg-[#7E90FE1a] p-10" src={job.logo} alt="" />
                            </div>
                            <div>
                                <h2>{job.job_title}</h2>
                                <p>{job.company_name}</p>
                                <div className="mt-1 flex gap-3">
                                    <h2 className="flex items-center gap-1"><MdLocationOn className="text-2xl" />{job.location}</h2>
                                    <h2 className="flex items-center gap-1"><AiOutlineDollar className="text-2xl" /> {job.salary}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="card-actions ">
                            <Link to={`/job/${job.id}`}><button className="btn btn-primary font-bold">View Details</button></Link>
                        </div>
                    </div>
                    )
                }

            </div>
        </div>
    );
};

export default AppliedJobs;