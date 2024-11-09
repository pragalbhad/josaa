import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.scss";
import Home1 from "../../assests/images/Home1.png";
import JEEFlow from "../../assests/images/JEEFlow.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions/newsAction";
import { FaArrowRight } from "react-icons/fa";
import { getCollegeTrends } from "../../redux/actions/collegeTrendsAction";
import { getExams } from "../../redux/actions/getExamsAction";

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
];

const Home = () => {
  const dispatch = useDispatch();
  const { newsItems, loadingStateForNewReducer } = useSelector(
    (state) => state?.newsReducer
  );

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    dispatch(getCollegeTrends());
    dispatch(getExams());
  }, []);

  return (
    <Container className="home-section">
      {/* Announcement Banner */}
      <Card className="announcement-banner mb-4">
        <Card.Body>
          <span className="announcement-label">ANNOUNCEMENT</span>
          <p className="announcement-text">
            Rankings HAVE BEEN ANNOUNCED! NOW IS THE PERFECT TIME TO DISCOVER
            WHICH INSTITUTE AND ACADEMIC PROGRAM YOU COULD SECURE BASED ON YOUR
            JEE MAINS 2024 RESULTS. SIGN UP TO LEARN MORE!
          </p>
        </Card.Body>
      </Card>

      {/* Welcome Section */}
      <Row className="welcome-section">
        <Col md={6}>
          <h2>Welcome to JoSSA Help</h2>
          <p className="welcome-text">
            Your go-to resource for navigating the complex world of admissions
            to India's top technical institutes. From registration to final
            admission, we're here to guide you every step of the way. Let's turn
            your aspirations into reality together!
          </p>
          <Button variant="danger" className="know-more-btn">
            Know More
          </Button>
        </Col>
        <Col md={6}>
          <img
            src={Home1}
            alt="Student writing exam"
            className="welcome-image"
          />
        </Col>
      </Row>

      {/* Divider Section */}
      <Row className="divider mt-4 mb-4">
        <span>Let's go</span>
      </Row>

      <Row>
        <h3 className="section-title">News & Events</h3>
        <Row className="news-events-section">
          {/* News Cards */}

          <Col className="news-cards d-flex flex-column" lg={5}>
            <Col md={12} className="news-card">
              <div className="news-card-content">
                <div>
                  {newsItems.data &&
                    newsItems.data
                      .filter((i) => i.tag === "New")
                      .map((i) => (
                        <ul key={i.id}>
                          <li>
                            {/* JEE (Mains) Session-2 will be conducted on
                            <br />
                            <span>4, 5, 6, 8, 9, April 2024</span> */}
                            {i.title}
                          </li>

                          {/* <li>
                            JEE (Advanced) Exam to be conducted on
                            <br />
                            <span>20 April, 2024</span>
                          </li> */}

                          {/* <li>
                            JEE (Mains) rank will be announced by
                            <br />
                            <span>26 May, 2024</span>
                          </li> */}
                        </ul>
                      ))}
                  <div className="read-more cursor-pointer">View More</div>
                </div>
              </div>
            </Col>

            <Col md={12} className="news-card">
              <div className="news-card-header d-flex justify-content-between">
                <h4>About JoSAAHelp.in</h4>
                <div className="right-chevron">
                  <FaArrowRight />
                </div>
              </div>
              <div className="news-card-content">
                <p>
                  Discover comprehensive guidance and support for your JoSAA
                  counselling journey. From registration to admission,
                  JoSAAHelp.in is your trusted companion. Click to explore more!
                </p>
                <a href="/" className="read-more">
                  Read More
                </a>
              </div>
            </Col>

            <Col md={12} className="news-card">
              <div className="news-card-header d-flex justify-content-between">
                <h4>JoSAA Information</h4>
                <div className="right-chevron">
                  <FaArrowRight />
                </div>
              </div>
              <div className="news-card-content">
                <p>
                  Stay updated with the latest insights, tips, and essential
                  information about the JoSAA counselling process. Click to
                  access vital resources and stay ahead of the curve.
                </p>
                <a href="/" className="read-more">
                  Read More
                </a>
              </div>
            </Col>
            {/* <Col md={7} className="news-card">
            <div className="news-card-content">
              <h4>JoSAA Information</h4>
              <p>
                Stay updated with the latest insights, tips, and essential
                information about the JoSAA counselling process. Click to access
                vital resources and stay ahead of the curve.
              </p>
              <a href="/" className="read-more">
                Read More
              </a>
            </div>
          </Col> */}
          </Col>

          <Col lg={7}>
            <img
              src={JEEFlow}
              alt="JoSAAHelpFlow"
              className="welcome-image"
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Row>

      {/* <Row>
        <NestedColTable data={scheduleData} />
      </Row> */}
    </Container>
  );
};

export default Home;
