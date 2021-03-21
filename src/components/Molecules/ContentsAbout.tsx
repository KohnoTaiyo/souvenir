import React, { useEffect } from 'react'

const ContentsAbout = () => {
  const isScrollToggle = () => {
    const scrollTop = window.pageYOffset
    const positionHero02 = document.getElementById('hero02')?.offsetTop
    const hero02 = document.getElementById('hero02')
    if (positionHero02 && hero02) {
      if (scrollTop + window.innerHeight > positionHero02) {
        hero02.setAttribute(
          'style',
          'background-position-y:' + -(scrollTop * 0.2) + 'px'
        )
      }
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', isScrollToggle, { passive: true })
  }, [])

  return (
    <section id="about" className="min-h-screen sm:min-h-0 bg-gray-50">
      <div
        id="hero02"
        className="w-full bg-hero-pattern-sp sm:bg-hero-pattern-xl font-light text-xl text-gray-50 bg-center bg-no-repeat object-cover lg:pl-60 bg-300 sm:bg-230 lg:bg-200 xl:bg-150 3xl:bg-140">
        <h2 className="xl:wrap-big md:wrap wrap-sp title text-shadow min-h-about md:min-h-video lg:text-left lg:text-6xl">
          About
        </h2>
      </div>
      <div className="lg:pl-60 -mt-8 lg:mt-3">
        <div className="xl:wrap-big md:wrap wrap-sp text-gray-350 bg-gray-50">
          <p>杉山悠佑　Guitar,Vocal（L）</p>
          <p>近藤空良　Bass（R）</p>
          <p className="mt-10">
            千葉
            <br />
            Alternative Rock
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContentsAbout
