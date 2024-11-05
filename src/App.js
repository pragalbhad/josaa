import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Unauthorized from "./components/UnauthorizedPage/UnauthorizedPage";
import ProtectedRoute from "./routes/ProtectedRoutes";
import { useSelector } from "react-redux";
import Student from "./Pages/Student/Student";
import LandingPage from "./Pages/LandingPage";
import "react-perfect-scrollbar/dist/css/styles.css";
import Home from "./components/Home";
import Information from "./components/Information";
import JossaHelp from "./components/JossaHelp";
import "./App.css";
import MockJossaForm from "./components/MockJossaForn";
import CollegeRecommendation from "./Pages/LandingPage";
import Dashboard from "./components/DashBoard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const role = useSelector((state) => state.auth.role);

  return (
    <>

      <Router>
      <Header />

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          {/* Role-Based Protected Routes */}
          <Route
            element={<ProtectedRoute allowedRoles={["student", "admin"]} />}
          >
            <Route path="/" element={<Student />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/jossaHelp" element={<JossaHelp />} />
            <Route path="/mockJossaForm" element={<MockJossaForm />} />
            <Route path="/Information" element={<Student />} />
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
    </>
  );
}

export default App;
