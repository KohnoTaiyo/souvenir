import * as React from 'react'
import Image from 'next/image'

const LiveContents = () => (
  <section className="bg-gray-350 font-light">
    <div className="wrap xl:pl-80">
      <h2 className="title text-gray-50">Live</h2>
      <div className="grid grid-cols-3 gap-4 text-xl leading-5 text-gray-50">
        <div className="flex col-span-3 border-gray-50 border p-5">
          <div className="w-5/12 mr-5">
            <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Date</p>
            <p className="mt-1.5 mb-4">2020/05/05</p>

            <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Place</p>
            <p className="mt-1.5 mb-3">下北沢Laguna</p>

            <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Time</p>
            <p className="mt-1.5 mb-3">open/start 18:00/18:30</p>

            <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Price</p>
            <p className="mt-1.5 mb-3">adv/door ¥3,000/¥3,500</p>

            <p className="bg-gray-50 text-gray-350 py-1 px-1.5">Guest</p>
            <p className="mt-1.5 leading-7 -mb-1.5">
              Souvenir / GiMMiC KNOTE / saita / kohno taiyo / etc...
            </p>
          </div>
          <div className="w-7/12">
            <Image
              src="/sample-live-img.jpg"
              width="604"
              height="396"
              layout="responsive"
            />
          </div>
        </div>
        {/* <div className="box"> */}
        <div className="py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer">
          <div>2021/05/05</div>
          <div className="text-right mt-12">下北沢Laguna</div>
        </div>
        {/* <div className="box"> */}
        <div className="py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer">
          <div>2021/05/05</div>
          <div className="text-right mt-12">下北沢Laguna</div>
        </div>
        {/* <div className="box"> */}
        <div className="py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer">
          <div>2021/05/05</div>
          <div className="text-right mt-12">下北沢Laguna</div>
        </div>
        {/* <div className="box"> */}
        <div className="py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer">
          <div>2021/05/05</div>
          <div className="text-right mt-12">下北沢Laguna</div>
        </div>
        {/* <div
          className={`relative flex items-end box ${
            5 === 5 ? 'col-span-2' : ''
          }`}> */}
        <div
          className={`relative flex items-end py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer ${
            5 === 5 ? 'col-span-2' : ''
          }`}>
          <div>AND MORE</div>
          {/* hoverはJSで処理 */}
          <span className="bg-gray-50 andmore-position"></span>
        </div>
      </div>
    </div>
    {/* <style jsx>{`
      .box {
        @apply py-4 px-5 border border-gray-50 hover:bg-gray-50 hover:text-gray-350 transform hover:scale-110 duration-300 cursor-pointer;
      }
    `}</style> */}
  </section>
)
export default LiveContents
