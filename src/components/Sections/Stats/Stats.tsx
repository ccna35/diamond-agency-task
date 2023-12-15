import { useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "./Card";

type StatType = {
  id: number;
  text: string;
  stat: number;
  img: string;
  symbol: string;
};

const stats: StatType[] = [
  {
    id: 1,
    text: "POOR PEOPLE",
    stat: 598,
    symbol: "K",
    img: "./stats/f1.webp",
  },
  {
    id: 2,
    text: "FUND RAISED",
    stat: 897,
    symbol: "M",
    img: "./stats/f2.webp",
  },
  {
    id: 3,
    text: "ACTIVE MEMBER",
    stat: 998,
    symbol: "+",
    img: "./stats/f3.webp",
  },
];

const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="bg-greyBg" ref={sectionRef}>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {stats.map(({ id, img, stat, symbol, text }) => {
          return (
            <Card key={id} img={img} stat={stat} symbol={symbol} text={text} />
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
