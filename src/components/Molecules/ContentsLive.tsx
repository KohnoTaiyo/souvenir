import * as React from 'react'
import Image from 'next/image'
// import { GetStaticProps } from 'next'
import { Article } from '../../interfaces'
import { sampleArticles } from '../../../utils/sample-data'

// type Props = {
//   articles: Article[]
// }

// const LiveContents = ({ articles }: Props) => {

const LiveContents = () => {
  const articlesData: Article[] = sampleArticles
  const articles = articlesData.slice(0, 5)

  return (
    <section id="live" className="bg-gray-350 font-light">
      <div className="wrap lg:pl-80">
        <h2 className="title text-gray-50">Live</h2>
        <div className="grid grid-cols-3 gap-4 text-xl leading-5 text-gray-50">
          <div className="flex col-span-3 border-gray-50 border p-5">
            <div className="w-5/12 mr-5">
              {(Object.keys(articles[0]) as (keyof Article)[]).map((key) => (
                <>
                  <p className="bg-gray-50 text-gray-350 py-1 px-1.5">{key}</p>
                  <p className="mt-1.5 mb-4">{articles[0][key]}</p>
                </>
              ))}
            </div>
            <div className="w-7/12">
              <Image
                src="/sample-live-img.jpg"
                width="604"
                height="396"
                layout="responsive"
                alt="ライブ情報"
              />
            </div>
          </div>
          {articles.map((val) => (
            <div className="py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl">
              <div>{val['Date']}</div>
              <div className="text-right mt-12">{val['Place']}</div>
            </div>
          ))}
          <div
            className={`relative flex items-end py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer hover:shadow-2xl ${
              articles.length === 5 ? 'col-span-1' : 'col-span-2'
            }`}>
            <div>AND MORE</div>
            <span className="bg-gray-50 andmore-position"></span>
          </div>
        </div>
      </div>
    </section>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const articles: Article[] = sampleArticles
//   return { props: { articles } }
// }

export default LiveContents
