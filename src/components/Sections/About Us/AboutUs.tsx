import PrimaryButton from "../../Buttons/PrimaryButton";

const AboutUs = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div>
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">About Us.</span>
          </p>
          <h2 className="text-5xl text-primary font-yeseva max-w-3xl mt-4">
            <span className="gradient-text ">Givest</span>
            is The Non Profitable Organization.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 py-16">
          <div className="flex gap-4">
            <div>
              <img
                src="./about-us/1.webp"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <img
                src="./about-us/2.webp"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 items-start">
            <p className="font-yeseva text-2xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry has been the industry standard.
            </p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry orem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex gap-8 items-start border-r-4 border-accent">
                <img src="./about-us/check-double-line.webp" alt="" />
                <p>Need your simple help for save children.</p>
              </div>
              <div className="flex gap-8 items-start">
                <img src="./about-us/check-double-line.webp" alt="" />
                <p>Need your simple help for save children.</p>
              </div>
            </div>
            <PrimaryButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
