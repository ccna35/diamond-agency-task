import { useState } from "react";
import { cn } from "../../../lib/utils";
import { FaArrowLeft, FaArrowRight, FaLeftRight } from "react-icons/fa6";

type ReviewType = {
  id: number;
  img: string;
  name: string;
  position: string;
  review: string;
};

const reviews: ReviewType[] = [
  {
    id: 1,
    img: "./testimonials/people/1.webp",
    name: "Julia Steve",
    position: "SENIOR VOLUNTEER",
    review:
      "The leap into electronic typesetting, essentially unchanged was popularised the release Letraset sheets containing and more recently desktop publishing like Aldus maker including.",
  },
  {
    id: 2,
    img: "./testimonials/people/2.webp",
    name: "Harvey Harrington",
    position: "SENIOR VOLUNTEER",
    review:
      "The leap into electronic typesetting, essentially unchanged was popularised the release Letraset sheets containing and more recently desktop publishing like Aldus maker including.",
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => {
    if (activeSlide === reviews.length - 1) return setActiveSlide(0);
    return setActiveSlide((prev) => prev + 1);
  };
  const handlePrevious = () => {
    if (activeSlide === 0) return setActiveSlide(reviews.length - 1);
    return setActiveSlide((prev) => prev - 1);
  };

  return (
    <section className="py-32 bg-primary overflow-x-hidden">
      <div className="container flex flex-col lg:flex-row gap-16">
        <div className="p-8 bg-headerBg">
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-white mr-4" />
            <span className="text-white font-semibold text-xl">
              Recent Events
            </span>
          </p>
          <h2 className="text-4xl text-white font-yeseva max-w-3xl leading-snug mt-4 drop-shadow-md">
            What People Say About Us.
          </h2>
        </div>
        <div className="border border-red-500">
          <div className="relative overflow-x-hidden border border-yellow-500 h-96">
            {reviews.map(({ id, img, name, position, review }, index) => {
              return (
                <article
                  key={id}
                  className={cn(
                    "absolute flex flex-col gap-8 items-start transition-all duration-500 opacity-0",
                    {
                      "opacity-100": activeSlide === index,
                    }
                  )}
                >
                  <div className="relative">
                    <img
                      src={img}
                      alt=""
                      className="relative border-4 border-secondaryText rounded-full z-10"
                    />
                    <div className="font-yeseva absolute text-[20rem] gradient-text -top-32 -right-24">
                      “
                    </div>
                  </div>
                  <p className="font-yeseva text-2xl text-white">{review}</p>
                  <img src="./testimonials/line-t1.webp" alt="" />
                  <div>
                    <p className="text-white font-yeseva text-2xl">{name}</p>
                    <p className="text-accent font-yeseva">{position}</p>
                  </div>
                </article>
              );
            })}
            <div className="p-8 w-96 bg-slate-300 absolute -bottom-12 -right-48 inline-flex">
              <div className="flex gap-4">
                <button
                  className="w-12 h-12 rounded-full bg-white grid place-items-center"
                  onClick={handlePrevious}
                >
                  <span className="text-accent">
                    <FaArrowLeft />
                  </span>
                </button>
                <button
                  className="w-12 h-12 rounded-full bg-white grid place-items-center"
                  onClick={handleNext}
                >
                  <span className="text-accent">
                    <FaArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
