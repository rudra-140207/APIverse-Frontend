import React from "react";
import img from "../assets/about.svg";
import Button from "../layout/Button";
import Heading from "../layout/Heading";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className=" md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>

      <div className="w-full md:w-2/4 text-center space-y-2">
        <Heading title1="Interested in" title2="testing it out ?" />
        <p className=" text-lightText">
        Unlock the potential of our API with a temporary key tailored just for you. Experience seamless integration and explore our features firsthand. Get your temporary key now and test it out on our user-friendly panel.
        </p>

        <Link to="/demo">
          <Button title="DEMO" />
        </Link>
      </div>
    </div>
  );
};

export default About;
