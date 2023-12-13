import { useEffect, useRef, useState } from "react";
import PrimaryButton from "../../../Buttons/PrimaryButton";

const Hero = () => {
  //   const [position, setPosition] = useState({
  //     x: 0,
  //     y: 0,
  //   });

  const [xPosition, setXposition] = useState(0);
  const [yPosition, setYposition] = useState(0);

  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      setXposition(e.clientX);
      setYposition(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMovement);

    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  const MOVEMENT_SCALE = 50;

  return (
    <section className="py-48">
      <div className="container">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <img src="./1 (1).webp" alt="hand" />
              <p className="text-accent font-semibold text-xl">
                Change The World.
              </p>
            </div>
            <h2 className="text-6xl text-primary font-yeseva">
              Need Your Big Hand For Change The World.
            </h2>
            <div className="flex gap-8 flex-wrap">
              <PrimaryButton />
              <PrimaryButton />
            </div>
          </div>
          <div className="relative">
            <div
              className="w-[30rem] aspect-square overflow-hidden rounded-full absolute right-0 -bottom-32 transition-transform"
              style={{
                transform: `translate(${-xPosition / MOVEMENT_SCALE}px, ${
                  -yPosition / MOVEMENT_SCALE
                }px)`,
              }}
            >
              <img
                src="./1.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <img
              src="./1 (2).webp"
              alt=""
              className="absolute right-8 -top-40 transition-transform z-10"
              style={{
                transform: `translate(${-xPosition / MOVEMENT_SCALE}px, ${
                  -yPosition / MOVEMENT_SCALE
                }px)`,
              }}
            />
            <span
              className="block w-[30rem] aspect-square border-2 border-secondary rounded-full absolute right-0 -top-24 transition-transform"
              style={{
                transform: `translate(${-xPosition / MOVEMENT_SCALE}px, ${
                  -yPosition / MOVEMENT_SCALE
                }px)`,
              }}
            />
            <span
              className="block w-20 aspect-square bg-accent rounded-full absolute right-0 transition-transform"
              style={{
                transform: `translate(${-xPosition / 25}px, ${
                  -yPosition / 25
                }px)`,
              }}
            />
            <div className="w-[21.25rem] aspect-square grid place-items-center bg-accent rounded-full absolute -left-24 -bottom-48">
              <div className="flex flex-col gap-4 items-center">
                <p className="text-6xl text-white font-yeseva">$865M</p>
                <img src="./line-s2.webp" alt="" className="w-24" />
                <p className="text-xl text-white font-yeseva">Total Raised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;