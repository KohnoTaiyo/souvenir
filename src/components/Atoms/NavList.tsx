import * as React from 'react'
import ScrollIntoView from 'react-scroll-into-view'

type Hover = {
  hover: string
}

const NavList = (props: Hover) => (
  <>
    <li>
      <ScrollIntoView selector="#live" smooth={true}>
        <span
          className={`${props.hover} nav-text  px-1 duration-150 cursor-pointer`}>
          Live
        </span>
      </ScrollIntoView>
    </li>
    <li>
      <ScrollIntoView selector="#video" smooth={true}>
        <span
          className={`${props.hover} nav-text  px-1 duration-150 cursor-pointer`}>
          Video
        </span>
      </ScrollIntoView>
    </li>
    <li>
      <ScrollIntoView selector="#about" smooth={true}>
        <span
          className={`${props.hover} nav-text  px-1 duration-150 cursor-pointer`}>
          About
        </span>
      </ScrollIntoView>
    </li>
    <li>
      <ScrollIntoView selector="#contact" smooth={true}>
        <span
          className={`${props.hover} nav-text  px-1 duration-150 cursor-pointer`}>
          Contact
        </span>
      </ScrollIntoView>
    </li>
  </>
)
export default NavList
