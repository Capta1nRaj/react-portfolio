import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ServicesOfferedComponent.css";
import { faCamera, faLaptopCode, faPaintRoller, faPenRuler, faRectangleAd, faVideo } from "@fortawesome/free-solid-svg-icons";


function ServicesOfferedComponent(props) {
    /* // Mouse Hover Color Change
    function MouseOver() {
        var asdf = document.getElementsByClassName('services-boxes').length;
        for (var i = 0; i < asdf; i++) {
            document.getElementsByClassName("services-boxes")[i].setAttribute("style", "background-color:black; color:white;");
        }
    }

    function MouseOut() {
        var asdf = document.getElementsByClassName('services-boxes').length;
        for (var i = 0; i < asdf; i++) {
            document.getElementsByClassName("services-boxes")[i].setAttribute("style", "background-color: color:");
        }
    } */
    return (
        <div>
            <section className="services-offered" style={{ fontFamily: props.servicesOfferedFontFamily }}>
                <div className="max-width">
                    <div className="services-offered-heading-container">
                        <div className="first-text" style={{color:props.servicesOfferedTextColor}}>Services Offered</div>
                        <div className="second-text">We Provide Limited But Best Quality Services At Best Prices In Market. Plans Prices Given Below.</div>
                    </div>
                    <div className="services-names-container">
                        <div className="services-boxes service-1">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faPenRuler} size={"4x"} /></div>
                            <div className="heading-section">Web Design</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                        <div className="services-boxes service-2">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faLaptopCode} size={"4x"} /></div>
                            <div className="heading-section">Web Developement</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                        <div className="services-boxes service-3">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faRectangleAd} size={"4x"} /></div>
                            <div className="heading-section">Advertising</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                        <div className="services-boxes service-4">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faCamera} size={"4x"} /></div>
                            <div className="heading-section">Photo Editing</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                        <div className="services-boxes service-5">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faVideo} size={"4x"} /></div>
                            <div className="heading-section">Video Editing</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                        <div className="services-boxes service-6">
                            <div className="image-section"><FontAwesomeIcon className="fontAwesome-class" icon={faPaintRoller} size={"4x"} /></div>
                            <div className="heading-section">Digital Painting</div>
                            <div className="about-services-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores eos dignissimos nemo at quas magnam, laudantium, perspiciatis reiciendis deserunt.</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesOfferedComponent;
