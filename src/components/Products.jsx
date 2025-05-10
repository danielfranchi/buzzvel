import ArrowButton from "../components/ArrowButton";
import Card from "./Card";

import BlobImg from "../assets/blob.svg";
import GrifoLarge from "../assets/grifoLarge.svg";
import VideoImg from "../assets/video.svg";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-[#0F172A] font-roboto relative">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block md:hidden font-bold text-[24px] leading-[110%] tracking-normal"
          >
            <span className="block">An all-in-one app that makes it</span>
            <span className="block">easier</span>
          </motion.h1>

          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.3 }}
            className="hidden md:block font-bold text-[56px] leading-[110%] tracking-normal"
          >
            <span className="relative inline-block">
              An all-in-one app
              <img
                src={GrifoLarge}
                alt="Grifo"
                loading="lazy"
                className="absolute h-auto hidden md:block w-24 md:w-32 lg:w-40 top-[90%] left-[30%] animate-float"
              />
            </span>
            <br />
            <span className="inline-block">that makes it easier</span>
          </motion.h1>

          <p className="text-[20px] leading-[180%] mt-6">
            ✔️ Est et in pharetra magna adipiscing ornare aliquam. <br />
            ✔️ Tellus arcu sed consequat ac velit ut eu blandit. <br />
            ✔️ Ullamcorper ornare in et egestas dolor orci.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-10 inline-block"
          >
            <ArrowButton text="Find more about the app" />
          </motion.div>
        </div>

        <div className="relative flex flex-col items-center">
          <img
            src={BlobImg}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute w-[506px] h-[448px] top-[10%] left-[-18%]"
          />

          <img
            src={VideoImg}
            alt="Video Preview"
            loading="lazy"
            className="w-full max-w-[700px] h-auto relative"
          />

          <div className="relative top-[-100px] left-[-4%] flex flex-wrap gap-4 z-10">
            {[
              {
                category: "Featured",
                title: "The map of mathematics",
                description:
                  "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
                button: "Take Lesson",
                bgColor: "bg-[#F3E8FF]",
                textColor: "text-[#6B21A8]",
              },
              {
                category: "Popular",
                title: "Design for how people think",
                description:
                  "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
                button: "Take Lesson",
                bgColor: "bg-[#DBEAFE]",
                textColor: "text-[#1E40AF]",
              },
              {
                category: "New",
                title: "International & commercial law",
                description:
                  "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
                button: "Take Lesson",
                bgColor: "bg-[#DCFCE7]",
                textColor: "text-[#166534]",
                hidden: "hidden md:block",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
                className={card.hidden || ""}
              >
                <Card {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
