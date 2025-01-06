export default function Footer() {
    return (
        <div>
            <footer className="app-footer">
                <span><p>Dundee Zhang 2025 - All Rights Reserved</p></span>
                <ul className="social-cons">
                    <li>
                        <div className="circle-div-footer">
                            <a
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/dundeezhang/"
                                style={{
                                    color: "black",
                                }}
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin-in footer-icons"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="circle-div-footer">
                            <a
                                rel="noreferrer"
                                href="https://github.com/dundeezhang"
                                style={{
                                    color: "black",
                                }}
                                target="_blank"
                            >
                                <i className="fa-brands fa-github footer-icons"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="circle-div-footer">
                            <a
                                rel="noreferrer"
                                href="https://instagram.com/dundeehz"
                                style={{
                                    color: "black",
                                }}
                                target="_blank"
                            >
                                <i className="fa-brands fa-instagram footer-icons"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="circle-div-footer">
                            <a
                                rel="noreferrer"
                                href="mailto:contact@dundeezhang.com"
                                style={{
                                    color: "black",
                                }}
                                target="_blank"
                            >
                                <i className="fa-regular fa-envelope footer-icons"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
