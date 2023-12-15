import { cn } from "../../../lib/utils";
import SecondaryButton from "../../Buttons/SecondaryButton";

type CardProps = {
  headline: string;
  img: string;
  bgColor: "accent" | "secondary" | "primary";
};

const Card = ({ headline, img, bgColor }: CardProps) => {
  return (
    <article
      className={cn(
        "flex flex-col items-start gap-8 px-4 py-8 xl:p-16 text-white",
        {
          "bg-accent": bgColor === "accent",
          "bg-primary": bgColor === "primary",
          "bg-secondary": bgColor === "secondary",
        }
      )}
    >
      <div className="flex gap-4 relative ">
        <span className="w-20 aspect-square rounded-full bg-white/20 absolute left-0 -top-4" />
        <img src={img} alt={headline} className="" />
        <h3 className="font-yeseva text-2xl lg:text-4xl">{headline}</h3>
      </div>
      <img src="./line-s2.webp" alt="" className="w-20" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        fugiat reiciendis rem, reprehenderit fuga excepturi neque et minima
        deserunt vitae!
      </p>
      <SecondaryButton text="View Details" classNames="hover:gradientBg" />
    </article>
  );
};

export default Card;
