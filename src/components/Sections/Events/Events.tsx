import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { cn } from "../../../lib/utils";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type EventType = {
  id: number;
  date: string;
  category: string;
  title: string;
  img: string;
};

const eventList: EventType[] = [
  {
    id: 1,
    category: "Education",
    date: "15 January 2021",
    title: "Need School For Mozambique Children.",
    img: "./events/1.webp",
  },
  {
    id: 2,
    category: "Education",
    date: "15 January 2021",
    title: "Need School For Mozambique Children.",
    img: "./events/2.webp",
  },
  {
    id: 3,
    category: "Education",
    date: "15 January 2021",
    title: "Need School For Mozambique Children.",
    img: "./events/3.webp",
  },
];

const Events = () => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleImageMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setImagePosition({ x: e.clientX, y: e.clientY });
  };

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-32 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div
          className="mb-16"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">
              Recent Events
            </span>
          </p>
          <div className="relative">
            <h2 className="text-4xl text-primary font-yeseva max-w-lg leading-snug mt-4">
              Join Recent Fundraising Event Of Givest.
            </h2>
            <img
              src="./3.webp"
              alt=""
              className="absolute w-36 top-0 left-1/4 -z-10"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-32 lg:gap-8">
          <div
            className="flex flex-col gap-8"
            style={{
              transform: isInView ? "none" : "translateY(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
            }}
          >
            {eventList.map(({ id, category, date, img, title }) => {
              return (
                <article key={id} className="flex bg-greyBg group">
                  <div className="relative w-[240px] aspect-video border flex-shrink-0 overflow-hidden">
                    <button
                      className={cn(
                        "z-10 flex gap-2 items-center py-2 px-4 rounded-full gradientBg text-white absolute transition opacity-0 group-hover:opacity-100 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                      )}
                    >
                      <span className="flex-shrink-0">Join Now</span>
                      <FaArrowRight />
                    </button>
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="py-4 px-4 lg:px-12 flex flex-col gap-2">
                    <div className="flex gap-1 flex-wrap">
                      <p className="text-primary font-semibold">{date}</p>
                      <p className="text-secondaryText">//</p>
                      <p className="text-accent font-semibold">{category}</p>
                    </div>
                    <h2 className="font-yeseva text-base lg:text-2xl text-primary max-w-xs transition hover:text-accent">
                      {title}
                    </h2>
                  </div>
                </article>
              );
            })}
          </div>
          <div
            className="grid place-items-center flex-grow"
            style={{
              transform: isInView ? "none" : "translateX(200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
            }}
          >
            <div className="relative transition-transform duration-500 hover:scale-105">
              <motion.img
                src="./events/event1.webp"
                alt="event1"
                className="w-96"
                onMouseMove={(e) => handleImageMouseMove(e)}
                onMouseLeave={() => {
                  setImagePosition({ x: 0, y: 0 });
                }}
                ref={imageRef}
                animate={{
                  rotateX: imagePosition.y / 50,
                  rotateY: imagePosition.x / 50,
                }}
              />
              <img
                src="./events/line3.webp"
                alt="line3"
                className="w-96 absolute centerAbsolute -z-10"
              />
              <img
                src="./events/line3.webp"
                alt="line3"
                className="w-96 absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10"
              />
              <div className="w-28 aspect-square gradientBg rounded-full absolute centerAbsolute grid place-items-center">
                <span className="absolute centerAbsolute text-white z-10">
                  <FaPlay size={30} />
                </span>
                <span className="relative flex h-28 w-28">
                  <span className="-z-10 animate-ping-slower absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="-z-10 animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="inline-flex rounded-full h-28 w-28 gradientBg"></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
