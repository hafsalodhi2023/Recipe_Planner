function Title({
  eyebrow,
  heading,
  description,
  eyebrowIcon,
  headingIcon,
  descriptionIcon,
}) {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="text-center font-semibold text-[12px] tracking-widest flex items-center gap-1">
        {eyebrowIcon}
        {eyebrow}
      </p>
      <h2 className="text-center font-fraunces font-semibold text-2xl sm:text-3xl lg:text-4xl flex items-center gap-1">
        {heading}
        {headingIcon}
      </h2>
      <p className="text-center text-subtle-olive flex items-start gap-1 flex-nowrap">
        {descriptionIcon}
        {description}
      </p>
    </div>
  );
}

export default Title;
