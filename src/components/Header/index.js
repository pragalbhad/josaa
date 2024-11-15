import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaBook, FaRegAddressCard, FaSignOutAlt } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import Register from "../../Pages/Register";
import TabNavbar from "../../ResuableComponent/Tab";
import Button from "../../ResuableComponent/Button";
import Login from "../../Pages/Login";
import light from "../../assests/images/light.png";
import { getProfile } from "../../redux/actions/getProfileAction";
import AvatarDropdown from "../../ResuableComponent/AvatarDropDown";
import {
  toggleSignIn,
  toggleSignUpModal,
} from "../../redux/actions/buttonActions";
import "./Header.scss";
import GlobalLoader from "../../ResuableComponent/GloaderLoader";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/registerAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSticky, setIsSticky] = useState(false); 
  const [token, setToken] = useState(null);

  const signInData = useSelector((state) => state.register.signInData);

  const { profile, loadingStateForGetProfile } = useSelector(
    (state) => state.getProfile
  );

  const isLogIn = useSelector(( state)=> state.register )

  useEffect(() => {
    setToken(localStorage.getItem("authToken"));
  }, [localStorage.getItem("authToken"), isLogIn]);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [signInData, token, isLogIn]);

  useEffect(() => {
    dispatch(getProfile());
  }, [token, isAuthenticated, isLogIn]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOptionSelect = (option) => {
    if(option.link === '/logout'){
      dispatch(logout())
    }else{
      navigate(`${option.link}`);
    }
  };

  const handleOpen = () => {
    dispatch(toggleSignUpModal(true));
  };

  const handleSignInModal = () => {
    dispatch(toggleSignIn(true));
  };

  const menuOptions = [
    { label: "Dashboard", link: "/dashboard", startIcon: <RxDashboard /> },
    { label: "Exam Details", link: "/examdetails", startIcon: <FaBook /> },
    { label: "Profile", link: "/editprofile", startIcon: <FaRegAddressCard /> },
    { label: "Logout", link: "/logout", startIcon: <FaSignOutAlt /> },
  ];

  const tabs = [
    { label: "HOME", link: "/" },
    {
      label: "Information",
      dropdown: [
        { label: "Information", link: "/information" },
        { label: "JoSSA Help", link: "/jossaHelp" },
      ],
    },
    {
      label: "Tools",
      dropdown: [
        { label: "Mock JoSAA Form", link: "/mockJossaForm" },
        { label: "Recommendations", link: "/recommendations" },
      ],
    },
    { label: "NEWS & EVENTS", link: "/news" },
    { label: "CONTACT US", link: "/contact" },
  ];

  return (
    <Container fluid className={`header-container ${isSticky ? "sticky" : ""}`}>
      <Row lg={12} className="header-row-one d-flex flex-row col-12 w-100 m-0">
        <Col className="logo-wrapper">
          <img src={light} alt="logo" />
        </Col>
        {isAuthenticated ? (
          <Col className="avatar-container">
            <div className="user-details">
              <div className="user-name">
                {profile && profile?.data ? profile?.data?.name : "John Doe"}
              </div>
              <div className="user-email">
                {profile && profile?.data
                  ? profile?.data?.email
                  : "john.doe@gmail.com"}
              </div>
            </div>
            <AvatarDropdown
              menuOptions={menuOptions}
              onOptionSelect={handleOptionSelect}
            />
          </Col>
        ) : (
          <Col className="button-wrapper">
            <Button
              label="Login"
              className="login-btn"
              onClick={handleSignInModal}
            />
            <Button
              label="Signup"
              className="signup-btn"
              onClick={handleOpen}
            />
          </Col>
        )}
      </Row>

      <Row>
        <TabNavbar tabs={tabs} />
      </Row>

      <Register action={handleOpen} />
      <Login action={handleSignInModal} />

      {loadingStateForGetProfile && <GlobalLoader />}
    </Container>
  );
};

export default Header;
