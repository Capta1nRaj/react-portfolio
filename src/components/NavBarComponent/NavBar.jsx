import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function NavBar(props) {
  // All UseState Function
  const [navBarBackgroundColor, setnavBarBackgroundColor] = useState("transparent");
  const [navBarTextColor, setnavBarTextColor] = useState("crimson");
  const [hamburgerMenuColor, sethamburgerMenuColor] = useState("crimson");
  const [leftSlidePosition, setleftSlidePosition] = useState("-120%");
  const [hamburgerMenuChangeOnClick, sethamburgerMenuChangeOnClick] = useState(true);
  const [rightSideSectionBackgroundColorChange, setrightSideSectionBackgroundColorChange] = useState("transparent");
  const [dropShadowToNavBarText, setdropShadowToNavBarText] = useState("");
  const [normalTransitionAnimation, setnormalTransitionAnimation] = useState("all 1s ease-in-out");

  // Function For Scroll And Resize Event Listener
  function scrollAndResizeEventListener() {
    // For Screen Width >700
    if (window.innerWidth > 700 && window.scrollY > 50) {
      setnavBarBackgroundColor("black");
      setnavBarTextColor("white");
      setrightSideSectionBackgroundColorChange("transparent");
      setdropShadowToNavBarText("drop-shadow(white 0px 0px 10px)");
      setnormalTransitionAnimation("all 1s ease-in-out");
    } else if (window.innerWidth > 700 && window.scrollY < 50) {
      setnavBarBackgroundColor("transparent");
      setnavBarTextColor("crimson");
      setrightSideSectionBackgroundColorChange("transparent");
      setdropShadowToNavBarText("drop-shadow(black 0px 0px 10px)");
      setnormalTransitionAnimation("all 1s ease-in-out");
    }

    // For Screen Width <700
    if (window.innerWidth < 700 && window.scrollY < 50) {
      setnavBarBackgroundColor("white");
      setnavBarTextColor("white");
      setrightSideSectionBackgroundColorChange("rgb(0,0,0,0.6");
      sethamburgerMenuColor("crimson");
      setdropShadowToNavBarText("drop-shadow(black 0px 0px 10px)");
      setnormalTransitionAnimation("all 1s ease-in-out");
    } else if (window.innerWidth < 700 && window.scrollY > 50) {
      setnavBarBackgroundColor("black");
      setnavBarTextColor("crimson");
      setrightSideSectionBackgroundColorChange("rgb(0,0,0,0.6");
      sethamburgerMenuColor("white");
      setnormalTransitionAnimation("all 1s ease-in-out");
    }
  }

  // Scroll And Resize Event Listener Using useEffect (MouseOver, & MouseOut Added Too)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      scrollAndResizeEventListener();
    });

    window.addEventListener("resize", () => {
      scrollAndResizeEventListener();
    });

    window.addEventListener("load", () => {
      scrollAndResizeEventListener();
    });

    // This Will Set Page On Top After Each Reload Or Page Switch
    window.scrollTo(0, 0);
  }, []);

  // Expanding Menu When In Mobile/Tablet Mode
  function expandLeftSlidePosition() {
    if (leftSlidePosition === "-120%") {
      setleftSlidePosition("0%");
    } else {
      setleftSlidePosition("-120%");
    }
  }

  // OnClick Of Hamburger Menu Icon, It Will Change Icon To Cross Menu Icon
  function changingHamburgerMenuIcon() {
    if (hamburgerMenuChangeOnClick === true) {
      sethamburgerMenuChangeOnClick(false);
    } else {
      sethamburgerMenuChangeOnClick(true);
    }
  }

  // Mouse Hover Color Change
  function MouseOver(event) {
    // For Screen>700 & Scroll>50
    if (window.innerWidth > 700 && window.scrollY > 50) {
      event.target.style.color = "crimson";
    } else if (window.innerWidth > 700 && window.scrollY < 50) {
      event.target.style.color = "black";
    }

    // For Screen<700 & Scroll<50
    if (window.innerWidth < 700 && window.scrollY > 50) {
      event.target.style.color = "black";
    } else if (window.innerWidth < 700 && window.scrollY < 50) {
      event.target.style.color = "crimson";
    }
  }

  function MouseOut(event) {
    // For Screen>700 & Scroll>50
    if (window.innerWidth > 700 && window.scrollY > 50) {
      event.target.style.color = "";
    } else if (window.innerWidth > 700 && window.scrollY < 50) {
      event.target.style.color = "";
    }

    // For Screen<700 & Scroll<50
    if (window.innerWidth < 700 && window.scrollY > 50) {
      event.target.style.color = "";
    } else if (window.innerWidth < 700 && window.scrollY < 50) {
      event.target.style.color = "";
    }
  }

  return (
    <div>
      <section style={{ backgroundColor: navBarBackgroundColor }} className="fixed-navigation-bar-section">
        <div className="max-width">
          <div className="left-side-section">
            <div>
              <Link to="/">
                <img style={{ width: props.navBarImageWidth, textDecoration: props.navBarOption1TextDecoration }} src={props.navBarImage} alt="" />
              </Link>
            </div>
          </div>
          <div className="right-side-section" style={{ fontSize: props.rightSectionFontSize, fontFamily: props.navBarFontFamily, color: navBarTextColor, left: leftSlidePosition, backgroundColor: rightSideSectionBackgroundColorChange, transition: normalTransitionAnimation }}>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption1TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option1">
              <Link to="/">Home</Link>
            </div>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption2TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option2">
              <Link to="/skills">Skills</Link>
            </div>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption3TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option3">
              <Link to="/services">Services</Link>
            </div>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption4TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option4">
              <Link to="/pricing">Pricing</Link>
            </div>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption5TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option5">
              <Link to="/projects">Projects</Link>
            </div>
            <div style={{ filter: dropShadowToNavBarText, textDecoration: props.navBarOption6TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option6">
              <Link to="/contact-us">Contact Us</Link>
            </div>
            <div style={{ display: "none", filter: dropShadowToNavBarText, textDecoration: props.navBarOption6TextDecoration }} onMouseOver={MouseOver} onMouseOut={MouseOut} className="right-side-option-text option6">
              <Link to="/react-portfolio"></Link>
            </div>
          </div>
          <div
            style={{ color: hamburgerMenuColor }}
            className="hamburger-menu-btn-container"
            onClick={() => {
              changingHamburgerMenuIcon();
              expandLeftSlidePosition();
            }}
          >
            <FontAwesomeIcon icon={hamburgerMenuChangeOnClick ? faBars : faTimes} size={"xl"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default NavBar;
