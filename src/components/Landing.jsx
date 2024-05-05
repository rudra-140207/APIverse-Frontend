import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Reviews from "./Reviews";
import axios from "axios";
import reqUrl from "../service";

const Landing = () => {
  useEffect(() => {
    axios
    .get(`${reqUrl}/wakeup`)
    .then((res)=>{
      console.log("Initiated");
    }).catch((err)=>{
      console.log(err);
    })
  }, [])
  
  return (
    <div>
      <Home />
      <About />
      <Courses />
      <Reviews />
    </div>
  );
};

export default Landing;
