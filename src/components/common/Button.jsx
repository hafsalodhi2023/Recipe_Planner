import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Button({
  text,
  style,
  icon,
  hover,
  customStyle,
  to,
  onclick,
  iconPosition = "right",
}) {
  const buttonClasses = twMerge(
    `
      px-5 py-2.5
      rounded-xl
      font-semibold
      text-sm
      flex
      items-center
      justify-center
    `,
    hover === "soft" && "hover:bg-subtle-cream hover:text-subtle-olive",

    hover === "bold" && "hover:shadow-md",

    hover === "bold" && style === "bold" && "shadow-sm",

    icon && "group gap-0 hover:gap-2 transition-all duration-300",

    style === "bold" &&
      "bg-subtle-olive text-[#FFFDF5] transition-all duration-200",

    style === "soft" &&
      "px-4 py-2.5 text-subtle-olive transition cursor-pointer",

    customStyle,
  );

  const iconClasses =
    "w-0 opacity-0 overflow-hidden group-hover:w-3 group-hover:opacity-100 transition-all duration-300 ease-out";

  return (
    <Link to={to} onClick={onclick} className={buttonClasses}>
      {icon && iconPosition === "left" && (
        <span className={iconClasses}>{icon}</span>
      )}

      {text}

      {icon && iconPosition === "right" && (
        <span className={iconClasses}>{icon}</span>
      )}
    </Link>
  );
}

export default Button;
