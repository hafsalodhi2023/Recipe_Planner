import { steps } from "../Data/Timeline";

import Title from "./common/Title";
import TimelineItem from "./TimelineItem";

import { FaQuestion } from "react-icons/fa";
import { PiCirclesThreeBold } from "react-icons/pi";

function Timeline() {
  return (
    <div className="w-full flex flex-col items-center mt-30 px-6 sm:px-8 xl:px-20">
      <Title
        heading={"From “What do I cook?” to “Dinner is sorted.”"}
        eyebrow={"HOW IT WORKS"}
        description={
          "Three simple steps to turn the ingredients you have into meals you'll love."
        }
        eyebrowIcon={<FaQuestion />}
        descriptionIcon={<PiCirclesThreeBold className="mt-1" />}
      />
      <div className="relative w-full h-150 mt-15 grid grid-cols-2 grid-rows-3 ">
        {steps.map((item, index) => (
          <TimelineItem
            key={index}
            step={item}
            isEven={index % 2 === 0}
            rowStart={item.rowStart}
          />
        ))}
        <div className="absolute w-0.5 h-full bg-dark-olive md:left-1/2 before:absolute before:w-6 before:h-6 before:-bottom-3 before:-left-2.75 before:bg-dark-olive before:rounded-[50%_50%_0_50%] before:rotate-225 after:absolute after:w-6 after:h-6 after:-top-3 after:-left-2.75 after:bg-dark-olive after:rounded-[50%_50%_0_50%] after:rotate-45"></div>
      </div>
    </div>
  );
}

export default Timeline;
// before:absolute before:w-6 before:h-6 before:-left-3 before:-bottom-3 before:bg-dark-olive before:rounded-[50%_50%_0_50%] before:rotate-221
