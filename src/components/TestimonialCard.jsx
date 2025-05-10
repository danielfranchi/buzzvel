import MarieImg from "../assets/marie.svg";
import LeftArrow from "../assets/left-arrow.svg";
import RightArrow from "../assets/right-arrow.svg";
import SliderCues from "../assets/slider-cues.svg";

export default function TestimonialCard() {
  return (
    <div className="relative bg-[#FACC15] h-[620px] grid grid-cols-1 md:grid-cols-2 p-8 items-center rounded-lg shadow-lg">
      <img
        src={LeftArrow}
        alt="Seta Esquerda"
        className="absolute left-[5%] top-1/2 transform -translate-y-1/2 w-[18px] h-[31.5px] hidden sm:block"
      />

      <div
        className="text-[#0F172A] font-roboto font-normal leading-[160%] relative 
                  w-[300px] h-auto text-[16px] top-[-20%] left-[5%]
                  sm:w-[528px] sm:h-[190px] sm:text-[24px] sm:top-[-30px] sm:left-[15%]"
      >
        <div className="block sm:hidden">
          <p className="whitespace-nowrap">
            Id urna, nisl, ut quam. Diam suspendisse
          </p>
          <p className="whitespace-nowrap">
            fringilla quam arcu mattis est velit in. Nibh in
          </p>
          <p className="whitespace-nowrap">
            purus sit convallis phasellus ut. At vel erat
          </p>
          <p className="whitespace-nowrap">
            ultricies commodo. Neque suspendisse a
          </p>
          <p className="whitespace-nowrap">habitasse commodo.</p>
        </div>

        <div className="hidden sm:block">
          <p>Id urna, nisl, ut quam. Diam suspendisse fringilla</p>
          <p>quam arcu mattis est velit in. Nibh in purus sit</p>
          <p>convallis phasellus ut. At vel erat ultricies</p>
          <p>commodo. Neque suspendisse a habitasse</p>
          <p>commodo.</p>
        </div>

        <p className="mt-4">Marie Poirot,</p>
        <p className="font-bold text-[#0F172A]">Bigapp</p>
      </div>

      <img
        src={SliderCues}
        alt="Indicador do Slider"
        className="absolute bottom-[8%] left-[10%] w-auto h-auto hidden sm:block"
      />

      <div className="relative flex justify-end items-center">
        <img
          src={MarieImg}
          alt="Marie Poirot"
          className="absolute left-[0%] top-[-280px] w-auto h-auto sm:left-[5%] sm:top-[40%] md:left-[0%] md:top-[-50%] md:translate-y-[-50%]"
        />
      </div>

      <img
        src={RightArrow}
        alt="Seta Direita"
        className="absolute right-[3%] transform -translate-y-1/2 w-[18px] h-[31.5px] hidden sm:block"
      />
    </div>
  );
}
