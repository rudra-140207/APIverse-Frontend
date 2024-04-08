import React from "react";
import img from "../assets/hero.svg";
import Button from "../layout/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      <div className=" md:w-2/4 text-center">
        <h2 className=" text-3xl font-semibold md:text-5xl leading-tight">
        Unlock a World of Data with Our Powerful 
          <span className="text-brightGreen"> API</span>
        </h2>
        <p className=" text-lightText mt-5 text-start">
        Access comprehensive datasets effortlessly and fuel innovation in your projects with our dynamic API integration .
        </p>

        <Link to="/docs">
          <Button title="Documentation" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
