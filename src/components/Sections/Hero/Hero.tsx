import { Ref, useEffect, useRef, useState } from "react";
import PrimaryButton from "../../Buttons/PrimaryButton";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Hero = () => {
  const [xPosition, setXposition] = useState(0);
  const [yPosition, setYposition] = useState(0);

  const ref = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setXposition(e.movementX);
    setYposition(e.movementY);
  };

  const raisedRef = useRef<HTMLDivElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, 865, { duration: 5 });
    }
  }, [count, isInView]);

  return (
    <motion.section
      className="py-16 md:py-48"
      ref={ref}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="flex flex-col gap-8"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <div className="flex gap-4 items-center justify-center md:justify-start">
              <img src="./1 (1).webp" alt="hand" />
              <p className="text-accent font-semibold text-xl">
                Change The World.
              </p>
            </div>
            <h2 className="text-4xl text-center md:text-left lg:text-6xl text-primary font-yeseva">
              Need Your Big Hand For{" "}
              <span className="relative">
                <span>Change</span>
                <img
                  src="./banner-title-shape.webp"
                  alt=""
                  className="absolute left-0 top-3 -z-[1]"
                />
              </span>
              The World.
            </h2>
            <div className="flex gap-2 justify-center md:justify-start">
              <PrimaryButton text="All Causes" />
              <PrimaryButton text="Donate Now" outlined />
            </div>
          </div>
          <div className="hidden md:block relative">
            <motion.div
              className="md:w-60 lg:w-[30rem] aspect-square overflow-hidden rounded-full absolute right-0 lg:-bottom-32 transition-transform"
              animate={{
                x: xPosition,
                y: yPosition,
              }}
            >
              <img
                src="./1.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.img
              src="./1 (2).webp"
              alt=""
              className="absolute right-8 md:-top-20 lg:-top-40 transition-transform z-10 md:w-20 lg:w-40"
              animate={{
                x: xPosition,
                y: yPosition,
              }}
            />
            <motion.span
              className="block md:w-60 lg:w-[30rem] aspect-square border-2 border-secondary rounded-full absolute right-0 md:-top-12 lg:-top-24 transition-transform"
              animate={{
                x: xPosition,
                y: yPosition,
              }}
            />
            <motion.span
              className="block md:w-10 lg:w-20 aspect-square bg-accent rounded-full absolute right-0 transition-transform"
              animate={{
                x: xPosition,
                y: yPosition,
              }}
            />
            <div
              ref={raisedRef}
              className="md:w-40 lg:w-[21.25rem] aspect-square grid place-items-center gradientBg rounded-full absolute lg:-left-24 md:-bottom-20 lg:-bottom-48"
            >
              <div className="flex flex-col gap-4 items-center">
                <p className="md:text-xl lg:text-6xl text-white font-yeseva">
                  $<motion.span>{rounded}</motion.span>M
                </p>
                <img src="./line-s2.webp" alt="" className="md:w-12 lg:w-24" />
                <p className="md:text-xs lg:text-xl text-white font-yeseva">
                  Total Raised
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
