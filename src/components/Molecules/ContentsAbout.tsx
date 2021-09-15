import Image from 'next/image'
import React from 'react'

const ContentsAbout = () => {

  return (
    <section id="about" className="bg-gray-50 relative min-h-video">
      <Image src='/hero02.jpg' layout='responsive' width='100' height='67' />
      <div
        id="hero02"
        className="w-full font-light text-xl text-gray-50 lg:pl-60">
        <h2 className="xl:wrap-big md:wrap wrap-sp title text-shadow  lg:text-left lg:text-6xl absolute top-0">
          About
        </h2>
      </div>
      <div className="lg:pl-60 mt-28 mb-24 lg:mt-3 lg:mb-0">
        <div className="xl:wrap-big md:wrap wrap-sp text-gray-350 bg-gray-50">
          <p>杉山悠佑　Guitar,Vocal</p>
          <p>近藤空良　Bass</p>
          <p>ポルノ藤田　Drums</p>
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
