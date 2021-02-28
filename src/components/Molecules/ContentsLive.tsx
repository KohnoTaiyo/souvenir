// import React, { useState, useEffect } from 'react'
import React from 'react'
// import Image from 'next/image'
// import { GetStaticProps } from 'next'
// import { Article } from '../../interfaces'
// import { sampleArticles } from '../../../utils/sample-data'
// import { sampleArticles } from '../../../utils/sample-data'

// type Props = {
//   articles: Article[]
// }

// const LiveContents = ({ articles }: Props) => {

const LiveContents = () => {
  // useEffect(() => {
  //   const key: any = {
  //     headers: { 'X-API-KEY': process.env.API_KEY },
  //   }
  //   fetch('https://taiyo.microcms.io/api/v1/contents', key)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setArticlesData(res.contents)
  //       console.log(res.contents)
  //     })
  //     .catch(() => console.log('error'))
  // }, [])
  // const articlesData: Article[] = sampleArticles
  // const [articlesData, setArticlesData] = useState([])
  // const [activeLive, setActiveLive] = useState(articlesData[0])
  // const [isActive, setIsActive] = useState(0)
  // const [update, setUpdate] = useState(false)
  // const [isMouseHover, setIsMouseHover] = useState(false)
  // const articles = () => {
  //   if (articlesData.slice(0, 5).length === 3) {
  //     return articlesData.slice(0, 2)
  //   }
  //   return articlesData.slice(0, 5)
  // }
  // const totalArticles = () => {
  //   if (articles().length === 2 || articles().length === 5) {
  //     return true
  //   }
  //   return false
  // }

  return (
    <section
      id="live"
      className="bg-gray-350 font-light min-h-screen sm:min-h-0">
      <div className="md:wrap wrap-sp lg:pl-80">
        <h2 className="title text-gray-50">Live</h2>
        <div className="text-gray-50">Coming Soon...</div>
        {/* <div className="grid grid-cols-3 gap-4 text-xl leading-5 text-gray-50">
          <div
            className={`flex col-span-3 border-gray-50 border p-5 overflow-hidden ${
              update ? 'animate-fadeH' : ''
            }`}>
            <div className="w-5/12 mr-5 ">
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Date</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Place</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.place}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Time</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.time}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Price</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.price}
              </p>
              <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Guest</p>
              <p className={`mt-1.5 mb-4 ${update ? 'animate-fadeL' : ''}`}>
                {activeLive.guest}
              </p>
            </div>
            <div className="w-7/12">
              <div className="h-full relative">
                <Image
                  src={activeLive.image.url}
                  layout="fill"
                  alt="ライブ情報"
                  objectFit="contain"
                  className={`mt-1.5 mb-4 bg-gray-800 ${
                    update ? 'animate-fadeR' : ''
                  }`}
                />
              </div>
            </div>
          </div>
          {articles().map((val, ind) => (
          {articles().map((val: any, ind: any) => (
            <div
              onClick={() => {
                setActiveLive(articlesData[val['id'] - 1])
                setIsActive(ind)
                setUpdate(true)
                setTimeout(() => setUpdate(false), 500)
              }}
              key={val['id']}
              className={`py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl ${
                isActive === val['id'] - 1 ? 'bg-gray-50 text-gray-350' : ''
              }`}>
              <div>{val['date']}</div>
              <div className="text-right mt-12">{val['place']}</div>
            </div>
          ))}
          <div
            onMouseEnter={() => setIsMouseHover(true)}
            onMouseLeave={() => setIsMouseHover(false)}
            className={`relative flex items-end py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl ${
              totalArticles() ? 'col-span-1' : 'col-span-2'
            }`}>
            <div>AND MORE</div>
            <span
              className={`bg-gray-50 andmore-position duration-300 ${
                isMouseHover ? 'bg-gray-350' : ''
              }`}></span>
          </div>
        </div> */}
      </div>
    </section>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const articles: Article[] = sampleArticles
//   return { props: { articles } }
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const key: any = {
//     headers: { 'X-API-KEY': process.env.API_KEY },
//   }
//   const data = await fetch('https://taiyo.microcms.io/api/v1/toriaezu', key)
//     .then((res) => res.json())
//     .catch(() => null)
//   return {
//     props: {
//       blog: data,
//     },
//   }
// }

export default LiveContents
