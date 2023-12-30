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
import ChangePass from "./pages/ChangePass";
import AuthMe from "./pages/AuthMe";
import CatopiaRedirect from "./utils/CatopiaRedirect";

function App() {
  const location = useLocation();

  const hide =
    location.pathname === '/catopia/register' ||
    location.pathname === '/catopia/login' ||
    location.pathname === '/catopia/forgot-password' ||
    location.pathname === '/catopia/confirm' ||
    location.pathname === '/catopia/change-password' ||
    location.pathname === '/catopia/auth/me';

  return (
    <div className="App">
      <ScrollToTop />
      {!hide && <Navbar />}
      <ScrollControl />

      <Routes>
        <Route path="/catopia/" element={<CatopiaRedirect />} />
        <Route path="/catopia/auth/me" element={<AuthMe />} />
        <Route path="/catopia/home" element={<Home />} />
        <Route path="/catopia/about-cats" element={<AboutCats />} />
        <Route path="/catopia/register" element={<Register />} />
        <Route path="/catopia/login" element={<Login />} />
        <Route path="/catopia/forgot-password" element={<ForgotPass />} />
        <Route path="/catopia/confirm" element={<ConfirmPass />} />
        <Route path="/catopia/change-password" element={<ChangePass />} />
      </Routes>

      {!hide && <Footer />}
    </div>
  );
}

export default App;
