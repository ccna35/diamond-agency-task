import { useRef } from "react";
import Card from "./Card";
import { useInView } from "framer-motion";

type CardType = {
  id: number;
  headline: string;
  img: string;
  bgColor: "accent" | "secondary" | "primary";
};

const cards: CardType[] = [
  {
    id: 1,
    headline: "Clean Water",
    img: "./mission/water.webp",
    bgColor: "accent",
  },
  {
    id: 2,
    headline: "Healthy Food",
    img: "./mission/food.webp",
    bgColor: "primary",
  },
  {
    id: 3,
    headline: "Medical Help",
    img: "./mission/medical-help.webp",
    bgColor: "secondary",
  },
];

const Mission = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-32" ref={sectionRef}>
      <div
        className="container grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {cards.map(({ id, headline, img, bgColor }) => {
          return (
            <Card key={id} headline={headline} img={img} bgColor={bgColor} />
          );
        })}
      </div>
    </section>
  );
};

export default Mission;
