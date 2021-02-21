// import Link from 'next/link'
import ContentsAbout from '../components/Molecules/ContentsAbout'
import ContentsContact from '../components/Molecules/ContentsContact'
import ContentsLive from '../components/Molecules/ContentsLive'
import ContentsVideo from '../components/Molecules/ContentsVideo'
import MainVisual from '../components/Organisms/MainVisual'
import Layout from '../components/Templates/Layout'

const IndexPage = () => (
  <Layout title="Souvenir">
    <MainVisual />
    <ContentsLive />
    <ContentsVideo />
    <ContentsAbout />
    <ContentsContact />
  </Layout>
)

export default IndexPage
