import * as React from 'react'
import Link from 'next/link'
import Logo from '../../../public/logo.svg'
import Icons from '../Atoms/Icons'
import NavList from '../Atoms/NavList'

const Header = () => (
  <header className="z-50 relative">
    <div className="fixed top-7 right-7">
      <div className="w-14 h-0.5 bg-gray-50"></div>
      <div className="w-14 h-0.5 bg-gray-50 mt-4"></div>
    </div>
    <Link href="/">
      <a className="w-full h-full">
        <Logo className="fill-current w-48 fixed text-gray-50 mt-6 ml-6" />
      </a>
    </Link>
    <div className="fixed w-60 h-screen border-r border-gray-50 text-gray-50 pl-6 hidden xl:block">
      <nav className="mt-hn list-none text-xl leading-10 font-light -ml-1">
        <NavList hover={'hover:bg-black hover:bg-opacity-20'} />
      </nav>
      <div className="p-6 absolute bottom-0 left-0 w-full">
        <Icons color={'50'} />
      </div>
    </div>
  </header>
)
export default Header
