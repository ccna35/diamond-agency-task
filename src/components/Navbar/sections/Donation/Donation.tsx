import { useState } from "react";
import { cn } from "../../../../lib/utils";
import PrimaryButton from "../../../Buttons/PrimaryButton";
import SecondaryButton from "../../../Buttons/SecondaryButton";

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState<
    null | number | "custom"
  >(null);
  return (
    <section className="py-32 bg-primary overflow-hidden">
      <div className="container grid grid-cols-2 gap-32">
        <div className="flex flex-col items-start gap-16">
          <div>
            <p className="flex items-center">
              <span className="inline-block h-1 w-12 bg-accent mr-4" />
              <span className="text-accent font-semibold text-xl">
                Make A Donation
              </span>
            </p>
            <h2 className="text-5xl text-white font-yeseva max-w-3xl mt-4">
              Need Pure Water For Mozambique People.
            </h2>
          </div>
          <div className="inline-flex gap-4 flex-wrap">
            <button
              className={cn("border-2 py-4 px-8 font-semibold text-white", {
                "border-accent": donationAmount === 20,
              })}
              onClick={() => setDonationAmount(20)}
            >
              $20
            </button>
            <button
              className={cn("border-2 py-4 px-8 font-semibold text-white", {
                "border-accent": donationAmount === 50,
              })}
              onClick={() => setDonationAmount(50)}
            >
              $50
            </button>
            <button
              className={cn("border-2 py-4 px-8 font-semibold text-white", {
                "border-accent": donationAmount === 200,
              })}
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
                "border-2 font-semibold text-white bg-transparent placeholder:text-white focus:placeholder:text-transparent hover:border-accent focus:outline-none text-center",
                {
                  "border-accent": donationAmount === "custom",
                }
              )}
              onClick={() => setDonationAmount("custom")}
            />
          </div>
          <div className="flex gap-8 flex-wrap">
            <PrimaryButton />
            <SecondaryButton text="Join Events" />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <img src="./donation/bg-donate1.webp" alt="" className="" />
          <h2 className="text-5xl text-white font-yeseva">Great Donners</h2>
          <p className="text-secondaryText">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry since the 1500s, when an unknown.
          </p>
          <div className="flex gap-8">
            <img
              src="./donation/donnors/donner1.webp"
              alt=""
              className="border-4 border-secondaryText rounded-full"
            />
            <img
              src="./donation/donnors/donner1.webp"
              alt=""
              className="border-4 border-secondaryText rounded-full"
            />
            <img
              src="./donation/donnors/donner1.webp"
              alt=""
              className="border-4 border-secondaryText rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
