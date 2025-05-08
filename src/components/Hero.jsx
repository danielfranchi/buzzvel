import Button from "../components/Button";
import Press from "../assets/press.svg"; // Importe o SVG dos logos
import TeacherImg from "../assets/teacher.svg";
import ChatImg from "../assets/chat.svg";
import StudentImg from "../assets/student.svg";
import Grifo from "../assets/grifo.svg";
import PlayCircle from "../assets/play-circle.svg";

export default function Hero() {
  return (
    <section className="px-4 py-10 md:px-8 md:py-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        
        {/* Esquerda - Texto */}
        <div className="relative text-center md:text-left">
          <h1 className="text-[#0F172A] font-roboto font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[110%]">
            Teach students <br />
            <span className="inline-block">worldwide</span>
          </h1>

          {/* Grifo dentro da div relativa */}
          <img 
            src={Grifo} 
            alt="Grifo" 
            className="absolute h-auto w-24 md:w-32 lg:w-40 top-[11%] left-[2%]"
          />

          <p className="text-[#0F172A] font-roboto text-lg md:text-xl lg:text-2xl leading-[160%] mt-8">
            <span className="block">Amet nunc diam orci duis ut sit diam arcu, nec.</span>
            <span className="block">Eleifend proin massa tincidunt viverra lectus pulvinar.</span>
            <span className="block">Nunc ipsum est pellentesque turpis ultricies.</span>
          </p>

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 mt-10">
            <Button variant="orange">Sign Up Now</Button>

            {/* PlayCircle dentro da div relativa */}
            <div className="flex items-center gap-2 mt-2">
              <img 
                src={PlayCircle} 
                alt="PlayCircle" 
                className="h-auto"
              />
              
              <a href="#demo" className="text-[#2563EB] font-roboto font-medium text-lg">
                View Demo
              </a>
            </div>
          </div>

          <div className="mt-12">
            <img src={Press} alt="Press Logos" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Direita - Imagens */}
        <div className="relative w-full h-[500px] flex justify-center items-center">
          <img 
            src={TeacherImg} 
            alt="Teacher" 
            className="absolute w-64 h-auto scale-90 top-[40%] left-[35%] transform -translate-x-1/2"
          />

          <img 
            src={ChatImg} 
            alt="Chat" 
            className="absolute w-32 md:w-48 lg:w-56 h-auto top-[10%] left-[50%] transform -translate-x-1/2"
          />
          <img 
            src={StudentImg} 
            alt="Student" 
            className="absolute w-32 md:w-48 lg:w-56 h-auto top-[10%] left-[80%] transform -translate-x-1/2"
          />
        </div>

      </div>
    </section>
  );
}
