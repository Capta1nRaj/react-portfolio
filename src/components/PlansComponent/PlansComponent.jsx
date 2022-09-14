import React from "react";
import "./PlansComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

function PlansComponent(props) {
    return (
        <div>
            <section className="plans-component-section" style={{backgroundColor:props.backgroundColor}}>
                <div className="max-width">
                    <div className="plans-component-heading-container">
                        <div className="first-line" style={{ fontFamily: props.headingFontFamily, color: props.headingColor, fontSize: props.headingFontSize, margin: props.headingMargin }}>
                            {props.headingText}
                        </div>
                        <div className="second-line" style={{ fontFamily: props.headingCaptionFontFamily, color: props.headingCaptionColor, fontSize: props.headingCaptaionFontSize, margin: props.headingCaptionMargin, fontWeight: props.headingCaptionFontWeight }}>
                            {props.headingCaptionText}
                        </div>
                    </div>
                    <div className="plans-list-section">
                        <div className="plans-list-boxes plan-list-1">
                            <div className="plan-numbering">01</div>
                            <div className="plan-name">
                                <div>Economy</div>
                                <div>For Individuals</div>
                            </div>
                            <div className="plan-details">
                                <hr />
                                <div>Secure Online Transfer</div>
                                <hr />
                                <div>Unlimited Styles for interface</div>
                                <hr />
                                <div>Reliable Customer Service</div>
                                <hr />
                            </div>
                            <div className="plan-price">
                                Rs. 10000<span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>/-</span>{" "}
                            </div>
                            <div className="plan-buy-now-button">
                                <ButtonComponent
                                    style={{"height" : "30px", "width" : "30px"}}
                                    hrefLink={"#"}
                                    border="1px solid red"
                                    backgroundColor="crimson"
                                    onHoverBackGroundColor="transparent"
                                    color="white"
                                    onHoverColor="crimson"
                                    padding="15px 60px"
                                    borderRadius="6px"
                                    fontFamily="Mont-HeavyDEMO"
                                    fontSize="20px"
                                    transition="all 0.4s ease-in-out"
                                    buttonText="Buy Now" />
                            </div>
                        </div>
                        <div className="plans-list-boxes plan-list-2">
                            <div className="plan-numbering">02</div>
                            <div className="plan-name">
                                <div>Business</div>
                                <div>For Individuals</div>
                            </div>
                            <div className="plan-details">
                                <hr />
                                <div>Secure Online Transfer</div>
                                <hr />
                                <div>Unlimited Styles for interface</div>
                                <hr />
                                <div>Reliable Customer Service</div>
                                <hr />
                            </div>
                            <div className="plan-price">
                                Rs. 20000<span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>/-</span>{" "}
                            </div>
                            <div className="plan-buy-now-button">
                                <ButtonComponent
                                    hrefLink={"#"}
                                    border="1px solid red"
                                    backgroundColor="crimson"
                                    onHoverBackGroundColor="transparent"
                                    color="white"
                                    onHoverColor="crimson"
                                    padding="15px 60px"
                                    borderRadius="6px"
                                    fontFamily="Mont-HeavyDEMO"
                                    fontSize="20px"
                                    transition="all 0.4s ease-in-out"
                                    buttonText="Buy Now" />
                            </div>
                        </div>
                        <div className="plans-list-boxes plan-list-3">
                            <div className="plan-numbering">03</div>
                            <div className="plan-name">
                                <div>Premium</div>
                                <div>For Individuals</div>
                            </div>
                            <div className="plan-details">
                                <hr />
                                <div>Secure Online Transfer</div>
                                <hr />
                                <div>Unlimited Styles for interface</div>
                                <hr />
                                <div>Reliable Customer Service</div>
                                <hr />
                            </div>
                            <div className="plan-price">
                                Rs. 30000<span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>/-</span>{" "}
                            </div>
                            <div className="plan-buy-now-button">
                                <ButtonComponent
                                    hrefLink={"#"}
                                    border="1px solid red"
                                    backgroundColor="crimson"
                                    onHoverBackGroundColor="transparent"
                                    color="white"
                                    onHoverColor="crimson"
                                    padding="15px 60px"
                                    borderRadius="6px"
                                    fontFamily="Mont-HeavyDEMO"
                                    fontSize="20px"
                                    transition="all 0.4s ease-in-out"
                                    buttonText="Buy Now" />
                            </div>
                        </div>
                        <div className="plans-list-boxes plan-list-4">
                            <div className="plan-numbering">04</div>
                            <div className="plan-name">
                                <div>Customized</div>
                                <div>For Individuals</div>
                            </div>
                            <div className="plan-details">
                                <hr />
                                <div>Secure Online Transfer</div>
                                <hr />
                                <div>Unlimited Styles for interface</div>
                                <hr />
                                <div>Reliable Customer Service</div>
                                <hr />
                            </div>
                            <div className="plan-price">Talk To Us</div>
                            <div className="plan-buy-now-button">
                                <ButtonComponent
                                    hrefLink={"#"}
                                    border="1px solid red"
                                    backgroundColor="crimson"
                                    onHoverBackGroundColor="transparent"
                                    color="white"
                                    onHoverColor="crimson"
                                    padding="15px 60px"
                                    borderRadius="6px"
                                    fontFamily="Mont-HeavyDEMO"
                                    fontSize="20px"
                                    transition="all 0.4s ease-in-out"
                                    buttonText="Buy Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PlansComponent;
