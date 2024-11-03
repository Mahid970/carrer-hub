import { useLoaderData, useParams } from "react-router-dom";
import { BsFillSendFill } from "react-icons/bs";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { routId } = useParams();
  const job = jobs.find((job) => parseInt(routId) === job.id);
  console.log(routId);
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  const { email, phone, address } = contact_information;

  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg1.png')] bg-no-repeat -mx-16 ">
        <h1 className="text-center text-4xl font-bold py-16">Job Details</h1>
      </div>
      <div className="grid grid-cols-3 gap-24 mx-16 my-12 items-center">
        <div className="flex flex-col gap-4  col-span-2">
          <p>
            <span className="font-bold">Job Description: </span>
            <br />
            {job_description}
          </p>
          <p>
            <span className="font-bold">Job Rsponsibility: </span>
            <br />
            {job_responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements: </span>
            <br />
            {educational_requirements}
          </p>
          <p>
            <span className="font-bold">Experiences: </span> <br />
            {experiences}
          </p>
        </div>
        <div>
          <div className="bg-base-200 p-6 grid gap-4">
            <h3 className="text-xl font-bold">Job Details:</h3>
            <div className="grid gap-2">
              <p>
                <span className="font-bold">Salary: </span>
                {salary}
              </p>
              <p>
                <span className="font-bold">Job Title: </span>
                {job_title}
              </p>
            </div>
            <div className="grid gap-2">
              <h3 className="text-xl font-bold">Contact Information:</h3>
              <hr />
              <div className="grid gap-2">
                <p>
                  <span className="font-bold">Phone: </span>
                  {phone}
                </p>
                <p>
                  <span className="font-bold">Email: </span>
                  {email}
                </p>
                <p>
                  <span className="font-bold">Address: </span>
                  {address}
                </p>
              </div>
            </div>
          </div>

          <button className="flex w-full gap-2 justify-center items-center bg-blue-500  mt-4 px-4 py-2 cursor-pointer text-white font-semibold tracking-widest rounded-md hover:bg-blue-700 duration-300 hover:gap-2 hover:translate-x-3">
            Apply Now <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
