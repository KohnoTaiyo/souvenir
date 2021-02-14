import * as React from 'react'
// import Image from 'next/image'
import Logo from '../../../public/logo.svg'
import styles from '../../styles/Header.module.css'

const Header = () => (
  <nav className="fixed w-40 h-screen border-r border-red-600 z-50 list-none text-white pt-3 pl-4">
    <Logo className="fill-current w-32" />
    <li className={styles.test}>Live</li>
    <li className="">Video</li>
    <li className="">About</li>
    <li className="">Contact</li>
  </nav>
)
export default Header
