import Card from "./Card";

type CardType = {
  id: number;
  headline: string;
  img: string;
  bgColor: "accent" | "secondary" | "primary";
};

const cards: CardType[] = [
  {
    id: 1,
    headline: "Clean Water",
    img: "./mission/water.webp",
    bgColor: "accent",
  },
  {
    id: 2,
    headline: "Healthy Food",
    img: "./mission/food.webp",
    bgColor: "primary",
  },
  {
    id: 3,
    headline: "Medical Help",
    img: "./mission/medical-help.webp",
    bgColor: "secondary",
  },
];

const Mission = () => {
  return (
    <section className="py-32">
      <div className="container grid gap-8 lg:grid-cols-3">
        {cards.map(({ id, headline, img, bgColor }) => {
          return (
            <Card key={id} headline={headline} img={img} bgColor={bgColor} />
          );
        })}
      </div>
    </section>
  );
};

export default Mission;
