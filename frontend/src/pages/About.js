import React from "react";
import DefaultLayout from "../components/DefaultLayout";


const About = () => {
  return (
    <DefaultLayout title={"About us - PEAPOP-A2Z"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/assets/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2"></p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
