import { FaArrowRight, FaShare } from "react-icons/fa6";
import { BsShareFill } from "react-icons/bs";

import { cn } from "../../../lib/utils";
import { useRef } from "react";
import { useInView } from "framer-motion";

type BlogPostType = {
  id: number;
  day: number;
  month: string;
  category: string;
  title: string;
  img: string;
  author: string;
};

const blogPosts: BlogPostType[] = [
  {
    id: 1,
    author: "Robins",
    category: "Water",
    day: 15,
    month: "January",
    img: "./blog-posts/1.webp",
    title: "Save Children Life For Future.",
  },
  {
    id: 2,
    author: "Robins",
    category: "Education",
    day: 25,
    month: "January",
    img: "./blog-posts/2.webp",
    title: "Save Children Life For Future.",
  },
  {
    id: 3,
    author: "Robins",
    category: "Health",
    day: 30,
    month: "January",
    img: "./blog-posts/3.webp",
    title: "Save Children Life For Future.",
  },
];

const Blog = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });
  return (
    <section className="py-32" ref={sectionRef}>
      <div className="container">
        <div
          className="flex flex-col items-center mb-16"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">Blog Post</span>
          </p>
          <div className="relative">
            <h2 className="text-5xl leading-tight text-primary font-yeseva max-w-xl mt-8 text-center">
              Latest News From Givest Blog
            </h2>
            <img
              src="./3.webp"
              alt=""
              className="absolute w-36 centerAbsolute -z-10"
            />
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          {blogPosts.map(({ id, author, category, day, img, month, title }) => {
            return (
              <article key={id} className="relative group overflow-hidden">
                <div className="relative h-96 overflow-hidden">
                  <div className="absolute p-4 flex flex-col gap-2 bg-accent left-5 top-5 after:absolute after:w-full after:h-full after:border-2 after:border-white after:left-2 after:top-2 after:-z-[1]">
                    <p className="text-4xl text-center font-yeseva text-white">
                      {day}
                    </p>
                    <p className="text-white uppercase text-sm">{month}</p>
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 absolute -z-[2]"
                  />
                </div>
                <div className="absolute -bottom-28 transition-all duration-500 group-hover:bottom-0 left-1/2 -translate-x-1/2 p-8 bg-greyBg flex flex-col gap-4 w-3/4">
                  <div className="flex justify-between items-center">
                    <p className="uppercase text-sm font-semibold py-1 px-4 bg-gray-200 text-accent">
                      {category}
                    </p>
                    <BsShareFill />
                  </div>
                  <h2 className="text-2xl font-yeseva text-primary">{title}</h2>
                  <p className="text-secondaryText">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Delectus.
                  </p>
                  <div className="flex justify-between items-center">
                    <button
                      className={cn(
                        "z-10 flex gap-2 items-center py-2 px-4 rounded-full border border-accent text-accent"
                      )}
                    >
                      <span className="flex-shrink-0">Details</span>
                      <FaArrowRight />
                    </button>
                    <p className="text-primary font-semibold">By: {author}</p>
                  </div>
                </div>
                <div className="w-full h-24" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
