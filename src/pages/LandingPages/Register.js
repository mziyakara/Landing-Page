import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterCard from "../../components/RegisterCard";

function Register() {
    return (
        <div>
            <Header />
            <div className="registerCard">
                <RegisterCard />
            </div>
            <Footer />
        </div>
    );
}

export default Register;
