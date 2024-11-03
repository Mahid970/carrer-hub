import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { useLoaderData } from "react-router-dom";
import { getItemsFromLocalStorage } from "../../utils/createLocalStorage";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([appliedJobs]);
  console.log(displayJobs);
  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    if (storedItems.length > 0) {
      const jobsApplied = jobs.filter((job) => storedItems.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  const handleFilter = (filterText) => {
    if (filterText === "All") {
      setDisplayJobs(appliedJobs);
    } else if (filterText === "Remote") {
      const filterdJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(filterdJobs);
    } else {
      const filterdJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(filterdJobs);
    }
  };

  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg1.png')] bg-no-repeat -mx-16 ">
        <h1 className="text-center text-4xl font-bold py-16">Applied Jobs</h1>
      </div>
      <div className="flex justify-end mx-16">
        <details className="dropdown">
          <summary className="btn m-1">
            Filter By <TiArrowSortedDown />
          </summary>
          <ul className="menu dropdown-content bg-base-100 p-2 shadow">
            <li>
              <button
                onClick={() => {
                  handleFilter("All");
                }}
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleFilter("Remote");
                }}
              >
                Remote
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleFilter("Onsite");
                }}
              >
                Onsite
              </button>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid gap-4 mt-8">
        {displayJobs.map((appliedJob) => (
          <AppliedJobCard
            key={appliedJob.id}
            appliedJob={appliedJob}
          ></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
