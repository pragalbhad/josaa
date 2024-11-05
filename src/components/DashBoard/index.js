import React, { useState } from "react";
import "./Dashboard.scss";
import StudentLayout from "../../Pages/Student/StudentLayout";
import Card from "../../ResuableComponent/Card";
import ExamToggle from "../../ResuableComponent/ExamToggle";
import ColorBar from "../../ResuableComponent/ColoBar";
import InstituteTable from "../../ResuableComponent/InstituteTable";

const Dashboard = () => {
  const [selectedExam, setSelectedExam] = useState("MAINS (2024)");

  const examData = [
    { title: "MAINS Session 1", value: "52", color: "#6f42c1" },
    { title: "MAINS Session 2", value: "52", color: "#007bff" },
    { title: "ADVANCED", value: "21000", color: "#28a745" },
    { title: "MAINS Rank", value: "21000", color: "#ff5733" },
  ];

  const instituteData = [
    {
      institute: "Visvesvaraya National Institute of Technology, Nagpur",
      program: "Chemical Engineering (4 Years, Bachelor of Technology)",
      nirfRank: 18,
      chance: 45,
    },
    {
      institute: "Assam University, Silchar",
      program: "Electronics and Communication Engineering : SINGLE : 4 Years",
      nirfRank: 20,
      chance: 30,
    },
    {
      institute: "Visvesvaraya National Institute of Technology, Nagpur",
      program: "Chemical Engineering (4 Years, Bachelor of Technology)",
      nirfRank: 18,
      chance: 7,
    },
    {
      institute: "Visvesvaraya National Institute of Technology, Nagpur",
      program: "Chemical Engineering (4 Years, Bachelor of Technology)",
      nirfRank: 18,
      chance: 65,
    },
    {
      institute: "Visvesvaraya National Institute of Technology, Nagpur",
      program: "Chemical Engineering (4 Years, Bachelor of Technology)",
      nirfRank: 18,
      chance: 80,
    },

    {
      institute: "Visvesvaraya National Institute of Technology, Nagpur",
      program: "Chemical Engineering (4 Years, Bachelor of Technology)",
      nirfRank: 18,
      chance: 90,
    },
  ];

  return (
    <StudentLayout>
      <div className="dashboard-container">
        <div className="cards d-flex justify-content-between">
          {examData.map((exam, index) => (
            <Card
              key={index}
              title={exam.title}
              value={exam.value}
              color={exam.color}
            />
          ))}
        </div>
        <ExamToggle
          options={["MAINS (2024)", "ADVANCE (2024)"]}
          onToggle={setSelectedExam}
        />
        <div className="exam-info">
          <p>
            Recommendations are based on your CRL Rank: 54000, Seat Type: OPEN,
            Gender: Male and State: Haryana
          </p>
          <div className="d-flex gap-4 w-100 align-items-center">
            <div className="allotment-text">Chance of Allotment</div>
            <div className="color-bar-wrapper">
              <ColorBar />
            </div>
          </div>
        </div>
        <InstituteTable data={instituteData} />
      </div>
    </StudentLayout>
  );
};

export default Dashboard;
