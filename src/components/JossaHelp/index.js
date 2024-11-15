import React, { useEffect, useState } from "react";
import "./Jossahelp.scss";
import helpcard1 from "../../assests/images/helpcard1.png";
import helpcard2 from "../../assests/images/helpcard2.png";
import step3 from "../../assests/images/step3.png";
import step4 from "../../assests/images/Step4.png";
import jossaHelpillustration from "../../assests/images/jossaHelpillustration.png";
import StartUpWardSvg from "../../assests/images/StarUpWardSvg.png";
import StartBottomRightSvg from "../../assests/images/StartBottomRightSvg.png";
import { useDispatch } from "react-redux";
import { toggleSignUpModal } from "../../redux/actions/buttonActions";

const JossaHelp = () => {
  const [visibleCards, setVisibleCards] = useState([false, false, false, false]);

  const dispatch = useDispatch()

  useEffect(() => {
    // Show cards one by one with delay
    const timers = [
      setTimeout(() => setVisibleCards((prev) => [true, false, false, false]), 1000),
      setTimeout(() => setVisibleCards((prev) => [true, true, false, false]), 4000),
      setTimeout(() => setVisibleCards((prev) => [true, true, true, false]), 7000),
      setTimeout(() => setVisibleCards((prev) => [true, true, true, true]), 10000),
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  const handleSignUp = () => {
    dispatch(toggleSignUpModal(true))
  }

  return (
    <div className="jossa-help">
      <header className="header text-center">
        <div className="main-header-container position-relative">
          <div className="share-svg top-left position-absolute">
            <img src={StartUpWardSvg} alt="StartUpWardSvg" />
          </div>
          <div className="share-svg bottom-right-svg position-absolute">
            <img src={StartBottomRightSvg} alt="StartBottomRightSvg" />
          </div>
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
        <div className="help-card-container">
          {/* First Card */}
          <div
            className={`help-card  ${visibleCards[1] ? "shrink" : ""}  ${visibleCards[0] ? "show card1-design" : ""}`}
            style={{ zIndex: 1 }}
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
              <img src={helpcard1} alt="Data-Driven Insights" />
            </div>
          </div>

          {/* Second Card */}
          <div
            className={`help-card ${visibleCards[2] ? "shrink" : ""} ${visibleCards[1] ? "show card2-design" : ""}`}
            style={{ zIndex: 2 }}
          >
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
              <img src={helpcard2} alt="Maximize Your Chances" />
            </div>
          </div>

          {/* Third Card */}
          <div
            className={`help-card ${visibleCards[3] ? "shrink" : ""} ${visibleCards[2] ? "show card3-design" : ""}`}
            style={{ zIndex: 3 }}
          >
            <div className="help-card-header">
              <h4>3. Save Time and Effort </h4>
            </div>
            <div className="help-card-body">
              <p>
                Say goodbye to hours of manual research and guesswork. Our
                intuitive interface simplifies the decision-making process, saving
                you time and effort while ensuring you make the best choices for
                your academic journey.
              </p>
              <img src={step3} alt="Personalized Recommendations" />
            </div>
          </div>

          {/* Fourth Card */}
          <div
            className={`help-card ${visibleCards[3] ? "show card4-design" : ""}`}
            style={{ zIndex: 4 }}
          >
            <div className="help-card-header">
              <h4>4. Personalized Recommendations</h4>
            </div>
            <div className="help-card-body">
              <p>
                We understand that every student is unique. Our tool offers
                personalized recommendations tailored to your preferences, and
                career goals, empowering you to make choices that align with your
                aspirations.
              </p>
              <img src={step4} alt="Personalized Recommendations" />
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {visibleCards[3] &&
        <>
          <div className="why-choose-us-steps">
            <h3>How it works?</h3>

            <div className="choose-us-body w-100 d-flex flex-wrap flex-row">

              <div className="steps-wrapper">
                <div className="steps-title">1</div>
                <div className="steps-subtitle">Input Your Data</div>
                <div className="steps-para">Start by providing information such as your exam scores, selecting preference for colleges and academic programs, preferred location, and any specific criteria important to you.</div>
              </div>

              <div className="steps-wrapper">
                <div className="steps-title">2</div>
                <div className="steps-subtitle">Access Insights</div>
                <div className="steps-para">Our tool analyzes years of admission data to provide you with insights into past trends, including acceptance rates, cutoff scores, and popular programs.</div>
              </div>

              <div className="steps-wrapper">
                <div className="steps-title">3</div>
                <div className="steps-subtitle">Select Preferences</div>
                <div className="steps-para">Based on the insights provided, you can easily prioritize and select colleges and programs that match your preferences and aspirations.
                </div>
              </div>

              <div className="steps-wrapper">
                <div className="steps-title">4</div>
                <div className="steps-subtitle">Optimize Your Choices</div>
                <div className="steps-para">Fine-tune your selections based on our recommendations to maximize your chances of securing admission to your dream institution.</div>
              </div>

            </div>
          </div>

          <div className="divider"></div>

          <div className="Illustration-container d-flex flex-row">
            <div style={{ width: '15%' }}>
              <img width={"100%"} src={jossaHelpillustration} alt="jossaHelpillustration" />
            </div>
            <div style={{ width: '45%' }}>
              <div className="get-ready-title-text">Ready to Get Started?</div>
              <div className="get-ready-body-text">Don’t leave your future to chance. Take control of your college admissions journey with JOSAAHelp.in. <span style={{ color: '#0275BE', cursor: 'pointer' }} onClick={handleSignUp}>Sign up</span> today and gain access to our powerful tool designed to simplify the decision-making process and ensure your success.</div>
            </div>
          </div>
        </>
      }

    </div>
  );
};

export default JossaHelp;
