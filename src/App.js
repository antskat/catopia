import "./styles/main.css";
import Navbar from "./components/Navbar";
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

    const hideNavbar = location.pathname === "/catopia/register" || location.pathname === "/catopia/login";


    return (
        <div className="App">
            <ScrollToTop />
            {!hideNavbar && <Navbar />}
            <ScrollControl />

            <Routes>
                <Route path="/catopia/" element={<Home />} />
                <Route path="/catopia/register" element={<Register />} />
                <Route path="/catopia/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App;