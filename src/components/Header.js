import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="mainHeader">
            <div className="signIn">
                <p>
                    <Link className="headerText" to="/">
                        Anasayfa
                    </Link>
                </p>
                <p>
                    <Link className="headerText" to="/DownloadPage">
                        Hakkında
                    </Link>
                </p>
                <p>
                    <Link className="headerText" to="/Login">
                        Giriş Yap
                    </Link>
                </p>
                <p>
                    <Link className="headerText" to="/Register">
                        Üye Ol
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Header;
