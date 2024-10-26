import bannerImg from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className=" bg-base-200 my-4 ">
      <div className="hero-content flex p-24 gap-24 ">
        <div>
          <h1 className="text-6xl font-bold">
            One Step Closer To Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-700 bg-clip-text text-transparent    ">
              {" "}
              Dream Job
            </span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-500 rounded-md group">
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-blue-700 rounded group-hover:-ml-4 group-hover:-mb-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-blue-600 rounded-md group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Get Started
            </span>
          </button>
        </div>
        <img src={bannerImg} className=" w-1/2 rounded-lg shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;
