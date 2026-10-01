import { GiMeat } from "react-icons/gi";
import { RiLightbulbAiFill } from "react-icons/ri";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Abc = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F3E8] px-5 py-24 sm:px-8 lg:px-20 lg:py-32">
      <div className="relative mx-auto max-w-5xl text-center">
        {/* Small label */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-[#C9CFC1]" />
          <span className="text-xs font-semibold tracking-[0.2em] text-[#71806C] uppercase">
            One more thing
          </span>
          <span className="h-px w-12 bg-[#C9CFC1]" />
        </div>

        {/* Main heading */}
        <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#254B36] sm:text-6xl lg:text-8xl">
          The answer might be
          <br />
          <span className="relative inline-block text-[#C68B4A]">
            in your kitchen.
            {/* underline */}
            <svg
              className="absolute -bottom-4 left-1/2 w-[90%] -translate-x-1/2"
              viewBox="0 0 300 16"
              fill="none"
            >
              <path
                d="M5 9C70 2 180 14 295 6"
                stroke="#D49A58"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-10 max-w-xl text-sm leading-7 text-[#737A6E] sm:text-base">
          A few ingredients, a little inspiration, and suddenly dinner doesn't
          feel like such a big question.
        </p>

        {/* Floating ingredients */}
        <div className="relative mx-auto mt-14 h-28 max-w-xl">
          <div className="absolute left-[5%] top-5 flex h-16 w-16 rotate-[-10deg] items-center justify-center rounded-[1.3rem] bg-white text-3xl shadow-sm sm:left-[12%]">
            🥕
          </div>

          <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 rotate-[5deg] items-center justify-center rounded-[1.5rem] bg-[#E8EEDC] text-4xl shadow-sm">
            🍅
          </div>

          <div className="absolute right-[5%] top-6 flex h-16 w-16 rotate-[8deg] items-center justify-center rounded-[1.3rem] bg-white text-3xl shadow-sm sm:right-[12%]">
            🥔
          </div>

          <span className="absolute left-[27%] top-12 text-[#C68B4A]">✦</span>
          <span className="absolute right-[27%] top-16 text-[#71806C]">✦</span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/recipes"
            className="group inline-flex items-center gap-3 rounded-full bg-[#254B36] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#315C43] hover:shadow-xl"
          >
            Let's figure out dinner
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-xs tracking-wide text-[#9A9F94]">
          Less wondering · more cooking ✨
        </p>
      </div>
    </section>
  );
};

export default Abc;
