// import Link from 'next/link'
import ContentsAbout from '../components/Molecules/ContentsAbout'
import ContentsLive from '../components/Molecules/ContentsLive'
import ContentsMovie from '../components/Molecules/ContentsMovie'
import MainVisual from '../components/Organisms/MainVisual'
import Layout from '../components/Templates/Layout'

const IndexPage = () => (
  <Layout title="Souvenir">
    <MainVisual />
    <ContentsLive />
    <ContentsMovie />
    <ContentsAbout />
  </Layout>
)

export default IndexPage
