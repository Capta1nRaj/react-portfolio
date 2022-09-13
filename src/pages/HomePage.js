import React from "react";
import AboutMe from "../components/AboutMeComponent/AboutMe";
import IntroComponent from "../components/IntroComponent/IntroComponent";
import NavBar from "../components/NavBarComponent/NavBar";

function HomePage() {
    return (
        <div>
            <NavBar
                navBarOption1TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"
                navBarOption1="home"
                navBarOption2="skills"
                navBarOption3="services"
                navBarOption4="pricing"
                navBarOption5="projects"
                navBarOption6="contact"/>
            <IntroComponent
                backgroundImage={require("../images/intro-component-images/banner.jpg")}
                IntroComponentFontFamily="Mabook"
                />
            <AboutMe
                headingTextFontFamily="Mabook"
                headingText="Self appraisal"
                headingColor="crimson"
                aboutMeText="An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the betterment of the organization. A bachelor's degree in Computer Science Engineering has enhanced my proficiency in Front End Web Developer and looking forward to work in a competitive environment that enhances overall learning."
                />
        </div>
    );
}

export default HomePage;
