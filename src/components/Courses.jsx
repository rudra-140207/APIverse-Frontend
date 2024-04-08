import React from "react";
import Heading from "../layout/Heading";
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

const Courses = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      <Heading title1="API" title2="Features" />

      <div className=" flex flex-wrap justify-center gap-6 mt-6">
        <CoursesCard img={digitalImg} title="Flexible Endpoints" desc=" Our API offers a variety of endpoints to suit your needs, allowing you to retrieve data on individual query and discover trending titles effortlessly." />
        <CoursesCard img={appImg} title="Easy Integration" desc="Seamlessly integrate our API into your applications and websites with our user-friendly documentation and developer resources. Get up and running in minutes!" />
        <CoursesCard img={graphicImg} title="Secure Authentication" desc="Protect your data and control access with API key authentication. Ensure that only authorized users can access your API, giving you peace of mind" />
        <CoursesCard img={webImg} title="Comprehensive Data" desc="Gain access to a vast repository of information." />
      </div>
    </div>
  );
};

export default Courses;
