import * as React from 'react'
// import Image from 'next/image'
import Logo from '../../../public/logo.svg'
// import styles from '../../styles/Header.module.css'

const Header = () => (
  <>
    <Logo className="fill-current w-48 fixed z-50 text-gray-50 mt-6 ml-6" />
    <header className="fixed w-60 h-screen border-r border-red-600 z-50 text-gray-50 pl-6 hidden xl:block">
      <nav className="mt-hn list-none text-xl leading-10 font-light -ml-1">
        <li>
          <span className="nav-text">Live</span>
        </li>
        <li>
          <span className="nav-text">Video</span>
        </li>
        <li>
          <span className="nav-text">About</span>
        </li>
        <li>
          <span className="nav-text">Contact</span>
        </li>
      </nav>
      <style jsx>{`
        .nav-text {
          @apply hover:bg-black hover:bg-opacity-20 px-1 duration-150 cursor-pointer;
        }
      `}</style>
    </header>
  </>
)
export default Header
