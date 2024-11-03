import PropTypes from "prop-types";
import TypeButton from "../../utils/buttons/TypeButton";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import ViewButton from "../../utils/buttons/ViewButton";
import { Link } from "react-router-dom";
const AppliedJobCard = ({ appliedJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = appliedJob;
  return (
    <div className=" mx-16 bg-base-100 p-8  shadow-xl flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <div className="border-3">
          <img className="w-48" src={logo} alt="Movie" />
        </div>
        <div className="grid gap-4">
          <h2 className="text-4xl font-semibold">{job_title}</h2>
          <h3 className="text-xl">{company_name}</h3>
          <div className="flex gap-3">
            <TypeButton btnText={remote_or_onsite}></TypeButton>
            <TypeButton btnText={job_type}></TypeButton>
          </div>
          <div className="flex gap-4">
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-xl"></FaLocationDot>
              {location}
            </p>
            <p className="flex items-center gap-2">
              <RiMoneyDollarCircleFill className="text-xl"></RiMoneyDollarCircleFill>
              Salary: {salary}
            </p>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/jobs/${id}`}>
          <ViewButton></ViewButton>
        </Link>
      </div>
    </div>
  );
};
AppliedJobCard.propTypes = {
  appliedJob: PropTypes.object,
};
export default AppliedJobCard;
