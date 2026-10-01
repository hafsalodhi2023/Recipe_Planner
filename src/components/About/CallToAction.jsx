function CallToAction() {
  return (
    <div className="w-full px-6 sm:px-8 xl:px-20 mt-30 flex flex-col items-center border">
      <div className="flex items-center justify-center gap-4 ">
        <span className="h-px w-12 bg-[#C9CFC1]" />
        <span className="text-xs font-semibold tracking-[0.2em] text-[#71806C] uppercase text-center">
          One more thing
        </span>
        <span className="h-px w-12 bg-[#C9CFC1]" />
      </div>
      <h2 className="font-fraunces mx-auto mt-8 max-w-4xl font-semibold tracking-tighter text-[#254B36] text-2xl sm:text-3xl lg:text-4xl">
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
    </div>
  );
}

export default CallToAction;
