import { FaRegUser } from "react-icons/fa6";
import SecondaryButton from "../../Buttons/SecondaryButton";

const Card = () => {
  return (
    <article className="group">
      <div className="h-[12.25rem] overflow-hidden">
        <img
          src="./causes/01.webp"
          alt=""
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="py-8 px-4 bg-[#F7F7F7] flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-2">
          <div className="font-yeseva p-2 bg-white group/item hover:gradientBg">
            <p className="group-hover/item:text-white">Goal:</p>
            <p className="text-xl gradient-text group-hover/item:text-white">
              $ 5,000
            </p>
          </div>
          <div className="font-yeseva p-2 bg-white group/item hover:gradientBg">
            <p className="group-hover/item:text-white">Goal:</p>
            <p className="text-xl gradient-text group-hover/item:text-white">
              $ 5,000
            </p>
          </div>
          <div className="font-yeseva p-2 bg-white group/item hover:gradientBg">
            <p className="group-hover/item:text-white">Goal:</p>
            <p className="text-xl gradient-text group-hover/item:text-white">
              $ 5,000
            </p>
          </div>
        </div>
        <h2 className="text-primary text-xl font-yeseva cursor-pointer transition hover:text-accent">
          Children Education Needs For Change The World.
        </h2>
        <p className="text-secondaryText">
          Lorem Ipsum is simply dummy text of the industry's since the unknown.
        </p>
        <div className="flex justify-between items-center">
          <span className="w-10 h-10 shadow-sm grid place-items-center bg-white rounded-full text-accent">
            <FaRegUser />
          </span>
          <p className="text-primary font-semibold">Kristin Horton</p>
          <SecondaryButton
            text="Donate Now"
            classNames="text-accent hover:border-accent"
          />
        </div>
      </div>
    </article>
  );
};

export default Card;
