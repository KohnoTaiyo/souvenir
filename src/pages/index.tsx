import React, { useState } from 'react'
import ContentsAbout from '../components/Molecules/ContentsAbout'
import ContentsContact from '../components/Molecules/ContentsContact'
import ContentsLive from '../components/Molecules/ContentsLive'
import ContentsVideo from '../components/Molecules/ContentsVideo'
import MainVisual from '../components/Organisms/MainVisual'
import Layout from '../components/Templates/Layout'
import LoadAnimation from '../components/Templates/LoadAnimation'

const IndexPage = () => {
  const [isFirst, setIsFirst] = useState(true)
  const [isShow, setIsShow] = useState(false)
  setTimeout(() => setIsFirst(false), 1600)
  setTimeout(() => setIsShow(true), 500)

  return (
    <>
      <div
        className={`w-screen h-screen bg-gray-350 z-50 fixed top-0 left-0 flex justify-center items-center duration-500 ${
          isFirst ? 'visible opacity-100' : 'invisible opacity-0 h-0'
        }`}>
        <LoadAnimation />
      </div>
      <div className={`${isShow ? 'opacity-100' : 'opacity-0'} `}>
        <Layout title="Souvenir">
          <MainVisual />
          <ContentsLive />
          <ContentsVideo />
          <ContentsAbout />
          <ContentsContact />
        </Layout>
      </div>
    </>
  )
}

export default IndexPage
