import Title from "./common/Title";
import { features } from "../Data/Features";

import { TiHeart } from "react-icons/ti";

function Features() {
  return (
    <div className="px-6 sm:px-8 xl:px-20 w-full mt-30">
      <Title
        eyebrow={"WHY YOU'LL LOVE IT"}
        heading={"Your kitchen, but a little smarter."}
        description={
          "Make the most of what you have, discover new ideas, and plan meals with ease."
        }
        eyebrowIcon={<TiHeart />}
      />
      <div className="w-full flex items-center justify-around flex-wrap gap-y-10 mt-15">
        {features?.map((item, idx) => (
          <div key={idx} className="flex items-center justify-start gap-4">
            <div className="flex  items-center justify-center rounded-2xl text-xl h-12 w-12 bg-subtle-beige">
              {item.icon}
            </div>
            <div className="">
              <h3 className="font-semibold text-subtle-olive text-lg">
                {item.title}
              </h3>
              <p className="mt-1 leading-6 text-subtle-olive/70">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
