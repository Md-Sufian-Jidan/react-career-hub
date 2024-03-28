import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { FaArrowDown } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJobs, setAppliedJob] = useState([]);
    const [displayJobs , setDisplayJobs] = useState([]);

    const handleJobsFilter = (filter) => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'Remote'){
            const remoteJobs = appliedJobs.filter((job)=> job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'Onsite'){
            const onsiteJobs = appliedJobs.filter((job)=> job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs)
        }
    }

    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        console.log(storedJobsId);
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter((job)=> storedJobsId.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobsId) {
                const job = jobs.find((job) => job.id === id)
                jobsApplied.push(job);
            }
            setAppliedJob(jobsApplied);
            setDisplayJobs(jobsApplied)
            // console.log(jobs, storedJobsId, jobsApplied);
        }
    }, [jobs])
    return (
        <div>
            <Helmet>
                <title>Career Hub Applied Jobs</title>
            </Helmet>
            <h2 className="text-2xl">jobs i applied : {appliedJobs.length}</h2>
           <div className="flex justify-end">
           <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">Filter By <FaArrowDown /></div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={()=> handleJobsFilter('all')}><a>All</a> </li>
                    <li onClick={()=> handleJobsFilter('Remote')}><a>Remote</a></li>
                    <li onClick={()=> handleJobsFilter('Onsite')}><a>OnSite</a></li>
                </ul>
            </div>
           </div>
            <div>
                {
                    displayJobs.map((job) => <div key={job.id} className="border md:flex justify-between my-3 p-1 md:p-5">
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
                            <Link to={`/job/${job.id}`}><button className="btn btn-primary font-bold my-3">View Details</button></Link>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;