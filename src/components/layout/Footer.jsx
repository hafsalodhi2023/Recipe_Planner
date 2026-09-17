import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full px-6 pb-6 sm:px-8 xl:px-20 mt-30">
      <p className="text-center text-lg text-subtle-olive mb-10">
        Made for those who ask{" "}
        <span className="text-accent-raspberry">
          &quot;aaj kya pakaein?&quot;
        </span>{" "}
        one too many times 𓍢ִ໋🌷͙֒
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-[1.5fr_1fr_1fr] gap-x-7 gap-y-15 py-10 border-t border-b border-primary-olive/50 text-center sm:text-left">
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="" className="w-40 mx-auto sm:mx-0" />
          <p className="text-sm text-subtle-olive max-w-65 mx-auto sm:mx-0">
            Turn the ingredients you have into something delicious, one recipe
            at a time.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs text-primary-olive font-bold pb-2">EXPLORE</h3>
          <Link className="text-sm text-subtle-olive/80 " to={"/"}>
            Home
          </Link>
          <Link className="text-sm text-subtle-olive/80 " to={"/recipes"}>
            Recipes
          </Link>
          <Link className="text-sm text-subtle-olive/80 " to={"/contact"}>
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-xs text-primary-olive font-bold pb-2">
            YOUR KITCHEN
          </h3>
          <Link className="text-sm text-subtle-olive/80 ">Find a Recipe</Link>
          <Link className="text-sm text-subtle-olive/80 ">Favorites</Link>
          <Link className="text-sm text-subtle-olive/80 ">My Planner</Link>
        </div>
      </div>
      <div className="py-5 max-w-6xl mx-auto flex flex-col gap-3 sm:gap-0 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
        <p className="text-sm text-primary-olive">
          Recipe Planner &copy; {new Date().getFullYear()}. All Rights Reserved.
        </p>
        <p className="flex items-center justify-center gap-1 text-sm text-primary-olive">
          Made with
          <FaHeart className="text-[9px] text-accent-raspberry/70" />
          for Food Lover.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
