import React from 'react'
import ContactUsComponent from '../components/ContactUsComponent/ContactUsComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import NavBar from "../components/NavBarComponent/NavBar";

function ContactUs() {
    return (
        <div>
            <NavBar
                navBarOption6TextDecoration="underline"
                navBarImageWidth="48px"
                navBarImage={require("../images/navigation-bar-component-images/logo.png")}
                navBarFontFamily="Mabook"
                rightSectionFontSize="24px"/>
            <ContactUsComponent/>
            <FooterComponent
            setposition="absolute"
            left="0"
            right="0"
            bottom="0"
            />
        </div>
    )
}

export default ContactUs