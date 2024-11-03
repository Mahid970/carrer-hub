import { FaArrowRight } from "react-icons/fa6";

const ViewButton = () => {
  return (
    <button
      className="text-xl mt-4 flex items-center relative bottom-2 w-40 h-12 rounded 
        bg-blue-500 text-white overflow-hidden group z-10 hover:text-white 
        duration-1000"
    >
      <span
        className="absolute bg-blue-600 w-44 h-36 rounded-full 
          group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 
          duration-700 origin-center transform transition-all"
      ></span>
      <span
        className="absolute   bg-blue-800 w-44 h-36 -left-2 -top-10
           rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 
           duration-500 origin-center transform transition-all"
      ></span>
      <span className=" flex items-center gap-2 mx-auto ">
        View Details <FaArrowRight></FaArrowRight>
      </span>
    </button>
  );
};

export default ViewButton;
