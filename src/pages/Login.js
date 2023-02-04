import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginCard from "../components/LoginCard";

function Login() {
    return (
        <div>
            <Header />
            <div className="registerCard">
                <LoginCard />
            </div>
            <Footer />
        </div>
    );
}

export default Login;
