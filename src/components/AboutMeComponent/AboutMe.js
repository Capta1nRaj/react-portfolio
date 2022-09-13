import React from "react";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TypedComponent from "../TypedComponent/TypedComponent";
import "./AboutMe.css";

function AboutMe(props) {
    return (
        <div>
            <section className="about-me-section" style={{ backgroundColor:props.aboutMeBackgroundColor }}>
                <div className="max-width">
                    <div className="heading-text-container" style={{ fontFamily: props.headingTextFontFamily, color: props.headingColor }}>
                        <div>{props.headingText}</div>
                    </div>
                    <div className="about-me-container-with-image">
                        <div style={{ display: "flex" }} className="image-container">
                            <img src={require("../../images/about-me-component-images/profile-picture.jpg")} alt="" />
                        </div>
                        <div className="about-me-text-container">
                            <div className="line-1"> My Name Is <span style={{ color: "crimson" }}>Priyal Raj</span> & I Am <span style={{ color: "crimson" }}><TypedComponent profession={["Front End Web Dev", "YouTuber", "Gamer", "Freelancer"]} /></span> </div>
                            <div className="line-2">{props.aboutMeText}</div>
                            <div className="line-3" style={{ display: props.buttonDisplay }}>
                                <span style={{ display: props.button1Display }}> <ButtonComponent hrefLink={"https://app.flowcv.com/resume-feedback/el1csjQQnr3RQqv8YK7UP"} border="1px solid crimson" backgroundColor="crimson" onHoverBackGroundColor="transparent" color="white" onHoverColor="crimson" padding="15px 20px" borderRadius="6px" fontFamily="Mont-HeavyDEMO" fontSize="20px" transition="all 0.4s ease-in-out" buttonText="View Resume" /> </span>
                                <span style={{ display: props.button2Display }}> <ButtonComponent hrefLink={require("../../documents/resume/resume.pdf")} border="1px solid crimson" backgroundColor="crimson" onHoverBackGroundColor="transparent" color="white" onHoverColor="crimson" padding="15px 20px" borderRadius="6px" fontFamily="Mont-HeavyDEMO" fontSize="20px" transition="all 0.4s ease-in-out" buttonText="Download Resume" /> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutMe;
