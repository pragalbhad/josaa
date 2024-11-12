import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./Information.scss";
import CustomCarousel from "../../ResuableComponent/CustomCarousel/CustomCarousel";
import { IoGrid } from "react-icons/io5";
import { FaTableColumns } from "react-icons/fa6";
import NestedColTable from "../../ResuableComponent/NestedColTable";
import StudentLayout from "../../Pages/CommonLayout/CommonLayout";
import { useDispatch } from "react-redux";
import { getBlog } from "../../redux/actions/blogAction";
import StarBGSvg from "../../assests/images/StarBGSvg.png";

const Information = () => {
  const [isGridView, setIsGridView] = useState(false);
  const data = [
    {
      title: "Candidate Registration& Choice",
      data: [
        {
          text: "Joint Apex Board declares JEE (Main) Ranks - by",
          date: "20thAPRIL 2024",
        },
        {
          text: "Joint Apex Board declares JEE (Main) Ranks - by",
          date: "20thAPRIL 2024",
        },
        {
          text: `Candidate registration/choice filling for academic
                    programs under JoSAA STARTS; candidates who qualify
                    Architecture Aptitude Test (AAT) can fill their AATspecific choices after declaration of AAT result`,
        },
        {
          text: "Joint Apex Board declares JEE (Main) Ranks - by",
          date: "20thAPRIL 2024",
        },
      ],
    },

    {
      title: "Candidate Registration& Choice",
      data: [
        {
          text: `Candidate registration/choice filling for academic
                      programs under JoSAA STARTS; candidates who qualify
                      Architecture Aptitude Test (AAT) can fill their AATspecific choices after declaration of AAT result`,
        },
      ],
    },

    {
      title: "Candidate Registration& Choice",
      data: [
        {
          text: `Candidate registration/choice filling for academic
                        programs under JoSAA STARTS; candidates who qualify
                        Architecture Aptitude Test (AAT) can fill their AATspecific choices after declaration of AAT result`,
        },
      ],
    },
  ];

  const scheduleData = [
    {
      groupRow: "Candidate Registration and Choice",
      events: [
        {
          date: "Wednesday, 24 April 2024",
          time: "10:00 AM",
          event: "Joint Apex Board declares JEE (Main) 2024 Ranks",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event: "Announcement of JEE (Advanced) 2024 Result",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Candidate registration/choice filling for academic programs under JoSAA STARTS...",
        },
      ],
    },
    {
      groupRow: "Round 1",
      events: [
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-1 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-2 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event: "Candidates can Lock their Choices",
        },
      ],
    },
    {
      groupRow: "Round 1",
      events: [
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-1 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-2 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event: "Candidates can Lock their Choices",
        },
      ],
    },

    {
      groupRow: "Round 1",
      events: [
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-1 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-2 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event: "Candidates can Lock their Choices",
        },
      ],
    },

    {
      groupRow: "Round 1",
      events: [
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-1 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event:
            "Display of Mock Seat Allocation-2 based on choices filled by candidates",
        },
        {
          date: "Sunday, 10 June 2024",
          time: "10:00 AM",
          event: "Candidates can Lock their Choices",
        },
      ],
    },

  ];

  const dispatch = useDispatch();
  const { blogData, loadingStateForBlog } = useState(
    (state) => state?.blogReducer
  );
  console.log(
    "%cMyProject%cline:107%cblogData",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(56, 13, 49);padding:3px;border-radius:2px",
    blogData
  );

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  return (
    <StudentLayout>
      <Container className="information-container">
        <Row className="introduction-container position-relative divider-row">
          <div className="title-text">Introduction</div>
          <div className="title-desc mt-3">
            The Joint Seat Allocation Authority, also known as JoSAA, is an
            agency established by the Ministry of Education formerly known as
            HRD Ministry to manage and regulate the admission to 110 tertiary
            institutes administered by the government of India.
          </div>
          <div className="title-desc">
            This includes 23 IITs, 31 NITs, IIEST Shibpur, 26 IIITs and 38-Other
            Technical Institutes Funded Fully or Partially by Central or State
            Government (Other-GFTIs).
          </div>
          <div className="title-desc">
            Admission to all the academic programs offered by these Institutes
            will be made through a single platform
          </div>
          <div className="share-svg position-absolute">
            <img src={StarBGSvg} alt="StarBGSvg" />
          </div>
        </Row>

        <Row className="qualification-exam-container divider-row">
          <div className="title-text">Qualification Examination</div>
          <div className="list-desc mt-3">
            <ul>
              <li>JEE (Advanced)</li>
              <li>JEE (Main) B.E./B.Tech</li>
            </ul>
          </div>
        </Row>

        <Row className="admitting-institutes-container divider-row">
          <div className="title-text">Admitting Institutes</div>
          <div className="list-desc mt-3">
            <ul>
              <li>IITs</li>
              <li>NITs, IIEST, IIITs (Triple-I-Ts) and other -GFTIs</li>
            </ul>
          </div>
        </Row>

        <Row className="events-at-josaa-container">
          <Row className="admitting-institutes-container">
            <div className="title-text ">Events of JoSAA</div>
            <div className="title-desc event-subtitle mt-3">
              *Based on JoSAA event - Sat 23 Dec, 2024 12 pm.
            </div>

            {/* <div className="toggle-view d-flex flex-row gap-4 my-4">
              <div className="title-desc">Toggle view</div>
              <div className="d-flex gap-3 toggle-icon">
                <div
                  onClick={() => setIsGridView(false)}
                  className={`${isGridView ? "" : "active-grid"}`}
                >
                  <FaTableColumns />
                </div>
                <div
                  onClick={() => setIsGridView(true)}
                  className={`${isGridView ? "active-grid" : ""}`}
                >
                  <IoGrid />
                </div>
              </div>
            </div> */}

            {/* {isGridView ? (
              <div className="event-corousel">
                <CustomCarousel data={data} />
              </div>
            ) : ( */}
              <div className="mt-4">
                <NestedColTable data={scheduleData} />
              </div>
            {/* )} */}
          </Row>
        </Row>
      </Container>
    </StudentLayout>
  );
};

export default Information;
