import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/logo2.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-2 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="h-20">
          <Link to="/" className="cursor-pointer">
            <img src={logo} style={{ height: "80px" }} alt="logo" />
          </Link>
        </div>

        <nav className="hidden my-auto md:flex gap-5 font-medium p-1 text-lg">
          <Link
            to="/"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/docs"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Docs
          </Link>
          <Link
            to="/demo"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Demo
          </Link>
          <Link
            to="/login"
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            Login
          </Link>
        </nav>

        <div className="flex md:hidden" onClick={handleChange}>
          <div className=" p-2 my-auto">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="/"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/docs"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Docs
        </Link>
        <Link
          to="/demo"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Demo
        </Link>
        <Link
          to="/login"
          className="hover:text-[#539165] transition-all cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
