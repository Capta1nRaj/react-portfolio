import React from "react";
import "./IntroComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import TypedComponent from "../TypedComponent/TypedComponent";

function IntroComponent(props) {
  return (
    <div>
      <section className="intro-component-section" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
        <div className="max-width">
          <div className="my-intro-text-container" style={{ fontFamily: props.IntroComponentFontFamily }}>
            <div className="line-1">Hey Fellas</div>
            <div className="line-2">My Name Is <span style={{ color: "crimson" }}>Priyal Raj</span></div>
            <div className="line-3">I'M A <span style={{ color: "crimson" }}> <TypedComponent profession={["Front End Web Dev", "YouTuber", "Gamer", "Freelancer"]}/> </span></div>
            <div style={{ display: "flex", gap: "20px" }} className="button">
              <ButtonComponent hrefLink={"https://app.flowcv.com/resume-feedback/el1csjQQnr3RQqv8YK7UP"} border="1px solid red" backgroundColor="crimson" onHoverBackGroundColor="transparent" color="white" onHoverColor="crimson" padding="15px 20px" borderRadius="6px" fontFamily="Mont-HeavyDEMO" fontSize="20px" transition="all 0.4s ease-in-out" buttonText="View Resume" />
              <ButtonComponent hrefLink={require("../../documents/resume/resume.pdf")} border="1px solid red" backgroundColor="crimson" onHoverBackGroundColor="transparent" color="white" onHoverColor="crimson" padding="15px 20px" borderRadius="6px" fontFamily="Mont-HeavyDEMO" fontSize="20px" transition="all 0.4s ease-in-out" buttonText="Download Resume" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default IntroComponent;
