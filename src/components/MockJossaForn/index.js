import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./MockJossaForm.scss";
import CustomCarousel from "../../ResuableComponent/CustomCarousel/CustomCarousel";
import { IoGrid } from "react-icons/io5";
import { FaTableColumns } from "react-icons/fa6";
import NestedColTable from "../../ResuableComponent/NestedColTable";
import StudentLayout from "../../Pages/CommonLayout/CommonLayout";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../redux/actions/blogAction";
import { getInstituteData } from "../../redux/actions/gteInstituteNameAction";
import Button from "../../ResuableComponent/Button";
import { FaRegFilePdf } from "react-icons/fa6";
import ToggleButton from "../../ResuableComponent/ToggleButton";
import { MdDeleteOutline } from "react-icons/md";
import { PiArrowFatUp, PiArrowFatUpBold } from "react-icons/pi";
import { PiArrowFatDownBold } from "react-icons/pi";
import { getCollegeTrends } from "../../redux/actions/collegeTrendsAction";
import sharemockform from '../../assests/images/sharemockform.png';
import { getRecommendations } from "../../redux/actions/getRecommendationAction";
import GenericTable from "../../ResuableComponent/ScheduleTable/GenericTable";
import GlobalLoader from "../../ResuableComponent/GloaderLoader";


const MockJossaForm = () => {
  const dispatch = useDispatch();
  const { instituteData, loadingStateForInstitute, error } = useSelector(
    (state) => state.getInstituteNameReducer
  );

  const { recommendedColleges, loadingStateForRecommendedColleges } = useSelector((state) => state.recommendedCollegeReducer);


  const [examType, setExamType] = useState(0);
  const [token, setToken] = useState('')

  const header = [
    {
      label: "Choice",
      dataMapping: ''
    },
    {
      label: "Institute",
      dataMapping: 'institute_name'
    },
    {
      label: "Program",
      dataMapping: 'academic_program_stream'
    },
    {
      label: "Actions",
      // dataMapping: 'state'
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
      ],
    },
  ];

  const defaultActions = {
    remove: (
      <Button
        label="Remove"
        onClick={() => console.log("Remove clicked")}
        startIcon={<MdDeleteOutline />}
        className="action-btns remove-btn"
      />
    ),
    up: (
      <Button
        label="Up"
        onClick={() => console.log("Up clicked")}
        className="action-btns up-btn"
        startIcon={<PiArrowFatUpBold />}
      />
    ),
    down: (
      <Button
        label="Down"
        startIcon={<PiArrowFatDownBold />}
        onClick={() => console.log("Down clicked")}
        className="action-btns down-btn"
      />
    ),
  };



  useEffect(() => {
    setToken(localStorage.getItem("authToken"))
  }, [localStorage.getItem("authToken")])

  useEffect(() => {
    dispatch(getInstituteData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCollegeTrends())
  }, [])

  useEffect(() => {
    dispatch(getRecommendations())
  }, [])

  return (
    <StudentLayout>
      <Container className="mock-jossa-form-container">
        <Row className="mock-jossa-form-header-container position-relative">
          <h1 className="title-text">Mock JoSAA Form</h1>

          <div className="title-desc mt-3">
            Our Mock JoSAA Form serves as a valuable tool to assist you in
            filling and testing your choices before final submission on the
            official website. Utilize our tool to thoroughly research and refine
            your selections, arranging them in order of your preference.
          </div>

          <div className="title-desc mt-4">
            Designed to mirror the official tool`s appearance and functionality,
            our platform ensures familiarity and comfort, minimizing the risk of
            errors when transitioning to the official version. Additionally, our
            tool offers suggestions for optimizing your preference management,
            ultimately increasing your likelihood of securing a more favorable
            seat allocation.
          </div>

          <img src={sharemockform} alt="sharemockform" className="share-svg position-absolute" />
        </Row>

        <Row className="jossa-help-tabel-title-container">
          <div className="mock-jossa-form-btn-group mb-4">
            <div className="btn-group d-flex justify-content-between">
              <div className="left-side-btn">
                <ToggleButton />
              </div>
              <div className="right-side-btns">
                <Button
                  label="Add Institute & Program"
                  className={"add-institute-btn"}
                />
                <Button label="Save Mock Form" className={"save-export-btn"} />
                <Button
                  label="Export"
                  startIcon={<FaRegFilePdf />}
                  className={"save-export-btn"}
                />
              </div>
            </div>
          </div>
          <div className="jossa-help-tabel-container mt-4">
            <GenericTable
              data={recommendedColleges?.data}
              headers={header}
              defaultActions={defaultActions}
            />
          </div>
        </Row>
      </Container>

      {loadingStateForRecommendedColleges && <GlobalLoader />}
    </StudentLayout>
  );
};

export default MockJossaForm;
