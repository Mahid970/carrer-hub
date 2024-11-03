import { useEffect } from "react";
import { useState } from "react";
import JobCard from "./JobCard";

const FeatureJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(6);
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
        {jobs.slice(0, dataLength).map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="cursor-pointer flex mx-auto font-semibold overflow-hidden relative z-100 border border-blue-500 group px-8 py-2"
        >
          <span className="relative z-10 text-blue-500 group-hover:text-white text-xl duration-500">
            Show All
          </span>
          <span className="absolute w-full h-full bg-blue-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
          <span className="absolute w-full h-full bg-blue-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
