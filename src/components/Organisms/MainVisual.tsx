import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Scroll from '../../../public/scroll.svg'

const MainVisual = () => {
  const BLAKE_POINT = 768
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return (
    <div id="top" className="relative w-full h-screen z-0 overflow-hidden">
      <Image
        layout="fill"
        className="object-cover bg-center"
        src={width < BLAKE_POINT ? '/hero05.jpg' : '/hero.jpg'}
        quality="100"
        loading="eager"
        priority={true}
        alt="Souvenir official website"
      />
      <div className="absolute z-50 bottom-5 -right-8 flex">
        <Scroll className="animate-scroll mr-1" />
        <p className="text-gray-50 transform -rotate-90 text-sm font-light">
          SCROLL
        </p>
      </div>
    </div>
  )
}
export default MainVisual
