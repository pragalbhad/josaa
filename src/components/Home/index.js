import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./Home.scss";
import Home1 from "../../assests/images/Home11.png";
import JEEFlow from "../../assests/images/JEEFlow.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../redux/actions/newsAction";
import { FaArrowRight } from "react-icons/fa";
import { getCollegeTrends } from "../../redux/actions/collegeTrendsAction";
import { getExams } from "../../redux/actions/getExamsAction";
import { Link, useNavigate } from "react-router-dom";
import CustomModal from "../../ResuableComponent/CustomModal";

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

  const [viewMoreModal, setViewMoreModal] = useState(false)

  useEffect(() => {
    dispatch(fetchNews());
  }, []);

  useEffect(() => {
    dispatch(getCollegeTrends());
    dispatch(getExams());
  }, []);

  const handleViewMore = () => {
    setViewMoreModal(true)
  }

  const navigate = useNavigate();

  const handleOpenInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewMoreModal = () =>{
    setViewMoreModal(false)
  }

  return (
    <Container className="home-section">
      <Row className="home-wrapper">
        <Card className="announcement-banner mb-4">
          <Card.Body>
            <span className="announcement-label">ANNOUNCEMENT</span>
            <p className="announcement-text">
              Rankings have been ANNOUNCED! Now is the perfect time to discover
              which institute and academic program you could secure based on
              your JEE MAINS 2024 results. sign up to learn more!
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
              admission, we're here to guide you every step of the way. Let's
              turn your aspirations into reality together!
            </p>
            <Button variant="danger" className="know-more-btn" onClick={() => navigate('/jossaHelp')}>
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
        <Row className="divider mt-0 mb-0">
          <span>Let's go</span>
        </Row>

        <Row className="m-0 p-0">
          <h3 className="section-title">News & Events</h3>
          <Row className="news-events-section m-0 p-0">
            {/* News Cards */}

            <Col className="news-cards d-flex flex-column" lg={5}>
              <Col md={12} className="news-card">
                <div className="news-card-content">
                  <div>

                    {newsItems.data &&
                      newsItems.data
                        .slice(0, 3)
                        .map((i) => (
                          <ul key={i.id}>
                            <li onClick={() => handleOpenInNewTab(i.link)}>
                              {i.title}
                            </li>
                          </ul>
                        ))}

                    <div className="read-more cursor-pointer" onClick={handleViewMore}>View More</div>
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
                    JoSAAHelp.in is your trusted companion. Click to explore
                    more!
                  </p>
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

            <Col lg={7} className="jossa-help-flow-img">
              <img
                src={JEEFlow}
                alt="JoSAAHelpFlow"
                className="welcome-image"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Col>
          </Row>
        </Row>
      </Row>

      {viewMoreModal &&
        <CustomModal isOpen={viewMoreModal}
          onClose={handleViewMoreModal}
          title="News & Events"
        //  subTitle
        >
          <Col md={12} className="news-card modal-news">
            <div className="news-card-content">
              <div>
                {newsItems.data &&
                  newsItems.data
                    .map((i) => (
                      <ul key={i.id}>
                        <li onClick={() => handleOpenInNewTab(i.link)}>
                          {i.title}
                        </li>
                      </ul>
                    ))}

              </div>
            </div>
          </Col>
        </CustomModal>}
    </Container>
  );
};

export default Home;
