import React, { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import axios from "axios";
import reqUrl from "../service";
import Advantages from "./Advantages";
import Features from "./Features";

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
      <Features />
      <Advantages />
    </div>
  );
};

export default Landing;
