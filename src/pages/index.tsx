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
  setTimeout(() => setIsFirst(false), 5000)

  return (
    <>
      <div
        className={`w-screen h-screen bg-gray-50 z-50 fixed top-0 left-0 flex justify-center items-center duration-500 ${
          isFirst ? '' : 'invisible opacity-0 h-0'
        }`}>
        <LoadAnimation />
      </div>
      <Layout title="Souvenir">
        <MainVisual />
        <ContentsLive />
        <ContentsVideo />
        <ContentsAbout />
        <ContentsContact />
      </Layout>
    </>
  )
}

export default IndexPage
