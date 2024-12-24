import React from "react";
import Heading from "../layout/Heading";
import Card from "../layout/Card";

const Advantages = () => {
  return (
    <div className=" min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <Heading title1="Some" title2="Advantages" />

      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <Card title="Save Time and Resources" desc="Eliminate the need to manually curate data. Our API provides instant access to a wealth of information, saving you time and resources." />
        <Card title="Focus on Core Development" desc=" Let us handle the heavy lifting when it comes to managing and updating data. Focus on developing your core features and functionalities while we take care of the rest." />
        <Card title="Enhance User Experience" desc="Enrich your applications and websites with comprehensive data, enhancing user engagement and satisfaction." />
      </div>
    </div>
  );
};

export default Advantages;
