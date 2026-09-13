function TimelineItem({ step, isEven, rowStart }) {
  return (
    <div
      className={`
        relative ${rowStart} col-span-2 before:absolute before:w-4 before:h-4 before:bg-subtle-olive before:top-1/2 before:-translate-y-1/2 before:rounded-full before:z-1 before:-left-1.75 md:col-span-1 flex items-center md:px-10 
        ${
          isEven
            ? "md:col-start-1 md:before:left-auto md:before:-right-2 md:justify-end"
            : "md:col-start-2 md:before:-left-2 md:justify-start"
        } pl-10 py-2 `}
    >
      <div className="w-full md:max-w-100 h-[80%] rounded-xl grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr]">
        <div className="w-full h-full flex items-center justify-center">
          <span className="w-10 h-10 md:w-15 md:h-15 rounded-full flex items-center justify-center bg-primary-olive/20">
            {step.icon}
          </span>
        </div>
        <div className="w-full h-full flex justify-center px-3 flex-col">
          <h3 className="font-semibold text-md md:text-lg text-dark-olive">
            {step.title}
          </h3>
          <p className="text-subtle-olive text-sm">{step.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TimelineItem;
