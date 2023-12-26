import "./styles/main.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ScrollControl from "./utils/scrollControl";
import {
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

function App() {
    const location = useLocation();

    const hide = location.pathname === "/register" || location.pathname === "/login";


    return (
        <div className="App">
            <ScrollToTop />
            {!hide && <Navbar />}
            <ScrollControl />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>

            {!hide && <Footer />}   
        </div>
    )
}

export default App;