import { Routes, Route } from "react-router-dom";
import DownloadPage from "../pages/DownloadPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";

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
