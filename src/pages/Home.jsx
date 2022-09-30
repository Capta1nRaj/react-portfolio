import React from "react";
import AboutMe from "../components/AboutMeComponent/AboutMe";
import ContactUsScreenComponent from "../components/ContactUsScreenComponent/ContactUsScreenComponent";
import FooterComponent from "../components/FooterComponent/FooterComponent";
import IntroComponent from "../components/IntroComponent/IntroComponent";
import NavBar from "../components/NavBarComponent/NavBar";

function Home() {
    return (
        <div>
            <NavBar
                navBarOption1TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"/>
            <IntroComponent
                backgroundImage={require("../images/intro-component-images/banner.jpg")}
                IntroComponentFontFamily="Mabook"/>
            <AboutMe
                headingTextFontFamily="Mabook"
                headingText="Self appraisal"
                headingColor="crimson"
                aboutMeText="An enthusiastic engineering fresher who is a self-starter and capable to use technical skills for the betterment of the organization. A bachelor's degree in Computer Science Engineering has enhanced my proficiency in Front End Web Developer and looking forward to work in a competitive environment that enhances overall learning."/>
            <FooterComponent/>
            <ContactUsScreenComponent/>
        </div>
    );
}

export default Home;
