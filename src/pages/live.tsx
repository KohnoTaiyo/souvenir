import React, { useState, useEffect } from 'react'
import Layout from '../components/Templates/Layout'
import { Article } from '../interfaces'
import { defaultData } from '../../utils/defaultData'

const LivePage = () => {
  const [allLives, setAllLives] = useState(defaultData)

  useEffect(() => {
    let unmounted = false

    const key: any = {
      headers: { 'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY },
    }
    const compare = (a: Article, b: Article) => {
      let r = 0
      a.date < b.date ? (r = 1) : (r = -1)
      return r
    }
    ;(async () => {
      if (!unmounted) {
        const fetchDate = await fetch(
          'https://taiyo.microcms.io/api/v1/live?limit=25',
          key
        )
          .then((res) => res.json())
          .then((res) => res.contents)
        const sortData = fetchDate.sort(compare)
        setAllLives(sortData)
      }
    })()

    return () => {
      unmounted = true
    }
  }, [])

  const openEvent = (e: React.MouseEvent<HTMLElement>) => {
    ;(e.target as Element).nextElementSibling?.classList.toggle('h-full')
    ;(e.target as Element).nextElementSibling?.classList.toggle('opacity-100')
    ;(e.target as Element).nextElementSibling?.classList.toggle('mt-4')
    ;(e.target as Element).nextElementSibling?.classList.contains('invisible')
      ? (e.target as Element).nextElementSibling?.classList.remove('invisible')
      : (e.target as Element).nextElementSibling?.classList.add('invisible')
  }

  return (
    <Layout title="All Live | Souvenir">
      <section className="bg-gray-50 font-light text-gray-350">
        <div className="wrap-sp md:wrap lg:pl-80">
          <h2 className="title">All Live</h2>
          {allLives.map((val: Article) => (
            <div
              onClick={openEvent}
              key={val['id']}
              className={`box-shadow mt-8 py-4 px-5 transform hover:scale-105 duration-300 cursor-pointer hover:shadow-2xl`}>
              <div>
                {val['date']}
                <br />
                {val['title']}
              </div>
              <div
                className={`flex justify-between h-0 opacity-0 duration-500 text-gray-50 invisible`}>
                <div className="w-1/2 mr-2 bg-gray-350 p-4">
                  {val['place']}
                  <br />
                  {val['time']}
                  <br />
                  {val['price']}
                  <br />
                  {val['guest']}
                </div>
                <div className="w-1/2 ml-2">
                  <img
                    src={val.image.url}
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
