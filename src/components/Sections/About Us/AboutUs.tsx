import { motion, useInView } from "framer-motion";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useRef, useState } from "react";

const AboutUs = () => {
  const [leftImagePosition, setLeftImagePosition] = useState({ x: 0, y: 0 });
  const [rightImagePosition, setRightImagePosition] = useState({ x: 0, y: 0 });

  const leftImageRef = useRef<HTMLImageElement | null>(null);
  const rightImageRef = useRef<HTMLImageElement | null>(null);

  const handleLeftImageMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setLeftImagePosition({ x: e.clientX, y: e.clientY });
  };
  const handleRightImageMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setRightImagePosition({ x: e.clientX, y: e.clientY });
  };

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-16" ref={sectionRef}>
      <div className="container">
        <div
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">About Us.</span>
          </p>
          <h2 className="text-5xl text-primary font-yeseva max-w-3xl mt-4">
            <span className="gradient-text ">Givest</span>
            is The Non Profitable Organization.
          </h2>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 py-16"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          <div className="flex gap-4 items-center">
            <div className="transition-transform duration-500 hover:scale-105">
              <motion.img
                onMouseMove={(e) => handleLeftImageMouseMove(e)}
                onMouseLeave={() => {
                  setLeftImagePosition({ x: 0, y: 0 });
                }}
                ref={leftImageRef}
                src="./about-us/1.webp"
                alt=""
                className="w-full h-full object-contain"
                animate={{
                  rotateX: leftImagePosition.y / 50,
                  rotateY: leftImagePosition.x / 50,
                }}
              />
            </div>
            <div className="transition-transform duration-500 hover:scale-105">
              <motion.img
                onMouseMove={(e) => handleRightImageMouseMove(e)}
                onMouseLeave={() => {
                  setLeftImagePosition({ x: 0, y: 0 });
                }}
                ref={rightImageRef}
                src="./about-us/2.webp"
                alt=""
                className="w-full h-full object-contain"
                animate={{
                  rotateX: rightImagePosition.y / 50,
                  rotateY: rightImagePosition.x / 50,
                }}
              />
            </div>
          </div>
          <div
            className="flex flex-col gap-8 items-start"
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
            }}
          >
            <p className="font-yeseva text-2xl relative before:absolute before:h-full before:w-1 before:bg-accent before:-left-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry standard.
            </p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-8 items-start border-r-4 border-accent">
                <img src="./about-us/check-double-line.webp" alt="" />
                <p>Need your simple help for save children.</p>
              </div>
              <div className="flex gap-8 items-start">
                <img src="./about-us/check-double-line.webp" alt="" />
                <p>Need your simple help for save children.</p>
              </div>
            </div>
            <PrimaryButton text="Donate Now" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
