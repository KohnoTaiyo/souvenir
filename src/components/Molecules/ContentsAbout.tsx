import React, { useEffect, useCallback } from 'react'

const ContentsAbout = () => {
  const isScrollToggle = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop
    const hero02 = document.getElementById('hero02')
    if (scrollTop > 1300) {
      hero02?.setAttribute(
        'style',
        'background-position-y:' + -(scrollTop * 0.2) + 'px'
      )
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
    return () => {
      document.removeEventListener('scroll', isScrollToggle)
    }
  }, [])

  return (
    <>
      <div
        id="hero02"
        className="wrap w-screen bg-hero-pattern font-light text-xl text-gray-50 bg-center bg-no-repeat bg-500 object-cover xl:pl-80">
        <h2 className="title text-shadow h-ha">About</h2>
      </div>
      <div className="wrap text-gray-350 bg-gray-50 xl:pl-80">
        <p>杉山悠佑　Guitar,Vocal（R）</p>
        <p>近藤空良　Bass（L）</p>
        <p className="mt-10">
          千葉
          <br />
          Alternative Rock
        </p>
      </div>
    </>
  )
}

export default ContentsAbout
