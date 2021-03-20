import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const MainVisual = () => {
  const BLAKE_POINT = 768
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [width])

  return (
    <div id="top" className="relative w-screen h-screen z-0">
      <Image
        layout="fill"
        className="object-cover bg-center"
        src={width < BLAKE_POINT ? '/hero05.jpg' : '/hero.jpg'}
        quality="100"
        loading="eager"
        priority={true}
        alt="Souvenir official website"
      />
    </div>
  )
}
export default MainVisual
