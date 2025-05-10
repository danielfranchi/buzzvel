export default function Card({
  category,
  title,
  description,
  button,
  bgColor,
  textColor,
  onClick,
}) {
  return (
    <div className="w-[200px] h-[232px] rounded-[10px] bg-white shadow-md p-6 flex flex-col justify-between">
      <span
        className={`relative top-[-6px] w-[71px] h-[24px] rounded-[4px] px-[4px] py-[8px] ${bgColor} ${textColor} font-roboto font-normal text-[14px] leading-[140%] flex items-center justify-center`}
        aria-label="Categoria"
      >
        {category}
      </span>

      <h3 className="font-roboto font-medium text-[20px] leading-[110%] text-[#0F172A]">
        {title}
      </h3>

      <p className="font-roboto font-normal text-[14px] leading-[140%] text-gray-600">
        {description}
      </p>

      <button
        className="mt-2 px-4 py-2 bg-[#2563EB] text-white text-sm font-medium rounded-md 
                  transition-colors duration-300 ease-in-out 
                  hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        onClick={onClick}
        aria-label={button ? button : "Botão de ação"}
      >
        {button}
      </button>
    </div>
  );
}
