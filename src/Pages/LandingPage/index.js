import React from "react";
import { Container, Row } from "react-bootstrap";
import "./LandingPage.scss";
import ScheduleTable from "../../ResuableComponent/ScheduleTable";
import CustomModal from "../../ResuableComponent/CustomModal";
import StudentLayout from "../Student/StudentLayout";

const headers = [
  { label: "Institute", key: "institute" },
  { label: "Program", key: "program", colSpan: 2 },
  { label: "NIRF Rank", key: "nirfRank" },
  { label: "Closing Rank (2023)", key: "closingRank" },
];

const data = [
  {
    institute: { value: "IIT Delhi" },
    program: { value: "B.Tech in Computer Science", colSpan: 2 },
    nirfRank: "2",
    closingRank: "500",
  },
  {
    institute: { value: "IIT Bombay" },
    program: { value: "M.Tech in Mechanical Engineering", colSpan: 2 },
    nirfRank: "1",
    closingRank: "400",
  },
  {
    institute: { value: "IIT Kanpur" },
    program: { value: "B.Tech in Electrical Engineering", colSpan: 2 },
    nirfRank: "4",
    closingRank: "550",
  },
  {
    institute: { value: "IIT Madras" },
    program: { value: "M.Tech in Civil Engineering", colSpan: 2 },
    nirfRank: "3",
    closingRank: "450",
  },
  {
    institute: { value: "IIT Kharagpur" },
    program: { value: "B.Tech in Aerospace Engineering", colSpan: 2 },
    nirfRank: "5",
    closingRank: "600",
  },
];
const sampleData = [
  {
    institute: "Visvesvaraya National Institute of Technology, Nagpur",
    program: "Chemical Engineering (4 Years, Bachelor of Technology)",
    nirfRank: 18,
    closingRank: 18,
  },
  {
    institute: "Assam University, Silchar",
    program: "Electronics and Communication Engineering : SINGLE : 4 Years",
    nirfRank: 20,
    closingRank: 18,
  },
];

const CollegeRecommendation = () => {
  return (
    <StudentLayout>
      <Container fluid className="landing-page-container d-flex flex-column">
        <Row className="college-recommendation-wrapper m-0 p-0 mt-4">
          <div className="college-recommendation-title-text">
            College Recommendations
          </div>

          <div className="college-reco-para">
            Introducing our{" "}
            <span className="important-text">College Recommendations</span>{" "}
            tool, designed to help you make informed decisions about your{" "}
            <span className="important-text">college admissions</span>.
            Utilizing data from the last 6-7 years, this tool projects the
            closing ranks for 2024 and provides a personalized list of{" "}
            <span className="important-text">colleges</span> and{" "}
            <span className="important-text">academic programs</span> you can
            target based on your rank. Whether you're aiming for top IITs, NITs,
            IIITs, or other prestigious{" "}
            <span className="important-text">engineering</span> colleges, our
            tool ensures you have the insights needed to strategize your
            preferences effectively.{" "}
          </div>

          <div className="college-reco-tool-title">
            Why Use the College Recommendations Tool?
          </div>
          <ul className="college-reco-tool-list-container">
            <li className="tool-list">
              <span className="tool-list-title"> Data-Driven Insights: </span>
              Leverage historical data to get accurate projections of closing
              ranks for 2024, ensuring you have reliable information for your
              college selection.<span></span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">
                {" "}
                Personalized Recommendations:
              </span>
              <span>
                Receive a tailored list of colleges and academic programs based
                on your rank, helping you focus on realistic and attainable
                goals
              </span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">Optimize Your Choices</span>
              <span>
                : Maximize your chances of securing a seat in your desired
                institution by using our datadriven projections to prioritize
                your college preferences.{" "}
              </span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">Efficient Decision Making</span>
              <span>
                : Save time and effort by accessing a comprehensive list of
                recommended engineering collegesand programs that match your
                rank and interests.
              </span>
            </li>
          </ul>

          <div className="college-reco-tool-title">How It Works</div>
          <ul className="college-reco-tool-list-container">
            <li className="tool-list">
              <span className="tool-list-title"> Input Your Rank</span>: Enter
              your expected or actual rank from JEE Main or JEE Advanced.
              <span></span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">Get Projections</span>
              <span>
                : Our tool analyzes historical data to project the closing ranks
                for 2024.
              </span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">View Recommendations</span>
              <span>
                : Receive a curated list ofcolleges and academic programs that
                align with your rank and preferences.
              </span>
            </li>
            <li className="tool-list">
              <span className="tool-list-title">Make Informed Choices</span>
              <span>
                : Use the recommendations to strategically fill out your JoSAA
                counselling choices and maximize your chances of admission to
                top-tier institutions.
              </span>
            </li>
          </ul>

          <div className="college-reco-para">
            Take control of your{" "}
            <span className="important-text">college admissions</span> journey
            with our{" "}
            <span className="important-text">College Recommendations</span>{" "}
            tool, designed to provide you with the insights and guidance needed
            to make the best decisions for your academic future. Explore the
            possibilities and plan your path to success with confidence.
          </div>
        </Row>

        <Row className="year-container mt-5 p-0">
          <div className="year-selection">Mains 2024</div>

          <div className="year-selection">Mains 2024</div>

          <div className="year-selection">Mains 2024</div>

          <div className="year-selection">Mains 2024</div>

          <div className="container">
            <ScheduleTable data={sampleData} />
          </div>
        </Row>
      </Container>
    </StudentLayout>
  );
};

export default CollegeRecommendation;
