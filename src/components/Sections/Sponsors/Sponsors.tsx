import { useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  { id: 1, img: "./sponsors/1.webp" },
  { id: 2, img: "./sponsors/2.webp" },
  { id: 3, img: "./sponsors/3.webp" },
  { id: 4, img: "./sponsors/4.webp" },
  { id: 5, img: "./sponsors/5.webp" },
  { id: 6, img: "./sponsors/6.webp" },
  { id: 7, img: "./sponsors/7.webp" },
  { id: 8, img: "./sponsors/8.webp" },
  { id: 9, img: "./sponsors/9.webp" },
  { id: 10, img: "./sponsors/10.webp" },
];

const Sponsors = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-16" ref={sectionRef}>
      <div
        className="container flex flex-col md:flex-row gap-16 items-center"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <div>
          <div className="relative">
            <h2 className="text-5xl text-primary text-center md:text-left font-yeseva">
              Our Current Sponsors.
            </h2>
            <img
              src="./3.webp"
              alt=""
              className="absolute w-36 left-1/4 -top-1/4 -z-10"
            />
          </div>
        </div>
        <div className="w-full justify-items-center grid grid-cols-3 sm:grid-cols-5 gap-x-8 gap-y-16 flex-grow">
          {sponsors.map(({ id, img }) => {
            return <img src={img} alt="" key={id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
