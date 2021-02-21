import * as React from 'react'
import Logo from '../../../public/logo.svg'
import Icons from '../Atoms/Icons'
import NavList from '../Atoms/NavList'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <section className="bg-gray-50 font-light">
      <div className="wrap xl:pl-80">
        <div className="flex justify-between pb-4 border-b border-gray-350">
          <Logo className="fill-current w-20 text-gray-350" />
          <div className="w-40 mt-3">
            <Icons color={'350'} />
          </div>
        </div>
        <nav className="mt-4 pb-4 list-none text-xl leading-10 font-light text-center text-gray-350 border-b border-gray-350">
          <NavList hover={''} />
        </nav>
      </div>
      <p className="text-center text-xs mb-2 text-gray-350 xl:pl-60">
        &copy;{year} Souvenir
      </p>
    </section>
  )
}
export default Footer
