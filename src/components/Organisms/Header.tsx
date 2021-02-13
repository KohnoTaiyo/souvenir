import * as React from 'react'
import Image from 'next/image'

const Header = () => (
  <nav className="fixed w-40 h-screen border-r border-red-600 z-50">
    <Image src="/logo.svg" width="200" height="123" />
  </nav>
)
export default Header
