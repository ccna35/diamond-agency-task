import Card from "./Card";

const Causes = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 items-center">
        <div className="flex flex-col items-center">
          <p className="flex items-center">
            <span className="inline-block h-1 w-12 bg-accent mr-4" />
            <span className="text-accent font-semibold text-xl">
              Check Causes
            </span>
          </p>
          <h2 className="text-5xl leading-tight text-primary font-yeseva max-w-2xl mt-8 text-center">
            Donate For Poor People. Causes of Givest
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Causes;
