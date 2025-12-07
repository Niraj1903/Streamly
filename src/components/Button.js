const Button = ({ name }) => {
  return (
    <button
      className="
        whitespace-nowrap 
        px-4 py-1.5 
        text-sm 
        bg-gray-200 
        hover:bg-gray-300 
        rounded-lg 
        text-gray-900
        transition
      "
    >
      {name}
    </button>
  );
};

export default Button;
