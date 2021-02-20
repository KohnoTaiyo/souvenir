import * as React from 'react'
import Image from 'next/image'

const MainVisual = () => (
  <div className="relative w-screen h-screen">
    <Image
      layout="fill"
      className="object-cover bg-center"
      src="/hero.jpg"
      sizes="100vw"
      quality="100"
      loading="eager"
      priority={true}
      alt="Souvenir official website"
    />
  </div>
)
export default MainVisual
