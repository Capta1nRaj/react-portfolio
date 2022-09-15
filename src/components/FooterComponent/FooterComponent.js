import React, { useEffect, useState } from "react";
import "./FooterComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function FooterComponent(props) {

    const [date, setDate] = useState();

    function getYear() {
        setDate(new Date().getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])

    return (
        <div>
            <section className="footer-section" style={{ position: props.setposition, top: props.top, left: props.left, right: props.right, bottom: props.bottom }}>
                <div className="max-width">
                    <div className="design-and-developed-by">Designed & Developed By<span style={{ color: "red" }}>{props.line2Name}</span></div>
                    <div className="copyright-year">Copyright © {date}</div>
                    <div className="social-media-icon-container">
                        <div className="linkedin-container"><a href={"https://www.linkedin.com/in/priyal-raj-bb19b4228"} target="_blank" rel="noreferrer"><img className="linkedin" src={require("../../images/footer-components-images/Linkedin.png")} alt="" /></a></div>
                        <div className="github-container"><a href={"https://github.com/Capta1nRaj"} target="_blank" rel="noreferrer"><img className="github" src={require("../../images/footer-components-images/GitHub.png")} alt="" /></a></div>
                        <div className="youtube-container"><a href={"https://youtube.com/captainraj"} target="_blank" rel="noreferrer"><img className="youtube" src={require("../../images/footer-components-images/YouTube.png")} alt="" /></a></div>
                        <div className="instagram-container"><a href={"https://www.instagram.com/capta1n_raj"} target="_blank" rel="noreferrer"><img className="instagram" src={require("../../images/footer-components-images/Instagram.png")} alt="" /></a></div>
                        <div className="-container"><a href={"https://twitter.com/capta1n_raj"} target="_blank" rel="noreferrer"><img className="twitter" src={require("../../images/footer-components-images/Twitter.png")} alt="" /></a></div>
                    </div>
                    <a className="whatsapp-icon-container" href="/" target="_blank" alt="">
                        <FontAwesomeIcon className="whatsapp-icon" icon={faWhatsapp} />
                    </a>
                </div>
            </section>
        </div>
    );
}

export default FooterComponent;
