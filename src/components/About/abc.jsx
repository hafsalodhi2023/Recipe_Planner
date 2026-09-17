const Abc = () => {
  return (
    <section className="relative overflow-hidden bg-subtle-beige px-6 py-20 sm:px-10 lg:px-20 lg:py-28">
      {/* Decorative ingredients */}
      <div className="pointer-events-none absolute -left-8 top-20 text-5xl rotate-[-15deg] opacity-70">
        🥕
      </div>

      <div className="pointer-events-none absolute right-10 top-12 text-4xl rotate-12 opacity-70">
        🍅
      </div>

      <div className="pointer-events-none absolute bottom-8 right-[15%] text-3xl rotate-[-12deg] opacity-60">
        🧅
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div className="relative z-10 max-w-xl">
          <span className="mb-5 inline-block text-sm font-semibold tracking-[0.2em] text-primary uppercase">
            About Aaj Kya Pakayein
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Because
            <span className="block text-primary">“what should I cook?”</span>
            shouldn't be a daily problem.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-600 sm:text-lg">
            We created Aaj Kya Pakayein for those everyday moments when you have
            ingredients in the kitchen, but no idea what to make.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
            A little inspiration, a little AI, and hopefully one less question
            to worry about before dinner. ✨
          </p>
        </div>

        {/* Visual */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Decorative circle */}
          <div className="absolute inset-8 rounded-full bg-white/60" />

          {/* Recipe card */}
          <div className="relative mx-auto w-[280px] rotate-[-3deg] rounded-[2rem] border border-white/70 bg-white p-5 shadow-xl sm:w-[320px]">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-medium tracking-wide text-zinc-400">
                WHAT'S IN YOUR KITCHEN?
              </span>

              <span className="text-lg">✨</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl bg-subtle-beige px-4 py-3">
                <span className="text-2xl">🥔</span>
                <span className="text-sm font-medium text-zinc-700">
                  Potatoes
                </span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-subtle-beige px-4 py-3">
                <span className="text-2xl">🧅</span>
                <span className="text-sm font-medium text-zinc-700">Onion</span>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-subtle-beige px-4 py-3">
                <span className="text-2xl">🍅</span>
                <span className="text-sm font-medium text-zinc-700">
                  Tomatoes
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-primary px-4 py-4 text-center">
              <p className="text-sm font-medium text-white">
                So... what can we make? 🍽️
              </p>
            </div>
          </div>

          {/* Floating note */}
          <div className="absolute -bottom-4 left-0 rounded-2xl bg-white px-4 py-3 shadow-lg sm:-left-5">
            <p className="text-xs font-medium text-zinc-500">Less guessing.</p>
            <p className="text-sm font-semibold text-zinc-800">
              More cooking. ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abc;
