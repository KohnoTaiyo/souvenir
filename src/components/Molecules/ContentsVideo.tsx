import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Video from '../Atoms/Video'

const ContentsVideo = () => {
  const [isClickThumbnail, changeIsClickThumbnail] = useState<boolean>(false)
  const [isMouseHover, setIsMouseHover] = useState<boolean>(false)

  return (
    <section
      id="video"
      className="bg-gray-50 font-light min-h-video flex items-center justify-center relative lg:pl-60">
      <h2 className="xl:wrap-big title text-gray-350 lg:text-left lg:text-6xl absolute top-10 left-0 right-0 m-auto lg:top-20 lg:left-80 xl:top-0 xl:left-60">
        Video
      </h2>
      <div className="lg:mt-32 w-full h-full">
        <div className="xl:wrap-big md:wrap wrap-sp">
          <div className="bg-gray-350">
            {isClickThumbnail ?
              <div className="relative w-full h-0 pb-pm overflow-hidden">
                <Video url="https://youtu.be/8RJ28sZbTiI?rel=0" />
              </div>
              :
              <div className="relative cursor-pointer" onClick={() => changeIsClickThumbnail(true)}>
                <Image  width="840" height="475" src="/tabaninatte_thumbnail.jpg" layout="responsive" alt="束になって" />
                <div className="bg-white w-wt h-1/6 absolute inset-0 m-auto start-triangle bg-opacity-50 box-shadow"></div>
              </div>
            }
          </div>
          <Link href="/videos">
          <a>
            <div
              onMouseEnter={() => setIsMouseHover(true)}
              onMouseLeave={() => setIsMouseHover(false)}
              className="mt-8 text-xl text-gray-350 relative flex items-end py-4 px-5 border border-gray-350 hover:bg-gray-350 hover:text-gray-50 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl"
            >
              <div>AND MORE</div>
              <span
                className={`andmore-position duration-300 ${
                  isMouseHover ? 'bg-gray-50' : 'bg-gray-350'
                }`}></span>
            </div>
          </a>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default ContentsVideo
