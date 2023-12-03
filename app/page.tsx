import styles from './page.module.css'
import sanityClient from '@/lib/sanityClient'
import { sanityHomepageQuery } from '@/queries/SanityQueries'
import HeroComponent from './ui/molecules/Hero/Hero'
import CategoryList from './ui/molecules/CategoryList/CategoryList'

const Home = async () => {
  const contentProps = await sanityClient.fetch(sanityHomepageQuery)
  const { pageContent } = contentProps
  return (
    <div className={styles.main}>
      <HeroComponent heroImage={pageContent[0].pageHero} />
      <CategoryList />
    </div>
  )
}

export default Home
