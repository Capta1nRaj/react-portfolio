import React from 'react'
import Typed from "react-typed";

function TypedComponent(props) {
  return (
    <>
        <Typed strings={props.profession} typeSpeed={60} backSpeed={60} backDelay={2000} loop={true} />
    </>
  )
}

export default TypedComponent