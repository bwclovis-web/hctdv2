import sanityClient from '@/lib/sanityClient'
import { sanityHomepageQuery } from '@/queries/SanityQueries'
import HeroComponent from '../ui/molecules/Hero/Hero'
import CategoryList from '../ui/molecules/CategoryList/CategoryList'
import DyeShopBanner from '../ui/container/DyeShopBanner/DyeShopBanner'
import Link from 'next/link'
import { getHomePageProps } from '@/lib/shopifyGql'
import styles from './pageStyles.module.scss'
import ArtistBanner from '../ui/container/ArtistBanner/ArtistBanner'

const Home = async () => {
  const contentProps = await sanityClient.fetch(sanityHomepageQuery)
  const pageProps = await getHomePageProps()
  const { pageContent, featuredArtist } = contentProps
  const { edges } = pageProps?.products

  return (
    <div>
      <HeroComponent heroImage={pageContent[0].pageHero} />
      <CategoryList />
      <DyeShopBanner />
      <section className={`${styles.addedStyles}`}>
        <div className="main-container">
          <p className="text-xl font-semibold">
            Hey we just added
            <Link
              href={`shop/${edges[0].node.handle}`}
              className="flip-link">
              {edges[0].node.title}
            </Link>
            to the store under {edges[0].node.collections?.edges[0].node.handle}!
          </p>
        </div>

      </section>
      <ArtistBanner artist={featuredArtist[0]} />
    </div>
  )
}

export default Home
