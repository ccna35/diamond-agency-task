import { FaArrowRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";

type SecondaryButtonType = {
  filled?: boolean;
  href?: string;
  text: string;
  theme?: "primary" | "secondary";
  classNames?: string;
};

const SecondaryButton = ({ text, filled, classNames }: SecondaryButtonType) => {
  return (
    <button
      className={cn(
        "flex gap-2 items-center py-2 px-4 rounded-full border-2 border-white text-white",
        {
          "bg-accent": filled,
        },
        classNames
      )}
    >
      <span className="">{text}</span>
      <FaArrowRight />
    </button>
  );
};

export default SecondaryButton;
