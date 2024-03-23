import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/localStorage";

const JobDetail = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find((job) => job.id === idInt);
    const {job_title, job_description, job_responsibility, educational_requirements,experiences,salary,contact_information} = job;
    const {address, email ,phone} = contact_information;
    // console.log(job);

    const handleApplyJob =() => {
        saveJobApplication(idInt);
        toast.success('You have applied successfully');
    }
    return (
        <div>
            <div className="grid md:grid-cols-5 mx-2 my-5 gap-5">
                <div className="md:col-span-3 ">
                    <p className="my-2"><span className="font-bold">Job Description :</span> {job_description}</p>
                    <p className="my-2"><span className="font-bold">Job Responsibility :</span> {job_responsibility}</p>
                    <p className="my-2"><span className="font-bold">Educational Requirements</span></p>
                    <p>{educational_requirements}</p>
                    <p className="font-bold my-2">Experiences</p>
                    <p>{experiences}</p>
                </div>
                <div className="md:col-span-2">
                    <div className="bg-gradient-to-t from-[#7E90FE1a] to-[#9873FF1a] p-5 my-3 rounded-xl text-center">
                    <h2 className="font-bold">Job Details</h2>
                    <div className="divider mx-5"></div>
                    <p><span className="font-bold">Salary :</span> {salary} (Per Month)</p>
                    <p className="my-3"><span className="font-bold">Job Title : </span>{job_title}</p>
                    <p className="font-bold text-xl">Contact Information</p>
                    <div className="divider my-3"></div>
                    <p><span className="font-bold">Phone : </span>{phone}</p>
                    <p className="my-3"><span className="font-bold">Email : </span>{email}</p>
                    <p><span className="font-bold">Address : </span>{address}</p>
                    </div>
                    <div>
                        <button onClick={handleApplyJob} className="btn btn-primary w-full bg-purple-600 rounded-xl border-none">Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default JobDetail;