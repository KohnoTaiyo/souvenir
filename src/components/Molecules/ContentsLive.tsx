import React, { useState, useEffect } from 'react'
import { Article } from '../../interfaces'
import { defaultData } from '../../../utils/defaultData'
import Link from 'next/link'
import Image from 'next/image'

const LiveContents = () => {
  const [articlesData, setArticlesData] = useState(defaultData)
  const [activeLive, setActiveLive] = useState(articlesData[0])
  const [isActive, setIsActive] = useState(0)
  const [update, setUpdate] = useState(false)
  const [isMouseHover, setIsMouseHover] = useState(false)
  const articles = () => {
    if (articlesData.slice(0, 3).length === 3) {
      return articlesData.slice(0, 2)
    }
    return articlesData.slice(0, 3)
  }
  const totalArticles = () => {
    if (articles().length === 2) {
      return true
    }
    return false
  }

  useEffect(() => {
    let unmounted = false

    const key = {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY ?? '' },
    }
    const compare = (a: Article, b: Article) => {
      let r = 0
      a.date < b.date ? (r = 1) : (r = -1)
      return r
    }
    ;(async () => {
      if (!unmounted) {
        const fetchDate = await fetch(
          'https://souvenir.microcms.io/api/v1/live?limit=25',
          key
        )
          .then((res) => res.json())
          .then((res) => res.contents)
        const sortData = fetchDate.sort(compare).slice(0, 5)
        setArticlesData(sortData)
        setActiveLive(sortData[0])
      }
    })()

  return () => {
      unmounted = true
    }
  }, [])

  return (
    <section
      id="live"
      className="bg-gray-350 font-light min-h-screen sm:min-h-0 lg:pl-60">
      <div className="xl:wrap-big wrap-sp md:wrap">
        <h2 className="title text-gray-50 lg:text-left lg:text-6xl">Live</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 text-xl leading-5 text-gray-50">

          <div
            className={`block md:flex col-span-2 md:col-span-3 overflow-hidden md:min-h-live leading-6 ${
              update ? 'animate-fadeH' : ''
            }`}>
            <div className="w-full md:w-1/2 mr-5 ">
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Date</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.date}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Title</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.title}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Place</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.place}
              </p>
              <div className="hidden md:block">
                <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Time</p>
                <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                  {activeLive.time}
                </p>
                <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Price</p>
                <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                  {activeLive.price}
                </p>
              </div>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Guest</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.guest}
              </p>
            </div>
            <div className="hidden md:block w-7/12">
              <Image
                layout="responsive"
                src={activeLive.image.url}
                width={activeLive.image.width}
                height={activeLive.image.height}
                alt="ライブ情報"
                className={`bg-gray-350 ease-out duration-700 max-h-img m-auto ${
                  update ? 'animate-fadeR' : ''
                }`}
              />
            </div>
          </div>
          {articles().map((val: Article, ind: number) => (
            <div
              onClick={() => {
                setActiveLive(articlesData[ind])
                setIsActive(ind)
                setUpdate(true)
                setTimeout(() => setUpdate(false), 500)
              }}
              key={val['id']}
              className={`box-shadow border py-4 px-5 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-105 duration-300 cursor-pointer hover:shadow-2xl ${
                isActive === ind ? 'bg-gray-50 text-gray-350' : ''
              }`}>
              <div>{val['date']}</div>
              <div className="text-right mt-12">{val['place']}</div>
            </div>
          ))}
          <Link href="/live">
            <div
              onMouseEnter={() => setIsMouseHover(true)}
              onMouseLeave={() => setIsMouseHover(false)}
              className={`relative flex items-end py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl ${
                totalArticles() ? 'col-span-2 md:col-span-1' : 'col-span-2'
              }`}>
              <div>AND MORE</div>
              <span
                className={`bg-gray-50 andmore-position duration-300 ${
                  isMouseHover ? 'bg-gray-350' : ''
                }`}></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LiveContents
