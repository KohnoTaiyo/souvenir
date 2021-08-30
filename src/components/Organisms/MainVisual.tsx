import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Scroll from '../../../public/scroll.svg'

const MainVisual = () => {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return (
    <div id="top" className="relative w-full h-screen z-0 overflow-hidden">
      <Image
        layout="fill"
        className="object-cover bg-center"
        src="/hero.jpg"
        quality="100"
        loading="eager"
        priority={true}
        alt="Souvenir official website"
      />
      <div className="absolute z-50 top-1/2 translate-x-1/2 -right-2 flex">
        <Scroll className="animate-scroll -mr-6 sm:-mr-2.5" />
        <p className="text-gray-50 transform -rotate-90 text-sm font-light h-3 -mr-2 sm:mr-0.5">
          SCROLL
        </p>
      </div>
    </div>
  )
}
export default MainVisual
