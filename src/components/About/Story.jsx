import { BsFillPatchQuestionFill } from "react-icons/bs";

function Story() {
  return (
    <div className="relative overflow-hidden px-6 sm:px-8 xl:px-20 w-full mt-30">
      {/* Top label */}
      <div className="mb-6 flex items-center justify-center lg:justify-start gap-4">
        <span className="h-px w-10 bg-subtle-olive" />

        <span className="text-xs font-semibold tracking-[0.22em] text-subtle-olive uppercase">
          Where it all started
        </span>
      </div>

      {/* Main editorial layout */}
      <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT — Big story */}
        <div className="text-center lg:text-left">
          <p className="mb-6 text-sm font-medium text-primary-olive">
            A very familiar kitchen moment...
          </p>

          <h2 className="w-full lg:w-fit lg:max-w-3xl text-2xl sm:text-3xl lg:text-4xl font-medium leading-[1.05] tracking-[-0.04em] font-fraunces text-dark-olive">
            You have
            <span className="relative mx-2 inline-block italic text-dark-cream">
              food.
            </span>
            <br />
            You just don't know
            <span className="relative ml-2 inline-block">what to make.</span>
          </h2>

          {/* Hand drawn underline */}
          <svg
            className="mt-3 w-52 sm:w-64 mx-auto lg:mx-0"
            viewBox="0 0 260 18"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 11C55 3 115 14 256 6"
              stroke="#cc3a63"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>

          <p className="mt-10 w-full lg:w-fit lg:max-w-xl leading-8 text-subtle-olive ">
            Maybe there's a potato hiding in the corner, some tomatoes waiting
            in the fridge, and a few ingredients that could become something
            really good.
          </p>

          <p className="mt-5 w-full lg:w-fit lg:max-w-xl leading-8 text-subtle-olive">
            And yet somehow, the hardest part is deciding what to cook.
          </p>
        </div>

        {/* RIGHT — Ingredient composition */}
        <div className="relative mx-auto h-105 w-full max-w-md">
          {/* Background circle */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-subtle-beige sm:h-80 sm:w-80" />

          {/* Dashed orbit */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-primary-olive sm:h-96 sm:w-96" />

          {/* Potato */}
          <div className="absolute left-[5%] top-[22%] flex h-24 w-24 -rotate-12 items-center justify-center rounded-4xl bg-secondary-beige/50 text-5xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-28 sm:w-28 sm:text-6xl">
            🥔
          </div>

          {/* Tomato */}
          <div className="absolute right-[3%] top-[12%] flex h-20 w-20 rotate-10 items-center justify-center rounded-full bg-accent-raspberry/20 text-4xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-24 sm:w-24 sm:text-5xl">
            🍅
          </div>

          {/* Onion */}
          <div className="absolute bottom-[18%] left-[10%] flex h-20 w-20 rotate-[8deg] items-center justify-center rounded-[1.8rem] bg-primary-olive/30 text-4xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-24 sm:w-24 sm:text-5xl">
            🧅
          </div>

          {/* Carrot */}
          <div className="absolute bottom-[8%] right-[8%] flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-4xl bg-subtle-cream/60 text-5xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-28 sm:w-28 sm:text-6xl">
            🥕
          </div>

          {/* Center question */}
          <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-3 items-center justify-center rounded-[2.5rem] bg-subtle-cream px-6 text-center shadow-[0_15px_45px_rgba(37,75,54,0.12)] transition-transform duration-300 hover:rotate-0 sm:h-48 sm:w-48">
            <div>
              <span className="block text-[10px] font-semibold tracking-[0.2em] text-primary-olive uppercase">
                The question
              </span>

              <p className="mt-3 text-2xl font-semibold leading-tight text-dark-olive/90 sm:text-3xl">
                Aaj kya
                <br />
                pakayein
                <BsFillPatchQuestionFill className="mx-auto mt-3 text-md" />
              </p>
            </div>
          </div>

          {/* Tiny decorative dots */}
          <span className="absolute left-[38%] top-[2%] h-2 w-2 rounded-full bg-subtle-beige" />
          <span className="absolute bottom-[3%] left-[48%] h-3 w-3 rounded-full bg-subtle-olive/40" />
          <span className="absolute right-[20%] top-[45%] h-2 w-2 rounded-full bg-accent-raspberry/60" />
        </div>
      </div>
    </div>
  );
}

export default Story;
