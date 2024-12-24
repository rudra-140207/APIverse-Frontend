import React from "react";
import Heading from "../layout/Heading";
import Content from "./Content";

const Docs = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="w-fit mx-auto mb-8">
        <Heading title1="Simple" title2="Documentation" />
      </div>
      <div className="w-11/12 lg:w-2/3 mx-auto bg-white p-8 rounded shadow">
        <Content />
      </div>
    </div>
  );
};

export default Docs;
