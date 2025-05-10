import DiamondIcon from "../assets/diamond-icon.svg";
import Icons from "../assets/icon.svg";
import HeartIcon from "../assets/heart-icon.svg";

export default function StatisticsSection() {
  return (
    <div className="bg-[#0F172A] h-[550px] md:h-[373px] flex items-center justify-center">
      <div className="flex flex-col items-center md:flex-row justify-between max-w-[1440px] mx-auto px-4 text-center gap-8 w-full">
        <div>
          <img
            src={HeartIcon}
            alt="Heart Icon"
            loading="lazy"
            className="mx-auto"
          />
          <p className="font-roboto font-extrabold text-[48px] md:text-[72px] leading-[110%] text-[#FACC15]">
            100K+
          </p>
          <p className="font-roboto font-normal text-[20px] md:text-[24px] leading-[160%] text-[#FACC15]">
            Students enrolled
          </p>
        </div>

        <div>
          <img
            src={DiamondIcon}
            alt="Diamond Icon"
            loading="lazy"
            className="mx-auto"
          />
          <p className="font-roboto font-extrabold text-[48px] md:text-[72px] leading-[110%] text-[#FACC15]">
            5K+
          </p>
          <p className="font-roboto font-normal text-[20px] md:text-[24px] leading-[160%] text-[#FACC15]">
            Qualified teachers
          </p>
        </div>

        <div>
          <img src={Icons} alt="Icons" loading="lazy" className="mx-auto" />
          <p className="font-roboto font-extrabold text-[48px] md:text-[72px] leading-[110%] text-[#FACC15]">
            250+
          </p>
          <p className="font-roboto font-normal text-[20px] md:text-[24px] leading-[160%] text-[#FACC15]">
            Available courses
          </p>
        </div>
      </div>
    </div>
  );
}
