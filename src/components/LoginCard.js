import { Link } from "react-router-dom";

function LoginCard() {
    return (
        <div className="usernameCard">
            <div className="usernameInputContainer">
                <input placeholder="E-mail Adresiniz" className="input"></input>
                {/* <input placeholder="Kullanıcı Adı" className="input"></input> */}
                <input
                    type="password"
                    placeholder="Şifre"
                    className="input"
                ></input>
                <Link to="" className="registerBtn">
                    GİRİŞ YAP
                </Link>
            </div>
        </div>
    );
}

export default LoginCard;
