import { useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton";
import { useInView } from "framer-motion";

type DonnorType = { id: number; img: string; alt: string };

const donnorsList: DonnorType[] = [
  { id: 1, img: "./donation/donnors/donner1.webp", alt: "Donnor 1" },
  { id: 2, img: "./donation/donnors/donner2.webp", alt: "Donnor 2" },
  { id: 3, img: "./donation/donnors/donner3.webp", alt: "Donnor 3" },
];

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState<
    null | number | "custom"
  >(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section className="py-32 bg-primary overflow-hidden" ref={sectionRef}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        <div
          className="flex flex-col justify-center items-center lg:items-start gap-16"
          style={{
            transform: isInView ? "none" : "translateY(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <div className="flex flex-col text-center lg:text-left justify-center items-center lg:items-start gap-8">
            <p className="flex items-center">
              <span className="inline-block h-1 w-12 bg-accent mr-4" />
              <span className="text-accent font-semibold text-xl">
                Make A Donation
              </span>
            </p>
            <div className="relative isolate">
              <h2 className="text-[40px] text-white font-yeseva max-w-3xl mt-4">
                Need Pure Water For Mozambique People.
              </h2>
              <img
                src="./3.webp"
                alt=""
                className="absolute w-36 centerAbsolute -z-10"
              />
            </div>
          </div>
          <div className="inline-flex gap-4">
            <button
              className={cn(
                "border-2 border-gray-400 py-2 px-4 font-semibold text-white transition hover:border-accent",
                {
                  "border-accent": donationAmount === 20,
                }
              )}
              onClick={() => setDonationAmount(20)}
            >
              $20
            </button>
            <button
              className={cn(
                "border-2 border-gray-400 py-2 px-4 font-semibold text-white transition hover:border-accent",
                {
                  "border-accent": donationAmount === 50,
                }
              )}
              onClick={() => setDonationAmount(50)}
            >
              $50
            </button>
            <button
              className={cn(
                "border-2 border-gray-400 py-2 px-4 font-semibold text-white transition hover:border-accent",
                {
                  "border-accent": donationAmount === 200,
                }
              )}
              onClick={() => setDonationAmount(200)}
            >
              $200
            </button>
            <input
              type="text"
              name=""
              id=""
              placeholder="Custom"
              className={cn(
                "border-2 border-gray-400 font-semibold text-white bg-transparent placeholder:text-white focus:placeholder:text-transparent hover:border-accent focus:outline-none text-center",
                {
                  "border-accent": donationAmount === "custom",
                }
              )}
              onClick={() => setDonationAmount("custom")}
            />
          </div>
          <div className="flex gap-8 flex-wrap">
            <PrimaryButton text="Donate Now" />
            <SecondaryButton text="Join Events" />
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center lg:items-start gap-8"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
          }}
        >
          <img src="./donation/bg-donate1.webp" alt="" className="" />
          <h2 className="text-5xl text-white font-yeseva">Great Donners</h2>
          <p className="text-gray-400 text-center lg:text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry since the 1500s, when an unknown.
          </p>
          <div className="flex gap-4">
            {donnorsList.map(({ id, img, alt }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt={alt}
                  className="border-4 border-secondaryText rounded-full"
                />
              );
            })}
            <div className="w-20 h-20 rounded-full gradientBg grid place-items-center">
              <p className="font-yeseva text-xl text-white">+286</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
