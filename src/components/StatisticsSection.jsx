import DiamondIcon from "../assets/diamond-icon.svg";
import Icons from "../assets/icon.svg";
import HeartIcon from "../assets/heart-icon.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function StatisticsSection() {
  return (
    <div className="bg-[#0F172A] h-[550px] md:h-[373px] flex items-center justify-center">
      <div className="flex flex-col items-center md:flex-row justify-between max-w-[1440px] mx-auto px-4 text-center gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <img src={Icons} alt="Icons" loading="lazy" className="mx-auto" />
          <p className="font-roboto font-extrabold text-[48px] md:text-[72px] leading-[110%] text-[#FACC15]">
            250+
          </p>
          <p className="font-roboto font-normal text-[20px] md:text-[24px] leading-[160%] text-[#FACC15]">
            Available courses
          </p>
        </motion.div>
      </div>
    </div>
  );
}
