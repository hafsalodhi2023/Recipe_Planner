import { FaPlateWheat } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa";
import { BsFillCalendarHeartFill } from "react-icons/bs";

export const steps = [
  {
    rowStart: "row-start-1",
    icon: <FaPlateWheat className="text-lg md:text-2xl text-dark-olive/90 " />,
    title: "Tell us what you have?",
    description:
      "Add the ingredients waiting in your kitchen and tell us what you're craving.",
  },
  {
    rowStart: "row-start-2",
    icon: <FaBrain className="text-lg md:text-2xl text-dark-olive/90 " />,
    title: "Get inspired <3",
    description:
      "Let AI turn your ingredients and preferences into delicious recipe ideas.",
  },
  {
    rowStart: "row-start-3",
    icon: (
      <BsFillCalendarHeartFill className="text-lg md:text-2xl text-dark-olive/90 " />
    ),
    title: "Pick & plan!",
    description:
      "Choose a recipe you love and add it to your weekly meal plan.",
  },
];
