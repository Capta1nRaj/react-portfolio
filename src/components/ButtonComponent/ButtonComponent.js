import React from 'react'
import "./ButtonComponent.css"

function ButtonComponent(props) {
    // Mouse Hover Color Change
    function MouseOver(event) {
        event.target.style.backgroundColor = props.onHoverBackGroundColor;
        event.target.style.color = props.onHoverColor;
    }

    function MouseOut(event) {
        event.target.style.backgroundColor = props.backgroundColor;
        event.target.style.color = props.color;
    }

    return (
        <div>
            <section className="button-container">
                <a href={props.hrefLink} target="_blank" rel="noopener noreferrer"><button
                    style={{
                        border: props.border,
                        backgroundColor: props.backgroundColor,
                        color: props.color,
                        padding: props.padding,
                        borderRadius: props.borderRadius,
                        fontFamily: props.fontFamily,
                        fontSize: props.fontSize,
                        transition: props.transition,
                        cursor: "pointer"
                    }}
                    onMouseOver={MouseOver}
                    onMouseOut={MouseOut}>{props.buttonText}</button></a>
            </section>
        </div>
    )
}

export default ButtonComponent