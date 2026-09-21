const storyMoments = [
  {
    number: "01",
    emoji: "🥔",
    title: "The ingredients",
    description:
      "A few potatoes, some onions, and whatever's already in the kitchen.",
    bg: "bg-[#F5E7C9]",
    rotate: "md:-rotate-3",
  },
  {
    number: "02",
    emoji: "🤔",
    title: "The big question",
    description: "You have the ingredients. But what on earth should you make?",
    bg: "bg-[#E4EAD9]",
    rotate: "md:rotate-2",
  },
  {
    number: "03",
    emoji: "🍲",
    title: "The little idea",
    description: "What if finding your next meal could be a little simpler?",
    bg: "bg-[#F4DFD2]",
    rotate: "md:-rotate-2",
  },
];

const AboutStory = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8F3E8] px-5 py-24 sm:px-8 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Top label */}
        <div className="mb-14 flex items-center gap-4">
          <span className="h-px w-10 bg-[#55734F]" />

          <span className="text-xs font-semibold tracking-[0.22em] text-[#55734F] uppercase">
            Where it all started
          </span>
        </div>

        {/* Main editorial layout */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — Big story */}
          <div>
            <p className="mb-6 text-sm font-medium text-[#8A8F82]">
              A very familiar kitchen moment...
            </p>

            <h2 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#254B36] sm:text-6xl lg:text-7xl">
              You have
              <span className="relative mx-2 inline-block italic text-[#C68B4A]">
                food.
              </span>
              <br />
              You just don't know
              <span className="relative ml-2 inline-block">what to make.</span>
            </h2>

            {/* Hand drawn underline */}
            <svg
              className="mt-3 w-52 sm:w-64"
              viewBox="0 0 260 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 11C55 3 115 14 256 6"
                stroke="#C68B4A"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <p className="mt-10 max-w-xl text-base leading-8 text-[#687568] sm:text-lg">
              Maybe there's a potato hiding in the corner, some tomatoes waiting
              in the fridge, and a few ingredients that could become something
              really good.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#687568] sm:text-lg">
              And yet somehow, the hardest part is deciding what to cook.
            </p>
          </div>

          {/* RIGHT — Ingredient composition */}
          <div className="relative mx-auto h-[420px] w-full max-w-md">
            {/* Background circle */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E7EBD9] sm:h-80 sm:w-80" />

            {/* Dashed orbit */}
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#B8C5AA] sm:h-96 sm:w-96" />

            {/* Potato */}
            <div className="absolute left-[5%] top-[22%] flex h-24 w-24 rotate-[-12deg] items-center justify-center rounded-[2rem] bg-[#EAD5B1] text-5xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-28 sm:w-28 sm:text-6xl">
              🥔
            </div>

            {/* Tomato */}
            <div className="absolute right-[3%] top-[12%] flex h-20 w-20 rotate-[10deg] items-center justify-center rounded-full bg-[#F0D0C3] text-4xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-24 sm:w-24 sm:text-5xl">
              🍅
            </div>

            {/* Onion */}
            <div className="absolute bottom-[18%] left-[10%] flex h-20 w-20 rotate-[8deg] items-center justify-center rounded-[1.8rem] bg-[#DDD9E8] text-4xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-24 sm:w-24 sm:text-5xl">
              🧅
            </div>

            {/* Carrot */}
            <div className="absolute bottom-[8%] right-[8%] flex h-24 w-24 rotate-[-8deg] items-center justify-center rounded-[2rem] bg-[#F2D9B9] text-5xl shadow-sm transition-transform duration-300 hover:rotate-0 hover:scale-110 sm:h-28 sm:w-28 sm:text-6xl">
              🥕
            </div>

            {/* Center question */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 rotate-3 items-center justify-center rounded-[2.5rem] bg-white px-6 text-center shadow-[0_15px_45px_rgba(37,75,54,0.12)] transition-transform duration-300 hover:rotate-0 sm:h-48 sm:w-48">
              <div>
                <span className="block text-[10px] font-semibold tracking-[0.2em] text-[#9AA092] uppercase">
                  The question
                </span>

                <p className="mt-3 text-2xl font-semibold leading-tight text-[#254B36] sm:text-3xl">
                  Aaj kya
                  <br />
                  pakayein?
                </p>

                <span className="mt-3 block text-lg">🤔</span>
              </div>
            </div>

            {/* Tiny decorative dots */}
            <span className="absolute left-[38%] top-[2%] h-2 w-2 rounded-full bg-[#C68B4A]" />
            <span className="absolute bottom-[3%] left-[48%] h-3 w-3 rounded-full bg-[#55734F]/40" />
            <span className="absolute right-[20%] top-[45%] h-2 w-2 rounded-full bg-[#C68B4A]/60" />
          </div>
        </div>

        {/* Bottom statement */}
        <div className="relative mt-24 border-t border-[#D9DCCF] pt-10 sm:mt-28">
          <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
            <span className="text-4xl">✦</span>

            <div className="max-w-3xl">
              <p className="text-2xl font-medium leading-relaxed tracking-tight text-[#254B36] sm:text-3xl">
                So we thought —
                <span className="text-[#C68B4A]">
                  {" "}
                  what if figuring out dinner could be a little easier?
                </span>
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#788074] sm:text-base">
                And that simple thought became Aaj Kya Pakayein — a little place
                to turn everyday ingredients into ideas worth cooking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
