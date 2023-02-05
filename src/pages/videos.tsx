import React, { useState } from 'react'
import Layout from '../components/Templates/Layout'
import Image from 'next/image'
import Video from '../components/Atoms/Video'

const VideosPage = () => {
  const [isClickThumbnailShutter, changeIsClickThumbnailShutter] = useState<boolean>(false)
  const [isClickThumbnailTabaninatte, changeIsClickThumbnailTabaninatte] = useState<boolean>(false)
  const [isClickThumbnailAkuruuta, changeIsClickThumbnailAkuruuta] = useState<boolean>(false)

  return (
    <Layout title="All Videos | Souvenir">
      <section className="bg-gray-50 font-light text-gray-350 lg:pl-60">
        <div className="2xl:wrap-big wrap-sp md:wrap">
          <h2 className="title mt-10 lg:mt-0 lg:text-left lg:text-6xl">All Videos</h2>
          <div className="bg-gray-350 mt-16 md:mt-20">
            {isClickThumbnailShutter ?
              <Video url="https://www.youtube.com/embed/E-sWBoo5tIc" />
              :
              <div className="relative cursor-pointer" onClick={() => changeIsClickThumbnailShutter(true)}>
                <Image  width="840" height="475" src="/mv/shutter_thumbnail.jpg" layout="responsive" alt="シャッター" priority />
                <div className="bg-white w-wt h-1/6 absolute inset-0 m-auto start-triangle bg-opacity-50 box-shadow"></div>
              </div>
            }
          </div>
          <div className="bg-gray-350 mt-16 md:mt-20">
            {isClickThumbnailTabaninatte ?
              <Video url="https://www.youtube.com/embed/8RJ28sZbTiI" />
              :
              <div className="relative cursor-pointer" onClick={() => changeIsClickThumbnailTabaninatte(true)}>
                <Image  width="840" height="475" src="/mv/tabaninatte_thumbnail.jpg" layout="responsive" alt="束になって" priority />
                <div className="bg-white w-wt h-1/6 absolute inset-0 m-auto start-triangle bg-opacity-50 box-shadow"></div>
              </div>
            }
          </div>
          <div className="bg-gray-350 mt-16 md:mt-20">
            {isClickThumbnailAkuruuta ?
              <Video url="https://www.youtube.com/embed/aVtIfZG2a60" />
              :
              <div className="relative cursor-pointer" onClick={() => changeIsClickThumbnailAkuruuta(true)}>
                <Image  width="840" height="475" src="/mv/akuru_uta_thumbnail.jpg" layout="responsive" alt="能く或るうた" priority />
                <div className="bg-white w-wt h-1/6 absolute inset-0 m-auto start-triangle bg-opacity-50 box-shadow"></div>
              </div>
            }
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default VideosPage