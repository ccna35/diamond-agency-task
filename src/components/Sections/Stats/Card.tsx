import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CardType = {
  text: string;
  stat: number;
  img: string;
  symbol: string;
};

const Card = ({ img, stat, symbol, text }: CardType) => {
  const ref = useRef<HTMLElement>(null);
  const count = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, stat, { duration: 5 });
    }
  }, [count, isInView, stat]);

  return (
    <article
      className="flex gap-8 justify-center items-center py-32 px-8 border-x border-b lg:border-b-0"
      ref={ref}
    >
      <div className="relative">
        <img src="./stats/4.webp" alt="" className="absolute -left-8 w-40" />
        <img src={img} alt={text} />
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h2 className="font-yeseva text-5xl text-primary">
          <motion.span>{rounded}</motion.span>
          {symbol}
        </h2>
        <img src="./stats/funfact-line1.webp" alt="" />
        <p className="text-gray-400 text-sm font-semibold">// {text}</p>
      </div>
    </article>
  );
};

export default Card;
