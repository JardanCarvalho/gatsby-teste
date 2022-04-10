import React from 'react';
import { Link } from 'gatsby'

const NavBar = () => {
  return (
    <>
      <nav>
        <Link
          to={"/contact"}
          activeStyle={
            { color: "orange", fontSize: '20px' }
          }
        >
          Contact
        </Link> |
        <Link to={"/about"}
          activeStyle={
            { color: "orange", fontSize: '20px' }
          }
        >
          About
        </Link>
      </nav>
    </>
  )
}

export default NavBar;