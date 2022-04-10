import React from "react";
import NavBar from './navbar';

const About = () => {
  const text = "Meu texto"

  return (
    <>
      <NavBar />
      <h1>About</h1>
      <h2>{text}</h2>
    </>
  )
}

export default About;