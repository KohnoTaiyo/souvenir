import React, { useEffect, useCallback } from 'react'

const ContentsAbout = () => {
  const isScrollToggle = useCallback(() => {
    const scrollTop = window.pageYOffset
    const positionHero02 = document.getElementById('hero02')?.offsetTop
    const hero02 = document.getElementById('hero02')
    if (positionHero02 && hero02) {
      if (scrollTop + window.innerHeight > positionHero02) {
        hero02.setAttribute(
          'style',
          'background-position-y:' + -(scrollTop * 0.1) + 'px'
        )
      }
    }
  }, [])

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
    return () => {
      document.removeEventListener('scroll', isScrollToggle)
    }
  }, [])

  return (
    <section id="about" className="min-h-screen sm:min-h-0 bg-gray-50">
      <div
        id="hero02"
        className="md:wrap wrap-sp w-screen bg-hero-pattern font-light text-xl text-gray-50 bg-center bg-no-repeat object-cover lg:pl-80 bg-250 lg:bg-200 xl:bg-150 2xl:bg-130">
        <h2 className="title text-shadow h-60 md:h-ha">About</h2>
      </div>
      <div className="md:wrap wrap-sp text-gray-350 bg-gray-50 lg:pl-80">
        <p>杉山悠佑　Guitar,Vocal（R）</p>
        <p>近藤空良　Bass（L）</p>
        <p className="mt-10">
          千葉
          <br />
          Alternative Rock
        </p>
      </div>
    </section>
  )
}

export default ContentsAbout
