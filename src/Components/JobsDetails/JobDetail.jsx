
const JobDetail = ({job}) => {
    console.log(job);
    const {logo} = job;
    return (
        <div>
            <img src={logo} alt="" />
        </div>
    );
};

export default JobDetail;