import Button from "../components/Button";

import ChatImg from "../assets/chat.svg";
import Grifo from "../assets/grifo.svg";
import IconsCollection1 from "../assets/icons-collection1.svg";
import IconsCollection2 from "../assets/icons-collection2.svg";
import IconsCollection3 from "../assets/icons-collection3.svg";
import IconsCollection4 from "../assets/icons-collection4.svg";
import IconsCollection5 from "../assets/icons-collection5.svg";
import PlayCircle from "../assets/play-circle.svg";
import StudentImg from "../assets/student.svg";
import TeacherImg from "../assets/teacher.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="relative text-left pl-4 md:pl-0">
          <header>
            <h1 className="text-[#0F172A] font-roboto font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[110%]">
              Teach students <br />
              <span className="inline-block">worldwide</span>
            </h1>
          </header>

          <img
            src={Grifo}
            alt="Grifo"
            className="absolute h-auto w-24 left-4 top-8 sm:left-[10px] sm:top-[50px] md:w-32 lg:w-40 md:left-[1%] md:top-[11%]"
            loading="lazy"
          />

          <p className="text-[#0F172A] font-roboto text-lg md:text-xl lg:text-2xl leading-[160%] mt-8">
            <span className="block md:pl-0">
              Amet nunc diam orci duis ut sit diam arcu, nec.
            </span>
            <span className="block md:pl-0">
              Eleifend proin massa tincidunt viverra lectus pulvinar.
            </span>
            <span className="block md:pl-0">
              Nunc ipsum est pellentesque turpis ultricies.
            </span>
          </p>

          <div className="relative flex flex-row items-center gap-6 mt-10 md:flex-row md:pl-0">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Button variant="orange">Sign Up Now</Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-2"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={PlayCircle}
                alt="PlayCircle"
                className="h-auto"
                loading="lazy"
              />
              <a
                href="#demo"
                className="text-[#2563EB] font-roboto font-medium text-lg"
              >
                View Demo
              </a>
            </motion.div>
          </div>

          <div className="mt-18 flex flex-col items-start gap-4 text-[#475569] md:pl-0 md:flex-row">
            <h2 className="font-roboto font-normal text-[16px] leading-[140%] tracking-normal">
              Trusted by leading companies
            </h2>

            <div className="flex justify-start items-center gap-12 mt-4 md:mt-0 md:flex-row">
              <img
                src={IconsCollection1}
                alt="Icon 1"
                className="w-[25.21px] h-[32px]"
                loading="lazy"
              />
              <img
                src={IconsCollection2}
                alt="Icon 2"
                className="w-[25.21px] h-[32px]"
                loading="lazy"
              />
              <img
                src={IconsCollection3}
                alt="Icon 3"
                className="w-[25.21px] h-[32px]"
                loading="lazy"
              />
              <img
                src={IconsCollection4}
                alt="Icon 4"
                className="w-[25.21px] h-[32px]"
                loading="lazy"
              />
              <img
                src={IconsCollection5}
                alt="Icon 5"
                className="w-[25.21px] h-[32px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="relative w-full h-[260px] md:h-[500px] flex justify-center items-center right-10">
          <motion.img
            src={TeacherImg}
            alt="Teacher"
            className="absolute w-[156.77px] h-[196.68px] scale-90 transform -translate-x-1/2 
             top-[40%] left-[30%] 
             md:w-64 md:h-auto md:top-[40%] md:left-[35%]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
          />

          <img
            src={ChatImg}
            alt="Chat"
            className="absolute w-[130px] h-[130px] top-[12%] left-[50%] transform -translate-x-1/2 
             md:w-48 md:h-auto md:top-[10%] md:left-[50%]"
            loading="lazy"
          />

          <motion.img
            src={StudentImg}
            alt="Student"
            className="absolute w-[130px] h-[130px] top-[12%] left-[80%] transform -translate-x-1/2 
             md:w-48 md:h-auto md:top-[10%] md:left-[80%]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.3 }}
          />
        </div>
      </div>
    </section>
  );
}
