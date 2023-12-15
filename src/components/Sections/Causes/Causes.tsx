import { useRef } from "react";
import Card from "./Card";
import { useInView } from "framer-motion";

type CausesListType = {
  id: number;
  img: string;
};

const causesList: CausesListType[] = [
  { id: 1, img: "./causes/01.webp" },
  { id: 2, img: "./causes/02.webp" },
  { id: 3, img: "./causes/03.webp" },
];

const Causes = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-32" ref={sectionRef}>
      <div className="container flex flex-col gap-16 items-center">
        <div
          className="flex flex-col items-center"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">
              Check Causes
            </span>
          </p>
          <div className="relative">
            <h2 className="text-5xl leading-tight text-primary font-yeseva max-w-2xl mt-8 text-center">
              Donate For Poor People. Causes of Givest
            </h2>
            <img
              src="./3.webp"
              alt=""
              className="absolute w-36 centerAbsolute -z-10"
            />
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
          }}
        >
          {causesList.map(({ id, img }) => {
            return <Card key={id} img={img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Causes;
