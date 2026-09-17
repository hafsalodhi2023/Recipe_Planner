import Logo from "../../assets/Logo.png";
import { navLinks } from "../../Data/NavLinks";

import Button from "../common/Button";

import { FaLongArrowAltRight } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between h-20 px-4 sm:px-6 xl:px-20">
      <div className="flex items-center justify-between h-full w-45 sm:w-fit">
        <FaHamburger className="text-xl  lg:hidden text-subtle-olive cursor-pointer hover:text-dark-olive transition-colors" />
        <Link to={"/"}>
          <img src={Logo} alt="Logo.png" className="w-35 sm:w-50" />
        </Link>
      </div>
      <div className="flex items-center justify-between lg:w-180 h-full">
        <ul className="hidden lg:flex items-center justify-around w-110 h-full">
          {navLinks?.map((item, idx) => (
            <NavLink
              to={item.to}
              key={idx}
              className={({ isActive }) =>
                `relative font-medium after:absolute ${isActive ? "after:w-[80%]" : "after:w-0 after:opacity-0 hover:after:w-[80%] hover:after:opacity-100 after:transition-all after:duration-300"} after:h-1 after:rounded-full  after:bg-accent-raspberry `
              }
            >
              <li>{item.text}</li>
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center justify-between h-full w-42 sm:w-60">
          <Button
            text={"LOGIN"}
            style={"soft"}
            hover={"soft"}
            to={"/signin"}
            customStyle={"text-[9px] sm:text-sm"}
          />
          <Button
            text={"GET STARTED"}
            style={"bold"}
            icon={<FaLongArrowAltRight />}
            hover={"bold"}
            to={"/signup"}
            customStyle={"text-[9px] sm:text-sm"}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
