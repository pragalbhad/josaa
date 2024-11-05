import React from "react";
import StudentLayout from "./StudentLayout";
import LandingPage from "../LandingPage";
import "./Student.scss";
import Register from "../Register";
import Home from "../../components/Home";
import Information from "../../components/Information";

const Student = () => {
  return (
    <StudentLayout>
      {/* {/* <Register /> */}
      {/* <LandingPage />  */}
      <Home />
      {/* <Information /> */}
    </StudentLayout>
  );
};

export default Student;
