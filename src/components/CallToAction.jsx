import CTAimage from "../assets/cta.png";

import Button from "./common/Button";

import { FaArrowAltCircleRight } from "react-icons/fa";

function CallToAction() {
  return (
    <div className="w-full px-6 sm:px-8 xl:px-20 mt-30">
      <div className="relative max-w-6xl mx-auto rounded-4xl bg-primary-olive/20 border-4 border-dashed border-dark-olive/30 overflow-hidden flex items-center px-10 py-10">
        <div className="decorative_circle absolute w-30 h-30 bg-primary-olive/40 top-0 left-0 rounded-br-full -z-10" />
        <div className="w-full lg:w-1/2 h-full text-center lg:text-left flex flex-col justify-center">
          <p className="text-sm tracking-widest font-semibold uppercase text-subtle-olive/70 mb-4">
            DINNER DOESN'T HAVE TO BE COMPLICATED
          </p>
          <h2 className="text-4xl font-fraunces text-dark-olive mb-1">
            Got ingredients? We've got ideas.
          </h2>
          <p className="text-subtle-olive mb-10">
            Tell us what's sitting in your kitchen and let's turn it into
            something delicious.
          </p>
          <Button
            text={"Find My Recipe"}
            style={"bold"}
            customStyle={"w-fit mx-auto lg:m-0 "}
            icon={<FaArrowAltCircleRight />}
          />
        </div>
        <div className="hidden w-1/2 lg:block h-80 pl-10">
          <img src={CTAimage} alt="" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
