import React, { useEffect, useState } from "react";
import "./Jossahelp.scss";
import StudentLayout from "../../Pages/Student/StudentLayout";
import helpcard1 from "../../assests/images/helpcard1.png";
import helpcard2 from "../../assests/images/helpcard2.png";

const JossaHelp = () => {
  const [showFirstCard, setShowFirstCard] = useState(false);
  const [showSecondCard, setShowSecondCard] = useState(false);

  useEffect(() => {
    setShowFirstCard(true);

    const secondCardTimer = setTimeout(() => {
      setShowSecondCard(true);
    }, 3000);

    return () => clearTimeout(secondCardTimer);
  }, []);

  return (
    <div className="jossa-help">
      <header className="header text-center">
        <div className="main-header-container">
          <h2>Why use JoSAA Help?</h2>
          <h1>
            Welcome to JoSAAHelp.in - Your Ultimate College Preference Tool!
          </h1>
        </div>
        <p>
          Feeling overwhelmed by the daunting task of selecting the right
          college and program after clearing JEE Main and JEE Advanced? Look no
          further! We understand the importance of making informed decisions for
          your future. That's why we've developed a cutting-edge tool backed by
          years of comprehensive data analysis to guide you through the college
          preference process.
        </p>
      </header>

      <div className="divider"></div>

      <section className="why-choose-us text-center">
        <h3>Why Choose Us?</h3>
        <div
          className={`help-card-container ${
            showSecondCard ? "mt-3 position-relative" : ""
          }`}
        >
          {/* First Card */}
          <div
            className={`help-card ${showFirstCard ? "slide-in" : ""} ${
              showSecondCard ? "shrink position-absolute" : ""
            }`}
          >
            <div className="help-card-header">
              <h4>1. Data-Driven Insights</h4>
            </div>
            <div className="help-card-body">
              <p>
                Our tool harnesses the power of six years’ worth of data to
                provide you with accurate and reliable insights into past
                admission trends, helping you make informed decisions.
              </p>
              <img
                src={helpcard1}
                alt="Data-Driven Insights"
                className="help-card-image"
              />
            </div>
          </div>

          {/* Second Card */}
          {showSecondCard && (
            <div className="help-card slide-in">
              <div className="help-card-header">
                <h4>2. Maximize Your Chances</h4>
              </div>
              <div className="help-card-body">
                <p>
                  With our tool, you'll be able to strategically select colleges
                  and programs based on historical acceptance rates and
                  preferences, increasing your chances of securing a seat in
                  your desired institution.
                </p>
                <img
                  src={helpcard2}
                  alt="Maximize Your Chances"
                  className="help-card-image"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JossaHelp;
