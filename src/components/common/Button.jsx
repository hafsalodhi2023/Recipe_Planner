import { Link } from "react-router-dom";

function Button({ text, style, icon, hover, customStyle, to }) {
  return (
    <Link
      to={to}
      className={`
        px-5 py-2.5
        rounded-xl
        font-semibold
        text-[9px]
        sm:text-sm
        flex 
        items-center
        justify-center
        ${!customStyle ? "" : customStyle}

        ${hover === "soft" && "hover:bg-subtle-cream hover:text-subtle-olive"}
        ${hover === "bold" && "hover:shadow-md"}
        ${hover === "bold" && style === "bold" ? "shadow-sm" : ""}
        ${
          icon
            ? "flex items-center gap-0 group hover:gap-2 transition-all duration-300"
            : ""
        }
        ${
          style === "bold" &&
          "bg-subtle-olive text-[#FFFDF5] transition-all duration-200"
        }
        ${style === "soft" && "px-4 py-2.5 text-subtle-olive transition cursor-pointer"}
      `}
    >
      {text}
      {icon && icon}
    </Link>
  );
}

export default Button;
