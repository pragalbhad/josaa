import React from "react";
import CommonLayout from "./CommonLayout";
import "./CommonLayout.scss";
import Home from "../../components/Home";

const Student = () => {
  return (
    <CommonLayout>
      {/* {/* <Register /> */}
      {/* <LandingPage />  */}
      <Home />
      {/* <Information /> */}
    </CommonLayout>
  );
};

export default Student;
