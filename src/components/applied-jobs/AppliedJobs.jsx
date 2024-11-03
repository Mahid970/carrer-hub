import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItemsFromLocalStorage } from "../../utils/createLocalStorage";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedItems = getItemsFromLocalStorage();
    if (storedItems.length > 0) {
      const jobsApplied = jobs.filter((job) => storedItems.includes(job.id));
      setAppliedJobs(jobsApplied);
    }
  }, []);
  console.log(appliedJobs);
  return (
    <div>
      <div className="bg-[url('/src/assets/images/bg1.png')] bg-no-repeat -mx-16 ">
        <h1 className="text-center text-4xl font-bold py-16">Applied Jobs</h1>
      </div>
      <div className="grid gap-4 mt-12">
        {appliedJobs.map((appliedJob) => (
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
