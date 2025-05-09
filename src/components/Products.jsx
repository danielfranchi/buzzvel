import ArrowButton from "../components/ArrowButton";
import Card from "./Card";

import BlobImg from "../assets/blob.svg";
import GrifoLarge from "../assets/grifoLarge.svg";
import VideoImg from "../assets/video.svg";

export default function Products() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-[#0F172A] font-roboto relative">
          <h1 className="block md:hidden font-roboto font-bold text-[24px] leading-[110%] tracking-normal">
            <span className="block">An all-in-one app that makes it</span>
            <span className="block">easier</span>
          </h1>

          <h1 className="hidden md:block font-roboto font-bold text-[56px] leading-[110%] tracking-normal">
            <span className="relative inline-block">
              An all-in-one app
              <img
                src={GrifoLarge}
                alt="Grifo"
                className="absolute h-auto hidden md:block w-24 md:w-32 lg:w-40 top-[90%] left-[30%] animate-float"
              />
            </span>
            <br />
            <span className="inline-block">that makes it easier</span>
          </h1>

          <p className="text-[20px] leading-[180%] mt-6">
            ✔️ Est et in pharetra magna adipiscing ornare aliquam. <br />
            ✔️ Tellus arcu sed consequat ac velit ut eu blandit. <br />
            ✔️ Ullamcorper ornare in et egestas dolor orci.
          </p>

          <ArrowButton text="Find more about the app" className="mt-10" />
        </div>

        <div className="relative flex flex-col items-center">
          <img
            src={BlobImg}
            alt="Background Blob"
            className="absolute w-[506px] h-[448px] top-[10%] left-[-18%]"
          />

          <img
            src={VideoImg}
            alt="Video Preview"
            className="w-full max-w-[700px] h-auto relative"
          />

          <div className="relative top-[-100px] left-[-4%] flex flex-row flex-wrap gap-4 z-10 md:flex-row">
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
              <div key={index} className={card.hidden || ""}>
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
