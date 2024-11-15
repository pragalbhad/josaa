import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Unauthorized from "./components/UnauthorizedPage/UnauthorizedPage";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import "react-perfect-scrollbar/dist/css/styles.css";
import Information from "./components/Information";
import JossaHelp from "./components/JossaHelp";
import MockJossaForm from "./components/MockJossaForn";
import CollegeRecommendation from "./Pages/LandingPage";
import Dashboard from "./components/DashBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import ContactUs from "./components/ContactUs";
import EditProfile from "./components/EditProfile";
import ExamsDetail from "./components/ExamsDetail";
import Home from './components/Home';

import "./App.css";
import { useEffect, useState } from "react";
import { getSiteAccessLogs } from "./redux/actions/siteAccessLogAction";
import axios from "axios";

function App() {
  const role = useSelector((state) => state.auth.role);
  const dispatch = useDispatch()
  const { loadingStateForSiteAccessLogs, siteAccessLogs } = useSelector((state) => state.siteAccessLogReducer);
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    dispatch(getSiteAccessLogs('223.228.202.209')); 
  }, [dispatch]);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  useEffect(() => {
    if (ipAddress) {
      dispatch(getSiteAccessLogs(ipAddress));
    }
  }, [dispatch, ipAddress]);


  return (
    <Container fluid className="app m-0 p-0 w-100">

      <Router>
      <Header />
        <Routes>

          {/* Role-Based Protected Routes */}
          <Route
            element={<ProtectedRoute allowedRoles={["student", "admin"]} />}
          >
            <Route path="/" element={<Home />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/jossaHelp" element={<JossaHelp />} />
            <Route path="/mockJossaForm" element={<MockJossaForm />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/examdetails" element={<ExamsDetail />} />
            <Route
              path="/recommendations"
              element={<CollegeRecommendation />}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Unauthorized Route */}
          <Route path="/unauthorized" element={<Unauthorized />} />

          {/* Fallback Route for Unknown Paths */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
