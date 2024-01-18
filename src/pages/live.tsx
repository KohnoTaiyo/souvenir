import React from 'react'
import Layout from '../components/Templates/Layout'
import ChevronDown from '../../public/chevron_down.svg'
import { LiveData, Article } from '../interfaces'
import Image from 'next/image'
import { GetStaticProps } from 'next'

type StaticArticle = {
  data: LiveData
}

const LivePage = ({ data }: StaticArticle) => {
  const compare = (a: Article, b: Article) => {
    let r = 0
    a.date < b.date ? (r = 1) : (r = -1)
    return r
  }
  const liveData = data.contents?.sort(compare)

  const openEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.lastElementChild?.classList.toggle('rotate-180')
    const nextElementSibling = e.currentTarget.nextElementSibling
    nextElementSibling?.classList.toggle('h-full')
    nextElementSibling?.classList.toggle('pb-5')

    if (nextElementSibling?.classList.contains('opacity-0')) {
      nextElementSibling.classList.add('opacity-100')
      nextElementSibling.classList.remove('opacity-0')
    } else {
      nextElementSibling?.classList.remove('opacity-100')
      nextElementSibling?.classList.add('opacity-0')
    }
    nextElementSibling?.classList.contains('invisible')
      ? nextElementSibling.classList.remove('invisible')
      : nextElementSibling?.classList.add('invisible')
  }

  return (
    <Layout title="All Live | Souvenir">
      <section className="bg-gray-50 font-light text-gray-350 lg:pl-60">
        <div className="2xl:wrap-big wrap-sp md:wrap">
          <h2 className="title mt-10 lg:mt-0 lg:text-left lg:text-6xl">
            All Live
          </h2>
          {liveData?.map((val: Article) => (
            <div
              key={val['id']}
              className={`box-shadow mt-8 transform hover:scale-100 lg:hover:scale-105  duration-300 cursor-pointer lg:hover:shadow-2xl`}>
              <div
                className="flex justify-between items-center py-4 px-5"
                onClick={openEvent}>
                <div>
                  {val['date']}
                  <br />
                  {val['title']}
                </div>
                <div className="transform duration-500">
                  <ChevronDown />
                </div>
              </div>
              <div
                className={`block lg:flex justify-between h-0 px-5 opacity-0 duration-500 text-gray-50 invisible`}>
                <div className="w-full mb-4 block lg:hidden">
                  <Image
                    layout="responsive"
                    src={val.image.url}
                    width={val.image.width}
                    height={val.image.height}
                    alt="ライブ情報"
                    className={`max-h-img m-auto`}
                  />
                </div>
                <div className="lg:w-1/2 lg:mr-2 bg-gray-350 px-4 py-3">
                  <p className="border-b border-gray-50 pb-1 mb-2">
                    Place : {val['place']}
                  </p>
                  <p className="border-b border-gray-50 pb-1 mb-2">
                    Time : {val['time']}
                  </p>
                  <p className="border-b border-gray-50 pb-1 mb-2">
                    Price : {val['price']}
                  </p>
                  <p className="border-b border-gray-50 pb-1 mb-2">Guest : {val['guest']}</p>
                  <p>
                    Ticket : <a className='text-blue-400' target='_blank' rel="noopener noreferrer" href={val.reserveUrl || "https://docs.google.com/forms/d/e/1FAIpQLSfAfUqzD8UB8rd1qob4TWvvdEXDFU3dUShVzt3EQ4BM3mqStg/viewform"}>チケット予約</a>
                  </p>
                </div>
                <div className="w-1/2 ml-2 hidden lg:block mb-4">
                  <Image
                    layout="responsive"
                    src={val.image.url}
                    width={val.image.width}
                    height={val.image.height}
                    alt="ライブ情報"
                    className={`max-h-img m-auto`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default LivePage

export const getStaticProps: GetStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY ?? '' },
  }
  const fetchDate = await fetch(
    'https://souvenir.microcms.io/api/v1/live?limit=100',
    key
  ).then((res) => res.json())

  return {
    props: {
      data: fetchDate,
    },
  }
}
