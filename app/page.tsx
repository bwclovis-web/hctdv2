import styles from './page.module.css'
import sanityClient from '@/lib/sanityClient'
import { sanityHomepageQuery } from '@/queries/SanityQueries'
import HeroComponent from './ui/molecules/Hero/Hero'
// import { getHomePageProps } from '@/lib/shopifyGql'

const Home = async () => {
  const contentProps = await sanityClient.fetch(sanityHomepageQuery)
  // const pageProps = await getHomePageProps()
  const { pageContent } = contentProps
  return (
    <div className={styles.main}>
      <HeroComponent heroImage={pageContent[0].pageHero} />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore culpa nemo sunt impedit nam magnam a temporibus magni quam eius delectus enim reiciendis iusto nostrum at corrupti, minus earum nisi?</p>
      </div>
    </div>
  )
}

export default Home
