import { FaArrowRight } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import { useState } from "react";

const PrimaryButton = ({
  text,
  outlined,
}: {
  text: string;
  outlined?: boolean;
}) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "overflow-hidden flex gap-2 items-center py-4 px-8 rounded-full relative",
        {
          "bg-gradient-to-r from-accent to-secondary text-white before:absolute before:duration-500 before:w-8 before:h-8 before:bottom-0 before:left-0 before:bg-white before:opacity-30 before:rounded-tr-full before:transition-all hover:before:w-full hover:before:h-full hover:before:rounded-none hover:before:opacity-0 after:absolute after:duration-500 after:w-8 after:h-8 after:top-0 after:right-0 after:opacity-30 after:rounded-bl-full after:transition-all hover:after:w-full hover:after:h-full hover:after:rounded-none hover:after:opacity-0 after:bg-white":
            !outlined || isHovering,
          "border-2": outlined,
        }
      )}
    >
      <span className="font-bold flex-shrink-0">{text}</span>
      <FaArrowRight />
    </button>
  );
};

export default PrimaryButton;
