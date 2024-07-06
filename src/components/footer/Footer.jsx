import React from "react";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    design and develop by {" "}
                    <a href="https://github.com/VivekSarvaiya" target="_blank">vivek sarvaiya</a>{" "}
                    with ❤️
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a href="https://github.com/VivekSarvaiya" target="_blank"><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.linkedin.com/in/vivek-sarvaiya-323602203/" target="_blank"><FaLinkedin /></a>
                    </span>
                    <span className="icon">
                        <a href="https://www.instagram.com/vikki.here_/" target="_blank"> <FaInstagram /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
