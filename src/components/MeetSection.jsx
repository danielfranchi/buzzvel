import ArrowButton from "./ArrowButton";

import CollegioImg from "../assets/colegio.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function MeetSection() {
  return (
    <div className="grid gap-x-16 grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-[1440px] mx-auto px-4 py-16">
      <div className="order-2 md:order-1">
        <img
          src={CollegioImg}
          alt="Conheça estudantes e professores internacionais"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>

      <div className="order-1 md:order-2">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.3 }}
          className="hidden md:block font-bold text-[56px] leading-[110%] tracking-normal"
        >
          <h1 className="font-roboto font-extrabold text-[32px] md:text-[56px] leading-[120%] md:leading-[110%] tracking-[0%] text-[#0F172A]">
            Meet international students <br className="block md:hidden" /> &
            teachers
          </h1>
        </motion.h1>
        <p className="font-roboto font-normal text-[16px] md:text-[20px] leading-[170%] md:leading-[180%] tracking-[0%] text-[#0F172A] mt-4">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="mt-10 inline-block"
        >
          <ArrowButton text="Explore teachers and students" />
        </motion.div>
      </div>
    </div>
  );
}
