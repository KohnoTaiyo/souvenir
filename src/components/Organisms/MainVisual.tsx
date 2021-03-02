import * as React from 'react'
import Image from 'next/image'

const MainVisual = () => (
  <div className="relative w-screen h-screen z-0">
    <div className="hidden md:block">
      <Image
        layout="fill"
        className="object-cover bg-center"
        src="/hero.jpg"
        quality="100"
        loading="eager"
        priority={true}
        alt="Souvenir official website"
      />
    </div>
    <div className="md:hidden block">
      <Image
        layout="fill"
        className="object-cover bg-center"
        src="/hero05.jpg"
        quality="100"
        loading="eager"
        priority={true}
        alt="Souvenir official website"
      />
    </div>
  </div>
)
export default MainVisual
