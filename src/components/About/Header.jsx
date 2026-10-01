import { BsPatchQuestionFill } from "react-icons/bs";
import { GiForkKnifeSpoon } from "react-icons/gi";

function Header() {
  return (
    <div className="relative overflow-hidden w-full lg:h-150 px-2 sm:px-8 xl:px-20 flex flex-col lg:flex-row">
      {/* Decorative ingredients */}
      <div className="pointer-events-none absolute -left-8 top-20 text-5xl rotate-[-15deg] opacity-70">
        🥕
      </div>

      <div className="pointer-events-none absolute right-10 top-12 text-4xl rotate-12 opacity-70">
        🍅
      </div>

      <div className="pointer-events-none absolute bottom-8 right-[15%] text-3xl -rotate-12 opacity-60">
        🧅
      </div>
      <div className="h-full w-full lg:w-1/2 pt-15 px-10 sm:px-20 lg:px-0 lg:pt-0 flex items-center justify-center text-center lg:text-left lg:items-start flex-col">
        <p className="text-sm tracking-widest font-semibold text-subtle-olive mb-6">
          AAJ KYA PAKAYEIN <BsPatchQuestionFill className="inline" />
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-fraunces font-medium text-dark-olive mb-6">
          Because
          <span className="block text-accent-raspberry">
            “what should I cook?”
          </span>
          shouldn't be a daily problem.
        </h1>
        <p className="text-dark-olive/80 mb-2 pr-5">
          We created Recipe Planner for those everyday moments when you have
          ingredients in the kitchen, but no idea what to make.
        </p>
        <p className="text-subtle-olive/80 text-sm lg:pr-5">
          A little inspiration, a little AI, and hopefully one less question to
          worry about before dinner.
        </p>
      </div>
      <div className="relative h-full w-full lg:w-1/2 py-20 lg:py-0 flex items-center justify-center">
        <div className="decorative_circle absolute w-80 h-60 sm:w-100 sm:80 rounded-full bg-subtle-beige" />
        <div className="relative flex flex-col justify-between w-60 h-80 sm:w-80 sm:h-92.5 z-2 bg-secondary-beige rounded-4xl -rotate-3 shadow-xl px-5 py-6">
          <p className="text-xs text-dark-olive/50">WHAT' S IN YOU KITCHEN?</p>
          <div className="flex flex-col gap-4 w-full">
            <p className="flex items-center gap-3 w-full text-left py-3 px-4 bg-subtle-beige rounded-2xl">
              <span className="text-2xl">🥔</span>
              <span className="text-sm font-medium text-dark-olive">
                Potatoes
              </span>
            </p>
            <p className="flex items-center gap-3 w-full text-left py-3 px-4 bg-subtle-beige rounded-2xl">
              <span className="text-2xl">🧅</span>
              <span className="text-sm font-medium text-dark-olive">Onion</span>
            </p>
            <p className="flex items-center gap-3 w-full text-left py-3 px-4 bg-subtle-beige rounded-2xl">
              <span className="text-2xl">🍅</span>
              <span className="text-sm font-medium text-dark-olive">
                Tomato
              </span>
            </p>
          </div>
          <p className="text-sm text-dark-olive/50 text-center">
            So... what can we make? {"  "}
            <GiForkKnifeSpoon className="inline text-dark-olive/70 text-base" />
          </p>
          <div className="absolute -bottom-10 left-0 lg:-left-30 rounded-2xl bg-secondary-beige px-4 py-3 shadow-lg border-subtle-beige border">
            <p className="text-xs font-medium text-subtle-olive">
              Less guessing.
            </p>
            <p className="text-sm font-semibold text-dark-olive/80">
              More cooking. 🍮🥄˚₊‧
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
