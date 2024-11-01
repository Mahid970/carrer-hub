import Banner from "./Banner";
import FeatureJobs from "./feature-jobs/FeatureJobs";
import JobCategory from "./JobCategory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCategory></JobCategory>
      <FeatureJobs></FeatureJobs>
    </div>
  );
};

export default Home;
