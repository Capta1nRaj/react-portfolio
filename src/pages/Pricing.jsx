import React from 'react'
import NavBar from '../components/NavBarComponent/NavBar'
import PlansComponent from "../components/PlansComponent/PlansComponent"
import ProjectsComponent from '../components/ProjectsComponent/ProjectsComponent'

function Pricing() {
    return (
        <div>
            <NavBar
                navBarOption4TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"/>
            <PlansComponent
            backgroundColor="white"
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
            <ProjectsComponent
            headingFontFamily="Mabook"
            headingColor="crimson"
            headingFontSize="40px"
            headingMargin="0 0 0 0"
            headingText="Our Projects"
            // Heading Caption
            headingCaptionFontFamily="Mont-ExtraLightDEMO"
            headingCaptionColor="gray"
            headingCaptaionFontSize="16px"
            headingCaptionMargin="20px 0 50px 0"
            headingCaptionFontWeight="bold"
            headingCaptionText="Here Are Few Of My Porjects I've Worked On Recently."
            sliceValue= "4"
            />
        </div>
    )
}

export default Pricing