import "./styles/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ScrollControl from "./utils/scrollControl";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";
import AboutCats from "./pages/AboutCats";
import ForgotPass from "./pages/ForgotPass";
import ConfirmPass from "./pages/ConfirmPass";

function App() {
  const location = useLocation();

  const hide =
    location.pathname === "/register" ||
    location.pathname === "/login" ||
    location.pathname === "/forgot-password" ||
    location.pathname === "/confirm";

  return (
    <div className="App">
      <ScrollToTop />
      {!hide && <Navbar />}
      <ScrollControl />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-cats" element={<AboutCats />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/confirm" element={<ConfirmPass />} />
      </Routes>

      {!hide && <Footer />}
    </div>
  );
}

export default App;
