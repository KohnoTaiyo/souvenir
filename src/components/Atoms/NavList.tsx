import React from 'react'
import { Link } from 'react-scroll'

type Hover = {
  hover: string
  color: string
  clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const NavList = (props: Hover) => {
  return (
    <>
      <li>
        <Link to="live" smooth={true} duration={500}>
          <span
            onClick={props.clickEvent}
            className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
            Live
          </span>
        </Link>
      </li>
      <li>
        <Link to="video" smooth={true} duration={500}>
          <span
            onClick={props.clickEvent}
            className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
            Video
          </span>
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          <span
            onClick={props.clickEvent}
            className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
            About
          </span>
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          <span
            onClick={props.clickEvent}
            className={`${props.hover} text-gray-${props.color} px-1 duration-150 cursor-pointer`}>
            Contact
          </span>
        </Link>
      </li>
    </>
  )
}
export default NavList
