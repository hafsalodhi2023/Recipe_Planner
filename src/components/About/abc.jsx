import { FaArrowRight, FaRegHeart } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Abc = () => {
  return (
    <main className="bg-[#fbfaf7] text-zinc-800">
      {/* ================= HERO ================= */}
      <section className="px-6 pt-20 pb-16 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-emerald-700">
            LET'S TALK FOOD
          </p>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Got a question?
              <br />
              <span className="text-emerald-700">We're all ears. 👂</span>
            </h1>

            <p className="max-w-md text-base leading-7 text-zinc-500 lg:pb-2">
              Have a question, a suggestion, or simply want to say hello? We'd
              love to hear what's on your mind.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT AREA ================= */}
      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-zinc-200 bg-white lg:grid-cols-[0.85fr_1.15fr]">
          {/* ================= LEFT CARD ================= */}
          <div className="relative overflow-hidden bg-[#eef4e9] p-8 sm:p-10 lg:p-12">
            {/* Decorative circles */}
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#dce8d3]" />

            <div className="absolute -bottom-16 -left-10 h-36 w-36 rounded-full bg-[#e3ecd9]" />

            <div className="relative z-10 flex h-full flex-col">
              <div>
                <span className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-emerald-700 shadow-sm">
                  <FiMail />
                </span>

                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-emerald-700">
                  A LITTLE NOTE
                </p>

                <h2 className="max-w-sm text-3xl font-semibold leading-tight text-zinc-800">
                  Good meals start with good ideas.
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-6 text-zinc-500">
                  Found something you love? Have an idea that could make Aaj Kya
                  Pakayein? even better?
                </p>
              </div>

              {/* Contact details */}
              <div className="mt-auto pt-12">
                <div className="border-t border-emerald-900/10 pt-6">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
                    Say hello
                  </p>

                  <a
                    href="mailto:hello@aajkayapakayein.com"
                    className="text-sm font-medium text-zinc-700 transition hover:text-emerald-700"
                  >
                    hello@aajkayapakayein.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="p-8 sm:p-10 lg:p-12">
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-emerald-700">
                DROP US A LINE
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                Send us a message
              </h2>
            </div>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-zinc-200 bg-[#fbfaf7] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-zinc-200 bg-[#fbfaf7] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us what's cooking..."
                  className="w-full resize-none rounded-xl border border-zinc-200 bg-[#fbfaf7] px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-emerald-800"
              >
                Send Message
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="border-t border-zinc-200 px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#eef4e9] text-emerald-700">
            <FaRegHeart />
          </div>

          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-emerald-700">
            ONE LAST THING
          </p>

          <h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Still wondering what to cook?
          </h2>

          <p className="mt-4 max-w-md text-sm leading-6 text-zinc-500">
            Let us help you turn whatever's sitting in your kitchen into
            something delicious.
          </p>

          <button className="group mt-7 inline-flex items-center gap-3 rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-medium transition hover:border-emerald-700 hover:text-emerald-700">
            Find a Recipe
            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Abc;
