import PropTypes from "prop-types";
import { FaLocationDot } from "react-icons/fa6";

import { RiMoneyDollarCircleFill } from "react-icons/ri";
import TypeButton from "../../../utils/buttons/TypeButton";
import { Link } from "react-router-dom";
import ViewButton from "../../../utils/buttons/ViewButton";
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
          <ViewButton></ViewButton>
        </Link>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object,
};
export default JobCard;
