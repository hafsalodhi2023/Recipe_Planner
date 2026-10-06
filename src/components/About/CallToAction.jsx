import Button from "../common/Button";
import { FaArrowCircleRight } from "react-icons/fa";

function CallToAction() {
  return (
    <div className=" w-full px-6 sm:px-8 xl:px-20 mt-30 flex flex-col items-center text-center">
      <div className="flex items-center justify-center gap-4 ">
        <span className="h-px w-12 bg-[#C9CFC1]" />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#71806C] uppercase text-center">
          One more thing
        </span>
        <span className="h-px w-12 bg-[#C9CFC1]" />
      </div>
      <h2 className="font-fraunces mx-auto mt-8 font-semibold tracking-tighter text-dark-olive text-2xl sm:text-3xl lg:text-4xl ">
        The answer might be&nbsp;
        <span className="relative inline-block text-dark-cream">
          in your kitchen.
          {/* underline */}
          <svg
            className="absolute -bottom-2 left-1/2 w-[90%] -translate-x-1/2"
            viewBox="0 0 300 16"
            fill="none"
          >
            <path
              d="M5 9C70 2 180 14 295 6"
              stroke="#d9ab00"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h2>
      <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-subtle-olive sm:text-base">
        A few ingredients, a little inspiration, and suddenly dinner doesn't
        feel like such a big question.
      </p>
      <div className="relative w-full max-w-xl mt-14 h-28">
        <div className="absolute left-[5%] top-5 flex h-12 w-12 sm:w-16 sm:h-16  rotate-[-10deg] items-center justify-center rounded-xl bg-subtle-cream text-2xl sm:text-3xl shadow-sm sm:left-[12%]">
          🥕
        </div>

        <div className="absolute left-1/2 top-0 flex h-16 w-16 sm:w-20 sm:h-20 -translate-x-1/2 rotate-[5deg] items-center justify-center rounded-2xl bg-subtle-beige text-3xl sm:text-4xl shadow-sm">
          🍅
        </div>

        <div className="absolute right-[5%] top-6 flex h-12 w-12 sm:w-16 sm:h-16 rotate-[8deg] items-center justify-center rounded-xl bg-subtle-cream text-2xl sm:text-3xl shadow-sm sm:right-[12%]">
          🥔
        </div>

        <span className="absolute left-[27%] top-12 text-dark-cream/70">✦</span>
        <span className="absolute right-[27%] top-16 text-primary-olive">
          ✦
        </span>
      </div>
      <Button
        text={"Let's figure out dinner"}
        style={"bold"}
        hover={"bold"}
        icon={<FaArrowCircleRight />}
        customStyle={"mt-8"}
      />
      <p className="mt-6 text-xs tracking-wide text-primary-olive">
        Less wondering · more cooking ⋆˙⟡
      </p>
    </div>
  );
}

export default CallToAction;
