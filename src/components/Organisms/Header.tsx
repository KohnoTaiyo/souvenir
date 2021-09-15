import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Logo from '../../../public/logo.svg'
import Icons from '../Atoms/Icons'
import NavList from '../Atoms/NavList'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [move, changeMove] = useState(false)
  const [isMouseHover, setIsMouseHover] = useState(false)
  const [scrollSizeChange, setScrollSizeChange] = useState({
    top: '50',
    list: '50',
    icon: '50',
  })
  let livePageColor = move ? '50' : '350'

  if (process.browser) {
    {
      move
        ? document?.documentElement.classList.add('overflow-hidden')
        : document?.documentElement.classList.remove('overflow-hidden')
    }
  }

  const isScrollToggle = useCallback(() => {
    const scrollTop = window.pageYOffset
    const positionVideo = document.getElementById('video')?.offsetTop
    const positionContact = document.getElementById('contact')?.offsetTop
    const positionFooter = document.getElementById('footer')?.offsetTop

    // Bar && Logo
    if (positionVideo && positionContact && positionFooter) {
      scrollTop > positionVideo + -10 && scrollTop < positionContact
        ? setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            top: '350',
          }))
        : setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            top: '50',
          }))

      // List
      ;(scrollTop + window.innerHeight / 2 > positionVideo &&
        scrollTop + window.innerHeight / 2 < positionContact) ||
      scrollTop + window.innerHeight / 2 > positionFooter
        ? setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            list: '350',
          }))
        : setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            list: '50',
          }))

      // Icon
      ;(scrollTop + window.innerHeight * 0.95 > positionVideo &&
        scrollTop + window.innerHeight * 0.95 < positionContact) ||
      scrollTop + window.innerHeight * 0.95 > positionFooter
        ? setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            icon: '350',
          }))
        : setScrollSizeChange((scrollTopChange) => ({
            ...scrollTopChange,
            icon: '50',
          }))
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
    return () => {
      document.removeEventListener('scroll', isScrollToggle)
    }
  }, [])

  return (
    <header className="z-30 relative">
      <Link href="/">
        <a className="w-full h-full relative z-50">
          <Logo
            className={`fill-current w-24 md:w-48 fixed text-gray-${
              scrollSizeChange.top
            } mt-4 ml-4 md:mt-6 md:ml-6 duration-150 ${
              router.pathname !== '/' ? 'text-gray-' + livePageColor : ''
            }`}
          />
        </a>
      </Link>
      <div
        className={`fixed w-60 h-screen border-r border-gray-${
          scrollSizeChange.list
        } text-gray-50 pl-6 duration-300 hidden lg:block ${
          router.pathname !== '/' ? 'border-gray-350' : ''
        }`}>
        <nav className="md:mt-hn list-none text-xl leading-10 font-light -ml-1">
          <NavList
            color={router.pathname === '/' ? scrollSizeChange.list : '350'}
            hover={'hover:bg-black hover:bg-opacity-20'}
          />
        </nav>
        <div className="p-6 absolute bottom-0 left-0 w-full">
          <Icons
            color={router.pathname === '/' ? scrollSizeChange.icon : '350'}
          />
        </div>
      </div>
      <div
        className={`fixed top-7 right-6 sm:top-12 sm:right-12 z-50 cursor-pointer`}
        onClick={() => {
          if (move) {
            changeMove(false)
            isScrollToggle()
          } else {
            changeMove(true)
            if (scrollSizeChange.top === '350') {
              setScrollSizeChange((scrollTopChange) => ({
                ...scrollTopChange,
                top: '50',
              }))
            }
          }
        }}>
        <div
          className={`w-14 h-0.5 bg-gray-${
            scrollSizeChange.top
          } duration-150 transform ${
            move ? 'rotate-45 mt-1.5' : 'rotate-0 mt-0'
          } ${
            router.pathname !== '/' ? 'bg-gray-' + livePageColor : ''
          }`}></div>
        <div
          className={`w-14 h-0.5 bg-gray-${
            scrollSizeChange.top
          } duration-150 mt-3 transform ${
            move ? '-rotate-45 -mt-0.5' : 'rotate-0 mt-3'
          } ${
            router.pathname !== '/' ? 'bg-gray-' + livePageColor : ''
          }`}></div>
      </div>
      <div
        className={`w-screen h-screen bg-gray-800 bg-opacity-80 fixed top-0 left-0 duration-150 ${
          move ? 'visible opacity-100' : 'opacity-0 invisible'
        }`}>
        <div
          className="w-2/3 absolute hidden md:block"
          onClick={() => {
            changeMove(false)
            isScrollToggle()
          }}>
          <div className="w-wj m-auto mt-hj">
            <Link href="https://linkcloud.mu/13e2b5ef">
              <a target="_blank" rel="noopener noreferrer">
                <div
                  onMouseEnter={() => setIsMouseHover(true)}
                  onMouseLeave={() => setIsMouseHover(false)}
                  className="hover:shadow-2xl w-full h-full duration-150">
                  <Image
                    src="/jacket.jpg"
                    width="600"
                    height="600"
                    layout="responsive"
                    alt="近況報告"
                  />
                </div>
                <p className="text-gray-50 mt-1 duration-150 text-shadow">
                  {isMouseHover
                    ? 'You are nice!'
                    : 'Would you like listen to this music?'}
                </p>
              </a>
            </Link>
          </div>
        </div>
        <div
          className="w-full md:w-1/3 list-none text-gray-50 absolute right-0 bg-gray-350 h-screen text-3xl font-light"
          style={{ lineHeight: 2 }}>
          <div className="w-4/5 mx-auto h-screen flex justify-center items-center">
            <div>
              <div className="border-b border-gray-50 pb-3 w-72">
                <NavList
                  color={'50'}
                  hover={''}
                  clickEvent={() => changeMove(false)}
                />
              </div>
              <div className="flex justify-between w-full mt-6">
                <Logo className="fill-current w-20 text-gray-50 h-12" />
                <div className="w-36 mt-1.5">
                  <Icons color={'50'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
