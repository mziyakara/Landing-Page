import DownloadPage from "../pages/LandingPages/DownloadPage";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/LandingPages/Login";
import Register from "../pages/LandingPages/Register";
import LandingPage from "../pages/LandingPages/LandingPage";

function LandingRoute() {
    return (
        <div>
            <Routes>
                <Route path="/DownloadPage" element={<DownloadPage />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/" exact element={<LandingPage />} />
            </Routes>
        </div>
    );
}

export default LandingRoute;
