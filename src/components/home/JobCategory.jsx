import accountIcon from "../../assets/icons/accounts.png";
import creativeIcon from "../../assets/icons/creative.png";
import marketingIcon from "../../assets/icons/marketing.png";
import chipIcon from "../../assets/icons/chip.png";
const JobCategory = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="flex justify-center gap-16 my-6 w-full">
        <div className="bg-base-200 p-6 ">
          <img src={accountIcon} alt="" />
          <h3 className="text-2xl font-bold my-2">Account & Finance</h3>
          <p>300 Jobs Available</p>
        </div>
        <div className="bg-base-200 p-6 ">
          <img src={creativeIcon} alt="" />
          <h3 className="text-2xl font-bold my-2">Creative Design</h3>
          <p>100+ Jobs Available</p>
        </div>
        <div className="bg-base-200 p-6 ">
          <img src={marketingIcon} alt="" />
          <h3 className="text-2xl font-bold my-2">Marketing & Sales</h3>
          <p>150 Jobs Available</p>
        </div>
        <div className="bg-base-200 p-6 ">
          <img src={chipIcon} alt="" />
          <h3 className="text-2xl font-bold my-2">Engineering Job</h3>
          <p>224 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
