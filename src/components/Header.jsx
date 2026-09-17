import HeaderImg from "../assets/Header.png";
import Button from "./common/Button";

import { IoFastFood } from "react-icons/io5";

function Header() {
  return (
    <header className="flex items-center lg:justify-between flex-col w-full h-full px-2 sm:px-8 xl:px-20 lg:flex-row">
      <div className="w-full lg:w-[55%] flex items-center justify-center flex-col h-80 lg:h-full lg:items-start">
        <p
          className={`relative text-sm sm:text-base lg:text-lg text-subtle-olive font-semibold mb-5 sm:mb-10 before:absolute before:w-15 before:h-15 sm:before:w-20 sm:before:h-20 before:bg-(image:--pastry) before:bg-contain sm:before:-left-20 sm:before:-bottom-4 before:-left-14 before:-bottom-4 before:rotate-12 after:absolute after:w-20 after:h-20 sm:after:w-39 sm:after:h-39 after:bg-(image:--french-toast) after:bg-no-repeat after:bg-contain after:rotate-12 after:-top-18 after:-right-40 after:hidden sm:after:block lg:after:hidden lg:before:hidden lg:mb-5 text-center lg:text-left`}
        >
          A LITTLE HELP FROM YOUR KITCHEN
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-medium mb-1 text-center lg:text-left">
          What's Cooking Today?
        </h1>
        <p className="mb-6 text-center text-sm sm:text-base lg:text-left">
          Tell us what you've got, and we'll help you turn it into something
          delicious.
        </p>
        <Button
          text={"FIND MY RECIPE"}
          style={"bold"}
          hover={"soft"}
          icon={<IoFastFood />}
          to={"/recipes"}
        />
      </div>
      <img
        src={HeaderImg}
        alt="Header.png"
        className="w-110 xl:w-150 lg:block hidden"
      />
    </header>
  );
}

export default Header;
