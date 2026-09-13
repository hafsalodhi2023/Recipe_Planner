import SpilledVeggies from "../assets/Login.png";
import Logo from "../assets/PictorialLogo.png";

import Button from "../components/common/Button";

import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="relative w-full h-dvh grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex items-center justify-end">
        <img
          src={SpilledVeggies}
          alt=""
          className="w-full object-contain max-w-180"
        />
      </div>
      <div className="px-4 sm:px-8 flex items-center justify-center">
        <form className="z-3 h-160 w-full max-w-140 flex flex-col items-center py-6 lg:py-8 px-8 bg-subtle-beige/20 border border-primary-olive/30 shadow-sm rounded-4xl ">
          <img src={Logo} alt="" className="w-20 mb-3" />
          <h1 className="text-2xl font-fraunces font-medium text-dark-olive mb-8">
            Kitchen Access
          </h1>
          <div className="w-full mb-6">
            <label className="text-sm font-medium text-dark-olive pl-2">
              Email
            </label>
            <div
              className="flex items-center gap-3 rounded-xl border border-primary-olive/50 bg-subtle-cream px-4 py-3
                  transition-all duration-200
                  focus-within:border-primary-olive
                  focus-within:ring-4 focus-within:ring-primary-olive/10"
            >
              <MdAlternateEmail className="text-subtle-olive text-xl" />

              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full text-sm lg:text-base text-dark-olive placeholder:text-subtle-olive outline-none"
              />
            </div>
          </div>

          <div className="w-full mb-10">
            <label className="text-sm font-medium text-dark-olive pl-2">
              Password
            </label>
            <div className="flex items-center gap-3 rounded-xl border border-primary-olive/50 bg-subtle-cream px-4 py-3 transition-all duration-200 focus-within:border-primary-olive focus-within:ring-4 focus-within:ring-primary-olive/10">
              <MdOutlinePassword className="text-subtle-olive text-xl" />

              <input
                type="email"
                placeholder="Enter your password..."
                className="w-full text-sm lg:text-base text-dark-olive placeholder:text-subtle-olive outline-none"
              />
              <FaEye className="text-subtle-olive text-xl cursor-pointer" />
            </div>
          </div>
          <Button
            text={"LET'S COOK"}
            style={"bold"}
            customStyle={"w-full "}
            icon={
              <FaLongArrowAltRight className="w-0 opacity-0 overflow-hidden group-hover:w-3 group-hover:opacity-100 transition-all  duration-300 ease-out " />
            }
            hover={"bold"}
          />
          <p className="w-full text-lg text-center font-medium text-primary-olive mt-8 mb-8">
            OR
          </p>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-primary-olive/50 bg-subtle-cream px-4 py-3 text-sm font-medium text-dark-olive transition-all duration-200 hover:border-primary-olive hover:ring-4 hover:ring-primary-olive/10 cursor-pointer"
          >
            <FcGoogle className="text-xl lg:text-2xl" />
            <span className="text-sm lg:text-base">Continue with Google</span>
          </button>
          <p className="text-subtle-olive mt-2">
            New here?{" "}
            <Link to={"/signup"} className="underline font-medium">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
