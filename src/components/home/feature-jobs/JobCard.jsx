import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import TypeButton from "../../../utils/buttons/TypeButton";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className=" p-6  w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="max-w-48" src={logo} alt="Shoes" />
      </figure>
      <div className=" flex flex-col gap-4">
        <h2 className="text-3xl font-semibold">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex justify-between">
          <TypeButton btnText={remote_or_onsite}></TypeButton>
          <TypeButton btnText={job_type}></TypeButton>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-xl"></FaLocationDot>
            {location}
          </p>
          <p className="flex items-center gap-2">
            <RiMoneyDollarCircleFill className="text-xl"></RiMoneyDollarCircleFill>
            Salary: {salary}
          </p>
        </div>

        <Link to={`/jobs/${id}`}>
          <button
            className="text-xl mt-4 flex items-center relative bottom-2 w-40 h-12 rounded 
        bg-blue-500 text-white overflow-hidden group z-10 hover:text-white 
        duration-1000"
          >
            <span
              className="absolute bg-blue-600 w-44 h-36 rounded-full 
          group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 
          duration-700 origin-center transform transition-all"
            ></span>
            <span
              className="absolute   bg-blue-800 w-44 h-36 -left-2 -top-10
           rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 
           duration-500 origin-center transform transition-all"
            ></span>
            <span className=" flex items-center gap-2 mx-auto ">
              See More <FaArrowRight></FaArrowRight>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};
export default JobCard;
