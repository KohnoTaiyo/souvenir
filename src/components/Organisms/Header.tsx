import * as React from 'react'
// import Image from 'next/image'
import Logo from '../../../public/logo.svg'
// import styles from '../../styles/Header.module.css'

const Header = () => (
  <header className="fixed w-40 h-screen border-r border-red-600 z-50 text-white pt-6 pl-6">
    <Logo className="fill-current w-28" />
    <nav className="mt-hn list-none text-base leading-8 font-extralight -ml-1 flex flex-col">
      <li>
        <span className="hover:bg-black hover:bg-opacity-20 px-1 transition">
          Live
        </span>
      </li>
      <li>
        <span className="hover:bg-black hover:bg-opacity-20 px-1 transition">
          Video
        </span>
      </li>
      <li>
        <span className="hover:bg-black hover:bg-opacity-20 px-1 transition">
          About
        </span>
      </li>
      <li>
        <span className="hover:bg-black hover:bg-opacity-20 px-1 transition">
          Contact
        </span>
      </li>
    </nav>
  </header>
)
export default Header
