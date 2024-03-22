import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, id } = job;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="">
                    <button className="font-extrabold px-5 py-2 border rounded border-[#7e90fe] mr-4 text-[#7e90fe]">{remote_or_onsite}</button>
                    <button className="font-extrabold px-5 py-2 border rounded border-[#7e90fe] text-[#7e90fe]">{job_type}</button>
                </div>
                <div className="mt-4 flex gap-3">
                    <h2 className="flex items-center gap-1"><MdLocationOn className="text-2xl" />{location}</h2>
                    <h2 className="flex items-center gap-1"><AiOutlineDollar className="text-2xl" /> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <Link to={`/job/${id}`}><button className="btn btn-primary font-bold">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Job;