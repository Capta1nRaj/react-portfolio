import React from 'react'
import "./ContactUsScreenComponent.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt} from "@fortawesome/free-solid-svg-icons";

function ContactUsScreenComponent() {
    return (
        <div>
            <a className="whatsapp-icon-container" href="#/contact-us" alt="">
                <FontAwesomeIcon className="whatsapp-icon" icon={faAt}/>
            </a>
        </div>
    )
}

export default ContactUsScreenComponent