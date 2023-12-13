type StatType = {
  id: number;
  text: string;
  stat: number;
  img: string;
  symbol: string;
};

const stats: StatType[] = [
  {
    id: 1,
    text: "POOR PEOPLE",
    stat: 598,
    symbol: "K",
    img: "./stats/f1.webp",
  },
  {
    id: 2,
    text: "FUND RAISED",
    stat: 897,
    symbol: "M",
    img: "./stats/f2.webp",
  },
  {
    id: 3,
    text: "ACTIVE MEMBER",
    stat: 998,
    symbol: "+",
    img: "./stats/f3.webp",
  },
];

const Stats = () => {
  return (
    <section className="bg-greyBg">
      <div className="container grid grid-cols-3">
        {stats.map(({ id, img, stat, symbol, text }) => {
          return (
            <article
              key={id}
              className="flex gap-8 justify-center items-center py-32 px-8 border-x"
            >
              <div className="relative">
                <img
                  src="./stats/4.webp"
                  alt=""
                  className="absolute -left-8 w-40"
                />
                <img src={img} alt={text} />
              </div>
              <div className="flex flex-col gap-4 items-start">
                <h2 className="font-yeseva text-5xl text-primary">
                  {stat + symbol}
                </h2>
                <img src="./stats/funfact-line1.webp" alt="" />
                <p className="text-gray-400 text-sm font-semibold">// {text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
