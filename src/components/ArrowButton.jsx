import ArrowIcon from "../assets/arrow-right.svg";

const ArrowButton = ({ text, className }) => {
  return (
    <button
      className={`text-[#2563EB] text-lg font-medium flex items-center gap-2 hover:underline ${className}`}
    >
      {text}
      <img src={ArrowIcon} alt="Arrow Right" className="w-5 h-5" />
    </button>
  );
};

export default ArrowButton;
