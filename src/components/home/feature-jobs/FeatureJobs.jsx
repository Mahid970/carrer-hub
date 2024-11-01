import { useEffect } from "react";
import { useState } from "react";
import JobCard from "./JobCard";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/public/jobs.json")
      .then((res) => res.json())
      .then((jobs) => setJobs(jobs));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-12">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default FeatureJobs;
