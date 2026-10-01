import { GiMeat } from "react-icons/gi";
import { RiLightbulbAiFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";
import Title from "../common/Title";

const values = [
  {
    icon: <GiMeat />,
    title: "Start with what you have",
    text: "Good meals don't always begin with a shopping list. Sometimes, everything you need is already in your kitchen.",
    position: "lg:mt-10",
  },
  {
    icon: <RiLightbulbAiFill />,
    title: "Keep it simple",
    text: "Finding something to cook shouldn't feel like another task on your to-do list.",
    position: "lg:-mt-4",
  },
  {
    icon: <GiForkKnifeSpoon />,
    title: "Make everyday meals easier",
    text: "We're here to make that little dinner decision feel a whole lot lighter.",
    position: "lg:mt-16",
  },
];

const Values = () => {
  return (
    <div className="w-full px-6 sm:px-8 xl:px-20 mt-30 flex flex-col items-center">
      <Title
        eyebrow={"WHAT WE BELIEVE"}
        eyebrowIcon={<span className="text-dark-cream text-base">✦</span>}
        heading={"Cooking doesn't need to be complicated."}
        description={
          "The idea is simple: make everyday cooking feel less overwhelming and a little more enjoyable."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-15 gap-10 md:gap-6 w-fit">
        {values.map((item, idx) => (
          <article
            key={idx}
            className={`flex flex-col justify-between min-h-100 h-fit p-7 sm:p-8 bg-subtle-beige/40 border border-primary-olive/20 rounded-4xl group transition-all duration-300 hover:-translate-y-2 hover:bg-subtle-beige/30 max-w-sm ${item.position}`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold tracking-[0.15em] text-primary-olive">
                0{idx + 1}
              </span>
              <span className="h-px w-12 bg-primary-olive/50 transition-all duration-300 group-hover:w-20" />
            </div>
            <div
              className={`mt-8 flex h-24 w-24 items-center justify-center rounded-[1.8rem] bg-subtle-beige text-5xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
            >
              {item.icon}
            </div>
            <h4 className="mt-8 max-w-xs text-2xl font-semibold leading-tight text-dark-olive">
              {item.title}
            </h4>
            <p className="mt-4 text-sm leading-7 text-primary-olive">
              {item.text}
            </p>
            <div className="mt-8 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-dark-cream" />

              <span className="h-px w-10 bg-dark-cream/50 transition-all duration-300 group-hover:w-16" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Values;
