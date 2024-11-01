const TypeButton = ({ btnText }) => {
  return (
    <button
      className="relative px-8 py-2 rounded-md font-bold text-blue-700 
          bg-white isolation-auto z-10 border-1 border-blue-700 
          before:absolute before:w-full before:transition-all 
          before:duration-700 before:hover:w-full hover:text-white 
          before:-right-full before:hover:right-0 before:rounded-full 
          before:bg-blue-700 before:-z-10 before:aspect-square 
          before:hover:scale-150 overflow-hidden before:hover:duration-700 
          inline-flex items-center justify-center  text-sm 
            border 
          shadow-sm gap-x-2 hover:bg-gray-50 disabled:opacity-50 
          disabled:pointer-events-none"
    >
      {btnText}
    </button>
  );
};

export default TypeButton;
