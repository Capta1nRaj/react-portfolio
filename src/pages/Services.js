import React from 'react'
import NavBar from "../components/NavBarComponent/NavBar";
import PlansComponent from '../components/PlansComponent/PlansComponent';
import ServicesOfferedComponent from '../components/ServicesOfferedComponent/ServicesOfferedComponent';

function Services() {
    return (
        <div>
            <NavBar
                navBarOption3TextDecoration="underline"
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
            <ServicesOfferedComponent
            servicesOfferedFontFamily="Mabook"
            servicesOfferedTextColor="crimson"
            />
            <PlansComponent
            // Heading Text
            headingFontFamily="Mabook"
            headingColor="crimson"
            headingFontSize="40px"
            headingMargin="0 0 0 0"
            headingText="Choose Your Plan"
            // Heading Caption
            headingCaptionFontFamily="Mont-ExtraLightDEMO"
            headingCaptionColor="gray"
            headingCaptaionFontSize="16px"
            headingCaptionMargin="20px 0 50px 0"
            headingCaptionFontWeight="bold"
            headingCaptionText="We Really Hope You Will Like Our Plans & Pricing, We Have Cared About Your Budget Too. We Really Hope You Will Like Our Plans & Pricing, We Have Cared About Your Budget Too."
            />
        </div>
    )
}

export default Services