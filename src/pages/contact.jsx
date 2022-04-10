import React from 'react';
import NavBar from "../components/navbar"

const Contact = () => {
  const text = "Meu texto"

  return (
    <>
      <NavBar />
      <h1>Contact</h1>
      <h2>{text}</h2>
    </>
  )
}

export default Contact;